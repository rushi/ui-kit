import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Number, numberFormat } from "../..";

const meta: Meta<typeof Number> = {
    title: "Data Display/Number",
    component: Number,
    parameters: {
        docs: {
            description: {
                component: "Number formatter",
            },
        },
    },
    args: {
        children: 109482.84,
        locale: "en-US",
        maximumFractionDigits: 2,
    },
    argTypes: {
        children: {
            description: "A number",
            required: true,
            control: { type: "number" },
            table: {
                type: { summary: "For demo only" },
            },
        },
        locale: {
            description: "A locale string",
            required: true,
            control: { type: "select" },
            options: ["en-IN", "en-US", "fr-FR", "ja-JP", "de-DE", "ar-AE"],
            table: {
                type: { summary: undefined },
                defaultValue: { summary: "Auto-detected based on browser settings" },
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Number>;

export const Default = ({ locale, children }) => {
    return (
        <div>
            <div className="mb-2">
                Using the native{" "}
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat">
                    Intl.NumberFormat
                </a>{" "}
                API
            </div>
            <Number locale={locale}>{children}</Number>
        </div>
    );
};

export const CompactValues = ({ locale }) => {
    const amounts = [123, 1234, 123_456, 123_456_789, 123_456_789_123];

    return amounts.map((amount) => (
        <div className="my-2 font-mono tracking-tighter">
            {numberFormat(amount, null, locale, 0)}:{" "}
            <span className="font-semibold">
                <Number isCompact locale={locale}>
                    {amount}
                </Number>
            </span>
        </div>
    ));
};
