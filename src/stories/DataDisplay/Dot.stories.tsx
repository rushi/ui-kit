import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Dot } from "../..";

const meta: Meta<typeof Dot> = {
    title: "Data Display/Dot",
    component: Dot,
    parameters: {
        docs: {
            description: {
                component: "A simple dot component to act as spacers between various elements",
            },
        },
    },
    args: {
        color: "primary",
    },
    argTypes: {
        color: {
            options: ["primary", "secondary", "success", "warning", "danger", "caution"],
            control: { type: "select" },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Dot>;

export const Default = ({ color }) => {
    return (
        <div className="space-x-4">
            <Dot color={color} />
        </div>
    );
};

export const AllColors = () => {
    return (
        <div className="space-x-4">
            <Dot color="primary" />
            <Dot color="secondary" />
            <Dot color="success" />
            <Dot color="warning" />
            <Dot color="caution" />
            <Dot color="danger" />
        </div>
    );
};
