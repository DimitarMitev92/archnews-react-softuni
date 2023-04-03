export const Image = ({
    src,
    alt,
    className,
    style,
    onClick
}) => {
    return (
        <img src={src} alt={alt} className={className} style={style} onClick={onClick} />
    );
};