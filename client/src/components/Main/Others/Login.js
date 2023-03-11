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
                        <img src="https://lh3.googleusercontent.com/T8AY2OyDfU9_776pIzooylmYXnEfWuU_7c21VWabyLUsBBtcsujgfofa0pqsGJoDLs0DVmMOF9GtIH0gARR4tc3g7maqL1gmRLSwZAWGzjv64hg4yyQ19lDzxnQdOOSFeSGIEnc9ncsHf3A283Rabw3k0aoHxJzWZdWD05ccCJumotJRzUM7Zek4TdAIN_rvgHene2hUp4BbN1oIvBiWNAX53ZKflXUfnJ11mm1GAAxEBiZw22Ubh-JRQCSwdCb_R_itLGRlUN28XaiWcpJyEABawT8PVBuwnjYfYDJJNXbUPhZ8qtDIoJTjsCk9SoYjFgX7_PwJA3s6k_yzfeqMpAij9Qhsc4QGeuDs3Ie7f0a4Nsk2w2QtXG-Q0NuMZtXEdaLqEHUgbbNUwfG_yAW8PT5CEUoHxyBWYLpHWdvSMV2yHeUWW5Q45yolrPO2ZesgjZ0_u3dvZwgVXmAFoGS6h-wJXU_lTKqWrKD-jjsGw56U4Go6mzdrTnOaKH5asilgY_QohxGAX909HAEgJLlNxGzpPEQmu6HObagscpoGbVKTFSdfCvdD4rLJL1VmVRhRp-j-OIQBImwwfDwIemUjdas7RWr0meA8l8ZA8aUDbYMk7uH_u7Lkt0m17JOwL33MYGZ1CQHOplNK8L9GzL92W_iHH-0eCGAl7lUEZHaMEy-ViZXlCRar0OBABBK0QMHxQ0gP8e1yKG0x5aAbDBOc-5UOukWJWvsEsepx28gAsY5Xw6QBLVJtHmJ31d1bZ-tYOqxMbbW54G_4_uAhADmRIFCWGL8YHBLVK6l7Q_z-P6z_JRykI496oE2P-pG4hOp3IEk1vnAmn4lWjIalqJArdbEIFus9I_2aqx2RGFUjyPzlIq5lBXc6X13yjLSDKRvaTF4Yn7QJaSiGph53UKYCO4KnFlkyZN61NEeknrRX9UN0=w1061-h1413-no?authuser=0" alt="Login" className="w-100 vh-100"
                            style={{ objectFit: "cover", objectPosition: "left" }} />
                    </div>
                </div>
            </div>
        </section>
    );
};