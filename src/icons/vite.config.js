import path from "path";
import { defineConfig } from "vite";
import pkg from "./package.json";

const dependencies = Object.keys(pkg.dependencies);
const devDependencies = Object.keys(pkg.devDependencies);

export default defineConfig({
    build: {
        outDir: "build",

        lib: {
            entry: {
                icons: path.resolve(__dirname, "./index.js"),
            },
            name: "XolaIcons",
            // fileName: (format) => `icons.${format}.js`,
            formats: ["es", "cjs"],
        },

        rollupOptions: {
            // Make sure none of the dependencies are bundled.
            external: [...dependencies, ...devDependencies],
        },
    },
});
