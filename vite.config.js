import path from "path";
import { defineConfig } from "vite";
import pkg from "./package.json";
import copy from "rollup-plugin-copy";

const dependencies = Object.keys(pkg.dependencies);
const devDependencies = Object.keys(pkg.devDependencies);

export default defineConfig({
    build: {
        outDir: "build",

        lib: {
            entry: {
                "ui-kit": path.resolve(__dirname, "src/index.js"),
                // things: path.resolve(__dirname, "src/things.js"),
            },
            name: "XolaUIKit",
            fileName: (format, name) => `${name}.${format}.js`,
            formats: ["esm", "cjs", "umd"],
        },

        rollupOptions: {
            // input: {
            //     main: path.resolve(__dirname, "src/index.js"),
            //     things: path.resolve(__dirname, "src/things.js"),
            // },
            // Make sure none of the dependencies are bundled.
            external: [...dependencies, ...devDependencies],
            plugins: [
                copy({
                    hook: "writeBundle",
                    targets: [
                        { src: "index.css", dest: "build" },
                        { src: "index.d.ts", dest: "build" },
                        { src: "tailwind.config.cjs", dest: "build" },
                        { src: "postcss.config.cjs", dest: "build" },
                    ],
                }),
            ],
            // Leave commented out - testing multiple outputs
            // input: {
            //     server: "src/utils/index.js",
            //     all: "src/index.js",
            // },
            // output: {
            //     name: "browser",
            //     entryFileNames: `ui-kit.[name].js`,
            //     formats: ["es"]
            // }
        },
    },
    test: {
        globals: true,
    },
});
