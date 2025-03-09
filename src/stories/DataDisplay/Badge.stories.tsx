import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Badge } from "../..";
import { BellIcon, BoxIcon, CakeIcon, CashIcon, EditIcon, StackIcon } from "../../icons/index.js";

const meta: Meta<typeof Badge> = {
    title: "Data Display/Badges",
    component: Badge,
    args: {
        children: "Default",
        color: "primary",
        size: "small",
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
            options: ["primary", "secondary", "success", "warning", "caution", "danger", "problem", "critical"],
            control: { type: "select" },
        },
        size: {
            options: ["small", "medium", "large"],
            control: { type: "inline-radio" },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default = (props) => {
    return (
        <div className="space-x-4">
            <Badge {...props} />
        </div>
    );
};

export const WithIcons = (props) => {
    return (
        <div className="grid grid-cols-5 gap-4">
            <Badge {...props} color="primary" icon={<StackIcon />}>
                Primary
            </Badge>
            <Badge {...props} color="secondary" icon={<EditIcon />}>
                Secondary
            </Badge>
            <Badge {...props} color="success" icon={<BoxIcon />}>
                Success
            </Badge>
            <Badge {...props} color="warning" icon={<BellIcon />}>
                Warning
            </Badge>
            <Badge {...props} color="caution" icon={<CashIcon />}>
                Caution
            </Badge>
            <Badge {...props} color="danger" icon={<CakeIcon />}>
                Danger
            </Badge>
            <Badge {...props} color="critical" icon={<StackIcon />}>
                Critical
            </Badge>
        </div>
    );
};

export const Colors = (props) => {
    return (
        <div className="space-x-4">
            <Badge {...props} color="primary">
                Primary
            </Badge>
            <Badge {...props} color="secondary">
                Secondary
            </Badge>
            <Badge {...props} color="success">
                Success
            </Badge>
            <Badge {...props} color="warning">
                Warning
            </Badge>
            <Badge {...props} color="caution">
                Caution
            </Badge>
            <Badge {...props} color="danger">
                Danger
            </Badge>
            <Badge {...props} color="problem">
                Problem
            </Badge>
            <Badge {...props} color="critical">
                Critical
            </Badge>
        </div>
    );
};

export const AllSizes = (props) => {
    return (
        <div className="space-x-4">
            <Badge {...props} size="small">
                Small
            </Badge>
            <Badge {...props} size="medium" icon={<StackIcon />}>
                A Medium One
            </Badge>
            <Badge {...props} size="large" icon={<EditIcon />}>
                A Large One
            </Badge>
        </div>
    );
};
