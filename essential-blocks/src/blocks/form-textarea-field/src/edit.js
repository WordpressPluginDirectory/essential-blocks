/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useEffect, memo } from "@wordpress/element";
import { select, dispatch, useSelect } from "@wordpress/data";
/**
 * Internal dependencies
 */

import {
    getBlockParentClientId,
    EBDisplayIcon,
    DynamicInputValueHandler,
    BlockProps,
    withBlockContext,
    filterBlocksByName
} from "@essential-blocks/controls";
import Inspector from "./inspector";
import Style from "./style";
import defaultAttributes from './attributes'

const Edit = (props) => {
    const {
        attributes,
        setAttributes,
        isSelected,
        clientId,
        className,
        name,
    } = props;
    const {
        blockId,
        classHook,
        showLabel,
        labelText,
        fieldName,
        textareaRows,
        defaultValue,
        placeholderText,
        isRequired,
        validationRules,
        validationMessage,
        isIcon,
        icon,
        formStyle,
    } = attributes;

    // you must declare this variable
    const enhancedProps = {
        ...props,
        blockPrefix: 'eb-textarea-field',
        rootClass: `eb-guten-block-main-parent-wrapper eb-form-field`,
        style: < Style {...props} />
    };

    useEffect(() => {

        const parentClientId = getBlockParentClientId(
            clientId,
            "essential-blocks/form"
        );

        const getParentBlock = select("core/block-editor").getBlock(
            parentClientId
        );
        const getParentBlockId = getParentBlock?.attributes?.blockId;
        const parentIconColor = getParentBlock?.attributes?.inputIconColor;
        const parentBlockIconSize =
            getParentBlock?.attributes?.inputIconSizeRange;
        const parentBlockPaddingLeft =
            getParentBlock?.attributes?.fieldsPaddingLeft;
        const parentBlockPaddingUnit =
            getParentBlock?.attributes?.fieldsPaddingUnit;
        if (getParentBlockId)
            setAttributes({
                parentBlockId: getParentBlockId,
                parentBlockPaddingLeft,
                parentBlockPaddingUnit,
                parentBlockIconSize,
                parentIconColor,
            });

        const getFormStyle = getParentBlock?.attributes?.formStyle;
        if (getFormStyle) setAttributes({ formStyle: getFormStyle });

        //Handle as per parent settings
        const isBlockJustInserted = select(
            "core/block-editor"
        ).wasBlockJustInserted(clientId);
        const getFormLabel = getParentBlock?.attributes?.showLabel;
        const getFormIcon = getParentBlock?.attributes?.showInputIcon;
        if (
            isBlockJustInserted &&
            typeof getFormLabel !== "undefined" &&
            typeof getFormIcon !== "undefined"
        ) {
            setAttributes({
                showLabel: getFormLabel,
                isIcon: getFormIcon,
            });
        }

        //Hanlde Field Name
        if (isBlockJustInserted) {
            if (parentClientId) {
                const parentAllChildBlocks = select(
                    "core/block-editor"
                ).getBlocksByClientId(parentClientId);
                const filteredBlocks = filterBlocksByName(
                    parentAllChildBlocks,
                    name
                );
                const currentBlockIndex = filteredBlocks.indexOf(clientId);
                if (currentBlockIndex !== -1) {
                    setAttributes({
                        fieldName: `textarea-field-${currentBlockIndex + 1}`,
                    });
                    if (filteredBlocks.length === 1) {
                        setAttributes({ fieldName: `textarea-field` });
                    } else {
                        setAttributes({
                            fieldName: `textarea-field-${currentBlockIndex + 1
                                }`,
                        });
                    }
                }
            }
        }
    }, []);

    //UseEffect for set Validation rules
    useEffect(() => {
        const rules = {
            [fieldName]: {
                isRequired: {
                    status: isRequired,
                    message: validationMessage,
                },
            },
        };
        setAttributes({ validationRules: rules });
    }, [isRequired, fieldName, validationMessage]);

    return (
        <>
            {isSelected && (
                <Inspector
                    clientId={clientId}
                    attributes={attributes}
                    setAttributes={setAttributes}
                />
            )}
            <BlockProps.Edit {...enhancedProps}>
                <div
                    className={`eb-parent-wrapper eb-parent-${blockId} ${classHook}`}
                >
                    <div
                        className={`${blockId} eb-textarea-field-wrapper eb-field-wrapper`}
                    >
                        {showLabel && formStyle != "form-style-modern" && (
                            <>
                                <label htmlFor={fieldName}>
                                    <DynamicInputValueHandler
                                        value={labelText}
                                        onChange={(labelText) =>
                                            setAttributes({ labelText })
                                        }
                                        readOnly={true}
                                    />{" "}
                                    {isRequired && (
                                        <span className="eb-required">*</span>
                                    )}
                                </label>
                            </>
                        )}
                        <div className="eb-field-input-wrap">
                            {isIcon && icon && <EBDisplayIcon icon={icon} className={"eb-input-icon"} />}

                            <textarea
                                rows={textareaRows}
                                cols="100"
                                id={fieldName}
                                className={"eb-field-input"}
                                name={fieldName}
                                placeholder={placeholderText}
                            >
                                {defaultValue}
                            </textarea>
                            {formStyle == "form-style-modern" && (
                                <>
                                    <label htmlFor={fieldName}>
                                        {labelText}{" "}
                                        {isRequired && (
                                            <span className="eb-required">
                                                *
                                            </span>
                                        )}
                                    </label>
                                </>
                            )}
                        </div>
                        {isRequired && (
                            <>
                                <div
                                    className={`eb-form-validation eb-validate-${fieldName}`}
                                >
                                    {validationMessage}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </BlockProps.Edit >
        </>
    );
}

export default memo(withBlockContext(defaultAttributes)(Edit))
