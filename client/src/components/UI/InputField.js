//REACT
//REACT COMPONENTS
//REACT HOOKS
//REACT CONTEXT
//REACT ROUTER
//SERVICES

export const InputField = ({
    title,
    htmlFor,
    type,
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
            <label className="form-label" htmlFor={htmlFor}>{title}</label>
            <input
                type={type}
                id={htmlFor}
                className={`form-control form-control-lg ${isClicked ? validItem ? 'is-valid' : 'is-invalid' : ''}`}
                value={value}
                name={name}
                onChange={onChange}
                onBlur={onBlur}
                onClick={onClick} />
            <div className="valid-feedback" style={{ display: isClicked ? '' : 'none' }}>
                {validFeedback}
            </div>
            <div className="invalid-feedback" style={{ display: isClicked ? '' : 'none' }}>
                {invalidFeedback}
            </div>
        </div>
    );
};