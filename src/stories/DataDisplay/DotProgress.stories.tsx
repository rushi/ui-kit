import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { DotProgress as DotProgressComponent } from "../..";

const meta: Meta<typeof DotProgressComponent> = {
    title: "Data Display/DotProgress",
    component: DotProgressComponent,
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
            required: true,
            description: "The current position. Starts at 0",
            control: { type: "number" },
        },
        total: {
            required: true,
            description: "The total count in progress",
            control: { type: "number" },
        },
    },
};

export default meta;
type Story = StoryObj<typeof DotProgressComponent>;

export const DotProgress = ({ current, total }) => {
    return (
        <div>
            <DotProgressComponent current={current} total={total} />
        </div>
    );
};
