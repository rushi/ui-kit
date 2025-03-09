import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { ImageUpload as ImageUploadComponent } from "../..";

const meta: Meta<typeof ImageUploadComponent> = {
    title: "Media/Image Upload",
    component: ImageUploadComponent,
    parameters: {
        docs: {
            description: {
                component: "Use to upload images",
            },
        },
        design: {
            name: "Figma",
            type: "figma",
            url: "https://www.figma.com/file/tL2vrxuBIzujkDfYvVjUhs/%E2%9A%99%EF%B8%8F-01---DS-Core?node-id=6460%3A394875",
        },
    },
    args: {
        size: "medium",
        maxSize: 5,
        hasDelete: true,
        caption: null,
        requirements: null,
    },
    argTypes: {
        src: {
            required: true,
            description: "The URL to the image",
            control: {
                type: "text",
            },
            table: {
                type: { summary: undefined },
                defaultValue: { summary: "none" },
            },
        },
        size: {
            description: "The size of the image",
            options: ["small", "medium", "large"],
            control: { type: "radio" },
            table: {
                type: { summary: undefined },
                defaultValue: { summary: "medium" },
            },
        },
        csvAcceptFormats: {
            description: "The caption to show on the upload button",
            control: { type: "text" },
            table: {
                type: { summary: undefined },
                defaultValue: { summary: "Upload New Photo" },
            },
        },
        isLoading: {
            control: { type: "boolean" },
            table: {
                defaultValue: { summary: "false" },
            },
        },
        maxSize: {
            description: "Max file size",
            control: { type: "number" },
        },
        hasDelete: {
            control: { type: "boolean" },
            table: {
                defaultValue: { summary: "true" },
            },
        },
        requirements: {
            description: "The requirements for this image upload",
            control: { type: "text" },
            table: {
                type: { summary: undefined },
                defaultValue: { summary: "Check that image is in PNG or JPG format and does not exceed 5MB" },
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof ImageUploadComponent>;

export const ImageUpload = ({
    src: source,
    size = "small",
    maxSize,
    caption,
    csvAcceptFormats,
    hasDelete,
    requirements,
    isLoading,
}) => {
    const [source_, setSource] = React.useState(source);

    React.useEffect(() => {
        setSource(source);
    }, [setSource, source]);

    const onChange = (file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            setSource(reader.result);
        };

        reader.readAsDataURL(file);
    };

    const onDelete = () => {
        setSource(undefined);
    };

    return (
        <ImageUploadComponent
            src={source_}
            size={size}
            isLoading={isLoading}
            maxSize={maxSize}
            caption={caption}
            hasDelete={hasDelete}
            requirements={requirements}
            onChange={onChange}
            onDelete={onDelete}
            csvAcceptFormats={csvAcceptFormats}
            onError={(error) => console.log(error)}
        />
    );
};
