import { RichText } from "@wordpress/block-editor";
import {
    EBDisplayIcon,
    sanitizeURL,
    EBButton,
    ImageComponent,
} from "@essential-blocks/controls";
import { BUTTON_KEYS } from "../constants";

export default function InfoboxContainer({ requiredProps, attributes }) {
    const {
        blockId,
        infoboxIcon,
        media,
        number,
        imageUrl,
        infoboxLink,
        linkNewTab,
        enableSubTitle,
        enableDescription,
        enableButton,
        isInfoClick,
        title,
        subTitle,
        description,
        titleTag,
        subTitleTag,
        btnEffect,
        classHook,
        showMedia,
        enableTitle,
    } = requiredProps;

    const InfoboxContent = () => (
        <div className={`${blockId} eb-infobox-wrapper`}>
            <div className="infobox-wrapper-inner">
                {showMedia && (
                    <>
                        {media === "icon" ? (
                            <div className="icon-img-wrapper">
                                <div className="eb-icon number-or-icon">
                                    <EBDisplayIcon
                                        icon={infoboxIcon}
                                        className={`eb-infobox-icon-data-selector`}
                                    />
                                </div>
                            </div>
                        ) : null}

                        {media === "number" ? (
                            <div className="icon-img-wrapper">
                                <div className="eb-infobox-num-wrapper number-or-icon">
                                    <span className="eb-infobox-number">
                                        {number}
                                    </span>
                                </div>
                            </div>
                        ) : null}

                        {media === "image" && imageUrl ? (
                            <div className="icon-img-wrapper">
                                <div className="eb-infobox-image-wrapper">
                                    <ImageComponent.Content
                                        attributes={attributes}
                                        className="eb-infobox-image"
                                        hasStyle={false}
                                    />
                                </div>
                            </div>
                        ) : null}
                    </>
                )}
                <div className="contents-wrapper">
                    {enableTitle && (
                        <>
                            <RichText.Content
                                tagName={titleTag}
                                className="title"
                                value={title}
                            />

                            {enableSubTitle ? (
                                <RichText.Content
                                    tagName={subTitleTag}
                                    className="subtitle"
                                    value={subTitle}
                                />
                            ) : null}
                        </>
                    )}

                    {enableDescription ? (
                        <RichText.Content
                            tagName="p"
                            className="description"
                            value={description}
                        />
                    ) : null}

                    {enableButton && !isInfoClick ? (
                        <EBButton.Content
                            attributes={attributes}
                            className={`infobox-btn  ${btnEffect || " "}`}
                            buttonAttrProps={BUTTON_KEYS}
                            btnWrapperClassName="eb-infobox-btn-wrapper"
                        />
                    ) : null}
                </div>
            </div>
        </div>
    );

    return (
        <div
            className={`eb-parent-wrapper eb-parent-${blockId} ${classHook}`}
            {...(isInfoClick && {
                'data-clickable': 'true',
                'data-href': infoboxLink == undefined ? "" : sanitizeURL(infoboxLink),
                'data-target': linkNewTab ? "_blank" : "_self"
            })}
        >
            <InfoboxContent />
        </div>
    );
}
