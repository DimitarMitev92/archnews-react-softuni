export const RadioButton = ({
    classNameDiv,
    classNameInput,
    classNameLabel,
    nameInput,
    idInput,
    valueInput,
    onClick,
    style,
    htmlFor,
    titleLabel,
    defaultChecked
}) => {
    console.log(defaultChecked);
    console.log(defaultChecked ? 'defaultChecked' : '');
    return (
        <div className={classNameDiv}>
            <input className={classNameInput} type="radio" name={nameInput} id={idInput} value={valueInput} onClick={onClick} style={style} defaultChecked={defaultChecked ? 'defaultChecked' : ''} />
            <label className={classNameLabel} htmlFor={htmlFor}>{titleLabel}</label>
        </div>
    );
};