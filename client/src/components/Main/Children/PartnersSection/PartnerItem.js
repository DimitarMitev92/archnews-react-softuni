//REACT
//REACT COMPONENTS
//REACT HOOKS
//REACT CONTEXT
//REACT ROUTER
//SERVICES

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