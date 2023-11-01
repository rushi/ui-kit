import { range } from "lodash";
import { Dot } from "./Dot";
import React from "react";

export const DotProgress = ({ current, total }: { current: number; total: number }) => {
    if (total <= 1) {
        return null;
    }

    return (
        <div className="w-full space-x-2 text-center">
            {range(0, total).map((index) => {
                const currentValue = current <= 0 ? 0 : current >= total ? current - 1 : current;
                const color = index === currentValue ? "primary" : "secondary";
                return <Dot key={index} color={color} size="medium" />;
            })}
        </div>
    );
};
