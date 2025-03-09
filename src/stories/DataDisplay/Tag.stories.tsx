import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Tag } from "../..";

const meta: Meta<typeof Tag> = {
    title: "Data Display/Tag",
    component: Tag,
    args: {
        color: "primary",
        size: "medium",
        text: "Listing: Kayaking in the Ganges",
    },
    parameters: {
        design: {
            name: "Figma",
            type: "figma",
            url: "https://www.figma.com/file/tL2vrxuBIzujkDfYvVjUhs/%E2%9A%99%EF%B8%8F-01---DS-Core?node-id=384%3A60",
        },
    },
    argTypes: {
        children: {
            required: true,
            control: { type: "text" },
        },
        color: {
            options: ["primary", "secondary"],
            control: { type: "select" },
        },
        size: {
            options: ["small", "medium", "large"],
            control: { type: "radio" },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Tag>;

const onTagCloseClick = () => {
    console.log("Closed");
};

export const Default = ({ color, size, text }) => {
    return (
        <Tag color={color} size={size} onClose={onTagCloseClick}>
            {text}
        </Tag>
    );
};

export const BookingTag = () => {
    return (
        <Tag color="secondary" size="small" onClose={onTagCloseClick}>
            Testing Tag
        </Tag>
    );
};

export const SystemTag = (props) => {
    return (
        <Tag {...props} color="secondary" size="small">
            You cannot remove this tag
        </Tag>
    );
};
