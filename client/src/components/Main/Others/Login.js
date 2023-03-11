import background from '../../../assets/images/login/login-imageNew.jpg';

export const Login = () => {
    return (
        <section className="vh-100">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 text-black d-flex justify-content-center align-items-center flex-md-column">
                        <h2 className="text-uppercase text-center m-5">LOGIN</h2>
                        <form>
                            <div className="form-outline m-4">
                                <input type="email" id="emailInput" className="form-control form-control-lg" />
                                <label className="form-label" htmlFor="emailInput">Your Email</label>
                            </div>

                            <div className="form-outline m-4">
                                <input type="password" id="passwordInput" className="form-control form-control-lg" />
                                <label className="form-label" htmlFor="passwordInput">Password</label>
                            </div>

                            <div className="d-flex justify-content-center">
                                <button type="button" className="btn btn-secondary btn-lg">Login</button>
                            </div>

                            <p className="text-center text-muted mt-5 mb-0">Don't have an account? <a href="/"
                                className="fw-bold text-body"><u>Register here</u></a></p>

                        </form>
                    </div>
                    <div className="col-sm-6 px-0 d-none d-sm-block">
                        <img src={background} alt="Login" className="w-100 vh-100"
                            style={{ objectFit: "cover", objectPosition: "left" }} />
                    </div>
                </div>
            </div>
        </section>
    );
};