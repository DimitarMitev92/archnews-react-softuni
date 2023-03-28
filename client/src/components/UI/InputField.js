//REACT
//REACT COMPONENTS
//REACT HOOKS
//REACT CONTEXT
//REACT ROUTER
//SERVICES

export const InputFiend = ({
    title,
    htmlFor,
    type,
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
            <input
                type={type}
                id={htmlFor}
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