/**
 * WordPress dependencies
 */
import { useBlockProps } from "@wordpress/block-editor";
import { omit } from "lodash";
import {
    sanitizeURL, EBDisplayIcon
} from "@essential-blocks/controls";
import attributes from "./attributes";

const deprecated = [
    {
        attributes: { ...attributes },
        supports: {
            align: ["wide", "full"],
        },
        save: ({ attributes }) => {
            const {
                blockId,
                featureListAlign,
                features,
                iconPosition,
                iconShape,
                shapeView,
                showConnector,
                connectorStyle,
                classHook,
                useInlineDesign,
            } = attributes;

            const featureListAlignClass =
                featureListAlign === "center"
                    ? " eb-feature-list-center"
                    : featureListAlign === "right"
                        ? " eb-feature-list-right"
                        : " eb-feature-list-left";

            const featureListWrapperClass =
                iconShape !== "none" ? ` ${iconShape} ${shapeView}` : " none";
            const inlineDesignClass = useInlineDesign ? " eb-inline-feature-list" : "";
            let iconStyle = {};

            return (
                <div {...useBlockProps.save()}>
                    <div className={`eb-parent-wrapper eb-parent-${blockId} ${classHook}`}>
                        <div
                            className={`${blockId} eb-feature-list-wrapper -icon-position-${iconPosition} -tablet-icon-position-${iconPosition} -mobile-icon-position-${iconPosition}${featureListAlignClass}${showConnector ? " connector-" + connectorStyle : ""
                                }`}
                        >
                            <ul
                                className={`eb-feature-list-items${featureListWrapperClass}${inlineDesignClass}`}
                            >
                                {features.map(
                                    (
                                        {
                                            title,
                                            iconType,
                                            featureImage,
                                            featureImageId,
                                            featureImageAlt,
                                            featureImageTitle,
                                            icon,
                                            iconColor,
                                            iconBackgroundColor,
                                            content,
                                            link,
                                            linkOpenNewTab,
                                        },
                                        index
                                    ) => {
                                        {
                                            iconStyle = {
                                                color: iconColor,
                                                backgroundColor: iconBackgroundColor,
                                            };
                                        }
                                        return (
                                            <li
                                                key={index}
                                                className="eb-feature-list-item"
                                                data-new-tab={
                                                    linkOpenNewTab ? linkOpenNewTab.toString() : "false"
                                                }
                                                data-icon-type={iconType}
                                                data-image={featureImage}
                                                data-image-id={featureImageId}
                                                data-icon={icon}
                                                data-icon-color={iconColor}
                                                data-icon-background-color={iconBackgroundColor}
                                                data-link={link}
                                                data-alt={featureImageAlt}
                                                data-title={featureImageTitle}
                                            >
                                                {iconType !== "none" && (
                                                    <div className="eb-feature-list-icon-box">
                                                        <div className="eb-feature-list-icon-inner">
                                                            <span
                                                                className="eb-feature-list-icon"
                                                                style={iconStyle}
                                                            >
                                                                {iconType === "icon" && <EBDisplayIcon icon={icon} />}
                                                                {iconType === "image" && (
                                                                    <img
                                                                        className="eb-feature-list-img"
                                                                        src={featureImage}
                                                                        alt={
                                                                            featureImageAlt
                                                                                ? featureImageAlt
                                                                                : featureImageTitle
                                                                        }
                                                                    />
                                                                )}
                                                            </span>
                                                        </div>
                                                    </div>
                                                )}
                                                <div className="eb-feature-list-content-box">
                                                    {link ? (
                                                        <attributes.titleTag className="eb-feature-list-title">
                                                            <a
                                                                href={link}
                                                                target={
                                                                    linkOpenNewTab == "true" ? "_blank" : "_self"
                                                                }
                                                                rel="noopener"
                                                            >
                                                                {title}
                                                            </a>
                                                        </attributes.titleTag>
                                                    ) : (
                                                        <attributes.titleTag className="eb-feature-list-title">
                                                            {title}
                                                        </attributes.titleTag>
                                                    )}
                                                    {!useInlineDesign && (
                                                        <p className="eb-feature-list-content">{content}</p>
                                                    )}
                                                </div>
                                            </li>
                                        );
                                    }
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
                // edit view end
            );
        },
    },
    {
        attributes: { ...attributes },
        supports: {
            align: ["wide", "full"],
        },
        save: ({ attributes }) => {
            const {
                blockId,
                featureListAlign,
                features,
                iconPosition,
                iconShape,
                shapeView,
                showConnector,
                connectorStyle,
                classHook,
                useInlineDesign,
            } = attributes;

            const featureListAlignClass =
                featureListAlign === "center"
                    ? " eb-feature-list-center"
                    : featureListAlign === "right"
                        ? " eb-feature-list-right"
                        : " eb-feature-list-left";

            const featureListWrapperClass = iconShape !== "none" ? ` ${iconShape} ${shapeView}` : " none";
            const inlineDesignClass = useInlineDesign ? " eb-inline-feature-list" : "";
            let iconStyle = {};

            return (
                <div {...useBlockProps.save()}>
                    <div className={`eb-parent-wrapper eb-parent-${blockId} ${classHook}`}>
                        <div
                            className={`${blockId} eb-feature-list-wrapper eb-icon-position-${iconPosition} eb-tablet-icon-position-${iconPosition} eb-mobile-icon-position-${iconPosition}${featureListAlignClass}${showConnector ? " connector-" + connectorStyle : ""
                                }`}
                        >
                            <ul className={`eb-feature-list-items${featureListWrapperClass}${inlineDesignClass}`}>
                                {features.map(
                                    (
                                        {
                                            title,
                                            iconType,
                                            featureImage,
                                            featureImageId,
                                            featureImageAlt,
                                            featureImageTitle,
                                            icon,
                                            iconColor,
                                            iconBackgroundColor,
                                            content,
                                            link,
                                            linkOpenNewTab,
                                        },
                                        index
                                    ) => {
                                        {
                                            iconStyle = {
                                                color: iconColor,
                                                backgroundColor: iconBackgroundColor,
                                            };
                                        }
                                        return (
                                            <li
                                                key={index}
                                                className="eb-feature-list-item"
                                                data-new-tab={linkOpenNewTab ? linkOpenNewTab.toString() : "false"}
                                                data-icon-type={iconType}
                                                data-image={featureImage}
                                                data-image-id={featureImageId}
                                                data-icon={icon}
                                                data-icon-color={iconColor}
                                                data-icon-background-color={iconBackgroundColor}
                                                data-link={link}
                                                data-alt={featureImageAlt}
                                                data-title={featureImageTitle}
                                            >
                                                {iconType !== "none" && (
                                                    <div className="eb-feature-list-icon-box">
                                                        <div className="eb-feature-list-icon-inner">
                                                            <span className="eb-feature-list-icon" style={iconStyle}>
                                                                {iconType === "icon" && (
                                                                    <i aria-hidden="true" className={icon}></i>
                                                                )}
                                                                {iconType === "image" && (
                                                                    <img
                                                                        className="eb-feature-list-img"
                                                                        src={featureImage}
                                                                        alt={
                                                                            featureImageAlt
                                                                                ? featureImageAlt
                                                                                : featureImageTitle
                                                                        }
                                                                    />
                                                                )}
                                                            </span>
                                                        </div>
                                                    </div>
                                                )}
                                                <div className="eb-feature-list-content-box">
                                                    {link ? (
                                                        <attributes.titleTag className="eb-feature-list-title">
                                                            <a
                                                                href={sanitizeURL(link)}
                                                                target={linkOpenNewTab == "true" ? "_blank" : "_self"}
                                                                rel="noopener"
                                                            >
                                                                {title}
                                                            </a>
                                                        </attributes.titleTag>
                                                    ) : (
                                                        <attributes.titleTag className="eb-feature-list-title">
                                                            {title}
                                                        </attributes.titleTag>
                                                    )}
                                                    {!useInlineDesign && (
                                                        <p className="eb-feature-list-content">{content}</p>
                                                    )}
                                                </div>
                                            </li>
                                        );
                                    }
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
                // edit view end
            );
        },
    },
    {
        attributes: {
            ...omit({ ...attributes }, ["inlineDesignClass"]),
        },
        supports: {
            align: ["wide", "full"],
        },
        save: ({ attributes }) => {
            const {
                blockId,
                featureListAlign,
                features,
                iconPosition,
                iconShape,
                shapeView,
                classHook,
            } = attributes;

            const featureListAlignClass =
                featureListAlign === "center"
                    ? " eb-feature-list-center"
                    : featureListAlign === "right"
                        ? " eb-feature-list-right"
                        : " eb-feature-list-left";

            const featureListWrapperClass =
                iconShape !== "none" ? ` ${iconShape} ${shapeView}` : " none";
            let iconStyle = {};

            return (
                <div {...useBlockProps.save()}>
                    <div
                        className={`eb-parent-wrapper eb-parent-${blockId} ${classHook}`}
                    >
                        <div
                            className={`${blockId} eb-feature-list-wrapper eb-icon-position-${iconPosition} eb-tablet-icon-position-${iconPosition} eb-mobile-icon-position-${iconPosition}${featureListAlignClass}`}
                        >
                            <ul className={`eb-feature-list-items${featureListWrapperClass}`}>
                                {features.map(
                                    (
                                        {
                                            title,
                                            iconType,
                                            featureImage,
                                            featureImageId,
                                            icon,
                                            iconColor,
                                            iconBackgroundColor,
                                            content,
                                            link,
                                        },
                                        index
                                    ) => {
                                        {
                                            iconStyle = {
                                                color: iconColor,
                                                backgroundColor: iconBackgroundColor,
                                            };
                                        }
                                        return (
                                            <li
                                                key={index}
                                                className="eb-feature-list-item"
                                                data-icon-type={iconType}
                                                data-image={featureImage}
                                                data-image-id={featureImageId}
                                                data-icon={icon}
                                                data-icon-color={iconColor}
                                                data-icon-background-color={iconBackgroundColor}
                                                data-link={link}
                                            >
                                                {iconType !== "none" && (
                                                    <div className="eb-feature-list-icon-box">
                                                        <div className="eb-feature-list-icon-inner">
                                                            <span
                                                                className="eb-feature-list-icon"
                                                                style={iconStyle}
                                                            >
                                                                {iconType === "icon" && (
                                                                    <i aria-hidden="true" className={icon}></i>
                                                                )}
                                                                {iconType === "image" && (
                                                                    <img
                                                                        className="eb-feature-list-img"
                                                                        src={featureImage}
                                                                    />
                                                                )}
                                                            </span>
                                                        </div>
                                                    </div>
                                                )}
                                                <div className="eb-feature-list-content-box">
                                                    {link ? (
                                                        <attributes.titleTag className="eb-feature-list-title">
                                                            <a href={sanitizeURL(link)}>{title}</a>
                                                        </attributes.titleTag>
                                                    ) : (
                                                        <attributes.titleTag className="eb-feature-list-title">
                                                            {title}
                                                        </attributes.titleTag>
                                                    )}
                                                    <p className="eb-feature-list-content">{content}</p>
                                                </div>
                                            </li>
                                        );
                                    }
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
                // edit view end
            );
        },
    },
    {
        attributes: { ...attributes },
        supports: {
            align: ["wide", "full"],
        },
        save: ({ attributes }) => {
            const {
                blockId,
                featureListAlign,
                features,
                iconPosition,
                iconShape,
                shapeView,
                classHook,
            } = attributes;

            const featureListAlignClass =
                featureListAlign === "center"
                    ? " eb-feature-list-center"
                    : featureListAlign === "right"
                        ? " eb-feature-list-right"
                        : " eb-feature-list-left";

            const featureListWrapperClass =
                iconShape !== "none" ? ` ${iconShape} ${shapeView}` : " none";
            let iconStyle = {};

            return (
                <div {...useBlockProps.save()}>
                    <div
                        className={`eb-parent-wrapper eb-parent-${blockId} ${classHook}`}
                    >
                        <div
                            className={`${blockId} eb-feature-list-wrapper eb-icon-position-${iconPosition} eb-tablet-icon-position-${iconPosition} eb-mobile-icon-position-${iconPosition}${featureListAlignClass}`}
                        >
                            <ul className={`eb-feature-list-items${featureListWrapperClass}`}>
                                {features.map(
                                    (
                                        {
                                            title,
                                            iconType,
                                            featureImage,
                                            featureImageId,
                                            icon,
                                            iconColor,
                                            iconBackgroundColor,
                                            content,
                                            link,
                                        },
                                        index
                                    ) => {
                                        {
                                            iconStyle = {
                                                color: iconColor,
                                                backgroundColor: iconBackgroundColor,
                                            };
                                        }
                                        return (
                                            <li
                                                key={index}
                                                className="eb-feature-list-item"
                                                data-icon-type={iconType}
                                                data-image={featureImage}
                                                data-image-id={featureImageId}
                                                data-icon={icon}
                                                data-icon-color={iconColor}
                                                data-icon-background-color={iconBackgroundColor}
                                                data-link={link}
                                            >
                                                {iconType !== "none" && (
                                                    <div className="eb-feature-list-icon-box">
                                                        <div className="eb-feature-list-icon-inner">
                                                            <span
                                                                className="eb-feature-list-icon"
                                                                style={iconStyle}
                                                            >
                                                                {iconType === "icon" && (
                                                                    <i aria-hidden="true" className={icon}></i>
                                                                )}
                                                                {iconType === "image" && (
                                                                    <img
                                                                        className="eb-feature-list-img"
                                                                        src={featureImage}
                                                                    />
                                                                )}
                                                            </span>
                                                        </div>
                                                    </div>
                                                )}
                                                <div className="eb-feature-list-content-box">
                                                    {link ? (
                                                        <attributes.titleTag className="eb-feature-list-title">
                                                            <a href={sanitizeURL(link)}>{title}</a>
                                                        </attributes.titleTag>
                                                    ) : (
                                                        <attributes.titleTag className="eb-feature-list-title">
                                                            {title}
                                                        </attributes.titleTag>
                                                    )}
                                                    <p className="eb-feature-list-content">{content}</p>
                                                </div>
                                            </li>
                                        );
                                    }
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
                // edit view end
            );
        },
    },
    {
        attributes: { ...attributes },
        supports: {
            align: ["wide", "full"],
        },
        save: ({ attributes }) => {
            const {
                blockId,
                featureListAlign,
                features,
                iconPosition,
                iconShape,
                shapeView,
            } = attributes;

            const featureListAlignClass =
                featureListAlign === "center"
                    ? " eb-feature-list-center"
                    : featureListAlign === "right"
                        ? " eb-feature-list-right"
                        : " eb-feature-list-left";

            const featureListWrapperClass =
                iconShape !== "none" ? ` ${iconShape} ${shapeView}` : " none";
            let iconStyle = {};

            return (
                <div {...useBlockProps.save()}>
                    <div
                        className={`${blockId} eb-feature-list-wrapper eb-icon-position-${iconPosition} eb-tablet-icon-position-${iconPosition} eb-mobile-icon-position-${iconPosition}${featureListAlignClass}`}
                    >
                        <ul className={`eb-feature-list-items${featureListWrapperClass}`}>
                            {features.map(
                                (
                                    {
                                        title,
                                        iconType,
                                        featureImage,
                                        featureImageId,
                                        icon,
                                        iconColor,
                                        iconBackgroundColor,
                                        content,
                                        link,
                                    },
                                    index
                                ) => {
                                    {
                                        iconStyle = {
                                            color: iconColor,
                                            backgroundColor: iconBackgroundColor,
                                        };
                                    }
                                    return (
                                        <li
                                            key={index}
                                            className="eb-feature-list-item"
                                            data-icon-type={iconType}
                                            data-image={featureImage}
                                            data-image-id={featureImageId}
                                            data-icon={icon}
                                            data-icon-color={iconColor}
                                            data-icon-background-color={iconBackgroundColor}
                                            data-link={link}
                                        >
                                            {iconType !== "none" && (
                                                <div className="eb-feature-list-icon-box">
                                                    <div className="eb-feature-list-icon-inner">
                                                        <span
                                                            className="eb-feature-list-icon"
                                                            style={iconStyle}
                                                        >
                                                            {iconType === "icon" && (
                                                                <i aria-hidden="true" className={icon}></i>
                                                            )}
                                                            {iconType === "image" && (
                                                                <img
                                                                    className="eb-feature-list-img"
                                                                    src={featureImage}
                                                                />
                                                            )}
                                                        </span>
                                                    </div>
                                                </div>
                                            )}
                                            <div className="eb-feature-list-content-box">
                                                {link ? (
                                                    <attributes.titleTag className="eb-feature-list-title">
                                                        <a href={sanitizeURL(link)}>{title}</a>
                                                    </attributes.titleTag>
                                                ) : (
                                                    <attributes.titleTag className="eb-feature-list-title">
                                                        {title}
                                                    </attributes.titleTag>
                                                )}
                                                <p className="eb-feature-list-content">{content}</p>
                                            </div>
                                        </li>
                                    );
                                }
                            )}
                        </ul>
                    </div>
                </div>
                // edit view end
            );
        },
    },
];

export default deprecated;
