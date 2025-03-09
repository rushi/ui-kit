import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { DotProgress } from "../..";

const meta: Meta<typeof DotProgress> = {
    title: "Data Display/DotProgress",
    component: DotProgress,
    parameters: {
        docs: {
            description: {
                component: "Show the progress of any sequence through dots",
            },
        },
    },
    args: {
        current: 1,
        total: 6,
    },
    argTypes: {
        current: {
            type: { required: true },
            description: "The current position. Starts at 0",
            control: { type: "number" },
        },
        total: {
            type: { required: true },
            description: "The total count in progress",
            control: { type: "number" },
        },
    },
};

export default meta;
type Story = StoryObj<typeof DotProgress>;

export const Default = ({ current, total }) => {
    return (
        <div>
            <DotProgress current={current} total={total} />
        </div>
    );
};
