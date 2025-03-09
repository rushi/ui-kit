import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { ComboBox, FormGroup, Label } from "../../";

const meta: Meta<typeof ComboBox> = {
    title: "Forms & Fields/ComboBox",
    args: {
        isCreatable: true,
        isMulti: true,
        closeMenuOnSelect: false,
    },
    argTypes: {
        isCreatable: {
            control: { type: "boolean" },
            table: {
                defaultValue: { summary: false },
            },
        },
        isMulti: {
            control: { type: "boolean" },
            table: {
                defaultValue: { summary: false },
            },
        },
        closeMenuOnSelect: {
            control: { type: "boolean" },
            table: {
                defaultValue: { summary: false },
            },
        },
    },
    parameters: {
        docs: {
            description: {
                component:
                    "Re-export of React Select library with Xola styles applied. Check React Select documentation for more info: https://react-select.com",
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof ComboBox>;

export const Default = ({ isCreatable = false, isMulti = false }) => {
    const options = [
        { value: 1, label: "5% OFF" },
        { value: 2, label: "10% OFF" },
    ];

    return (
        <div className="h-40">
            <FormGroup>
                <Label>Apply Coupon</Label>
                <ComboBox isCreatable={isCreatable} isMulti={isMulti} options={options} />
            </FormGroup>
        </div>
    );
};

export const TagsCreator = () => {
    const tags = [
        { value: 1, label: "5% OFF" },
        { value: 2, label: "10% OFF" },
    ];

    return (
        <div className="h-40">
            <FormGroup>
                <Label>Booking Tags</Label>
                <ComboBox
                    isCreatable
                    isMulti
                    closeMenuOnSelect
                    options={tags}
                    defaultValue={tags}
                    placeholder="Add tag"
                />
            </FormGroup>
        </div>
    );
};
