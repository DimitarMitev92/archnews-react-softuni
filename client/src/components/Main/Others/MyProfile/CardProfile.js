import { Button } from '../../../UI/Button.js';

export const CardProfile = ({
    postId,
    imageUrl,
    title,
    location,
    date,
    likes,
    info,
}) => {
    return (
        <div className="row p-5 border-top border-light border-2">
            <div className="col zoom-in">
                <img className="img-fluid  border border-2 border-light" src={imageUrl}
                    alt={title} />
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
                    to={`/`}
                    className={"btn btn-danger m-2"}
                    title={"Delete"}
                />
            </div>
        </div>
    );
};