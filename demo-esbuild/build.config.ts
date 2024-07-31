import {defineBuildConfig} from "unbuild"

export default defineBuildConfig({
    entries: ["src/main.ts"],
    clean: true,
    rollup: {
        inlineDependencies: true,
        esbuild: {
            target: "esnext",
            minify: true,
        },
    },
})