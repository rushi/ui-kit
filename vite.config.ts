import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
// @ts-ignore
import pkg from "./package.json";

const dependencies = Object.keys(pkg.dependencies);
const devDependencies = Object.keys(pkg.devDependencies);

export default defineConfig({
    plugins: [react(), dts({ rollupTypes: true, copyDtsFiles: true })],
    build: {
        copyPublicDir: false,
        outDir: "build",

        lib: {
            entry: resolve(__dirname, "src/index.ts"),
            name: "XolaUIKit",
        },

        rollupOptions: {
            // Make sure none of the dependencies are bundled.
            external: [...dependencies, ...devDependencies],
            output: {
                // Provide global variables to use in the UMD build for externalized deps
                globals: {
                    "@headlessui/react": "@headlessui/react",
                    "@tippyjs/react": "@tippyjs/react",
                    "get-user-locale": "get-user-locale",
                    "google-libphonenumber": "google-libphonenumber",
                    "nouislider-react": "nouislider-react",
                    "prop-types": "prop-types",
                    "react-day-picker": "react-day-picker",
                    "react-dom": "react-dom",
                    "react-hot-toast": "react-hot-toast",
                    "react-hotkeys-hook": "react-hotkeys-hook",
                    "react-select": "react-select",
                    "tailwind-merge": "tailwindMerge",
                    "tippy.js": "tippy.js",
                    clsx: "clsx",
                    dayjs: "dayjs",
                    downshift: "downshift",
                    lodash: "lodash",
                    react: "React",
                },
            },
        },
    },
});
