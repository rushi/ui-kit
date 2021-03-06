import React from "react";
import { Breadcrumb, Button, HeaderToolbar } from "../..";

const HeaderToolbarStories = {
    title: "Other/Header Toolbars",
    component: HeaderToolbar,
};

export const HeaderToolbars = () => {
    return (
        <HeaderToolbar>
            <HeaderToolbar.Breadcrumb>
                <Breadcrumb.Item>Seller</Breadcrumb.Item>
                <Breadcrumb.Item>Lasting Adventures</Breadcrumb.Item>
            </HeaderToolbar.Breadcrumb>
            <HeaderToolbar.Search
                placeholder="Search for seller"
                className="border border-gray-lighter"
                onSubmit={() => {
                    // eslint-disable-next-line no-alert
                    alert("Search bar not implemented");
                }}
            />

            <Button size="medium" color="success">
                Impersonate
            </Button>
        </HeaderToolbar>
    );
};

export default HeaderToolbarStories;
