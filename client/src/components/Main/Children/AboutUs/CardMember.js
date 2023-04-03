//REACT
//REACT COMPONENTS
import { Image } from '../../../UI/Image.js';
//REACT HOOKS
//REACT CONTEXT
//REACT ROUTER
//SERVICES

export const CardMember = ({
    profession,
    imageUrl,
    altImage,
    info,

}) => {
    return (
        <div className="col">
            <div className="card bg-secondary border border-2 border-light">
                <Image
                    src={imageUrl}
                    className="card-img-top"
                    alt={altImage}
                />
                <div className="card-body ">
                    <h5 className="card-title text-light">{profession}</h5>
                    <p className="card-text text-light d-none d-xxl-block">{info}</p>
                </div>
            </div>
        </div>
    );
};