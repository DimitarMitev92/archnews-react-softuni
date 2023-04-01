import { Button } from "./Button.js";

export const ModalAuth = ({
    error,
    onClickClose,
}) => {

    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100 modal bg-secondary bg-opacity-75">
            <div className="modal-dialog">
                <div className="modal-content m-3">
                    <div className="modal-header">
                        <h5 className="modal-title">ERROR</h5>
                        <Button
                            className="btn-close"
                            onClick={onClickClose}
                        />
                    </div>
                    <div className="modal-body m-3">
                        <p>{error}</p>
                    </div>
                    <div className="modal-footer">
                        <Button
                            className="btn btn-danger"
                            onClick={onClickClose}
                            title="Okay"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
