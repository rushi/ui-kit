import PropTypes from "prop-types";
import React from "react";
import cn from "./classnames";
import { iconSizes } from "./iconSizes";

export const createIcon = (Icon) => {
    const IconContainer = ({ size = "small", className, ...rest }) => {
        return <Icon className={cn(iconSizes[size], "relative -top-0.25 inline-block", className)} {...rest} />;
    };

    IconContainer.propTypes = {
        className: PropTypes.string,
        size: PropTypes.oneOf(Object.keys(iconSizes)),
    };

    return IconContainer;
};
