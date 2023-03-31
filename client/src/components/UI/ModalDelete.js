import { Button } from "./Button.js";

export const ModalDelete = ({
    postId,
    onClickClose,
    onClickDelete
}) => {
    const deleteHandler = () => {
        onClickDelete(postId);
    };
    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100 modal bg-secondary bg-opacity-75">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">DELETE POST?</h5>
                        <Button
                            className="btn-close"
                            onClick={onClickClose}
                        />
                    </div>
                    <div className="modal-body">
                        <p>Are you sure you want to delete this post? If you delete it, you won't be able to recover it.</p>
                    </div>
                    <div className="modal-footer">
                        <Button
                            className="btn btn-danger"
                            onClick={deleteHandler}
                            title='Delete'
                        />
                        <Button
                            className="btn btn-secondary"
                            onClick={onClickClose}
                            title="Close"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
