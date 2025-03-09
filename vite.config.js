import path from "path";
import copy from "rollup-plugin-copy";
import { defineConfig } from "vite";
import pkg from "./package.json";

const dependencies = Object.keys(pkg.dependencies);
const devDependencies = Object.keys(pkg.devDependencies);

export default defineConfig({
    assetsInclude: ["README.md"],
    build: {
        outDir: "build",
        minify: false,
        cssMinify: false,
        sourcemap: false,

        // https://vite.dev/guide/build.html#library-mode
        lib: {
            entry: path.resolve(__dirname, "src/index.js"),
            name: "XolaUIKit",
            formats: ["es"],
        },

        rollupOptions: {
            // Make sure none of the dependencies are bundled.
            external: [...dependencies, ...devDependencies],
            // plugins: [
            //     copy({
            //         hook: "writeBundle",
            //         targets: [
            //             { src: "theme.css", dest: "build", rename: "ui-kit-theme.css" },
            //             { src: "index.d.ts", dest: "build" },
            //             { src: "tailwind.config.js", dest: "build" },
            //             { src: "postcss.config.js", dest: "build" }
            //         ],
            //     }),
            // ],
            output: {
                assetFileNames: (asset) => {
                    if (asset.names?.includes("style.css")) {
                        return `ui-kit-lib.css`;
                    }
                    return `[name][hash][extname]`
                },
            }
        },
    },
    test: {
        globals: true,
    },
});
