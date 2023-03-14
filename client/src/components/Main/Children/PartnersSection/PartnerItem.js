export const PartnerItem = ({
    title,
    classNameDiv,
    classNameImg,
    imageUrl
}) => {
    return (
        <div className={classNameDiv}>
            <img className={classNameImg} src={imageUrl} alt={title} />
        </div>
    );
};