export const Login = () => {
    return (
        <section className="vh-100">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 text-black d-flex justify-content-center align-items-center flex-md-column">
                        <h2 className="text-uppercase text-center m-5">LOGIN</h2>
                        <form>
                            <div className="form-outline m-4">
                                <label className="form-label" htmlFor="emailInput">Your Email</label>
                                <input type="email" id="emailInput" className="form-control form-control-lg is-valid" />
                                <div className="valid-feedback">
                                    Look Good!
                                </div>
                            </div>

                            <div className="form-outline m-4">
                                <label className="form-label" htmlFor="passwordInput">Password</label>
                                <input type="password" id="passwordInput" className="form-control form-control-lg is-invalid" />
                                <div className="invalid-feedback">
                                    Please enter Your Username
                                </div>
                            </div>

                            <div className="d-flex justify-content-center">
                                <button type="button" className="btn btn-secondary btn-lg">Login</button>
                            </div>

                            <p className="text-center text-muted mt-5 mb-0">Don't have an account? <a href="/register"
                                className="fw-bold text-body"><u>Register here</u></a></p>

                        </form>
                    </div>
                    <div className="col-sm-6 px-0 d-none d-sm-block">
                        <img src="https://lh3.googleusercontent.com/pw/AMWts8CF6X8Pw-im5OuYgpHogjzwc3N6INqpMm7acvUcrE-7DEaW1PSQj39PYNrbjkVUSxaatu-2dGohKdeX6EgoJK1vcOfFfZ9nk1O8W2rGmuqk6KSW1VYy_YNxTPLD86RuV6ENT__tibbD9v046yB0NguW=w1061-h1413-no?authuser=0" alt="Login" className="w-100 vh-100"
                            style={{ objectFit: "cover", objectPosition: "left" }} />
                    </div>
                </div>
            </div>
        </section>
    );
};