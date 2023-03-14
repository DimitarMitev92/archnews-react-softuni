export const InputFiend = ({
    title,
    htmlFor,
    validItem,
    value,
    onChange,
    onBlur,
    validFeedback,
    invalidFeedback

}) => {
    return (
        <div className="form-outline mb-2">
            <label className="form-label" htmlFor={htmlFor}>{title}</label>
            <input type="text" id={htmlFor}
                className={`form-control form-control-lg ${validItem ? 'is-valid' : 'is-invalid'}`}
                value={value}
                onChange={onChange}
                onBlur={onBlur} />
            <div className="valid-feedback">
                {validFeedback}
            </div>
            <div className="invalid-feedback">
                {invalidFeedback}
            </div>
        </div>
    );
};