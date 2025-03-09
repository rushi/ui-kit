import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "../..";

const meta: Meta<typeof Spinner> = {
    title: "Other/Spinner",
    component: Spinner,
    args: {
        color: "secondary",
        size: "small",
    },
    argTypes: {
        color: {
            required: true,
            options: ["primary", "secondary", "success", "warning", "danger", "caution", "current"],
            control: { type: "select" },
            table: {
                type: { summary: undefined },
                defaultValue: { summary: "secondary" },
            },
        },
        size: {
            options: ["small", "medium", "large", "current"],
            control: { type: "select" },
            table: {
                type: { summary: undefined },
                defaultValue: { summary: "small" },
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default = (props) => {
    return <Spinner {...props} />;
};

export const Sizes = () => {
    return (
        <div className="space-x-8">
            <Spinner size="small" />
            <Spinner size="medium" />
            <Spinner size="large" />
        </div>
    );
};
