import { Button } from "./Button.js";
import { CommentLine } from "./CommentLine.js";

export const Comments = ({
    comments,
    onSubmit,
}) => {
    return (
        <form className='row d-flex justify-content-center align-items-center m-5 ' onSubmit={onSubmit}>
            <div className="col-6 text-light d-flex justify-content-center align-items-center flex-md-column bg-secondary p-3" style={{ borderRadius: "5px" }}>
                {comments.map(comment =>
                    <CommentLine
                        author={comment.author}
                        comment={comment.comment}
                    />)}
                <textarea className='form-control w-75 m-3'></textarea>
                <Button
                    className={"btn btn-light btn"}
                    title={"Comment"}
                />
            </div>
        </form>
    );
};;