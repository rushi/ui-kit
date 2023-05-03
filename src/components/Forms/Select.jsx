import React from "react";
import { BaseInput } from "./BaseInput";

export const Select = ({ className = "", ...rest }) => {
    return <BaseInput isas="select" className={className} {...rest} />;
};

Select.propTypes = BaseInput.propTypes;
