//REACT
//REACT COMPONENTS
import { Button } from './Button.js';
//REACT HOOKS
//REACT CONTEXT
//REACT ROUTER
//SERVICES

import { dateParser } from '../../utils/dateParser.js';


export const CardPost = ({
    imageUrl,
    title,
    location,
    date,
    likes,
    info,
    postId,
}) => {

    date = dateParser(date);
    return (
        < div className="row p-5 border-top border-light border-2" >
            <div className="col zoom-in">
                <img className="img-fluid  border border-2 border-light" src={imageUrl}
                    alt={title} />
            </div>
            <div className="col">
                <h3 className="text-light">{title}</h3>
                <h5 className="text-light"><i><ion-icon name="location-outline"></ion-icon></i> {location}</h5>
                <h5 className="text-light"><i><ion-icon name="calendar-outline"></ion-icon></i> {date}</h5>
                <article className="text-light">{info}</article>
                <Button
                    to={`/details/${postId}`}
                    className={"btn btn-light mt-2"}
                    title={"Read More"}
                />
            </div>
        </ div>
    );
};