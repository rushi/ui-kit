import React from "react";
import { createIcon } from "./helpers/icon.jsx";

export const CalendarMonthIcon = createIcon((props) => {
    return (
        <svg viewBox="0 0 14 14" width={14} height={14} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M10.333 12.5H3.667C2.747 12.5 2 11.754 2 10.833V4.167c0-.92.746-1.667 1.667-1.667h6.666c.92 0 1.667.746 1.667 1.667v6.666c0 .92-.746 1.667-1.667 1.667zM4.5 1.5v2.174M9.5 1.5v2.174"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M6.98 7.105c.001-.588-.513-1.022-1.229-1.022-.705 0-1.275.418-1.285 1.057l-.002.101h.862l.003-.096c.005-.175.167-.314.42-.314.119 0 .21.036.27.09a.29.29 0 01.094.225h0c0 .098-.04.178-.11.235a.509.509 0 01-.322.097h-.405v.708h.405c.17 0 .297.042.38.105.08.061.121.144.12.243v.002c.001.098-.04.18-.112.239a.513.513 0 01-.326.1c-.278 0-.438-.142-.446-.305l-.005-.095H4.398l.002.102c.013.646.59 1.068 1.342 1.068.763 0 1.36-.426 1.359-1.064a.814.814 0 00-.216-.578.863.863 0 00-.315-.207.758.758 0 00.41-.691zm0 0s0 0 0 0h-.1.1s0 0 0 0zm2.642-.878v-.1h-.78l-.024.016-.81.513-.046.03V7.533l.153-.095.615-.386V9.6H9.622V6.227z"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth={0.2}
            />
        </svg>
    );
});

CalendarMonthIcon.tags = ["date"];
