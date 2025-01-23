import React from "react";
import cn from "../../helpers/classnames";

export const Radio = ({
    value,
    checked,
    disabled = false,
    name,
    children,
    className,
    onChange,
    classNames,
    hideRadio = false,
}) => {
    const inputClassName = disabled ? "!bg-gray-lighter" : "cursor-pointer";
    return (
        <label className={cn("flex w-fit", className)} data-testid="radio-input-label">
            <input
                checked={checked}
                disabled={disabled}
                value={value}
                type="radio"
                className={cn(
                    "mr-1",
                    classNames?.input,
                    disabled && checked ? "opacity-80" : inputClassName,
                    hideRadio && "mr-0 hidden",
                )}
                name={name}
                onChange={onChange}
            />
            <span>{children}</span>
        </label>
    );
};
