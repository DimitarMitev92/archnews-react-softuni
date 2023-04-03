//REACT
//REACT COMPONENTS
import { Image } from "./Image.js";
//REACT HOOKS
//REACT CONTEXT
//REACT ROUTER
//SERVICES
//UTILS

export const FullScreenImage = ({ imageUrl, onClick }) => {
    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100 modal bg-secondary bg-opacity-75" onClick={onClick} style={{ cursor: 'pointer' }}>
            <Image
                src={imageUrl}
                alt={imageUrl}
                className="img-thumbnail w-75 h-75"
            />
        </div>
    );
};