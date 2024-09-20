import clsx from "clsx";
import PropTypes from "prop-types";
import React, { forwardRef } from "react";
import { BaseInput } from "./BaseInput";

export const Input = forwardRef(({ className, type = "text", value, ...rest }, ref) => {
    return (
        <BaseInput ref={ref} as="input" className={clsx("ui-input", className)} type={type} value={value} {...rest} />
    );
});

Input.propTypes = {
    ...BaseInput.propTypes,
    type: PropTypes.string,
};

Input.defaultProps = {
    ...BaseInput.defaultProps,
    type: "text",
};
