import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import spawn from "cross-spawn";
import minimist from "minimist";
import prompts from "prompts";

import { red, reset } from "kolorist";

import type { Framework } from "config";
import { FRAMEWORKS } from "./config";
// 工作目录
const cwd = process.cwd();

const renameFiles: Record<string, string | undefined> = {
  _gitignore: ".gitignore",
};

const defaultTargetDir = "vite-project";

const argv = minimist<{
  t?: string;
  template?: string;
}>(process.argv.slice(2), { string: ["_"] });

const TEMPLATES = FRAMEWORKS.map(
  (f) => (f.variants && f.variants.map((v) => v.name)) || [f.name]
).reduce((a, b) => a.concat(b), []);

async function init() {
  const argTargetDir = formatTargetDir(argv._[0]);
  // 这个其实就是在拿  --template abc 的值
  const argTemplate = argv.template || argv.t;

  let targetDir = argTargetDir || defaultTargetDir;

  const getProjectName = () => {
    return targetDir === "." ? path.basename(path.resolve()) : targetDir;
  };

  let result: prompts.Answers<
    "projectName" | "overwrite" | "packageName" | "framework" | "variant"
  >;

  prompts.override({
    overwrite: argv.overwrite,
  });

  try {
    result = await prompts(
      [
        {
          // 类型
          type: argTargetDir ? null : "text",
          // 提示
          name: "projectName",
          // 描述
          message: reset("Project name"),
          // 初始化值
          initial: defaultTargetDir,
          // 每次输入之后都会调用这个 等价 el-input 的 input 事件
          onState: (state) => {
            // 格式化传入的项目名称  有值就走第一个没值就走默认  这里也需要拿到当前项目地址
            targetDir = formatTargetDir(state.value) || defaultTargetDir;
          },
        },
        {
          type: () =>
            !fs.existsSync(targetDir) || isEmpty(targetDir) ? null : "select",
          name: "overwrite",
          message: () =>
            (targetDir === "."
              ? "Current directory"
              : `Target directory "${targetDir}"`) +
            ` is not empty. Please choose how to proceed:`,
          initial: 0,
          choices: [
            {
              title: "Remove existing files and continue",
              value: "yes",
            },
            {
              title: "Cancel operation",
              value: "no",
            },
            {
              title: "Ignore files and continue",
              value: "ignore",
            },
          ],
        },
        {
          type: (_, { overwrite }: { overwrite: string }) => {
            if (overwrite === "no") {
              throw new Error(red("✖") + " Operation cancelled");
            }
            return null;
          },
          name: "overwriteChecker",
        },
        {
          type: () => (isValidPackageName(getProjectName()) ? null : "text"),
          name: "packageName",
          message: reset("Package name:"),
          initial: () => toValidPackageName(getProjectName()),
          validate: (dir) =>
            isValidPackageName(dir) || "Invalid package.json name",
        },
        {
          type:
            argTemplate && TEMPLATES.includes(argTemplate) ? null : "select",
          name: "framework",
          message:
            typeof argTemplate === "string" && !TEMPLATES.includes(argTemplate)
              ? reset(
                  `"${argTemplate}" isn't a valid template. Please choose from below: `
                )
              : reset("Select a framework:"),
          initial: 0,
          choices: FRAMEWORKS.map((framework) => {
            const frameworkColor = framework.color;
            return {
              title: frameworkColor(framework.display || framework.name),
              value: framework,
            };
          }),
        },
        {
          type: (framework: Framework) =>
            framework && framework.variants ? "select" : null,
          name: "variant",
          message: reset("Select a variant:"),
          choices: (framework: Framework) =>
            framework.variants.map((variant) => {
              const variantColor = variant.color;
              return {
                title: variantColor(variant.display || variant.name),
                value: variant.name,
              };
            }),
        },
      ],
      {
        onCancel: () => {
          throw new Error(red("✖") + " Operation cancelled");
        },
      }
    );

    // 拿到用户的结果
    const { framework, overwrite, packageName, variant } = result;

    // 当前工作空间 + 当前文件夹
    const root = path.join(cwd, targetDir);

    if (overwrite === "yes") {
      emptyDir(root);
    } else if (!fs.existsSync(root)) {
      fs.mkdirSync(root, { recursive: true });
    }

    let template: string = variant || framework?.name || argTemplate;
    let isReactSwc = false;
    if (template.includes("-swc")) {
      isReactSwc = true;
      template = template.replace("-swc", "");
    }

    const pkgInfo = pkgFromUserAgent(process.env.npm_config_user_agent);
    const pkgManager = pkgInfo ? pkgInfo.name : "npm";
    const isYarn1 = pkgManager === "yarn" && pkgInfo?.version.startsWith("1.");

    const { customCommand } =
      FRAMEWORKS.flatMap((f) => f.variants).find((v) => v.name === template) ??
      {};

    console.log(`\nScaffolding project in ${root}...`);

    const templateDir = path.resolve(
      fileURLToPath(import.meta.url),
      "../..",
      `template-${template}`
    );
    console.log(templateDir);

    const write = (file: string, content?: string) => {
      const targetPath = path.join(root, renameFiles[file] ?? file);
      if (content) {
        fs.writeFileSync(targetPath, content);
      } else {
        copy(path.join(templateDir, file), targetPath);
      }
    };

    const files = fs.readdirSync(templateDir);
    for (const file of files.filter((f) => f !== "package.json")) {
      write(file);
    }

    const pkg = JSON.parse(
      fs.readFileSync(path.join(templateDir, `package.json`), "utf-8")
    );

    pkg.name = packageName || getProjectName();

    write("package.json", JSON.stringify(pkg, null, 2) + "\n");
    const cdProjectName = path.relative(cwd, root);
    console.log(`\nDone. Now run:\n`);
    if (root !== cwd) {
      console.log(
        `  cd ${
          cdProjectName.includes(" ") ? `"${cdProjectName}"` : cdProjectName
        }`
      );
    }
    switch (pkgManager) {
      case "yarn":
        console.log("  yarn");
        console.log("  yarn dev");
        break;
      default:
        console.log(`  ${pkgManager} install`);
        console.log(`  ${pkgManager} run dev`);
        break;
    }
    console.log();
  } catch (cancelled: any) {
    console.log("=====>", cancelled.message);
    return;
  }
}

init().catch((e) => {
  console.error(e);
});

function formatTargetDir(targetDir: string | undefined) {
  return targetDir?.trim().replace(/\/+$/g, "");
}
function isEmpty(path: string) {
  const files = fs.readdirSync(path);
  return files.length === 0 || (files.length === 1 && files[0] === ".git");
}
function isValidPackageName(projectName: string) {
  return /^(?:@[a-z\d\-*~][a-z\d\-*._~]*\/)?[a-z\d\-~][a-z\d\-._~]*$/.test(
    projectName
  );
}
function toValidPackageName(projectName: string) {
  return projectName
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/^[._]/, "")
    .replace(/[^a-z\d\-~]+/g, "-");
}
function copy(src: string, dest: string) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    copyDir(src, dest);
  } else {
    fs.copyFileSync(src, dest);
  }
}

function copyDir(srcDir: string, destDir: string) {
  fs.mkdirSync(destDir, { recursive: true });
  for (const file of fs.readdirSync(srcDir)) {
    const srcFile = path.resolve(srcDir, file);
    const destFile = path.resolve(destDir, file);
    copy(srcFile, destFile);
  }
}
function emptyDir(dir: string) {
  if (!fs.existsSync(dir)) {
    return;
  }
  for (const file of fs.readdirSync(dir)) {
    if (file === ".git") {
      continue;
    }
    fs.rmSync(path.resolve(dir, file), { recursive: true, force: true });
  }
}
function pkgFromUserAgent(userAgent: string | undefined) {
  if (!userAgent) return undefined;
  const pkgSpec = userAgent.split(" ")[0];
  const pkgSpecArr = pkgSpec.split("/");
  return {
    name: pkgSpecArr[0],
    version: pkgSpecArr[1],
  };
}
