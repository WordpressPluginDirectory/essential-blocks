/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";

/**
 * Internal dependencies
 */

import "./style.scss";

import { ReactComponent as Icon } from "./icon.svg";
import Edit from "./edit";
import attributes from "./attributes";
import metadata from "../block.json";
import deprecated from "./deprecated";
import {  ebConditionalRegisterBlockType  } from "@essential-blocks/controls";

ebConditionalRegisterBlockType(metadata, {
    keywords: [
        __("TOC", "essential-blocks"),
        __("Table Of Contents", "essential-blocks"),
        __("eb table of contents", "essential-blocks"),
    ],
    icon: Icon,
    attributes,
    edit: Edit,
    save: () => null,
    example: {
        attributes: {
            cover: `${EssentialBlocksLocalize?.image_url}/block-preview/table-of-contents.jpeg`,
        },
    },
    deprecated,
});
