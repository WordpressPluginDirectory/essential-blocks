/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useEffect, memo } from "@wordpress/element";
import { InnerBlocks } from "@wordpress/block-editor";
import { Button } from "@wordpress/components";
import { select, dispatch } from "@wordpress/data";
import { createBlock } from "@wordpress/blocks";
import {
    BlockProps,
    withBlockContext
} from "@essential-blocks/controls";

const ALLOWED_BLOCKS = ["essential-blocks/accordion-item"];

/**
 * Internal dependencies
 */
import Inspector from "./inspector";
import { times } from "lodash";
import Style from "./style";
import defaultAttributes from './attributes';

const Edit = (props) => {
    const {
        attributes,
        setAttributes,
        isSelected,
        clientId
    } = props;
    const {
        blockId,
        classHook,
        accordionType,
        displayIcon,
        tabIcon,
        expandedIcon,
        tagName,
        faqSchema,
        accordionChildCount,
    } = attributes;

    const enhancedProps = {
        ...props,
        blockPrefix: 'eb-accordion',
        style: <Style {...props} />
    };

    const addAccordion = () => {
        const innerBlocks = [
            ...select("core/block-editor").getBlocks(clientId),
        ];
        let count = innerBlocks ? innerBlocks.length : 3;

        const newBlock = createBlock("essential-blocks/accordion-item", {
            itemId: count + 1,
            title: __(`Accordion title ${count + 1}`, "essential-blocks"),
            inheritedAccordionType: accordionType,
            inheritedTagName: tagName,
            inheritedDisplayIcon: displayIcon,
            inheritedTabIcon: tabIcon,
            inheritedExpandedIcon: expandedIcon,
            parentBlockId: blockId,
        });
        innerBlocks.splice(innerBlocks.length, 0, newBlock);
        dispatch("core/block-editor")
            .replaceInnerBlocks(clientId, innerBlocks)
            .then(() => {
                setAttributes({ accordionChildCount: count + 1 });
            });
    };

    useEffect(() => {
        if (!tabIcon) {
            setAttributes({ tabIcon: "fas fa-angle-right" });
        }
        if (!expandedIcon) {
            setAttributes({ expandedIcon: "fas fa-angle-down" });
        }
    }, []);

    const insertAccodionItem = (accordionChildCount) => {
        return times(accordionChildCount, (n) => [
            "essential-blocks/accordion-item",
            {
                itemId: n + 1,
                title: __(`Accordion title ${n + 1}`, "essential-blocks"),
                inheritedAccordionType: accordionType,
                inheritedDisplayIcon: displayIcon,
                inheritedTabIcon: "fas fa-angle-right",
                inheritedExpandedIcon: "fas fa-angle-down",
                inheritedTagName: tagName,
                faqSchema: faqSchema,
                parentBlockId: blockId,
            },
        ]);
    };

    return (
        <>
            {isSelected && <Inspector {...props} addAccordion={addAccordion} />}
            <BlockProps.Edit {...enhancedProps}>
                <div
                    className={`eb-parent-wrapper eb-parent-${blockId} ${classHook}`}
                >
                    <div className={`${blockId} eb-accordion-container`}>
                        <div className="eb-accordion-inner">
                            <InnerBlocks
                                template={insertAccodionItem(
                                    accordionChildCount
                                )}
                                templateLock={false}
                                allowedBlocks={ALLOWED_BLOCKS}
                            />
                        </div>
                    </div>
                    <div className="eb-accordion-add-button">
                        <Button
                            className="is-default"
                            label={__("Add Accordion Item", "essential-blocks")}
                            icon="plus-alt"
                            onClick={addAccordion}
                        >
                            <span className="eb-accordion-add-button-label">
                                {__("Add Accordion Item", "essential-blocks")}
                            </span>
                        </Button>
                    </div>
                </div>
            </BlockProps.Edit>
        </>
    );
};

export default memo(withBlockContext(defaultAttributes)(Edit))
