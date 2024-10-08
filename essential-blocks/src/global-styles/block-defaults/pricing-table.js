/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import {
    PanelBody,
    ToggleControl,
    SelectControl,
    TextControl,
    Button,
    ButtonGroup,
    BaseControl,
    TabPanel,
    __experimentalDivider as Divider,
} from "@wordpress/components";
/**
 * Internal dependencies
 */
import {
    TWOUNITS,
    ICON_POSITION,
    ALIGNMENT,
    buttonIconSpacing,
    buttonIconSize,
    buttonPadding,
    buttonMargin,
    wrapperPadding,
    wrapperMargin,
    titlePadding,
    titleMargin,
    priceCurrencyMargin,
    buttonBorderShadow,
    buttonBackgroundControl,
    priceTableBackground,
    wrapperBorderShadow,
    iconBorderShadow,
    ribbonBorderShadow,
    headerIconSize,
    headerIconWidth,
    headerIconHeight,
    salepriceCurrencyMargin,
    featuresIconSize,
    RIBBON_ALIGNMENT_HORIZONTAL,
    RIBBON_ALIGNMENT_VERTICAL,
} from "@essential-blocks/blocks/pricing-table/src/constants";

import {
    typoPrefix_button,
    typoPrefix_title,
    typoPrefix_subtitle,
    typoPrefix_saleprice_currency,
    typoPrefix_price_title,
    typoPrefix_price_currency,
    typoPrefix_saleprice,
    typoPrefix_pricing_period,
    typoPrefix_features_text,
    typoPrefix_ribbon,
} from "@essential-blocks/blocks/pricing-table/src/constants/typographyPrefixConstants";
import objAttributes from "@essential-blocks/blocks/pricing-table/src/attributes";

import {
    ColorControl,
    ResponsiveRangeController,
    ResponsiveDimensionsControl,
    TypographyDropdown,
    BackgroundControl,
    BorderShadowControl,
    EBIconPicker,
    useBlockDefaults,
    withBlockContext
} from "@essential-blocks/controls";

function PricingTable(props) {
    const { blockDefaults, setBlockDefaults, name, deviceType, handleBlockDefault } = props;
    const {
        pricingStyle,
        title,
        showSubtitle,
        subtitle,
        showHeaderIcon,
        headerIcon,
        showTitleLine,
        mainPrice,
        showOnSale,
        salePrice,
        priceCurrency,
        currencyPlacement,
        pricePeriod,
        periodSeparator,
        hideFeatures,
        showButton,
        buttonIcon,
        buttonIconPosition,
        buttonText,
        buttonURL,
        buttonTextColor,
        hoverTextColor,
        titleTextColor,
        titleLineColor,
        titleBackgroundColor,
        subtitleTextColor,
        showIconBackground,
        iconBackgroundColor,
        iconBackgroundHoverColor,
        iconColor,
        iconHoverColor,
        priceTextColor,
        priceCurrencyTextColor,
        salePriceTextColor,
        salepriceCurrencyTextColor,
        pricingPeriodTextColor,
        featuresTextColor,
        showRibbon,
        ribbonStyle,
        ribbonText,
        ribbonColor,
        ribbonBackgroundColor,
        featuresAlignment,
        buttonAlignment,
        headerAlignment,
        priceAlignment,
        iconAlignment,
        ribbonAlignHorizontal,
        ribbonAlignVertical,
        newWindow,
        showFeatureLine,
        pricingTopBgColor,
    } = blockDefaults;
    const isDefaultSet = useBlockDefaults(name, blockDefaults, setBlockDefaults, objAttributes)

    return (
        <>
            {isDefaultSet && (
                <div className="eb-panel-control">
                    <PanelBody title={__("Settings", "essential-blocks")}>
                        <TextControl
                            label={__("Title", "essential-blocks")}
                            value={title}
                            onChange={(newTitle) => handleBlockDefault({ title: newTitle })}
                        />
                        <ToggleControl
                            label={__("Show Subtitle?")}
                            checked={showSubtitle}
                            onChange={() => {
                                handleBlockDefault({
                                    showSubtitle: !showSubtitle,
                                    defaultSubtitle: !showSubtitle,
                                });
                            }}
                        />

                        {showSubtitle && (
                            <TextControl
                                label={__("Sub Title", "essential-blocks")}
                                value={subtitle}
                                onChange={(newSubtitle) =>
                                    handleBlockDefault({
                                        subtitle: newSubtitle,
                                    })
                                }
                            />
                        )}
                        <ToggleControl
                            label={__("Show Icon?")}
                            checked={showHeaderIcon}
                            onChange={() => {
                                handleBlockDefault({
                                    showHeaderIcon: !showHeaderIcon,
                                    defaultHeaderIcon: !showHeaderIcon,
                                });
                            }}
                        />
                        {showHeaderIcon && (
                            <EBIconPicker
                                value={headerIcon}
                                onChange={(headerIcon) => handleBlockDefault({ headerIcon })}
                                title={__("Select Icon", "essential-blocks")}
                            />
                        )}
                        {pricingStyle !== "style-4" && (
                            <ToggleControl
                                label={__("Show title line?")}
                                checked={showTitleLine}
                                onChange={() => {
                                    handleBlockDefault({
                                        showTitleLine: !showTitleLine,
                                        defaultTitleLine: !showTitleLine,
                                    });
                                }}
                            />
                        )}
                    </PanelBody>
                    <PanelBody title={__("Price", "essential-blocks")} initialOpen={false}>
                        <TextControl
                            label={__("Price", "essential-blocks")}
                            value={mainPrice}
                            onChange={(newPrice) => handleBlockDefault({ mainPrice: newPrice })}
                        />
                        <ToggleControl
                            label={__("On Sale?")}
                            checked={showOnSale}
                            onChange={() => {
                                handleBlockDefault({ showOnSale: !showOnSale });
                            }}
                        />
                        {showOnSale && (
                            <TextControl
                                label={__("Sale Price", "essential-blocks")}
                                value={salePrice}
                                onChange={(newsalePrice) =>
                                    handleBlockDefault({
                                        salePrice: newsalePrice,
                                    })
                                }
                            />
                        )}
                        <TextControl
                            label={__("Price Currency", "essential-blocks")}
                            value={priceCurrency}
                            onChange={(newPriceCurrency) =>
                                handleBlockDefault({
                                    priceCurrency: newPriceCurrency,
                                })
                            }
                        />
                        <SelectControl
                            label={__("Currency Placement", "essential-blocks")}
                            value={currencyPlacement}
                            options={[
                                { label: "Left", value: "left" },
                                { label: "Right", value: "right" },
                            ]}
                            onChange={(currencyPlacement) => {
                                handleBlockDefault({ currencyPlacement });
                            }}
                        />
                        <TextControl
                            label={__("Price Period (per)")}
                            value={pricePeriod}
                            onChange={(pricePeriod) => handleBlockDefault({ pricePeriod })}
                        />
                        <TextControl
                            label={__("Period Separator", "essential-blocks")}
                            value={periodSeparator}
                            onChange={(periodSeparator) => handleBlockDefault({ periodSeparator })}
                        />
                        <Divider />
                    </PanelBody>
                    <PanelBody title={__("Features", "essential-blocks")} initialOpen={false}>
                        <ToggleControl
                            label={__("Hide Features?")}
                            checked={hideFeatures}
                            onChange={() => {
                                handleBlockDefault({
                                    hideFeatures: !hideFeatures,
                                });
                            }}
                        />
                        {hideFeatures !== true && (
                            <>
                                <ToggleControl
                                    label={__("Show line?")}
                                    checked={showFeatureLine}
                                    onChange={() => {
                                        handleBlockDefault({
                                            showFeatureLine: !showFeatureLine,
                                        });
                                    }}
                                />
                            </>
                        )}
                    </PanelBody>

                    <PanelBody title={__("Button", "essential-blocks")} initialOpen={false}>
                        <ToggleControl
                            label={__("Display Button?")}
                            checked={showButton}
                            onChange={() => {
                                handleBlockDefault({ showButton: !showButton });
                            }}
                        />
                        <EBIconPicker
                            value={buttonIcon}
                            onChange={(buttonIcon) => handleBlockDefault({ buttonIcon })}
                            title={__("Button Icon", "essential-blocks")}
                        />
                        <SelectControl
                            label={__("Icon Position", "essential-blocks")}
                            value={buttonIconPosition}
                            options={[
                                { label: "Left", value: "left" },
                                { label: "Right", value: "right" },
                            ]}
                            onChange={(buttonIconPosition) => {
                                handleBlockDefault({ buttonIconPosition });
                            }}
                        />
                        <ResponsiveRangeController
                            baseLabel={__("Icon Spacing", "essential-blocks")}
                            controlName={buttonIconSpacing}
                            min={1}
                            max={60}
                            step={1}
                            noUnits
                        />
                        <TextControl
                            label={__("Button Text", "essential-blocks")}
                            value={buttonText}
                            onChange={(text) => handleBlockDefault({ buttonText: text })}
                        />
                        <TextControl
                            label={__("Button Link", "essential-blocks")}
                            value={buttonURL}
                            onChange={(link) => handleBlockDefault({ buttonURL: link })}
                        />

                        {buttonURL && (
                            <ToggleControl
                                label={__("Open in New Tab", "essential-blocks")}
                                checked={newWindow}
                                onChange={() =>
                                    handleBlockDefault({
                                        newWindow: !newWindow,
                                    })
                                }
                            />
                        )}
                    </PanelBody>

                    <PanelBody title={__("Ribbon", "essential-blocks")} initialOpen={false}>
                        <ToggleControl
                            label={__("Featured", "essential-blocks")}
                            checked={showRibbon}
                            onChange={() => {
                                handleBlockDefault({
                                    showRibbon: !showRibbon,
                                });
                            }}
                        />
                        {showRibbon && (
                            <>
                                <SelectControl
                                    label={__("Ribbon Style", "essential-blocks")}
                                    value={ribbonStyle}
                                    options={[
                                        { label: "Style 1", value: "ribbon-1" },
                                        { label: "Style 2", value: "ribbon-2" },
                                        { label: "Style 3", value: "ribbon-3" },
                                        { label: "Style 4", value: "ribbon-4" },
                                    ]}
                                    onChange={(ribbonStyle) => {
                                        handleBlockDefault({ ribbonStyle });
                                    }}
                                />
                                {ribbonStyle == "ribbon-1" && (
                                    <BaseControl label={__("Align", "essential-blocks")}>
                                        <ButtonGroup>
                                            {RIBBON_ALIGNMENT_VERTICAL.map((item, index) => (
                                                <Button
                                                    // isLarge
                                                    key={index}
                                                    isPrimary={ribbonAlignVertical === item.value}
                                                    isSecondary={ribbonAlignVertical !== item.value}
                                                    onClick={() =>
                                                        handleBlockDefault({
                                                            ribbonAlignVertical: item.value,
                                                        })
                                                    }
                                                >
                                                    {item.label}
                                                </Button>
                                            ))}
                                        </ButtonGroup>
                                    </BaseControl>
                                )}

                                {ribbonStyle !== "ribbon-1" && (
                                    <>
                                        <BaseControl label={__("Align", "essential-blocks")}>
                                            <ButtonGroup>
                                                {RIBBON_ALIGNMENT_HORIZONTAL.map((item, index) => (
                                                    <Button
                                                        // isLarge
                                                        key={index}
                                                        isPrimary={ribbonAlignHorizontal === item.value}
                                                        isSecondary={ribbonAlignHorizontal !== item.value}
                                                        onClick={() =>
                                                            handleBlockDefault({
                                                                ribbonAlignHorizontal: item.value,
                                                            })
                                                        }
                                                    >
                                                        {item.label}
                                                    </Button>
                                                ))}
                                            </ButtonGroup>
                                        </BaseControl>
                                        <TextControl
                                            label={__("Featured Tag Text", "essential-blocks")}
                                            value={ribbonText}
                                            onChange={(ribbonText) =>
                                                handleBlockDefault({
                                                    ribbonText,
                                                })
                                            }
                                        />
                                    </>
                                )}
                            </>
                        )}
                    </PanelBody>
                    <PanelBody title={__("Price Table Box Style", "essential-blocks")} initialOpen={false}>
                        <BaseControl>
                            <h3 className="eb-control-title">{__("Background", "essential-blocks")}</h3>
                        </BaseControl>
                        <BackgroundControl controlName={priceTableBackground} />
                        <BaseControl>
                            <h3 className="eb-control-title">Border</h3>
                        </BaseControl>

                        <BorderShadowControl controlName={wrapperBorderShadow} />

                        {pricingStyle == "style-4" && (
                            <ColorControl
                                label={__("Pricing Top Color", "essential-blocks")}
                                color={pricingTopBgColor}
                                onChange={(pricingTopBgColor) => handleBlockDefault({ pricingTopBgColor })}
                            />
                        )}
                    </PanelBody>
                    <PanelBody title={__("Header Style", "essential-blocks")} initialOpen={false}>
                        <BaseControl>
                            <h3 className="eb-control-title">{__("Alignment", "essential-blocks")}</h3>
                            <ButtonGroup>
                                {ALIGNMENT.map((item, index) => (
                                    <Button
                                        key={index}
                                        isPrimary={headerAlignment === item.value}
                                        isSecondary={headerAlignment !== item.value}
                                        onClick={() =>
                                            handleBlockDefault({
                                                headerAlignment: item.value,
                                            })
                                        }
                                    >
                                        {item.label}
                                    </Button>
                                ))}
                            </ButtonGroup>
                        </BaseControl>
                        <Divider />
                        <BaseControl>
                            <h3 className="eb-control-title">{__("Title Style", "essential-blocks")}</h3>
                        </BaseControl>
                        <ColorControl
                            label={__("Color", "essential-blocks")}
                            color={titleTextColor}
                            onChange={(titleTextColor) => handleBlockDefault({ titleTextColor })}
                        />
                        {showTitleLine && pricingStyle !== "style-4" && (
                            <ColorControl
                                label={__("Line Color", "essential-blocks")}
                                color={titleLineColor}
                                onChange={(titleLineColor) => handleBlockDefault({ titleLineColor })}
                            />
                        )}

                        <ColorControl
                            label={__("Background Color", "essential-blocks")}
                            color={titleBackgroundColor}
                            onChange={(titleBackgroundColor) => handleBlockDefault({ titleBackgroundColor })}
                        />
                        <TypographyDropdown
                            baseLabel={__("Typography", "essential-blocks")}
                            typographyPrefixConstant={typoPrefix_title}
                        />
                        <Divider />
                        {showSubtitle && (
                            <>
                                <BaseControl>
                                    <h3 className="eb-control-title">{__("Subtitle Style", "essential-blocks")}</h3>
                                </BaseControl>
                                <ColorControl
                                    label={__("Color", "essential-blocks")}
                                    color={subtitleTextColor}
                                    onChange={(subtitleTextColor) =>
                                        handleBlockDefault({
                                            subtitleTextColor,
                                        })
                                    }
                                />
                                <TypographyDropdown
                                    baseLabel={__("Typography", "essential-blocks")}
                                    typographyPrefixConstant={typoPrefix_subtitle}
                                />
                                <Divider />
                            </>
                        )}
                        <BaseControl>
                            <h3 className="eb-control-title">{__("Margin & Padding")}</h3>
                        </BaseControl>
                        <ResponsiveDimensionsControl
                            controlName={titlePadding}
                            baseLabel={__("Padding", "essential-blocks")}
                        />
                        <ResponsiveDimensionsControl
                            controlName={titleMargin}
                            baseLabel={__("Margin", "essential-blocks")}
                        />
                    </PanelBody>
                    <PanelBody title={__("Price Style", "essential-blocks")} initialOpen={false}>
                        <BaseControl>
                            <h3 className="eb-control-title">{__("Alignment", "essential-blocks")}</h3>
                            <ButtonGroup>
                                {ALIGNMENT.map((item, index) => (
                                    <Button
                                        key={index}
                                        isPrimary={priceAlignment === item.value}
                                        isSecondary={priceAlignment !== item.value}
                                        onClick={() =>
                                            handleBlockDefault({
                                                priceAlignment: item.value,
                                            })
                                        }
                                    >
                                        {item.label}
                                    </Button>
                                ))}
                            </ButtonGroup>
                        </BaseControl>
                        <Divider />
                        <BaseControl>
                            <h3 className="eb-control-title">{__("Original Price", "essential-blocks")}</h3>
                        </BaseControl>
                        <ColorControl
                            label={__("Color", "essential-blocks")}
                            color={priceTextColor}
                            onChange={(priceTextColor) => handleBlockDefault({ priceTextColor })}
                        />
                        <TypographyDropdown
                            baseLabel={__("Typography", "essential-blocks")}
                            typographyPrefixConstant={typoPrefix_price_title}
                        />
                        <Divider />
                        <BaseControl>
                            <h3 className="eb-control-title">{__("Original Price Currency", "essential-blocks")}</h3>
                        </BaseControl>
                        <ColorControl
                            label={__("Color", "essential-blocks")}
                            color={priceCurrencyTextColor}
                            onChange={(priceCurrencyTextColor) => handleBlockDefault({ priceCurrencyTextColor })}
                        />
                        <TypographyDropdown
                            baseLabel={__("Typography", "essential-blocks")}
                            typographyPrefixConstant={typoPrefix_price_currency}
                        />
                        <ResponsiveDimensionsControl
                            controlName={priceCurrencyMargin}
                            baseLabel={__("Margin", "essential-blocks")}
                        />
                        <Divider />
                        {showOnSale && (
                            <>
                                <BaseControl>
                                    <h3 className="eb-control-title">{__("Sale Price", "essential-blocks")}</h3>
                                </BaseControl>
                                <ColorControl
                                    label={__("Color", "essential-blocks")}
                                    color={salePriceTextColor}
                                    onChange={(salePriceTextColor) =>
                                        handleBlockDefault({
                                            salePriceTextColor,
                                        })
                                    }
                                />
                                <TypographyDropdown
                                    baseLabel={__("Typography", "essential-blocks")}
                                    typographyPrefixConstant={typoPrefix_saleprice}
                                />
                                <Divider />
                                <BaseControl>
                                    <h3 className="eb-control-title">
                                        {__("Sale Price Currency", "essential-blocks")}
                                    </h3>
                                </BaseControl>
                                <ColorControl
                                    label={__("Color", "essential-blocks")}
                                    color={salepriceCurrencyTextColor}
                                    onChange={(salepriceCurrencyTextColor) =>
                                        handleBlockDefault({
                                            salepriceCurrencyTextColor,
                                        })
                                    }
                                />
                                <TypographyDropdown
                                    baseLabel={__("Typography", "essential-blocks")}
                                    typographyPrefixConstant={typoPrefix_saleprice_currency}
                                />
                                <ResponsiveDimensionsControl
                                    controlName={salepriceCurrencyMargin}
                                    baseLabel={__("Margin", "essential-blocks")}
                                />
                                <Divider />
                            </>
                        )}
                        <BaseControl>
                            <h3 className="eb-control-title">{__("Pricing Period", "essential-blocks")}</h3>
                        </BaseControl>
                        <ColorControl
                            label={__("Color", "essential-blocks")}
                            color={pricingPeriodTextColor}
                            F
                            onChange={(pricingPeriodTextColor) => handleBlockDefault({ pricingPeriodTextColor })}
                        />
                        <TypographyDropdown
                            baseLabel={__("Typography", "essential-blocks")}
                            typographyPrefixConstant={typoPrefix_pricing_period}
                        />
                    </PanelBody>
                    <PanelBody title={__("Features Style", "essential-blocks")} initialOpen={false}>
                        <BaseControl>
                            <h3 className="eb-control-title">Alignment</h3>
                            <ButtonGroup>
                                {ALIGNMENT.map((item, index) => (
                                    <Button
                                        key={index}
                                        isPrimary={featuresAlignment === item.value}
                                        isSecondary={featuresAlignment !== item.value}
                                        onClick={() =>
                                            handleBlockDefault({
                                                featuresAlignment: item.value,
                                            })
                                        }
                                    >
                                        {item.label}
                                    </Button>
                                ))}
                            </ButtonGroup>
                        </BaseControl>
                        <Divider />
                        <ColorControl
                            label={__("Color", "essential-blocks")}
                            color={featuresTextColor}
                            onChange={(featuresTextColor) => handleBlockDefault({ featuresTextColor })}
                        />
                        <ResponsiveRangeController
                            baseLabel={__("Icon Size", "essential-blocks")}
                            controlName={featuresIconSize}
                            min={0}
                            max={50}
                            step={1}
                            noUnits
                        />
                        <TypographyDropdown
                            baseLabel={__("Typography", "essential-blocks")}
                            typographyPrefixConstant={typoPrefix_features_text}
                        />
                    </PanelBody>
                    <PanelBody title={__("Button Style", "essential-blocks")} initialOpen={false}>
                        <BaseControl>
                            <h3 className="eb-control-title">Alignment</h3>
                            <ButtonGroup>
                                {ALIGNMENT.map((item, index) => (
                                    <Button
                                        key={index}
                                        isPrimary={buttonAlignment === item.value}
                                        isSecondary={buttonAlignment !== item.value}
                                        onClick={() =>
                                            handleBlockDefault({
                                                buttonAlignment: item.value,
                                            })
                                        }
                                    >
                                        {item.label}
                                    </Button>
                                ))}
                            </ButtonGroup>
                        </BaseControl>
                        <Divider />
                        <ResponsiveDimensionsControl
                            controlName={buttonPadding}
                            baseLabel={__("Padding", "essential-blocks")}
                        />
                        <ResponsiveDimensionsControl
                            controlName={buttonMargin}
                            baseLabel={__("Margin", "essential-blocks")}
                        />
                        <ResponsiveRangeController
                            baseLabel={__("Icon Size", "essential-blocks")}
                            controlName={buttonIconSize}
                            min={0}
                            max={50}
                            step={1}
                            noUnits
                        />
                        <TypographyDropdown
                            baseLabel={__("Typography", "essential-blocks")}
                            typographyPrefixConstant={typoPrefix_button}
                        />
                        <ColorControl
                            label={__("Text Color", "essential-blocks")}
                            color={buttonTextColor}
                            onChange={(buttonTextColor) => handleBlockDefault({ buttonTextColor })}
                        />
                        <ColorControl
                            label={__("Text Hover Color", "essential-blocks")}
                            color={hoverTextColor}
                            onChange={(hoverTextColor) => handleBlockDefault({ hoverTextColor })}
                        />
                        <BaseControl>
                            <h3 className="eb-control-title">{__("Button Background", "essential-blocks")}</h3>
                        </BaseControl>
                        <BackgroundControl
                            controlName={buttonBackgroundControl}
                            noOverlay={true}
                            noMainBgi={true}
                        />
                        <BaseControl>
                            <h3 className="eb-control-title">{__("Button Border Style", "essential-blocks")}</h3>
                        </BaseControl>
                        <BorderShadowControl controlName={buttonBorderShadow} />
                    </PanelBody>
                    {showHeaderIcon && (
                        <PanelBody title={__("Icon Settings Style", "essential-blocks")} initialOpen={false}>
                            <BaseControl>
                                <h3 className="eb-control-title">{__("Alignment", "essential-blocks")}</h3>
                                <ButtonGroup>
                                    {ALIGNMENT.map((item, index) => (
                                        <Button
                                            key={index}
                                            isPrimary={iconAlignment === item.value}
                                            isSecondary={iconAlignment !== item.value}
                                            onClick={() =>
                                                handleBlockDefault({
                                                    iconAlignment: item.value,
                                                })
                                            }
                                        >
                                            {item.label}
                                        </Button>
                                    ))}
                                </ButtonGroup>
                            </BaseControl>
                            <Divider />
                            <ToggleControl
                                label={__("Show Background", "essential-blocks")}
                                checked={showIconBackground}
                                onChange={() => {
                                    handleBlockDefault({
                                        showIconBackground: !showIconBackground,
                                    });
                                }}
                            />
                            {showIconBackground && (
                                <>
                                    <ColorControl
                                        label={__("Background Color", "essential-blocks")}
                                        color={iconBackgroundColor}
                                        onChange={(iconBackgroundColor) =>
                                            handleBlockDefault({
                                                iconBackgroundColor,
                                            })
                                        }
                                    />
                                    <ColorControl
                                        label={__("Background Hover Color", "essential-blocks")}
                                        color={iconBackgroundHoverColor}
                                        onChange={(iconBackgroundHoverColor) =>
                                            handleBlockDefault({
                                                iconBackgroundHoverColor,
                                            })
                                        }
                                    />
                                    <Divider />
                                </>
                            )}
                            <ResponsiveRangeController
                                baseLabel={__("Icon Size", "essential-blocks")}
                                controlName={headerIconSize}
                                min={0}
                                max={200}
                                step={1}
                            />
                            <ResponsiveRangeController
                                baseLabel={__("Icon Area Width", "essential-blocks")}
                                controlName={headerIconWidth}
                                units={TWOUNITS}
                                min={0}
                                max={500}
                                step={1}
                            />
                            <ResponsiveRangeController
                                baseLabel={__("Icon Area Height", "essential-blocks")}
                                controlName={headerIconHeight}
                                units={TWOUNITS}
                                min={0}
                                max={500}
                                step={1}
                            />
                            <ColorControl
                                label={__("Icon Color", "essential-blocks")}
                                color={iconColor}
                                onChange={(iconColor) => handleBlockDefault({ iconColor })}
                            />
                            <ColorControl
                                label={__("Icon Hover Color", "essential-blocks")}
                                color={iconHoverColor}
                                onChange={(iconHoverColor) => handleBlockDefault({ iconHoverColor })}
                            />
                            <Divider />
                            <BaseControl>
                                <h3 className="eb-control-title">Border</h3>
                            </BaseControl>
                            <BorderShadowControl
                                controlName={iconBorderShadow}
                                noShadow
                            />
                        </PanelBody>
                    )}
                    {showRibbon && (
                        <PanelBody title={__("Ribbon", "essential-blocks")} initialOpen={false}>
                            <TypographyDropdown
                                baseLabel={__("Typography", "essential-blocks")}
                                typographyPrefixConstant={typoPrefix_ribbon}
                            />
                            <ColorControl
                                label={__("Color", "essential-blocks")}
                                color={ribbonColor}
                                onChange={(ribbonColor) => handleBlockDefault({ ribbonColor })}
                            />
                            <ColorControl
                                label={__("Background Color", "essential-blocks")}
                                color={ribbonBackgroundColor}
                                onChange={(ribbonBackgroundColor) =>
                                    handleBlockDefault({
                                        ribbonBackgroundColor,
                                    })
                                }
                            />
                            <BorderShadowControl
                                controlName={ribbonBorderShadow}
                                noBorder
                            />
                        </PanelBody>
                    )}
                    <PanelBody title={__("Wrapper Margin Padding", "essential-blocks")} initialOpen={false}>
                        <ResponsiveDimensionsControl
                            controlName={wrapperPadding}
                            baseLabel={__("Padding", "essential-blocks")}
                        />
                        <ResponsiveDimensionsControl
                            controlName={wrapperMargin}
                            baseLabel={__("Margin", "essential-blocks")}
                        />
                    </PanelBody>
                </div>
            )}
        </>
    );
}

export default withBlockContext(objAttributes)(PricingTable);
