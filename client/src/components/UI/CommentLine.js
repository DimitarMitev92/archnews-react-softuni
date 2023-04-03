import { dateParser } from "../../utils/dateParser.js";
export const CommentLine = ({
    author,
    comment,
}) => {
    return (
        <h5 className='d-flex justify-content-center align-items-center border-bottom border-light border-2 w-100 p-2' >{author} : {comment}</h5>
    );
};
