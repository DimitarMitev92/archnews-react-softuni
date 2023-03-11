export const ContactUs = () => {
    return (
        <section className="vh-100 bg-image" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/i7x7jNh-7Zp0TkHJ03fUukpTUj4Ma0GLVyeook-U9UoFcXAetUhksNC-ccHc9EB4dbrK79CfID3skW8RLz2EQsjE2KLtNk_bFJ5AOn79AgB0QVjF5A5n23oenCkVCz0GRdStkW3eM6IacFj7q1FTtr45tDYBu3ui4C36dsh7i4E4ILPPTfOcRr1sFuaGNwzNCq67inZ5ZWRl4XC21vK8y3uDQMOnxDoKQelQt8bG4j2IxPTm1BxI8kG4HH7VKQzmmNfgFT2ii0yE4FTwRxPIVLhvS9_TvR89AVPZOSU8rm3GyzqWa9bzilwYZoZ0Jfw_9lgQCOzmfAVzx6CHSpNetF0JNYR8ZZMA4DXg_1OPbL-D753nsbEfFK2wAtxYL9fyENFavfBQI6uTRdSoxtwHmtocerqoktAz90a8v1gR6GvIsvaWqg0XUYi87071LImLLQM3T6MlfMNnj1SQ78sxhsAIp2Ks4g9nb8kYsE-ytDTp6J0AOjdwVvdCis1R2FWLVAXyY5neX22piF1Oy9jDpyHZ6ISejtmrkkZR0xuWaa7vd_OV_Z7fwyp91hDN_4uj_X9Lwv0s9Q2VhIDriIKP4xz2XFuojia3RAObAmidPerhPoG-SkZbmuDt7FvT5wCS1hTSMz-Fvl37sR0mG5lW78qf4galTUCEbMyDcUQ_i9MAAfw79-QQfARJmS6DdNe0_oIXbAi1qKCX0xaZxGVIlx29y3m52BuvyWq9Ck1Ziu2ESUlR8qfKtH-Pey-GdEotKJPOr0UpsS5Q7tA8hkCuRR-atmpagVxbmoXHXN7RJt8uT1Hi5T-fCMZkYBHWdp28Ls4hKEttH65fYlJsHmEe-uO0c5dij6PHoD5xhOomxA0N8ydF3xDJRVEl4mpinDP84LA54YwmpscO4u3YOULBmzh9gdJkXbw84Hlsr3deUCbp=w1980-h1080-no?authuser=0')` }}>
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