export const Register = () => {
    return (
        <section className="vh-100 bg-image" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/4-gW8fVdCIVj1Skqw7puW2ImTJAbveFWlFHmKxevopONOSbypeQnmjZLOEp7M4hUWyUZAldjHAqI6je3hqGWzTO6e9ncqxqWJsOoYtd6iq33ZThd6tGv_clP-jB8v7ft0RjzGrEy3VwiYZNMHag4Q7wCpfWRxzmVGV_UZG3VEWWDcheCyHWY43ffFJ17iOTHM534pyd_bSRxBP3VAMqkxo9-HaPpZL7pwe0t7gVEoY3BSdrPzleSCGCzSoaH7Ja7kGx5aDOfXfndEkccqVbmVrkWR3ahPKHBZd4xuUsSq_m1vUcAcRKipxbLhB_VhkejXXVxMUCNvnIH4ngjzpaqYKO0XE8kxIBsBFjsNjQLvSKOd2oAt448HAnUjQG4xl4l8tj-N5hAhKI6zM6M3kKvVoXaKVh9fi0kcyaspIeXEafqLPJl-j7aOW0ly2bjFr0ihR_jqglvsGiMjCivyO2UY4wHuqXNVEHSb5CKI71McLPRMninYDLXLLH7PRH15HD6NKiP8VQH26pv8z9MCQMN3LYli67qp_5ubAaONB_UwE7ABW28fnjNVa1ZFnwvPH2_pz9wZJ5W_f8dTgtlyS9HDpeUQ0hPNDzXuPyF5AiiVEHsTlTj40PJCS61BgDOs5XQ3RZgZpQtsFKzVnp985dKwPEOLDaSk7sPZhm6WyXbdQBfBCK_4-oJvixxZPU8mzXQWdDaZ6I0osRUTnRJ3a4sMKqckGhyXQ7OB_BfgWrWsR_EVQUC5-uUxWH3trmgEMfitwlGPUy1Y2cUXYf_RwohiOML6QJK3F0daY6ZxFNLfb9QH4-TCbrWEz8p9tVuzX7lMZe9dgAy490Ds3dK9lVJVS43dTcs_MCb70DkGVAfR73JXLB-nGxxkdN8fWDs2THtJhiAe1iZi6BgBcvhjAAT0mPUIKixKfwjFnUMLBaI8XOJ=w1980-h1080-no?authuser=0')` }}>
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
                                            href="/login" className="fw-bold text-body"><u>Login here</u></a></p>

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