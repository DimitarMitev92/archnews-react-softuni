import { useState } from 'react';

export const Edit = () => {

    //FIX INITIAL STATE FROM CURRENT POST
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [post, setPost] = useState('');

    const [validTitle, setValidTitle] = useState(false);
    const [validLocation, setValidLocation] = useState(false);
    const [validImageUrl, setValidImageUrl] = useState(false);
    const [validPost, setValidPost] = useState(false);

    const changeTitleHandler = (e) => {
        setTitle(e.target.value);
        if (e.target.value.trim().length > 0) {
            setValidTitle(previousState => previousState = true);
        } else {
            setValidTitle(previousState => previousState = false);
        }
    };

    const changeLocationHandler = (e) => {
        setLocation(e.target.value);
        if (e.target.value.trim().length > 0) {
            setValidLocation(previousState => previousState = true);
        } else {
            setValidLocation(previousState => previousState = false);
        }
    };

    const changeImageUrlHandler = (e) => {
        setImageUrl(e.target.value);
        const regex = /^https?:\/\//gm;
        setValidImageUrl(previousState => previousState = regex.test(e.target.value.trim()));
    };

    const changePostHandler = (e) => {
        setPost(e.target.value);
        if (e.target.value.trim().length > 20) {
            setValidPost(previousState => previousState = true);
        } else {
            setValidPost(previousState => previousState = false);
        }
    };

    const submitEditHandler = (e) => {
        e.preventDefault();
        if (validTitle && validLocation && validImageUrl && validPost) {
            try {
                //SOME FIX
                const userId = 1;
                const date = new Date();
                const likes = 0;
            } catch (error) {
                console.log(error.message);
            }
        }
    };



    return (
        <section className="vh-100 bg-image" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/pw/AMWts8A9tMv0KVNWgitYMIAxPXZR_IRoAXBFmGHgunUSriu_8FfR77lC_SFZLu_9DuNBv6RBJWMr2c_auQQCJosKzjaVkO-ahsZGX73Tbs0TVPmKGHSWMSTgvlKO5whr43o15NnkbmT_iCjha-zYbhWU9g_B=w1980-h1080-no?authuser=0')` }}>
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
                                            <input type="text" id="titleInput" className={`form-control form-control-lg ${validTitle ? 'is-valid' : 'is-invalid'}`}
                                                value={title}
                                                onChange={changeTitleHandler}
                                                onBlur={changeTitleHandler} />
                                            <div className="valid-feedback">
                                                Right title.
                                            </div>
                                            <div className="invalid-feedback">
                                                Enter post's title.
                                            </div>

                                        </div>

                                        <div className="form-outline mb-2">
                                            <label className="form-label" htmlFor="locationInput">Location</label>
                                            <input type="text" id="locationInput"
                                                className={`form-control form-control-lg ${validLocation ? "is-valid" : "is-invalid"}`}
                                                value={location}
                                                onChange={changeLocationHandler}
                                                onBlur={changeLocationHandler} />
                                            <div className="valid-feedback">
                                                Right location.
                                            </div>
                                            <div className="invalid-feedback">
                                                Enter post's location.
                                            </div>
                                        </div>

                                        <div className="form-outline mb-2">
                                            <label className="form-label" htmlFor="imageInput">Image Link</label>
                                            <input type="text" id="imageInput" className={`form-control form-control-lg ${validImageUrl ? 'is-valid' : 'is-invalid'}`}
                                                value={imageUrl}
                                                onChange={changeImageUrlHandler}
                                                onBlur={changeImageUrlHandler}
                                            />
                                            <div className="valid-feedback">
                                                Right image link.
                                            </div>
                                            <div className="invalid-feedback">
                                                Enter post's image link.
                                            </div>
                                        </div>

                                        <div className="form-outline mb-2">
                                            <div className="form-group">
                                                <label htmlFor="exampleFormControlTextarea1">Your Post</label>
                                                <textarea
                                                    className={`form-control ${validPost ? "is-valid" : "is-invalid"}`} id="exampleFormControlTextarea1"
                                                    rows="3"
                                                    value={post}
                                                    onChange={changePostHandler}
                                                    onBlur={changePostHandler}
                                                ></textarea>
                                                <div className="valid-feedback">
                                                    Right post.
                                                </div>
                                                <div className="invalid-feedback">
                                                    Enter your post. Post must be longer than 20 characters.
                                                </div>
                                            </div>
                                        </div>




                                        <div className="d-flex justify-content-center">
                                            <button type="submit" className={`btn btn-secondary btn-lg m-3 ${!(validTitle && validLocation && validImageUrl && validPost) ? "disabled" : ""}`}>Edit</button>
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