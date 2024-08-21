// vite-plugin-dep-tree.js
import { createFilter } from "@rollup/pluginutils";
import { resolve } from "path";
import { promises as fs } from "fs";
import graphviz from "graphviz";

export default function depTreeVisualizer() {
  const filter = createFilter(["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"]);

  return {
    name: "vite-plugin-dep-tree",
    async buildStart() {
      this.depGraph = new Map();
    },
    resolveId(source: any, importer: any) {
      if (importer) {
        const importerPath = resolve(importer);
        if (!this.depGraph.has(importerPath)) {
          this.depGraph.set(importerPath, new Set());
        }
        this.depGraph.get(importerPath).add(resolve(source));
      }
      return null;
    },
    async buildEnd() {
      const dot = graphviz.digraph("G");
      for (const [file, dependencies] of this.depGraph.entries()) {
        const fileNode = dot.addNode(file);
        for (const dep of dependencies) {
          const depNode = dot.addNode(dep);
          dot.addEdge(fileNode, depNode);
        }
      }
      await fs.writeFile("dep-graph.dot", dot.to_dot(), "utf-8");
    },
  };
}
