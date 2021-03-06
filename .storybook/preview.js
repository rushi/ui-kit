import "../index.css";
import xola from "./xola";

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    docs: {
        theme: xola,
    },
    options: {
        storySort: {
            method: "alphabetical",
            order: ["Introduction", "Components"],
            includeName: true,
        },
    },
};
