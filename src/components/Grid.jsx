import GridLayout, { Responsive as ResponsiveGridLayout } from "react-grid-layout";
import React from "react";
import _ from "lodash";
import RGL, { WidthProvider } from "react-grid-layout";

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { useEffect } from "react";

export const TheGrid = () => {
    // layout is an array of objects, see the demo for more complete usage
    const layout = [
        { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
        { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
        { i: "c", x: 4, y: 0, w: 1, h: 2 },
    ];
    return (
        <GridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
            <div className="flex cursor-auto items-center justify-center border border-gray bg-gray-lighter" key="a">
                Letter A
            </div>
            <div className="flex cursor-auto items-center justify-center border border-gray bg-gray-lighter" key="b">
                Letter B
            </div>
            <div className="flex cursor-auto items-center justify-center border border-gray bg-gray-lighter" key="c">
                Letter C
            </div>
        </GridLayout>
    );
};

const ReactGridLayout = WidthProvider(RGL);

export const BasicLayout = (props) => {
    const defaultProps = { className: "layout", items: 10, rowHeight: 30, cols: 12 };
    props = { ...defaultProps, ...props };
    const WIDTH = 4;
    const HEIGHT = 4;

    const generateDOM = () => {
        return _.map(_.range(props.items), function (i) {
            return (
                <div
                    key={i}
                    className="flex cursor-move items-center justify-center border border-gray bg-gray-lighter text-lg"
                >
                    <span className="text">Number {i}</span>
                </div>
            );
        });
    };

    const generateLayout = () => {
        const p = props;
        return _.map(new Array(p.items), function (item, i) {
            // const y = _.result(p, "y") || Math.ceil(Math.random() * 4) + 1;
            const divisor = props.cols / WIDTH;
            const line = i % divisor;
            return {
                x: line * WIDTH, // (i * 2) % 12,
                y: line, // Math.floor(i / 6) * y,
                w: WIDTH,
                h: HEIGHT,
                i: i.toString(),
            };
        });
    };

    const [layout, setLayout] = React.useState(generateLayout());

    const onLayoutChange = (newLayout) => {
        console.log("Layout changed to", newLayout);
        for (const box of newLayout) {
            console.log(` #${box.i} at ${box.x},${box.y}`, ` Width: ${box.w} Height: ${box.h}`);
        }
        setLayout(newLayout);
    };

    return (
        <div className="bg-blue-lighter">
            <ReactGridLayout autoSize margin={[0, 0]} layout={layout} onLayoutChange={onLayoutChange} {...props}>
                {generateDOM()}
            </ReactGridLayout>
        </div>
    );
};
