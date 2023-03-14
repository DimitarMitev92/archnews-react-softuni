import { Link } from 'react-router-dom';

export const CardPost = ({
    imageUrl,
    altImage,
    title,
    location,
    date,
    info,
    postId,
}) => {
    return (
        < div className="row p-5 border-top border-light border-2" >
            <div className="col zoom-in">
                <img className="img-fluid  border border-2 border-light" src={imageUrl}
                    alt={altImage} />
            </div>
            <div className="col">
                <h3 className="text-light">{title}</h3>
                <h5 className="text-light"><i><ion-icon name="location-outline"></ion-icon></i> {location}</h5>
                <h5 className="text-light"><i><ion-icon name="calendar-outline"></ion-icon></i> {date}</h5>
                <article className="text-light">{info}</article>
                <Link to={`/details/${postId}`} className="btn btn-light mt-2">Read More &larr;</Link>
            </div>
        </ div>
    );
};