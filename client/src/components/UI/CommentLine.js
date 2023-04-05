import { Button } from "./Button.js";
export const CommentLine = ({
    id,
    author,
    comment,
    onClick,
    className,
    title,
    isOwnerComment
}) => {
    return (
        <h5 id={id} className='d-flex justify-content-center align-items-center border-bottom border-light border-2 w-100 p-2' >{author} : {comment} {isOwnerComment && <Button onClick={onClick} className={className} title={title} />}</h5>
    );
};
