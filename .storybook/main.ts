import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
    core: {
        disableTelemetry: true,
    },
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-designs",
        "storybook-addon-pseudo-states",
        // "@storybook/addon-interactions",
    ],
    framework: {
        name: "@storybook/react-vite",
        options: {},
    },
    docs: {
        autodocs: "tag",
        defaultName: "Docs",
    },
    staticDirs: ["../public"],
};
export default config;
