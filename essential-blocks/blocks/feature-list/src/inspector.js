/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { InspectorControls, MediaUpload } from "@wordpress/block-editor";
import {
    PanelBody,
    ToggleControl,
    SelectControl,
    Button,
    ButtonGroup,
    BaseControl,
    TabPanel,
    TextControl,
    TextareaControl,
    __experimentalDivider as Divider,
} from "@wordpress/components";

/**
 * Internal dependencies
 */
import {
    TITLE_TAG,
    CONNECTOR_STYLE,
    CONNECTOR_TYPE,
    ICON_SHAPE,
    SHAPE_VIEW,
    ICON_POSITION,
    FEATURE_ITEM_POSITION,
    connectorWidth,
    listSpace,
    rowSpace,
    iconBackgroundType,
    iconBackgroundSize,
    iconSize,
    iconPadding,
    iconSpace,
    titleSpace,
    iconBorder,
    wrapperMargin,
    wrapperPadding,
    boxPadding,
    boxBackgroundType,
    boxBorder,
    wrapperBackgroundType,
    wrapperBorder,
    MEDIA_TYPES
} from "./constants";

import {
    typoPrefix_title,
    typoPrefix_content,
} from "./constants/typographyPrefixConstants";

import objAttributes from "./attributes";

const {
    ColorControl,
    ResponsiveRangeController,
    ResponsiveDimensionsControl,
    TypographyDropdown,
    BackgroundControl,
    BorderShadowControl,
    AdvancedControls,
    SortControl,
    ImageAvatar,
    EBIconPicker,
} = window.EBControls;

const Inspector = ({ attributes, setAttributes }) => {
    const {
        resOption,
        features,
        titleTag,
        iconShape,
        shapeView,
        iconPosition,
        iconGlobalColor,
        titleTextColor,
        descTextColor,
        showContentVertical,
        showConnector,
        connectorStyle,
        connectorType,
        connectorColor,
        titleTextHoverColor,
        useInlineDesign,
        featureListAlign,
    } = attributes;

    const resRequiredProps = {
        setAttributes,
        resOption,
        attributes,
        objAttributes,
    };

    const onFeatureAdd = () => {
        const count = attributes.features.length + 1;
        const features = [
            ...attributes.features,
            {
                iconType: "icon",
                featuresImage: "",
                featuresImageId: "",
                icon: "fas fa-check",
                title: `Feature Item ${count}`,
                content:
                    "Lorem ipsum dolor sit amet, consectetur adipisi cing elit, sed do eiusmod tempor incididunt ut abore et dolore magna",
                iconColor: "",
                iconBackgroundColor: "",
                link: "",
                linkOpenNewTab: "false",
            },
        ];

        setAttributes({ features });
    };

    const getFeaturesComponents = () => {
        const onFeatureChange = (key, value, position) => {
            const newFeature = { ...attributes.features[position] };
            const newFeatureList = [...attributes.features];
            newFeatureList[position] = newFeature;

            if (Array.isArray(key)) {
                key.map((item, index) => {
                    newFeatureList[position][item] = value[index];
                });
            } else {
                newFeatureList[position][key] = value;
            }

            setAttributes({ features: newFeatureList });
        };

        return attributes.features.map((each, i) => (
            <div key={i}>
                <TextControl
                    onChange={(value) => onFeatureChange("title", value, i)}
                    label={__(
                        "Text",
                        "essential-blocks"
                    )}
                    value={each.title}
                />

                {!useInlineDesign && (
                    <TextareaControl
                        label={__("Content", "essential-blocks")}
                        value={each.content}
                        onChange={(value) =>
                            onFeatureChange("content", value, i)
                        }
                    />
                )}
                <BaseControl
                    label={__("Icon Type", "essential-blocks")}
                >
                    <ButtonGroup className="eb-featurelist-icon-type">
                        {MEDIA_TYPES.map((item, index) => (
                            <Button
                                key={index}
                                isPrimary={
                                    each.iconType === item.value
                                }
                                isSecondary={
                                    each.iconType !== item.value
                                }
                                onClick={() =>
                                    onFeatureChange(
                                        "iconType",
                                        item.value,
                                        i
                                    )
                                }
                            >
                                {item.label}
                            </Button>
                        ))}
                    </ButtonGroup>
                </BaseControl>
                {each.iconType !== "none" && (
                    <>
                        {each.iconType === "icon" && (
                            <EBIconPicker
                                value={each.icon}
                                onChange={(value) => onFeatureChange("icon", value, i)}
                            />
                        )}
                        {each.iconType === "image" &&
                            !each.featureImage && (
                                <MediaUpload
                                    onSelect={({
                                        id,
                                        url,
                                        alt,
                                        title,
                                    }) => {
                                        onFeatureChange(
                                            [
                                                "featureImageId",
                                                "featureImage",
                                                "featureImageAlt",
                                                "featureImageTitle",
                                            ],
                                            [id, url, alt, title],
                                            i
                                        );
                                    }}
                                    type="image"
                                    value={each.featureImageId}
                                    render={({ open }) => {
                                        return (
                                            <Button
                                                className="eb-background-control-inspector-panel-img-btn components-button"
                                                label={__(
                                                    "Upload Image",
                                                    "essential-blocks"
                                                )}
                                                icon="format-image"
                                                onClick={open}
                                            />
                                        );
                                    }}
                                />
                            )}
                        {each.iconType === "image" &&
                            each.featureImage && (
                                <ImageAvatar
                                    imageUrl={each.featureImage}
                                    onDeleteImage={() => {
                                        onFeatureChange(
                                            [
                                                "featureImageId",
                                                "featureImage",
                                                "featureImageAlt",
                                                "featureImageTitle",
                                            ],
                                            [null, null, null, null],
                                            i
                                        );
                                    }}
                                />
                            )}
                        {each.iconType === "icon" &&
                            each.icon && (
                                <ColorControl
                                    label={__(
                                        "Icon Color",
                                        "essential-blocks"
                                    )}
                                    color={each.iconColor}
                                    onChange={(value) =>
                                        onFeatureChange(
                                            "iconColor",
                                            value,
                                            i
                                        )
                                    }
                                />
                            )}
                        <ColorControl
                            label={__(
                                "Background Color",
                                "essential-blocks"
                            )}
                            color={each.iconBackgroundColor}
                            onChange={(value) =>
                                onFeatureChange(
                                    "iconBackgroundColor",
                                    value,
                                    i
                                )
                            }
                        />
                    </>
                )}
                <TextControl
                    label={__("Link", "essential-blocks")}
                    value={each.link}
                    onChange={(value) =>
                        onFeatureChange("link", value, i)
                    }
                />
                <ToggleControl
                    label={__("Open in New Tab", "essential-blocks")}
                    checked={
                        each.linkOpenNewTab == "false" ? false : true
                    }
                    onChange={(value) =>
                        onFeatureChange(
                            "linkOpenNewTab",
                            value.toString(),
                            i
                        )
                    }
                />
            </div>
        ))
    }

    return (
        <InspectorControls key="controls">
            <div className="eb-panel-control">
                <TabPanel
                    className="eb-parent-tab-panel"
                    activeClass="active-tab"
                    tabs={[
                        {
                            name: "general",
                            title: __("General", "essential-blocks"),
                            className: "eb-tab general",
                        },
                        {
                            name: "styles",
                            title: __("Style", "essential-blocks"),
                            className: "eb-tab styles",
                        },
                        {
                            name: "advance",
                            title: __("Advanced", "essential-blocks"),
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
                                            "Content Settings",
                                            "essential-blocks"
                                        )}
                                        initialOpen={true}
                                    >
                                        <SortControl
                                            items={attributes.features}
                                            labelKey={'title'}
                                            onSortEnd={features => setAttributes({ features })}
                                            onDeleteItem={index => {
                                                setAttributes({ features: attributes.features.filter((each, i) => i !== index) })
                                            }}
                                            hasSettings={true}
                                            settingsComponents={getFeaturesComponents()}
                                            hasAddButton={true}
                                            onAddItem={onFeatureAdd}
                                            addButtonText={__(
                                                "Add Feature",
                                                "essential-blocks"
                                            )}
                                        ></SortControl>
                                        <Divider />
                                        <SelectControl
                                            label={__(
                                                "Title HTML Tag",
                                                "essential-blocks"
                                            )}
                                            value={titleTag}
                                            options={TITLE_TAG}
                                            onChange={(newTitleTag) =>
                                                setAttributes({
                                                    titleTag: newTitleTag
                                                })
                                            }
                                        />
                                        <SelectControl
                                            label={__(
                                                "Icon Shape",
                                                "essential-blocks"
                                            )}
                                            value={iconShape}
                                            options={ICON_SHAPE}
                                            onChange={(newIconShape) =>
                                                setAttributes({
                                                    iconShape: newIconShape,
                                                })
                                            }
                                        />
                                        {iconShape !== "none" && (
                                            <SelectControl
                                                label={__(
                                                    "Shape View",
                                                    "essential-blocks"
                                                )}
                                                value={shapeView}
                                                options={SHAPE_VIEW}
                                                onChange={(newShapeView) =>
                                                    setAttributes({
                                                        shapeView: newShapeView,
                                                    })
                                                }
                                            />
                                        )}
                                        <BaseControl
                                            label={__(
                                                "Feature Item Position",
                                                "essential-blocks"
                                            )}
                                        >
                                            <ButtonGroup className="eb-featurelist-item-align">
                                                {FEATURE_ITEM_POSITION.map(
                                                    (item, index) => (
                                                        <Button
                                                            key={index}
                                                            isPrimary={
                                                                featureListAlign ===
                                                                item.value
                                                            }
                                                            isSecondary={
                                                                featureListAlign !==
                                                                item.value
                                                            }
                                                            onClick={() =>
                                                                setAttributes({
                                                                    featureListAlign:
                                                                        item.value,
                                                                })
                                                            }
                                                        >
                                                            {item.label}
                                                        </Button>
                                                    )
                                                )}
                                            </ButtonGroup>
                                        </BaseControl>
                                        <BaseControl
                                            label={__(
                                                "Icon Position",
                                                "essential-blocks"
                                            )}
                                        >
                                            <ButtonGroup className="eb-featurelist-icon-align">
                                                {ICON_POSITION.map(
                                                    (item, index) => (
                                                        <Button
                                                            key={index}
                                                            isPrimary={
                                                                iconPosition ===
                                                                item.value
                                                            }
                                                            isSecondary={
                                                                iconPosition !==
                                                                item.value
                                                            }
                                                            onClick={() =>
                                                                setAttributes({
                                                                    iconPosition:
                                                                        item.value,
                                                                })
                                                            }
                                                        >
                                                            {item.label}
                                                        </Button>
                                                    )
                                                )}
                                            </ButtonGroup>
                                        </BaseControl>
                                        <ToggleControl
                                            label={__(
                                                "Content Vertically Center",
                                                "essentail-blocks"
                                            )}
                                            checked={showContentVertical}
                                            onChange={() => {
                                                setAttributes({
                                                    showContentVertical: !showContentVertical,
                                                });
                                            }}
                                        />
                                        {!useInlineDesign &&
                                            iconPosition != "top" && (
                                                <ToggleControl
                                                    label={__(
                                                        "Show Connector",
                                                        "essentail-blocks"
                                                    )}
                                                    checked={showConnector}
                                                    onChange={() => {
                                                        setAttributes({
                                                            showConnector: !showConnector,
                                                        });
                                                    }}
                                                />
                                            )}
                                        <ToggleControl
                                            label={__(
                                                "Use Inline Feature Lists",
                                                "essentail-blocks"
                                            )}
                                            checked={useInlineDesign}
                                            onChange={() => {
                                                setAttributes({
                                                    useInlineDesign: !useInlineDesign,
                                                });
                                            }}
                                        />
                                    </PanelBody>
                                </>
                            )}
                            {tab.name === "styles" && (
                                <>
                                    <PanelBody
                                        title={__("List", "essential-blocks")}
                                        initialOpen={true}
                                    >
                                        <ResponsiveRangeController
                                            baseLabel={__(
                                                "Space Between (PX)",
                                                "essential-blocks"
                                            )}
                                            controlName={listSpace}
                                            resRequiredProps={resRequiredProps}
                                            min={0}
                                            max={300}
                                            step={1}
                                            noUnits
                                        />
                                        {useInlineDesign && (
                                            <ResponsiveRangeController
                                                baseLabel={__(
                                                    "Row Space(PX)",
                                                    "essential-blocks"
                                                )}
                                                controlName={rowSpace}
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                                min={0}
                                                max={300}
                                                step={1}
                                                noUnits
                                            />
                                        )}
                                    </PanelBody>
                                    <PanelBody
                                        title={__("Icon", "essential-blocks")}
                                        initialOpen={false}
                                    >
                                        {iconShape !== "none" && (
                                            <>
                                                <BaseControl>
                                                    <h3 className="eb-control-title">
                                                        {__(
                                                            "Background",
                                                            "essential-blocks"
                                                        )}
                                                    </h3>
                                                </BaseControl>
                                                <BackgroundControl
                                                    controlName={
                                                        iconBackgroundType
                                                    }
                                                    resRequiredProps={
                                                        resRequiredProps
                                                    }
                                                    noOverlay={true}
                                                    noMainBgi={true}
                                                />
                                                <Divider />
                                            </>
                                        )}
                                        <ColorControl
                                            label={__(
                                                "Color",
                                                "essential-blocks"
                                            )}
                                            color={iconGlobalColor}
                                            onChange={(iconGlobalColor) =>
                                                setAttributes({
                                                    iconGlobalColor,
                                                })
                                            }
                                        />
                                        {iconShape !== "none" && (
                                            <ResponsiveRangeController
                                                baseLabel={__(
                                                    "Size",
                                                    "essential-blocks"
                                                )}
                                                controlName={iconBackgroundSize}
                                                resRequiredProps={
                                                    resRequiredProps
                                                }
                                                min={0}
                                                max={300}
                                                step={1}
                                                noUnits
                                            />
                                        )}
                                        <ResponsiveRangeController
                                            baseLabel={__(
                                                "Icon Size",
                                                "essential-blocks"
                                            )}
                                            controlName={iconSize}
                                            resRequiredProps={resRequiredProps}
                                            min={6}
                                            max={150}
                                            step={1}
                                            noUnits
                                        />
                                        <ResponsiveDimensionsControl
                                            resRequiredProps={resRequiredProps}
                                            controlName={iconPadding}
                                            baseLabel={__(
                                                "Padding",
                                                "essential-blocks"
                                            )}
                                        />
                                        <ResponsiveRangeController
                                            baseLabel={__(
                                                "Spacing",
                                                "essential-blocks"
                                            )}
                                            controlName={iconSpace}
                                            resRequiredProps={resRequiredProps}
                                            min={0}
                                            max={100}
                                            step={1}
                                            noUnits
                                        />
                                        {iconShape !== "none" &&
                                            shapeView === "framed" && (
                                                <BorderShadowControl
                                                    controlName={iconBorder}
                                                    resRequiredProps={
                                                        resRequiredProps
                                                    }
                                                    noShadow={true}
                                                />
                                            )}
                                    </PanelBody>

                                    <PanelBody
                                        title={__(
                                            "Content",
                                            "essential-blocks"
                                        )}
                                        initialOpen={false}
                                    >
                                        <BaseControl>
                                            <h3 className="eb-control-title">
                                                {__(
                                                    "Title",
                                                    "essential-blocks"
                                                )}
                                            </h3>
                                        </BaseControl>
                                        <ResponsiveRangeController
                                            baseLabel={__(
                                                "Title Bottom Space",
                                                "essential-blocks"
                                            )}
                                            controlName={titleSpace}
                                            resRequiredProps={resRequiredProps}
                                            min={0}
                                            max={100}
                                            step={1}
                                            noUnits
                                        />
                                        <ColorControl
                                            label={__(
                                                "Color",
                                                "essential-blocks"
                                            )}
                                            color={titleTextColor}
                                            onChange={(titleTextColor) =>
                                                setAttributes({
                                                    titleTextColor,
                                                })
                                            }
                                        />
                                        <ColorControl
                                            label={__(
                                                "Hover Color",
                                                "essential-blocks"
                                            )}
                                            color={titleTextHoverColor}
                                            onChange={(titleTextHoverColor) =>
                                                setAttributes({
                                                    titleTextHoverColor,
                                                })
                                            }
                                        />
                                        <TypographyDropdown
                                            baseLabel={__(
                                                "Typography",
                                                "essential-blocks"
                                            )}
                                            typographyPrefixConstant={
                                                typoPrefix_title
                                            }
                                            resRequiredProps={resRequiredProps}
                                            defaultFontSize={32}
                                        />

                                        {!useInlineDesign && (
                                            <>
                                                <Divider />
                                                <BaseControl>
                                                    <h3 className="eb-control-title">
                                                        {__(
                                                            "Description",
                                                            "essential-blocks"
                                                        )}
                                                    </h3>
                                                </BaseControl>
                                                <ColorControl
                                                    label={__(
                                                        "Color",
                                                        "essential-blocks"
                                                    )}
                                                    color={descTextColor}
                                                    onChange={(descTextColor) =>
                                                        setAttributes({
                                                            descTextColor,
                                                        })
                                                    }
                                                />
                                                <TypographyDropdown
                                                    baseLabel={__(
                                                        "Typography",
                                                        "essential-blocks"
                                                    )}
                                                    typographyPrefixConstant={
                                                        typoPrefix_content
                                                    }
                                                    resRequiredProps={
                                                        resRequiredProps
                                                    }
                                                />
                                                <Divider />
                                                <BaseControl>
                                                    <h3 className="eb-control-title">
                                                        {__(
                                                            "Content Box",
                                                            "essential-blocks"
                                                        )}
                                                    </h3>
                                                </BaseControl>
                                                <ResponsiveDimensionsControl
                                                    resRequiredProps={
                                                        resRequiredProps
                                                    }
                                                    controlName={boxPadding}
                                                    baseLabel={__(
                                                        "Box Padding",
                                                        "essential-blocks"
                                                    )}
                                                />
                                                <PanelBody title={__("Background", "essential-blocks")}>
                                                    <BackgroundControl
                                                        controlName={
                                                            boxBackgroundType
                                                        }
                                                        resRequiredProps={
                                                            resRequiredProps
                                                        }
                                                        noOverlay={true}
                                                        noMainBgi={true}
                                                    />
                                                </PanelBody>
                                                <PanelBody title={__("Border", "essential-blocks")}>
                                                    <BorderShadowControl
                                                        controlName={boxBorder}
                                                        resRequiredProps={
                                                            resRequiredProps
                                                        }
                                                    />
                                                </PanelBody>
                                            </>
                                        )}
                                    </PanelBody>

                                    {!useInlineDesign &&
                                        showConnector &&
                                        iconPosition != "top" && (
                                            <>
                                                <PanelBody
                                                    title={__(
                                                        "Connector Style",
                                                        "essential-blocks"
                                                    )}
                                                    initialOpen={false}
                                                >
                                                    <SelectControl
                                                        label={__(
                                                            "Connector Style",
                                                            "essential-blocks"
                                                        )}
                                                        value={connectorStyle}
                                                        options={
                                                            CONNECTOR_STYLE
                                                        }
                                                        onChange={(val) =>
                                                            setAttributes({
                                                                connectorStyle: val,
                                                            })
                                                        }
                                                    />
                                                    <SelectControl
                                                        label={__(
                                                            "Connector Type",
                                                            "essential-blocks"
                                                        )}
                                                        value={connectorType}
                                                        options={CONNECTOR_TYPE}
                                                        onChange={(val) =>
                                                            setAttributes({
                                                                connectorType: val,
                                                            })
                                                        }
                                                    />
                                                    <ColorControl
                                                        label={__(
                                                            "Color",
                                                            "essential-blocks"
                                                        )}
                                                        color={connectorColor}
                                                        onChange={(
                                                            connectorColor
                                                        ) =>
                                                            setAttributes({
                                                                connectorColor,
                                                            })
                                                        }
                                                    />
                                                    <ResponsiveRangeController
                                                        baseLabel={__(
                                                            "Connector Width (PX)",
                                                            "essential-blocks"
                                                        )}
                                                        controlName={
                                                            connectorWidth
                                                        }
                                                        resRequiredProps={
                                                            resRequiredProps
                                                        }
                                                        min={0}
                                                        max={20}
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
                                    <PanelBody>
                                        <ResponsiveDimensionsControl
                                            resRequiredProps={resRequiredProps}
                                            controlName={wrapperMargin}
                                            baseLabel={__(
                                                "Margin",
                                                "essential-blocks"
                                            )}
                                        />
                                        <ResponsiveDimensionsControl
                                            resRequiredProps={resRequiredProps}
                                            controlName={wrapperPadding}
                                            baseLabel={__(
                                                "Padding",
                                                "essential-blocks"
                                            )}
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
                                            controlName={wrapperBackgroundType}
                                            resRequiredProps={resRequiredProps}
                                        />
                                    </PanelBody>
                                    <PanelBody
                                        title={__("Border", "essential-blocks")}
                                        initialOpen={false}
                                    >
                                        <BorderShadowControl
                                            controlName={wrapperBorder}
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
};

export default Inspector;
