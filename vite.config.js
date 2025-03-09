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
            entry: {
                "ui-kit": path.resolve(__dirname, "src/index.js"),
                checkout: path.resolve(__dirname, "src/checkout.js"),
            },
            name: "XolaUIKit",
            fileName: (format, name) => `${name}.${format === "es" ? "mjs" : "js"}`,
            formats: ["es", "cjs"],
            // formats: ["es"],
        },

        optimizeDeps: {
            include: ['prop-types'],
        },

        resolve: {
            alias: {
                'prop-types': 'prop-types/prop-types.js',
            },
        },

        rollupOptions: {
            // Make sure none of the dependencies are bundled.
            external: [...dependencies, ...devDependencies],
            plugins: [
                copy({
                    hook: "writeBundle",
                    targets: [
                        { src: "index.css", dest: "build" },
                        { src: "index.d.ts", dest: "build" },
                        { src: "tailwind-config", dest: "build" },
                        { src: "tailwind.config.js", dest: "build", rename: "tailwind.config.mjs" },
                        { src: "tailwind.config.cjs", dest: "build" },
                        { src: "postcss.config.js", dest: "build" },
                        { src: "postcss.config.cjs", dest: "build" },
                    ],
                }),
            ],
            output: {
                hashCharacters: "base36",
                chunkFileNames: (info) => {
                    const ext = info.exports[0] === "Alert" ? "js" : "mjs";
                    if (info.name === "Number") {
                        return `shared-[hash].${ext}`
                    }
                    return `[name]-[hash].${ext}`
                },
                // // entryFileNames: (info) => {
                //     // console.log(info.name);
                //     return "[name].js";
                // },
                // manualChunks(id) {
                //     const chunk = separateChunks.find((c) => id.toLowerCase().includes(c.toLowerCase()));
                //     return chunk ? chunk : id.includes("node_modules") ? "libs" : null; // null puts it in the main package
                // },
            },
        },
    },
    test: {
        globals: true,
    },
});
