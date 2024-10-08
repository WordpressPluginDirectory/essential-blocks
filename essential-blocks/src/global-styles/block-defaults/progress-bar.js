/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import {
    PanelBody,
    ToggleControl,
    SelectControl,
    TextControl,
    RangeControl,
    BaseControl,
    __experimentalDivider as Divider,
} from "@wordpress/components";

import {
    ColorControl,
    ResponsiveRangeController,
    ResponsiveDimensionsControl,
    TypographyDropdown,
    GradientColorControl,
    useBlockDefaults,
    withBlockContext
} from "@essential-blocks/controls";

/**
 * Internal depencencies
 */
import {
    PX_PERCENTAGE,
    PROGRESSBAR_WIDTH,
    PROGRESSBAR_HEIGHT,
    PROGRESSBAR_SIZE,
    STROKE_WIDTH,
    BOX_WIDTH,
    BOX_HEIGHT,
    WRAPPER_MARGIN,
    TITLE_SPACE,
} from "@essential-blocks/blocks/progress-bar/src/constants/index";

import {
    typoPrefix_title,
    typoPrefix_counter,
    typoPrefix_prefix,
} from "@essential-blocks/blocks/progress-bar/src/constants/typographyConstants";

import objAttributes from "@essential-blocks/blocks/progress-bar/src/attributes";

function ProgressBar(props) {
    const { blockDefaults, setBlockDefaults, name, deviceType, handleBlockDefault } = props;

    const {
        layout,
        title,
        titleTag,
        progress,
        displayProgress,
        animationDuration,
        titleColor,
        counterColor,
        progressColor,
        isProgressGradient,
        progressGradient,
        showInline,
        backgroundColor,
        showStripe,
        stripeAnimation,
        strokeColor,
        prefix,
        suffix,
        prefixColor,
    } = blockDefaults;
    const isDefaultSet = useBlockDefaults(name, blockDefaults, setBlockDefaults, objAttributes)

    return (
        <>
            {isDefaultSet && (
                <div className="eb-panel-control">
                    <PanelBody title={__("Layout", "essential-blocks")}>
                        {(layout === "line" || layout === "line_rainbow") && (
                            <ToggleControl
                                label={__("Show Inline", "essential-blocks")}
                                checked={showInline}
                                onChange={() => {
                                    handleBlockDefault({
                                        showInline: !showInline,
                                    });
                                }}
                            />
                        )}
                        <Divider />

                        <SelectControl
                            label={__("Title HTML Tag", "essential-blocks")}
                            value={titleTag}
                            options={[
                                { label: "H1", value: "h1" },
                                { label: "H2", value: "h2" },
                                { label: "H3", value: "h3" },
                                { label: "H4", value: "h4" },
                                { label: "H5", value: "h5" },
                                { label: "H6", value: "h6" },
                                { label: "div", value: "div" },
                                { label: "span", value: "span" },
                                { label: "p", value: "p" },
                            ]}
                            onChange={(newTitleTag) => handleBlockDefault({ titleTag: newTitleTag })}
                        />
                        <Divider />
                        <RangeControl
                            label={__("Counter Value", "essential-blocks")}
                            value={progress}
                            onChange={(progress) => handleBlockDefault({ progress })}
                            step={1}
                            min={0}
                            max={100}
                        />
                        <ToggleControl
                            label={__("Show Counter?", "progress-bar")}
                            checked={displayProgress}
                            onChange={() => {
                                handleBlockDefault({
                                    displayProgress: !displayProgress,
                                });
                            }}
                        />
                        {(layout === "line" || layout === "line_rainbow") && (
                            <>
                                <Divider />
                                <ToggleControl
                                    label={__("Show Stripe", "essential-blocks")}
                                    checked={showStripe}
                                    onChange={() => {
                                        handleBlockDefault({
                                            showStripe: !showStripe,
                                        });
                                    }}
                                />
                                {showStripe && (
                                    <SelectControl
                                        label={__("Stripe Animation", "essential-blocks")}
                                        value={stripeAnimation}
                                        options={[
                                            {
                                                label: "Left To Right",
                                                value: "normal",
                                            },
                                            {
                                                label: "Right To Left",
                                                value: "reverse",
                                            },
                                            {
                                                label: "Disabled",
                                                value: "none",
                                            },
                                        ]}
                                        onChange={(stripeAnimation) =>
                                            handleBlockDefault({
                                                stripeAnimation,
                                            })
                                        }
                                    />
                                )}
                            </>
                        )}

                        {(layout === "half_circle" || layout === "half_circle_fill") && (
                            <>
                                <Divider />
                                <TextControl
                                    label={__("Prefix", "essential-blocks")}
                                    value={prefix}
                                    onChange={(newPrefix) =>
                                        handleBlockDefault({
                                            prefix: newPrefix,
                                        })
                                    }
                                />
                                <TextControl
                                    label={__("Suffix", "essential-blocks")}
                                    value={suffix}
                                    onChange={(newSuffix) =>
                                        handleBlockDefault({
                                            suffix: newSuffix,
                                        })
                                    }
                                />
                            </>
                        )}
                    </PanelBody>
                    <PanelBody title={__("Settings", "essential-blocks")} initialOpen={false}>
                        {(layout === "line" || layout === "line_rainbow") && (
                            <>
                                <ResponsiveRangeController
                                    baseLabel={__("Width", "essential-blocks")}
                                    controlName={PROGRESSBAR_WIDTH}
                                    units={PX_PERCENTAGE}
                                    min={100}
                                    max={1000}
                                    step={1}
                                />
                                <ResponsiveRangeController
                                    baseLabel={__("Height", "essential-blocks")}
                                    controlName={PROGRESSBAR_HEIGHT}
                                    min={0}
                                    max={100}
                                    step={1}
                                    noUnits
                                />
                            </>
                        )}
                        {(layout === "circle" ||
                            layout === "circle_fill" ||
                            layout === "half_circle" ||
                            layout === "half_circle_fill") && (
                                <>
                                    <ResponsiveRangeController
                                        baseLabel={__("Size", "essential-blocks")}
                                        controlName={PROGRESSBAR_SIZE}
                                        min={50}
                                        max={500}
                                        step={1}
                                        noUnits
                                    />
                                    <ResponsiveRangeController
                                        baseLabel={__("Stroke Width", "essential-blocks")}
                                        controlName={STROKE_WIDTH}
                                        min={0}
                                        max={100}
                                        step={1}
                                        noUnits
                                    />
                                </>
                            )}
                        {layout === "box" && (
                            <>
                                <ResponsiveRangeController
                                    baseLabel={__("Width", "essential-blocks")}
                                    controlName={BOX_WIDTH}
                                    min={100}
                                    max={500}
                                    step={1}
                                    noUnits
                                />
                                <ResponsiveRangeController
                                    baseLabel={__("Height", "essential-blocks")}
                                    controlName={BOX_HEIGHT}
                                    min={100}
                                    max={500}
                                    step={1}
                                    noUnits
                                />

                                <ResponsiveRangeController
                                    baseLabel={__("Stroke Width", "essential-blocks")}
                                    controlName={STROKE_WIDTH}
                                    min={0}
                                    max={100}
                                    step={1}
                                    noUnits
                                />
                            </>
                        )}
                        <RangeControl
                            label={__("Animation Duration", "essential-blocks")}
                            value={animationDuration}
                            onChange={(newAnimationDuration) =>
                                handleBlockDefault({
                                    animationDuration: newAnimationDuration,
                                })
                            }
                            step={100}
                            min={1000}
                            max={10000}
                        />
                    </PanelBody>

                    {/* Styles */}

                    <PanelBody title={__("General Styles", "essential-blocks")}>
                        {(layout === "line" || layout === "line_rainbow") && (
                            <>
                                <ColorControl
                                    label={__("Background Color", "essential-blocks")}
                                    color={strokeColor}
                                    onChange={(strokeColor) => handleBlockDefault({ strokeColor })}
                                />
                                {layout !== "line_rainbow" && (
                                    <>
                                        <BaseControl>
                                            <h3 className="eb-control-title">{__("Fill Color", "essential-blocks")}</h3>
                                        </BaseControl>
                                        <ToggleControl
                                            label={__("Show Fill Gradient", "essential-blocks")}
                                            checked={isProgressGradient}
                                            onChange={() => {
                                                handleBlockDefault({
                                                    isProgressGradient: !isProgressGradient,
                                                });
                                            }}
                                        />
                                        {isProgressGradient || (
                                            <ColorControl
                                                label={__("Color", "essential-blocks")}
                                                color={progressColor}
                                                onChange={(progressColor) =>
                                                    handleBlockDefault({
                                                        progressColor,
                                                    })
                                                }
                                            />
                                        )}
                                        {isProgressGradient && (
                                            <GradientColorControl
                                                label={__("Gradient Color", "essential-blocks")}
                                                gradientColor={progressGradient}
                                                onChange={(progressGradient) =>
                                                    handleBlockDefault({
                                                        progressGradient,
                                                    })
                                                }
                                            />
                                        )}
                                    </>
                                )}
                            </>
                        )}
                        {(layout === "circle" ||
                            layout === "circle_fill" ||
                            layout === "half_circle" ||
                            layout === "half_circle_fill") && (
                                <>
                                    <ColorControl
                                        label={__("Background Color", "essential-blocks")}
                                        color={backgroundColor}
                                        onChange={(backgroundColor) => handleBlockDefault({ backgroundColor })}
                                    />
                                    <ColorControl
                                        label={__("Fill Color", "essential-blocks")}
                                        color={progressColor}
                                        onChange={(progressColor) => handleBlockDefault({ progressColor })}
                                    />

                                    <ColorControl
                                        label={__("Stroke Color", "essential-blocks")}
                                        color={strokeColor}
                                        onChange={(strokeColor) => handleBlockDefault({ strokeColor })}
                                    />
                                </>
                            )}
                        {layout === "box" && (
                            <>
                                <ColorControl
                                    label={__("Background Color", "essential-blocks")}
                                    color={backgroundColor}
                                    onChange={(backgroundColor) => handleBlockDefault({ backgroundColor })}
                                />
                                <BaseControl>
                                    <h3 className="eb-control-title">{__("Fill Color", "essential-blocks")}</h3>
                                </BaseControl>
                                <ToggleControl
                                    label={__("Show Fill Gradient", "essential-blocks")}
                                    checked={isProgressGradient}
                                    onChange={() => {
                                        handleBlockDefault({
                                            isProgressGradient: !isProgressGradient,
                                        });
                                    }}
                                />
                                {isProgressGradient || (
                                    <ColorControl
                                        label={__("Color", "essential-blocks")}
                                        color={progressColor}
                                        onChange={(progressColor) =>
                                            handleBlockDefault({
                                                progressColor,
                                            })
                                        }
                                    />
                                )}
                                {isProgressGradient && (
                                    <GradientColorControl
                                        label={__("Gradient Color", "essential-blocks")}
                                        gradientColor={progressGradient}
                                        onChange={(progressGradient) =>
                                            handleBlockDefault({
                                                progressGradient,
                                            })
                                        }
                                    />
                                )}
                                <ColorControl
                                    label={__("Stroke Color", "essential-blocks")}
                                    color={strokeColor}
                                    onChange={(strokeColor) => handleBlockDefault({ strokeColor })}
                                />
                            </>
                        )}
                    </PanelBody>

                    <PanelBody title={__("Title Styles", "essential-blocks")} initialOpen={false}>
                        <TypographyDropdown
                            baseLabel={__("Typography", "essential-blocks")}
                            typographyPrefixConstant={typoPrefix_title}
                        />
                        <ColorControl
                            label={__("Color", "essential-blocks")}
                            color={titleColor}
                            onChange={(titleColor) => handleBlockDefault({ titleColor })}
                        />
                        <ResponsiveDimensionsControl
                            controlName={TITLE_SPACE}
                            baseLabel={__("Space", "essential-blocks")}
                        />
                    </PanelBody>
                    <PanelBody title={__("Counter Styles", "essential-blocks")} initialOpen={false}>
                        <TypographyDropdown
                            baseLabel={__("Typography", "essential-blocks")}
                            typographyPrefixConstant={typoPrefix_counter}
                        />
                        <ColorControl
                            label={__("Color", "essential-blocks")}
                            color={counterColor}
                            onChange={(counterColor) => handleBlockDefault({ counterColor })}
                        />
                    </PanelBody>

                    {(layout === "half_circle" || layout === "half_circle_fill") && (
                        <>
                            <PanelBody title={__("Prefix & Suffix", "progress-bar")} initialOpen={false}>
                                <TypographyDropdown
                                    baseLabel={__("Typography", "essential-blocks")}
                                    typographyPrefixConstant={typoPrefix_prefix}
                                />
                                <ColorControl
                                    label={__("Color", "essential-blocks")}
                                    color={prefixColor}
                                    onChange={(prefixColor) => handleBlockDefault({ prefixColor })}
                                />
                            </PanelBody>
                        </>
                    )}

                    <PanelBody title={__("Wrapper Margin", "essential-blocks")} initialOpen={false}>
                        <ResponsiveDimensionsControl 
                            controlName={WRAPPER_MARGIN} 
                        />
                    </PanelBody>
                </div>
            )}
        </>
    );
}

export default withBlockContext(objAttributes)(ProgressBar);
