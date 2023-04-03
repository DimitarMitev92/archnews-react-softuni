//REACT
//REACT COMPONENTS
import { Image } from '../../../UI/Image.js';
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
            <Image
                src={imageUrl}
                alt={title}
                className={classNameImg}
            />
        </div>
    );
};