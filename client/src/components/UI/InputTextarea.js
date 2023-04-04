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
    name,
    onChange,
    onBlur,
    onClick,
    isClicked,
    validFeedback,
    invalidFeedback

}) => {
    return (
        <div className="form-outline mb-2">
            <div className="form-group">
                <label htmlFor={htmlFor}>{title}</label>
                <textarea
                    className={`form-control ${isClicked ? validItem ? "is-valid" : "is-invalid" : ''}`} id={htmlFor}
                    rows="3"
                    value={value}
                    name={name}
                    onChange={onChange}
                    onBlur={onBlur}
                    onClick={onClick}
                ></textarea>
                <div className="valid-feedback" style={{ display: isClicked ? '' : 'none' }}>
                    {validFeedback}
                </div>
                <div className="invalid-feedback" style={{ display: isClicked ? '' : 'none' }}>
                    {invalidFeedback}
                </div>
            </div>
        </div>
    );
};