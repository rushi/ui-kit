module.exports = {
    stories: ["../src/**/*.stories.@(js|jsx|mdx)"],
    framework: "@storybook/react",
    staticDirs: ["../public"],
    core: {
        builder: "webpack5",
    },
    addons: [
        "@storybook/addon-postcss",
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "storybook-css-modules-preset",
    ],
};
