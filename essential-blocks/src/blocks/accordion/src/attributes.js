import {
    typoPrefix_title,
    typoPrefix_content,
    titlePrefixText,
    titleSuffixText
} from "./constants/typographyPrefixConstants";

import {
    wrapMarginConst,
    wrapPaddingConst,
    iconMarginConst,
    iconPaddingConst,
    tabMarginConst,
    tabPaddingConst,
    conMarginConst,
    conPaddingConst,
} from "./constants/dimensionsConstants";

import { WrpBgConst, iconBgConst, tabBgConst, conBgConst } from "./constants/backgroundsConstants";

import {
    WrpBdShadowConst,
    iconBdShadowConst,
    tabBdShadowConst,
    conBdShadowConst,
} from "./constants/borderShadowConstants";

import { rangeIconSize, accGapRange, titlePrefixIconSize, titlePrefixImgWidth, titlePrefixGap, titleSuffixIconSize, titleSuffixImgWidth, titleSuffixGap } from "./constants/rangeNames";

import {
    generateDimensionsAttributes,
    generateTypographyAttributes,
    generateBackgroundAttributes,
    generateBorderShadowAttributes,
    generateResponsiveRangeAttributes,
} from '@essential-blocks/controls';

const attributes = {
    // the following 4 attributes is must required for responsive options and asset generation for frontend
    // responsive control attributes ⬇
    resOption: {
        type: "string",
        default: "Desktop",
    },
    // blockId attribute for making unique className and other uniqueness ⬇
    blockId: {
        type: "string",
    },
    blockRoot: {
        type: "string",
        default: "essential_block",
    },
    // blockMeta is for keeping all the styles ⬇
    blockMeta: {
        type: "object",
    },
    // accordion attributes starts
    accordionType: {
        type: "string",
        source: "attribute",
        selector: ".eb-accordion-container",
        attribute: "data-accordion-type",
        default: "accordion",
    },
    displayIcon: {
        type: "boolean",
        default: true,
    },
    tabIcon: {
        type: "string",
    },
    expandedIcon: {
        type: "string",
    },
    transitionDuration: {
        type: "number",
        default: 0.5,
    },

    contentAlign: {
        type: "string",
        default: "left",
    },
    titleAlignment: {
        type: "string",
        default: "left",
    },
    titleColor: {
        type: "string",
        default: "var(--eb-global-heading-color)",
    },
    contentColor: {
        type: "string",
        default: "var(--eb-global-text-color)",
    },

    iconColor: {
        type: "string",
        default: "var(--eb-global-primary-color)",
    },

    iconPosition: {
        type: "string",
        default: "right",
    },

    hoverTitleColor: {
        type: "string",
    },
    activeBgColor: {
        type: "string",
        default: "",
    },
    activeTitleColor: {
        type: "string",
        default: "",
    },
    tagName: {
        type: "string",
        default: "h3",
    },
    accordionChildCount: {
        type: "number",
        default: 3,
    },
    faqSchema: {
        type: "boolean",
        default: false,
    },


    titlePrefixColor: {
        type: "string",
        default: "#000",
    },
    titleSuffixColor: {
        type: "string",
        default: "#000",
    },


    ...generateResponsiveRangeAttributes(titlePrefixIconSize, {
        defaultRange: 20,
    }),

    ...generateResponsiveRangeAttributes(titlePrefixImgWidth, {
        defaultRange: 30,
    }),
    ...generateResponsiveRangeAttributes(titlePrefixGap, {
        defaultRange: 15,
    }),

    ...generateResponsiveRangeAttributes(titleSuffixIconSize, {
        defaultRange: 20,
    }),

    ...generateResponsiveRangeAttributes(titleSuffixImgWidth, {
        defaultRange: 30,
    }),
    ...generateResponsiveRangeAttributes(titleSuffixGap, {
        defaultRange: 15,
    }),

    // typography attributes
    ...generateTypographyAttributes(typoPrefix_title, {
        fontSize: 18,
    }),
    ...generateTypographyAttributes(typoPrefix_content, {
        fontSize: 14,
    }),
    ...generateTypographyAttributes(titlePrefixText, {
        fontSize: 14,
    }),
    ...generateTypographyAttributes(titleSuffixText, {
        fontSize: 14,
    }),

    // Responsive Range Controller attributes starts

    // ...generateResponsiveRangeAttributes(wrapperWidth, {
    // 	// noUnits: true,
    // 	defaultUnit: "%",
    // 	defaultRange: 100,
    // }),
    ...generateResponsiveRangeAttributes(rangeIconSize, {
        noUnits: true,
        defaultRange: 20,
    }),
    ...generateResponsiveRangeAttributes(accGapRange, {
        noUnits: true,
        defaultRange: 15,
    }),

    // Responsive Range Controller attributes ends

    // boxs background attributes ⬇

    ...generateBackgroundAttributes(WrpBgConst, {
        // defaultFillColor: "var(--eb-gradient-background-color)",
    }),
    ...generateBackgroundAttributes(iconBgConst, {
        // defaultFillColor: "var(--eb-gradient-secondary-color)",
        noOverlay: true,
        noMainBgi: true,
    }),
    ...generateBackgroundAttributes(tabBgConst, {
        // isBgDefaultGradient: true,
        noMainBgi: true,
        defaultFillColor: "var(--eb-global-background-color)",
        noOverlay: true,
    }),
    ...generateBackgroundAttributes(conBgConst, {
        noMainBgi: true,
        // defaultFillColor: "var(--eb-gradient-background-color)",
        noOverlay: true,
    }),

    // boxs background attributes ends

    // boxs BorderShadow attributes ⬇

    ...generateBorderShadowAttributes(WrpBdShadowConst),
    ...generateBorderShadowAttributes(iconBdShadowConst),
    ...generateBorderShadowAttributes(tabBdShadowConst),
    ...generateBorderShadowAttributes(conBdShadowConst, {
        defaultBdrColor: "#aaaaaa",
        defaultBdrStyle: "solid",
    }),

    // boxs BorderShadow attributes ends

    // dimensions Control related Attributes start

    ...generateDimensionsAttributes(wrapMarginConst),
    ...generateDimensionsAttributes(wrapPaddingConst),
    ...generateDimensionsAttributes(iconMarginConst),
    ...generateDimensionsAttributes(iconPaddingConst),
    ...generateDimensionsAttributes(tabMarginConst),
    ...generateDimensionsAttributes(tabPaddingConst, {
        top: 15,
        bottom: 15,
        left: 20,
        right: 20,
        isLinked: false,
    }),
    ...generateDimensionsAttributes(conMarginConst),
    ...generateDimensionsAttributes(conPaddingConst, {
        top: 10,
        bottom: 10,
        left: 15,
        right: 15,
        // isLinked: false,
    }),

    // dimensions Control related Attributes ends
};

export default attributes;
