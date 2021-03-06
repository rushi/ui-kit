import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";
import { Button } from "./Button";

const colors = {
    outline: {
        primary: "bg-primary-lighter border border-primary-light hover:focus:bg-primary-lighter",
        secondary: "bg-secondary-lighter border border-secondary-light hover:focus:bg-secondary-lighter",
        success: "bg-success-lighter border border-success-light hover:focus:bg-success-lighter",
        warning: "bg-warning-lighter border border-warning-light hover:focus:bg-warning-lighter",
        caution: "bg-caution-lighter border border-caution-light hover:focus:bg-caution-lighter",
        danger: "bg-danger-lighter border border-danger-light hover:focus:bg-danger-lighter",
    },
};

export const ToggleButton = ({ color = "primary", variant = "outline", isActive, className, ...rest }) => {
    return (
        <Button
            color={color}
            variant={variant}
            className={clsx("text-black", className, isActive ? colors[variant][color] : "border !border-gray-light")}
            {...rest}
        />
    );
};

ToggleButton.propTypes = {
    ...Button.propTypes,
    isActive: PropTypes.bool.isRequired,
};
