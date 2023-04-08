export const ButtonSubmit = ({
    className,
    title,
    disabled
}) => {
    return (
        <button type="submit" className={className} disabled={disabled}>{title}</button>
    );
};