import React, { useState } from "react";
import { Button, Input, Modal } from "../..";
import { inlineRadio, tableDefault } from "../helpers";
import { sizes } from "../../components/Modal";

const ModalStories = {
    title: "Overlay/Modal",
    component: Modal,
    tags: ["autodocs"],
    args: {
        size: "medium",
        position: "center",
        shouldCloseOnOutsideClick: true,
        isOpen: false,
    },
    parameters: {
        design: {
            name: "Figma",
            type: "figma",
            url: "https://www.figma.com/file/tL2vrxuBIzujkDfYvVjUhs/%E2%9A%99%EF%B8%8F-01---DS-Core?node-id=7751%3A525089&viewport=6332%2C-1512%2C0.29",
        },
    },
    argTypes: {
        size: inlineRadio(Object.keys(sizes), tableDefault("medium")),
        position: {
            type: { required: false },
            options: ["topLeft", "topRight", "center", "bottomLeft", "bottomRight"],
            control: { type: "select" },
            table: {
                defaultValue: { summary: "center" },
            },
        },
        shouldCloseOnOutsideClick: {
            type: { required: false },
            description: "Close the modal if user clicks outside it",
            control: { type: "boolean" },
        },
        isOpen: {
            type: { required: false },
            description: "Control the modal open state",
            control: { type: "boolean" },
        },
    },
};

export const Default = ({ size, position, shouldCloseOnOutsideClick }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <Button onClick={toggle}>Click me to launch a modal</Button>

            <Modal
                size={size}
                position={position}
                isOpen={isOpen}
                shouldCloseOnOutsideClick={shouldCloseOnOutsideClick}
                onClose={toggle}
            >
                <Modal.Header description="Enter the code bellow to apply the code">Apply Code</Modal.Header>

                <Modal.Body>
                    <Input placeholder="Coupon of Affiliate" />
                </Modal.Body>

                <Modal.Footer className="space-x-4">
                    <Button color="secondary" variant="outline" onClick={toggle}>
                        Cancel
                    </Button>

                    <Button color="danger" onClick={toggle}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export const CustomWidth = ({ size, position, shouldCloseOnOutsideClick }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <Button onClick={toggle}>Click me to launch a modal</Button>

            <Modal
                className="!max-w-200"
                size={size}
                position={position}
                isOpen={isOpen}
                shouldCloseOnOutsideClick={shouldCloseOnOutsideClick}
                onClose={toggle}
            >
                <Modal.Header>Apply Code</Modal.Header>

                <Modal.Body>
                    <Input placeholder="Coupon of Affiliate" />
                </Modal.Body>

                <Modal.Footer className="space-x-4">
                    <Button color="secondary" variant="outline" onClick={toggle}>
                        Cancel
                    </Button>

                    <Button color="danger" onClick={toggle}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default ModalStories;
