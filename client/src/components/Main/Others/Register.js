import background from '../../../assets/images/register/register-imageNew.png';

export const Register = () => {
    return (
        <section className="vh-100 bg-image" style={{ backgroundImage: `url('${background}')` }}>
            <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div className="card" style={{ borderRadius: "15px" }}>
                                <div className="card-body p-5">
                                    <h2 className="text-uppercase text-center mb-5">CREATE AN ACCOUNT</h2>

                                    <form>

                                        <div className="form-outline mb-2">
                                            <label className="form-label" htmlFor="nameInput">Your Name</label>
                                            <input type="text" id="nameInput" className="form-control form-control-lg is-valid" />
                                            <div className="valid-feedback">
                                                Look Good!
                                            </div>
                                        </div>

                                        <div className="form-outline mb-2">
                                            <label className="form-label" htmlFor="usernameInput">Your
                                                Username</label>
                                            <input type="email" id="usernameInput"
                                                className="form-control form-control-lg is-invalid" />
                                            <div className="invalid-feedback">
                                                Please enter Your Username
                                            </div>
                                        </div>

                                        <div className="form-outline mb-2">
                                            <label className="form-label" htmlFor="emailInput">Your Email</label>
                                            <input type="email" id="emailInput" className="form-control form-control-lg" />
                                        </div>

                                        <div className="form-outline mb-2">
                                            <label className="form-label" htmlFor="passwordInput">Password</label>
                                            <input type="password" id="passwordInput"
                                                className="form-control form-control-lg" />
                                        </div>

                                        <div className="form-outline mb-2">
                                            <label className="form-label" htmlFor="rePasswordInput">Repeat your
                                                password</label>
                                            <input type="password" id="rePasswordInput"
                                                className="form-control form-control-lg" />
                                        </div>

                                        <div className="d-flex justify-content-center">
                                            <button type="button" className="btn btn-secondary btn-lg">Register</button>
                                        </div>

                                        <p className="text-center text-muted m-3">Have already an account? <a
                                            href="/" className="fw-bold text-body"><u>Login here</u></a></p>

                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </section >
    );
};