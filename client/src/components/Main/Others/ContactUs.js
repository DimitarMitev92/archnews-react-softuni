import background from '../../../assets/images/contact-us/contactUs-image.png';

export const ContactUs = () => {
    return (
        <section className="vh-100 bg-image" style={{ backgroundImage: `url('${background}')` }}>
            <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div className="card" style={{ borderRadius: "15px" }}>
                                <div className="card-body p-5 ">
                                    <h2 className="text-uppercase text-center mb-5">CONTACT US</h2>

                                    <div className="d-flex justify-content-center m-3">
                                        <p>Call us: <strong>+01 234 567 89</strong> / <strong>+09 999 999
                                            99</strong></p>
                                    </div>
                                    <form>

                                        <div className="form-outline mb-2">
                                            <label className="form-label" htmlFor="nameInput">Your Name</label>
                                            <input type="text" id="nameInput" className="form-control form-control-lg is-valid" />
                                            <div className="valid-feedback">
                                                Look Good!
                                            </div>
                                        </div>

                                        <div className="form-outline mb-2">
                                            <label className="form-label" htmlFor="emailInput">Your Email</label>
                                            <input type="text" id="emailInput" className="form-control form-control-lg is-invalid" />
                                            <div className="invalid-feedback">
                                                Please enter Your Username
                                            </div>
                                        </div>

                                        <div className="form-outline mb-2">
                                            <label className="form-label" htmlFor="phoneInput">Your Phone</label>
                                            <input type="text" id="phoneInput" className="form-control form-control-lg" />
                                        </div>

                                        <div className="form-outline mb-2">
                                            <div className="form-group">
                                                <label htmlFor="messageTextarea1">Your Message</label>
                                                <textarea className="form-control" id="messageTextarea1"
                                                    rows="3"></textarea>
                                            </div>
                                        </div>

                                        <div className="d-flex justify-content-center">
                                            <button type="button" className="btn btn-secondary btn-lg m-3">Send</button>
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