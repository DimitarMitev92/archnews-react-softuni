export const ButtonSubmit = ({
    className,
    title
}) => {
    return (
        <button type="submit" className={className}>{title}</button>
    );
};