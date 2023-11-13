import { Tag } from "../..";
import { select, sizeParams } from "../helpers";
import { colors } from "../../components/Tag";

const TagStories = {
    title: "Data Display/Tag",
    component: Tag,
    tags: ["autodocs"],
    parameters: {
        design: {
            name: "Figma",
            type: "figma",
            url: "https://www.figma.com/file/tL2vrxuBIzujkDfYvVjUhs/%E2%9A%99%EF%B8%8F-01---DS-Core?node-id=384%3A60",
        },
    },
    argTypes: {
        text: {
            type: { required: true },
            control: { type: "text" },
        },
        color: select(Object.keys(colors)),
        size: sizeParams,
    },
};

export const Default = {
    args: {
        color: "primary",
        size: "medium",
        children: "Listing: Kayaking in the Ganges",
        onClose: () => console.log("Closed"),
    },
};

export const BookingTag = {
    args: {
        color: "secondary",
        size: "small",
        children: "Listing: Kayaking in the Ganges",
        onClose: () => console.log("Closed"),
    },
};

export const SystemTag = {
    args: {
        color: "secondary",
        size: "small",
        children: "You cannot remove this tag",
    },
};

export default TagStories;
