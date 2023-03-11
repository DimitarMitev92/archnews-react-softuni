import background from '../../../assets/images/edit/edit-image.png';

export const Edit = () => {
    return (
        <section className="vh-100 bg-image" style={{ backgroundImage: `url('${background}')` }}>
            <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div className="card" style={{ borderRadius: "15px" }}>
                                <div className="card-body p-5 ">
                                    <h2 className="text-uppercase text-center mb-5">EDIT POST</h2>

                                    <form>

                                        <div className="form-outline mb-2">
                                            <label className="form-label" htmlFor="titleInput">Title</label>
                                            <input type="text" id="titleInput" className="form-control form-control-lg is-valid" />
                                            <div className="valid-feedback">
                                                Look Good!
                                            </div>
                                        </div>

                                        <div className="form-outline mb-2">
                                            <label className="form-label" htmlFor="locationInput">Location</label>
                                            <input type="text" id="locationInput"
                                                className="form-control form-control-lg is-invalid" />
                                            <div className="invalid-feedback">
                                                Please enter Your Username
                                            </div>
                                        </div>

                                        <div className="form-outline mb-2">
                                            <label className="form-label" htmlFor="imageInput">Image Link</label>
                                            <input type="text" id="imageInput" className="form-control form-control-lg" />
                                        </div>

                                        <div className="form-outline mb-2">
                                            <div className="form-group">
                                                <label htmlFor="exampleFormControlTextarea1">Your Post</label>
                                                <textarea className="form-control" id="exampleFormControlTextarea1"
                                                    rows="3"></textarea>
                                            </div>
                                        </div>




                                        <div className="d-flex justify-content-center">
                                            <button type="button" className="btn btn-secondary btn-lg m-3">Edit</button>
                                            <button type="button" className="btn btn-secondary btn-lg m-3">Cancel</button>
                                        </div>

                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};