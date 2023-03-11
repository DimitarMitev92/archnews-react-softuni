export const Edit = () => {
    return (
        <section className="vh-100 bg-image" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/I8BR5cNU7s1m4VoAkTSe7c4lAsaGn_APYNW7LtwiLjXEun1vj-wKHiWsB4YDwuNRAwEPCH437UV6WeQ4H5DA2O5lUaG9rN4rmD-7KerhyxasFIVZiJ7sIK9dwBxB-XfPFjopECrJfv2aSJHgtTAvL-2WZ91-Fo6R1BbFPUyieyU9_DtExqrfkSxStXldv6zodB6SBdOdk5MfZUiTHtpKSA96o1kPpYHqnK85HOgifu6hMk13zAdUOLe7fc_VpaYI0pMpIk_pJ6tuZgpaw7thhDaA3Ixx0vvBCE8maZv1ewifc7VQzKiKl5pTvK8ngvqVSpU0I3kbGOLv1EJ0ibG3RW0H03tUpWGvNL-ZsTtFU-O5bfq0RmhxfAqZ4-mDVFn6Ljc7adAsIoSeRcDCl281tYIXN2pHeO7pKuIP1M8rG-UgaiD5jVHxq_WFMR0o7WMIqHfyITPnbj6CQK_dLxwZ81BpugqgdGGj1T50Ms11DAcK_nUR00r4AuT4POlT9BQd5nPRGtnj2TIStwNQve_6jTnSl2TM2O6ExuBcnHrk5fqNeSbr8dnoKJoX1y9ZMlCIRc5cCTzDDut2y3EEMy9-4PmjPNtgYM_48PlgoCyNXgzcy8zEOCjp5UpvqvUPUG5yNA11PT7gZWSkdk-GXJVklNMmt-zokzEimxb40MTFbcCA5Zp10NCy4t693J8wKX2ogZf1ipUwpXFbhWlgCAPmB8eUUi_Q38iaoI6jBd-5SNH_3dtw0eBX5QcshJv5RVJE61Fr9aXlfi8jov9Rr6NTacq2tOaqL9_w8ys0VmlpwbDPMs5lTnZDkAetgtcWZHNY6Od0kfH9q5zGQTsPYtwaVqFpzauBxV4EEf6Irc5W0_qE18beOli-j6WgZrnNVTSUH9nZH3zjH8uJYrwUC1c3z510DDCF5INl-uLHX8S3BbHY=w1980-h1080-no?authuser=0')` }}>
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