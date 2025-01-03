/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { registerBlockType } from "@wordpress/blocks";

/**
 * Internal dependencies
 */
import Save from "./save";
import Edit from "./edit";
import Attributes from "./attributes";
import example from "./example";
import deprecated from "./deprecated";
import "./style.scss";
import metadata from "../block.json";
import { ebConditionalRegisterBlockType } from "@essential-blocks/controls";
import { ReactComponent as Icon } from "./icon.svg";

ebConditionalRegisterBlockType(metadata, {
    icon: Icon,
    attributes: Attributes,
    keywords: [
        __("images", "essential-blocks"),
        __("filter", "essential-blocks"),
        __("photos", "essential-blocks"),
        __("eb image gallery", "essential-blocks"),
        __("filterable gallery", "essential-blocks"),
    ],
    edit: Edit,
    save: Save,
    example,
    deprecated,
});
