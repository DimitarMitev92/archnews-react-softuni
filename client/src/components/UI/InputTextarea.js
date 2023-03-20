//REACT
//REACT COMPONENTS
//REACT HOOKS
//REACT CONTEXT
//REACT ROUTER
//SERVICES

export const InputTextarea = ({
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
            <div className="form-group">
                <label htmlFor={htmlFor}>{title}</label>
                <textarea
                    className={`form-control ${validItem ? "is-valid" : "is-invalid"}`} id={htmlFor}
                    rows="3"
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                ></textarea>
                <div className="valid-feedback">
                    {validFeedback}
                </div>
                <div className="invalid-feedback">
                    {invalidFeedback}
                </div>
            </div>
        </div>
    );
};