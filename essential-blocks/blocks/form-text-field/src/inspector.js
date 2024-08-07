/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import { useEffect, useState } from "@wordpress/element";
import {
    PanelBody,
    SelectControl,
    ToggleControl,
    TextControl,
    Button,
    RangeControl,
    BaseControl,
    ButtonGroup,
    TabPanel,
    PanelRow,
} from "@wordpress/components";

/**
 * Internal dependencies
 */
const {
    BackgroundControl,
    BorderShadowControl,
    ColorControl,
    ResponsiveRangeController,
    ResponsiveDimensionsControl,
    TypographyDropdown,
    AdvancedControls,
    EBIconPicker,
    DynamicInputControl
} = EBControls;

import objAttributes from "./attributes";

import {
    WRAPPER_MARGIN,
    WRAPPER_PADDING,
    WRAPPER_BORDER_SHADOW,
    WRAPPER_BG,
    TEXT_PADDING,
    TEXT_BORDER,
    LABEL_MARGIN,
    FIELD_BORDER,
    FIELD_PADDING,
    ICON_SIZE,
} from "./constants";

import {
    TEXT_TYPO,
    LABEL_TYPOGRAPHY,
    FIELD_TEXT,
    FIELD_TEXT_VALIDATION,
} from "./constants/typographyPrefixConstants";

function Inspector(props) {
    const { attributes, setAttributes, clientId } = props;

    const {
        blockId,
        resOption,
        showLabel,
        labelText,
        fieldName,
        defaultValue,
        placeholderText,
        isRequired,
        isHidden,
        validationMessage,

        TextColor,
        TextBgColor,

        labelColor,
        requiredColor,
        fieldColor,
        fieldPlaceholderColor,
        fieldBgColor,
        fieldValidationColor,
        fieldValidationBorderColor,
        isIcon,
        icon,
        iconColor,
    } = attributes;

    const resRequiredProps = {
        setAttributes,
        resOption,
        attributes,
        objAttributes,
    };

    const handleHiddenField = () => {
        setAttributes({
            isHidden: !isHidden,
            showLabel: false,
            isRequired: false,
        });
    };

    return (
        <InspectorControls key="controls">
            <div className="eb-panel-control">
                <TabPanel
                    className="eb-parent-tab-panel"
                    activeClass="active-tab"
                    tabs={[
                        {
                            name: "general",
                            title: "General",
                            className: "eb-tab general",
                        },
                        {
                            name: "styles",
                            title: "Style",
                            className: "eb-tab styles",
                        },
                        {
                            name: "advance",
                            title: "Advanced",
                            className: "eb-tab advance",
                        },
                    ]}
                >
                    {(tab) => (
                        <div className={"eb-tab-controls" + tab.name}>
                            {tab.name === "general" && (
                                <>
                                    <PanelBody
                                        title={__(
                                            "General",
                                            "essential-blocks"
                                        )}
                                        initialOpen={true}
                                    >
                                        <ToggleControl
                                            label={__(
                                                "Show Label?",
                                                "essential-blocks"
                                            )}
                                            checked={showLabel}
                                            onChange={() =>
                                                setAttributes({
                                                    showLabel: !showLabel,
                                                })
                                            }
                                        />

                                        {showLabel && (
                                            <DynamicInputControl
                                                label={__(
                                                    "Label Text",
                                                    "essential-blocks"
                                                )}
                                                attrName="labelText"
                                                inputValue={labelText}
                                                setAttributes={setAttributes}
                                                onChange={(text) =>
                                                    setAttributes({
                                                        labelText: text,
                                                    })
                                                }
                                            />
                                        )}

                                        <TextControl
                                            label={__(
                                                "Placeholder Text",
                                                "essential-blocks"
                                            )}
                                            value={placeholderText}
                                            onChange={(text) =>
                                                setAttributes({
                                                    placeholderText: text,
                                                })
                                            }
                                        />

                                        <ToggleControl
                                            label={__(
                                                "Required?",
                                                "essential-blocks"
                                            )}
                                            checked={isRequired}
                                            onChange={() =>
                                                setAttributes({
                                                    isRequired: !isRequired,
                                                })
                                            }
                                        />

                                        <ToggleControl
                                            label={__(
                                                "Hidden Field?",
                                                "essential-blocks"
                                            )}
                                            checked={isHidden}
                                            onChange={() => handleHiddenField()}
                                        />

                                        <ToggleControl
                                            label={__(
                                                "Icon?",
                                                "essential-blocks"
                                            )}
                                            checked={isIcon}
                                            onChange={() =>
                                                setAttributes({
                                                    isIcon: !isIcon,
                                                })
                                            }
                                        />

                                        {isIcon && (
                                            <>
                                                <EBIconPicker
                                                    value={icon}
                                                    onChange={(icon) =>
                                                        setAttributes({
                                                            icon,
                                                        })
                                                    }
                                                />
                                            </>
                                        )}
                                    </PanelBody>

                                    <PanelBody
                                        title={__(
                                            "Advanced Settings",
                                            "essential-blocks"
                                        )}
                                        initialOpen={true}
                                    >
                                        <TextControl
                                            label={__(
                                                "Default Value",
                                                "essential-blocks"
                                            )}
                                            value={defaultValue}
                                            onChange={(text) =>
                                                setAttributes({
                                                    defaultValue: text,
                                                })
                                            }
                                            help={__("Leave empty if no default value.", "essential-blocks")}
                                        />
                                        <TextControl
                                            label={__(
                                                "Field Custom Name Attribute",
                                                "essential-blocks"
                                            )}
                                            value={fieldName}
                                            onChange={(text) =>
                                                setAttributes({
                                                    fieldName: text,
                                                })
                                            }
                                            help={__("This is for the name attributes which is used to submit form data, Name must be unique.", "essential-blocks")}
                                        />

                                        {isRequired && (
                                            <TextControl
                                                label={__(
                                                    "Custom Validation Message",
                                                    "essential-blocks"
                                                )}
                                                value={validationMessage}
                                                onChange={(text) =>
                                                    setAttributes({
                                                        validationMessage: text,
                                                    })
                                                }
                                            />
                                        )}
                                    </PanelBody>
                                </>
                            )}
                            {tab.name === "styles" && (
                                <>
                                    <PanelBody
                                        title={__("Label", "essential-blocks")}
                                        initialOpen={true}
                                    >
                                        <TypographyDropdown
                                            baseLabel={__(
                                                "Typography",
                                                "essential-blocks"
                                            )}
                                            typographyPrefixConstant={
                                                LABEL_TYPOGRAPHY
                                            }
                                            resRequiredProps={resRequiredProps}
                                        />
                                        <ColorControl
                                            label={__(
                                                "Color",
                                                "essential-blocks"
                                            )}
                                            color={labelColor}
                                            onChange={(labelColor) =>
                                                setAttributes({
                                                    labelColor,
                                                })
                                            }
                                        />
                                        <ColorControl
                                            label={__(
                                                "Requied Color",
                                                "essential-blocks"
                                            )}
                                            color={requiredColor}
                                            onChange={(requiredColor) =>
                                                setAttributes({
                                                    requiredColor,
                                                })
                                            }
                                        />
                                        <ResponsiveDimensionsControl
                                            resRequiredProps={resRequiredProps}
                                            controlName={LABEL_MARGIN}
                                            baseLabel={__(
                                                "Margin",
                                                "essential-blocks"
                                            )}
                                        />
                                    </PanelBody>
                                    <PanelBody
                                        title={__("Field", "essential-blocks")}
                                        initialOpen={false}
                                    >
                                        <>
                                            <TypographyDropdown
                                                baseLabel={__(
                                                    "Typography",
                                                    "essential-blocks"
                                                )}
                                                typographyPrefixConstant={
                                                    FIELD_TEXT
                                                }
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                            />

                                            <ColorControl
                                                label={__(
                                                    "Color",
                                                    "essential-blocks"
                                                )}
                                                color={fieldColor}
                                                onChange={(fieldColor) =>
                                                    setAttributes({
                                                        fieldColor,
                                                    })
                                                }
                                            />
                                            <ColorControl
                                                label={__(
                                                    "Placeholder Color",
                                                    "essential-blocks"
                                                )}
                                                color={fieldPlaceholderColor}
                                                onChange={(
                                                    fieldPlaceholderColor
                                                ) =>
                                                    setAttributes({
                                                        fieldPlaceholderColor,
                                                    })
                                                }
                                            />
                                            <ColorControl
                                                label={__(
                                                    "Background",
                                                    "essential-blocks"
                                                )}
                                                color={fieldBgColor}
                                                onChange={(fieldBgColor) =>
                                                    setAttributes({
                                                        fieldBgColor,
                                                    })
                                                }
                                            />
                                            <ResponsiveDimensionsControl
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                                controlName={FIELD_PADDING}
                                                baseLabel={__(
                                                    "Padding",
                                                    "essential-blocks"
                                                )}
                                            />

                                            <PanelBody
                                                title={__(
                                                    "Border",
                                                    "essential-blocks"
                                                )}
                                                initialOpen={false}
                                            >
                                                <BorderShadowControl
                                                    controlName={FIELD_BORDER}
                                                    resRequiredProps={
                                                        resRequiredProps
                                                    }
                                                />
                                            </PanelBody>

                                            <PanelBody
                                                title={__(
                                                    "Validation",
                                                    "essential-blocks"
                                                )}
                                                initialOpen={false}
                                            >
                                                <TypographyDropdown
                                                    baseLabel={__(
                                                        "Typography",
                                                        "essential-blocks"
                                                    )}
                                                    typographyPrefixConstant={
                                                        FIELD_TEXT_VALIDATION
                                                    }
                                                    resRequiredProps={
                                                        resRequiredProps
                                                    }
                                                />

                                                <ColorControl
                                                    label={__(
                                                        "Color",
                                                        "essential-blocks"
                                                    )}
                                                    color={fieldValidationColor}
                                                    onChange={(
                                                        fieldValidationColor
                                                    ) =>
                                                        setAttributes({
                                                            fieldValidationColor,
                                                        })
                                                    }
                                                />
                                                <ColorControl
                                                    label={__(
                                                        "Fields Border Color",
                                                        "essential-blocks"
                                                    )}
                                                    color={
                                                        fieldValidationBorderColor
                                                    }
                                                    onChange={(
                                                        fieldValidationBorderColor
                                                    ) =>
                                                        setAttributes({
                                                            fieldValidationBorderColor,
                                                        })
                                                    }
                                                />
                                            </PanelBody>
                                        </>
                                    </PanelBody>
                                    {isIcon && (
                                        <>
                                            <PanelBody
                                                title={__(
                                                    "Icon",
                                                    "essential-blocks"
                                                )}
                                                initialOpen={false}
                                            >
                                                <ColorControl
                                                    label={__(
                                                        "Color",
                                                        "essential-blocks"
                                                    )}
                                                    color={iconColor}
                                                    onChange={(iconColor) =>
                                                        setAttributes({
                                                            iconColor,
                                                        })
                                                    }
                                                />
                                                <ResponsiveRangeController
                                                    baseLabel={__(
                                                        "Size (PX)",
                                                        "essential-blocks"
                                                    )}
                                                    controlName={ICON_SIZE}
                                                    resRequiredProps={
                                                        resRequiredProps
                                                    }
                                                    min={1}
                                                    max={100}
                                                    step={1}
                                                    noUnits
                                                />
                                            </PanelBody>
                                        </>
                                    )}
                                </>
                            )}
                            {tab.name === "advance" && (
                                <>
                                    <PanelBody
                                        title={__(
                                            "Margin Padding",
                                            "essential-blocks"
                                        )}
                                    >
                                        <ResponsiveDimensionsControl
                                            resRequiredProps={resRequiredProps}
                                            controlName={WRAPPER_MARGIN}
                                            baseLabel={__("Margin", "essential-blocks")}
                                        />
                                        <ResponsiveDimensionsControl
                                            resRequiredProps={resRequiredProps}
                                            controlName={WRAPPER_PADDING}
                                            baseLabel={__("Padding", "essential-blocks")}
                                        />
                                    </PanelBody>

                                    <PanelBody
                                        title={__(
                                            "Background",
                                            "essential-blocks"
                                        )}
                                        initialOpen={false}
                                    >
                                        <BackgroundControl
                                            controlName={WRAPPER_BG}
                                            resRequiredProps={resRequiredProps}
                                        />
                                    </PanelBody>

                                    <PanelBody
                                        title={__("Border & Shadow", "essential-blocks")}
                                        initialOpen={false}
                                    >
                                        <BorderShadowControl
                                            controlName={WRAPPER_BORDER_SHADOW}
                                            resRequiredProps={resRequiredProps}
                                        />
                                    </PanelBody>

                                    <AdvancedControls
                                        attributes={attributes}
                                        setAttributes={setAttributes}
                                    />
                                </>
                            )}
                        </div>
                    )}
                </TabPanel>
            </div>
        </InspectorControls>
    );
}
export default Inspector;
