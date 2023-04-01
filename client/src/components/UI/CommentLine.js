export const CommentLine = ({
    author,
    comment
}) => {
    return (
        <h6 className='d-flex justify-content-center align-items-center border-bottom border-light border-2 w-100 p-2' >{author}: {comment}</h6>
    );
};
