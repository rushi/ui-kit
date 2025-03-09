import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { CardIcon } from "../../icons/index.js";
import { Breakdown as BreakdownComponent, Button } from "../../";

const meta: Meta<typeof BreakdownComponent> = {
    title: "Other/Breakdown",
    component: BreakdownComponent,
    parameters: {
        design: {
            name: "Figma",
            type: "figma",
            url: "https://www.figma.com/file/EFmxLREOeGUse5zksD3iT4/%E2%9A%99%EF%B8%8F-02---DS-Application-UI?node-id=236%3A144618&viewport=-3895%2C-275%2C0.33",
        },
    },
};

export default meta;
type Story = StoryObj<typeof BreakdownComponent>;

export const Breakdown = () => {
    // Just for a basic showcase of when info is null
    const EmptyComponent = () => null;

    return (
        <div className="w-80 bg-gray-lighter p-4">
            <BreakdownComponent currency="USD">
                <BreakdownComponent.Item value={100}>Line item caption</BreakdownComponent.Item>
                <BreakdownComponent.Item value={29} secondary="($29.00 x 1)">
                    Children
                </BreakdownComponent.Item>
                <BreakdownComponent.Item value={29} secondary="($29.00 x 1)">
                    Adults
                </BreakdownComponent.Item>
                <BreakdownComponent.Item value={29} methodIcon={<EmptyComponent />} info={<EmptyComponent />}>
                    Null Info
                </BreakdownComponent.Item>
                <BreakdownComponent.Item value={4} secondary="($2.00 x 2)">
                    VAT
                </BreakdownComponent.Item>

                <BreakdownComponent.Separator />

                <BreakdownComponent.SubtotalItem info="Total" value={162}>
                    <Button color="secondary" variant="outline" size="small">
                        Modify
                    </Button>
                </BreakdownComponent.SubtotalItem>

                <BreakdownComponent.Item value={1230} secondary="12/18/2019" info="*0259" methodIcon={<CardIcon />}>
                    Payment
                </BreakdownComponent.Item>

                <BreakdownComponent.Item color="primary" secondary="07/23/2021" value={-62} methodIcon={<CardIcon />}>
                    Return Payment
                </BreakdownComponent.Item>

                <BreakdownComponent.Item
                    secondary="07/23/2021"
                    info={<EmptyComponent />}
                    value={0}
                    methodIcon={<CardIcon />}
                >
                    This is a really long message that should wrap somehow
                </BreakdownComponent.Item>

                <BreakdownComponent.Item
                    secondary="07/23/2021"
                    info={<EmptyComponent />}
                    value={0}
                    methodIcon={<CardIcon />}
                >
                    LongMessageThat ShouldOnlyBreakAt AWhitespaceLoremIpsum
                </BreakdownComponent.Item>

                <BreakdownComponent.Item
                    secondary="07/23/2021"
                    info={<EmptyComponent />}
                    value={0}
                    methodIcon={<CardIcon />}
                >
                    SmallMessage LongMessageThatShouldOnlyBreakAtAWhitespaceLoremIpsum
                </BreakdownComponent.Item>

                <BreakdownComponent.Separator />

                <BreakdownComponent.SubtotalItem info="Paid" value={62}>
                    <Button color="secondary" variant="outline" size="small">
                        Apply Code
                    </Button>
                </BreakdownComponent.SubtotalItem>

                <BreakdownComponent.SubtotalItem info="Balance" color="danger" value={62} />
            </BreakdownComponent>
        </div>
    );
};
