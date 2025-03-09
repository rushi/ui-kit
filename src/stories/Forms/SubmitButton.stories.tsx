import React, { useState } from "react";
import { SubmitButton as SubmitButtonComponent } from "../../";

const SubmitButtonStories = {
    title: "Forms & Fields/Buttons/Submit Button",
    component: SubmitButtonComponent,
    args: {
        isLoading: false,
        size: "medium",
        color: "primary",
    },
    argTypes: {
        isLoading: {
            control: { type: "boolean" },
            table: {
                defaultValue: { summary: false },
            },
        },
        size: {
            options: ["small", "medium", "large"],
            control: { type: "radio" },
            table: {
                defaultValue: { summary: "medium" },
            },
        },
        color: {
            options: ["primary", "secondary", "success", "warning", "danger"],
            control: { type: "select" },
            table: {
                defaultValue: { summary: "primary" },
            },
        },
    },
};

export const SubmitButton = ({ isLoading, ...rest }) => {
    const [showLoading, setShowLoading] = useState(isLoading);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleClick = () => {
        setShowLoading(!showLoading);
        setTimeout(() => {
            setShowSuccess(true);
            setShowLoading(false);
        }, 2000);
    };

    return (
        <div className="space-y-4">
            <div className="space-x-4">
                <SubmitButtonComponent isLoading={showLoading} isSuccess={showSuccess} {...rest} onClick={handleClick}>
                    Submit
                </SubmitButtonComponent>

                <SubmitButtonComponent isLoading={showLoading} isSuccess={showSuccess} {...rest} onClick={handleClick}>
                    Button with really long text
                </SubmitButtonComponent>
            </div>
            <div className="space-x-4">
                <SubmitButtonComponent
                    {...rest}
                    color="success"
                    isLoading={showLoading}
                    isSuccess={showSuccess}
                    onClick={handleClick}
                >
                    Submit
                </SubmitButtonComponent>

                <SubmitButtonComponent
                    {...rest}
                    color="success"
                    isSuccess={showSuccess}
                    isLoading={showLoading}
                    onClick={handleClick}
                >
                    Button with really long text
                </SubmitButtonComponent>
            </div>
            <div className="space-x-4">
                <SubmitButtonComponent
                    {...rest}
                    isSuccess={showSuccess}
                    color="danger"
                    isLoading={showLoading}
                    onClick={handleClick}
                >
                    Submit
                </SubmitButtonComponent>

                <SubmitButtonComponent
                    {...rest}
                    isSuccess={showSuccess}
                    color="danger"
                    isLoading={showLoading}
                    onClick={handleClick}
                >
                    Button with really long text
                </SubmitButtonComponent>
            </div>
        </div>
    );
};

export default SubmitButtonStories;
