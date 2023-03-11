export const Create = () => {
    return (
        <section className="vh-100 bg-image" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/yf9gYkjKkct0Mrcn4oOgliexWkrRFFumP9pJocaJX6vf-T0ZChOk7Tuz91tnF1CyqJlKlANQQ97FRC-HPnljPtDjFwAu94K41QA1uxlgQVRaQVu0H-uV5Bn4QYQysxrkDi9_St8xtXHNoh44Kh921NvEjRgsSfAVevl5e08HlF6XcRiTjcXyQkQcX-0K1mAjmB8GPUapYNdb_RyHzoC5-dztiG3UYQib7HFdbDyAuG3ojRXNJPkpUUCbKIYpWHJUNtXsP0peg-_mjPz9cVAIgZak4Xg6zepmKHV8K_8Qq4A-mkPidHMBc_T-2MPvXVGMtZs7g2XHMBm-NuSxYYJGGroBPULYJTFff15JdvBvDvRdDpa3jD9a0W0cVqtSZItm9-zBSy-xfunwVmCoNfyhLSsBybmW7gNVvqkrB8wSYWN9DOgLKzU2h4yb41OO3pYvZWnZGraOX48pEsm_qhi2s-OWGM3zwU2yyPkW0HEcavVd0VGUfSGh1HvyG-TxtpDVm52b47NrEc8tPG9XWW1eT5DPbvEsTopNSd7e3fezTUvnzXRVoK-EsUOFi_B4uVjqCfur95_hSefiYYadJILRTJlVN4LVH6wOcBbIrQ3bgeyrWqayp_3IyBz3lnP4VN6Hf6rNRo7KB2TJSKyX3W8Ck0s9ZgpOHCCsZSlyTAbnYgr-CyfPF5tVCQw2O0euyk6RJN-aBUpPkzKZ1U6rZb29hmIGindvWagdLC9DJe2ltDumeZ3oA4VS_nPOTk78bUi5QNvUvEcu-gWSYM9qjag0VbT9RUXH4f8qXLTSAaID6VC5XYe2dlmfPxzEuh987jrHzC7tUieo24jmVV_cCg5ZreZubEEwPCuJNMbzTvvMSKKlg-2SNI3KxtjzcngcA2yWNMeGtq4sNAI0W2aR5Cbea5vdn5HnFDfWB-r9G0ScWs_S=w1980-h1080-no?authuser=0')` }}>
            <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div className="card" style={{ borderRadius: "15px" }}>
                                <div className="card-body p-5 ">
                                    <h2 className="text-uppercase text-center mb-5">CREATE A POST</h2>

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
                                            <button type="button" className="btn btn-secondary btn-lg m-3">Create</button>
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