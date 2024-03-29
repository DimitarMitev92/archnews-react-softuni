//REACT
//REACT COMPONENTS
import { Button } from '../../../UI/Button.js';
import { Image } from '../../../UI/Image.js';
//REACT HOOKS
//REACT CONTEXT
//REACT ROUTER
//SERVICES


export const CardProfile = ({
    postId,
    imageUrl,
    title,
    location,
    date,
    likes,
    info,
    clickDelete,

}) => {
    const clickDeletePost = (e) => {
        clickDelete(postId);
    };
    return (
        <div className="row p-5 border-top border-light border-2">
            <div className="col zoom-in">
                <Image
                    src={imageUrl}
                    alt={title}
                    className="img-fluid  border border-2 border-light"

                />
            </div>
            <div className="col">
                <h3 className="text-light">{title}</h3>
                <h5 className="text-light"><i><ion-icon name="location-outline"></ion-icon></i> {location}</h5>
                <h5 className="text-light"><i><ion-icon name="calendar-outline"></ion-icon></i> {date}</h5>
                <h5 className="text-light"><i><ion-icon name="heart-outline"></ion-icon></i> Likes: {likes}</h5>

                <article className="text-light">{info}</article>
                <Button
                    to={`/edit/${postId}`}
                    className={"btn btn-success m-2"}
                    title={"Edit"}
                />
                <Button
                    className={"btn btn-danger m-2"}
                    onClick={clickDeletePost}
                    title={"Delete"}
                />
            </div>
        </div>
    );
};