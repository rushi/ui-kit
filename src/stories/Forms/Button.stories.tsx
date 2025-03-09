import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import React from "react";
import { Button } from "../..";
import { EllipsisIcon, KeyIcon, PlusIcon, UserIcon, WaitlistIcon, WarningIcon } from "../../icons/index.js";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Button> = {
    title: "Forms & Fields/Buttons/Buttons",
    component: Button,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: "centered",
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ["autodocs"],
    args: {
        as: "button",
        size: "medium",
        color: "primary",
        variant: "standard",
        // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
        args: { onClick: fn() },
    },
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        size: {
            options: ["tiny", "small", "medium", "large"],
            control: { type: "select" },
            table: {
                defaultValue: { summary: "medium" },
            },
        },
        color: {
            options: ["primary", "secondary", "success", "warning", "caution", "danger"],
            control: { type: "select" },
            table: {
                defaultValue: { summary: "primary" },
            },
        },
        variant: {
            options: ["standard", "outline", "link"],
            control: { type: "radio" },
            table: {
                defaultValue: { summary: "standard" },
            },
        },
        children: {
            control: {
                type: "text",
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default = (props) => {
    return (
        <div className="flex w-20 flex-col space-y-4">
            <Button {...props}>Default</Button>
            <Button {...props} disabled color="primary">
                Default
            </Button>
        </div>
    );
};

export const Colors: Story = {
    render: (props) => (
        <div className="space-x-4">
            <Button {...props} color="primary">
                Primary
            </Button>
            <Button {...props} color="secondary">
                Secondary
            </Button>
            <Button {...props} color="success">
                Success
            </Button>
            <Button {...props} color="warning">
                Warning
            </Button>
            <Button {...props} color="caution">
                Caution
            </Button>
            <Button {...props} color="danger">
                Danger
            </Button>
        </div>
    ),
};

export const OutlineVariant: Story = {
    args: {
        variant: "outline",
    },
    render: (props) => (
        <div className="space-x-4">
            <code className="mb-5 block font-mono">Use variant=&quot;outline&quot;</code>
            <Button {...props} color="primary">
                Primary
            </Button>
            <Button {...props} color="secondary">
                Secondary
            </Button>
            <Button {...props} color="success">
                Success
            </Button>
            <Button {...props} color="warning">
                Warning
            </Button>
            <Button {...props} color="caution">
                Caution
            </Button>
            <Button {...props} color="danger">
                Danger
            </Button>
        </div>
    ),
};

export const LinkVariant = {
    args: {
        variant: "link",
    },
    render: (props) => (
        <div className="space-x-4">
            <code className="mb-5 block font-mono">Use variant=&quot;link&quot;</code>
            <Button {...props} color="primary">
                Primary
            </Button>
            <Button {...props} color="secondary">
                Secondary
            </Button>
            <Button {...props} color="success">
                Success
            </Button>
            <Button {...props} color="warning">
                Warning
            </Button>
            <Button {...props} color="caution">
                Caution
            </Button>
            <Button {...props} color="danger">
                Danger
            </Button>
        </div>
    ),
};

export const States = {
    render: () => <div className="space-x-4">TODO: Disabled &amp; Selected state</div>,
};

export const TextWithIcons = {
    render: (props) => (
        <div className="space-x-4">
            <Button {...props} icon={<UserIcon />} size="medium">
                Medium
            </Button>

            <Button {...props} icon={<UserIcon />} iconPlacement="right" color="success" size="large">
                Large
            </Button>
        </div>
    ),
};

export const AsLink = {
    render: (props) => (
        <Button {...props} as="a" href="https://xola.com" target="_blank" rel="noopener" size="small">
            Xola Website
        </Button>
    ),
};

export const FullWidth = {
    render: (props) => (
        <div className="w-full space-y-4">
            <Button {...props} className="w-full">
                Default
            </Button>

            <Button {...props} icon={<UserIcon />} className="w-full">
                Icon
            </Button>
        </div>
    ),
};

export const IconOnly = {
    render: (props) => (
        <div className="space-x-6">
            <div className="py-3 font-mono">Most of our icon only buttons use the &quot;variant=outline&quot; prop</div>
            <Button {...props} variant="outline" color="secondary" size="tiny">
                <EllipsisIcon />
            </Button>

            <Button {...props} variant="outline" color="primary" size="small">
                <WaitlistIcon />
            </Button>

            <Button {...props} variant="outline" color="success" size="small">
                <PlusIcon />
            </Button>

            <Button {...props} variant="outline" color="warning" size="medium">
                <WarningIcon />
            </Button>

            <Button {...props} variant="outline" color="caution" size="medium">
                <KeyIcon />
            </Button>
        </div>
    ),
};

export const Sizes = {
    render: (props) => (
        <div className="space-x-4">
            <div className="py-3 font-mono">Tiny is only used with icons</div>
            <Button {...props} size="tiny">
                <EllipsisIcon />
            </Button>
            <Button {...props} size="small">
                Small
            </Button>
            <Button {...props} size="medium">
                Medium
            </Button>
            <Button {...props} size="large">
                Large
            </Button>
        </div>
    ),
};
