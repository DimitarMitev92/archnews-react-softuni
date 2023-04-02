import { dateParser } from "../../utils/dateParser.js";
export const CommentLine = ({
    author,
    comment,
    _createdOn
}) => {
    const date = dateParser(_createdOn);
    return (
        <h5 className='d-flex justify-content-center align-items-center border-bottom border-light border-2 w-100 p-2' >{author} : {comment} - {date}</h5>
    );
};
