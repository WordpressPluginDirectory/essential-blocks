/*
 * WordPress Dependencies
 *
 */
import { useBlockProps } from "@wordpress/block-editor";
import {
BlockProps
} from "@essential-blocks/controls";
const save = ({ attributes }) => {
    const {
        resOption,
        blockMeta,
        blockId,
        classHook,
        showLabel,
        labelText,
        options,
        fieldName,
        defaultValue,
        isRequired,
        validationMessage,
    } = attributes;

    return (
        <BlockProps.Save attributes={attributes} rootClass={'eb-form-field'}>
            <div
                className={`eb-parent-wrapper eb-parent-${blockId} ${classHook}`}
            >
                <div
                    className={`${blockId} eb-radio-field-wrapper eb-field-wrapper`}
                >
                    {showLabel && (
                        <>
                            <label htmlFor={fieldName}>
                                {labelText}{" "}
                                {isRequired && (
                                    <span className="eb-required">*</span>
                                )}
                            </label>
                        </>
                    )}
                    {options.length > 0 &&
                        options.map((option) => (
                            <div className="eb-radio-inputarea">
                                <label htmlFor={option.value}>
                                    <input
                                        id={option.value}
                                        name={fieldName}
                                        value={option.value}
                                        checked={defaultValue === option.value}
                                        type="radio"
                                    />{" "}
                                    {option.name}
                                </label>
                            </div>
                        ))}
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
        </BlockProps.Save>
    );
};

export default save;
