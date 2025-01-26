"use client";

import React, { forwardRef } from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import cn from "../helpers/classnames";

const TooltipBase = TooltipPrimitive.Root;
const TooltipProvider = TooltipPrimitive.Provider;
const TooltipTrigger = TooltipPrimitive.Trigger;
const TooltipContent = forwardRef(({ className, sideOffset = 4, ...props }, ref) => (
    <TooltipPrimitive.Portal>
        <TooltipPrimitive.Content
            ref={ref}
            sideOffset={sideOffset}
            className={cn(
                // Animations provided by tailwindcss-animate
                "bg-black text-white leading-p1 px-2 py-2",
                "z-50 overflow-hidden rounded text-base animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                className,
            )}
            {...props}
        />
    </TooltipPrimitive.Portal>
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

// https://www.radix-ui.com/primitives/docs/components/tooltip#api-reference
function Tooltip({
    content,
    className,
    arrowClassName,
    children,
    offset = [2],
    placement = "right",
    delay = 1,
    ...options
}) {
    const sideOffset = options.skidding ?? offset[0];
    if (options.maxWidth) {
        console.log(`%c🚨 Xola Warning: Tooltip's maxWidth attribute is no longer supported`, `color:red`);
    }
    if (options.trigger) {
        // TODO: options.trigger will not work. You need to manually control the trigger
        console.log(`%c🚨 Xola Warning: Tooltip's trigger attribute is no longer supported`, `color:red`);
    }

    return (
        <TooltipProvider>
            <TooltipBase delayDuration={delay}>
                <TooltipTrigger>{children}</TooltipTrigger>
                <TooltipContent
                    side={placement}
                    sideOffset={sideOffset}
                    className={cn("max-w-[350px]", className)}
                    {...options}
                >
                    {content}
                    <TooltipPrimitive.Arrow />
                </TooltipContent>
            </TooltipBase>
        </TooltipProvider>
    );
}

export { Tooltip, TooltipBase, TooltipTrigger, TooltipContent, TooltipProvider };
