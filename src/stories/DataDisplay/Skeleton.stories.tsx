import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "../..";

const meta: Meta<typeof Skeleton> = {
    title: "Data Display/Skeleton",
    component: Skeleton,
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default = () => {
    return <Skeleton>Loading...</Skeleton>;
};

export const WithoutAnimation = () => {
    return (
        <Skeleton classes={{ container: "w-1/2" }} shouldAnimate={false}>
            Not Available
        </Skeleton>
    );
};
