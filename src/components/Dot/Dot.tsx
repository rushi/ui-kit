import clsx from "clsx";
import React from "react";

const colors = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    success: "bg-success",
    warning: "bg-warning",
    danger: "bg-danger",
    caution: "bg-caution",
};

const sizes = {
    small: "h-1 w-1",
    medium: "h-1.5 w-1.5",
    large: "h-2 w-2",
};

interface DotProps {
    color: keyof typeof colors;
    size: keyof typeof sizes;
    className?: string;
}

export const Dot = ({ color = "primary", size = "medium", className, ...rest }: DotProps) => {
    return (
        <span
            className={clsx("ui-dot", "inline-block rounded-full text-white", colors[color], sizes[size], className)}
            {...rest}
        />
    );
};
