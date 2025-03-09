import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumb, Button, HeaderToolbar } from "../..";

const meta: Meta<typeof HeaderToolbar> = {
    title: "Other/Header Toolbars",
    component: HeaderToolbar,
    parameters: {
        design: {
            name: "Figma",
            type: "figma",
            url: "https://www.figma.com/file/tL2vrxuBIzujkDfYvVjUhs/%E2%9A%99%EF%B8%8F-01---DS-Core?node-id=7839%3A479666&viewport=5274%2C-3037%2C0.55",
        },
    },
};

export default meta;
type Story = StoryObj<typeof HeaderToolbar>;

export const HeaderToolbars = () => {
    return (
        <HeaderToolbar>
            <HeaderToolbar.Breadcrumb>
                <Breadcrumb.Item>Seller</Breadcrumb.Item>
                <Breadcrumb.Item>Lasting Adventures</Breadcrumb.Item>
            </HeaderToolbar.Breadcrumb>
            <HeaderToolbar.Search
                placeholder="Search for seller"
                className="border border-gray-lighter"
                onSubmit={() => {
                    // eslint-disable-next-line no-alert
                    alert("Search bar not implemented");
                }}
            />

            <Button size="medium" color="success">
                Impersonate
            </Button>
        </HeaderToolbar>
    );
};
