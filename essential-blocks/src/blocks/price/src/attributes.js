import {
    WRAPPER_BG,
    WRAPPER_MARGIN,
    WRAPPER_PADDING,
    WRAPPER_BORDER_SHADOW,
} from "./constants";

import {
    generateDimensionsAttributes,
    generateTypographyAttributes,
    generateBackgroundAttributes,
    generateBorderShadowAttributes,
    generateResponsiveRangeAttributes,
 } from "@essential-blocks/controls";

import {
    typoPrefix_original_price,
    typoPrefix_saleprice,
    typoPrefix_sale_pricing_period,
    typoPrefix_pricing_period
} from "./constants/typographyPrefixConstants";

const attributes = {
    resOption: {
        type: "string",
        default: "Desktop",
    },

    // blockId attribute for making unique className and other uniqueness
    blockId: {
        type: "string",
    },
    blockRoot: {
        type: "string",
        default: "essential_block",
    },
    blockMeta: {
        type: "object",
    },
    mainPrice: {
        type: "string",
        default: "99",
    },
    showOnSale: {
        type: "boolean",
        default: false,
    },
    salePrice: {
        type: "string",
        default: "89",
    },
    priceCurrency: {
        type: "string",
        default: "$",
    },
    currencyPlacement: {
        type: "string",
        default: "left",
    },
    pricePeriod: {
        type: "string",
        default: "/month",
    },
    priceAlignment: {
        type: "string",
        default: "center",
    },
    priceTextColor: {
        type: "string",
    },
    priceCurrencyTextColor: {
        type: "string",
    },
    salePriceTextColor: {
        type: "string",
    },
    salepriceCurrencyTextColor: {
        type: "string",
    },
    pricingPeriodTextColor: {
        type: "string",
    },
    salePricePeriod: {
        type: "string",
        default: "/month",
    },
    priceView: {
        type: "string",
        default: "inline",
    },
    salePricingPeriodTextColor: {
        type: "string",
    },
    // typography attributes
    ...generateTypographyAttributes(typoPrefix_original_price),
    ...generateTypographyAttributes(typoPrefix_saleprice),
    ...generateTypographyAttributes(typoPrefix_sale_pricing_period),
    ...generateTypographyAttributes(typoPrefix_pricing_period),
    // margin padding attributes ⬇
    ...generateDimensionsAttributes(WRAPPER_MARGIN),
    ...generateDimensionsAttributes(WRAPPER_PADDING),

    // border shadow attributes ⬇
    ...generateBorderShadowAttributes(WRAPPER_BORDER_SHADOW, {
        bdrDefaults: {
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
        },
        // noShadow: true,
        // noBorder: true,
    }),

    // background attributes ⬇
    ...generateBackgroundAttributes(WRAPPER_BG, {
        defaultBgGradient: "linear-gradient(45deg,#ffffff,#ffffff)",
    }),
};

export default attributes;
