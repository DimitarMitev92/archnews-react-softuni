//REACT
import { useState } from 'react';
//REACT COMPONENTS
import { InputFiend } from '../../../UI/InputField.js';
import { InputTextarea } from '../../../UI/InputTextarea.js';
//REACT HOOKS
//REACT CONTEXT
//REACT ROUTER
import { useNavigate } from 'react-router-dom';
//SERVICES
import { create } from '../../../../services/crud.js';


export const Create = () => {

    const navigation = useNavigate();

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

    const submitCreateHandler = (e) => {
        e.preventDefault();

        if (validTitle && validLocation && validImageUrl && validPost) {
            //SOME FIX
            const userId = 1;
            const date = new Date();
            const likes = 0;
            create(title, location, imageUrl, post, date, likes, userId)
                .then(result => console.log(result));
            navigation('/details/:postId');
            // .catch(error => console.log(error.message));
        }

    };


    return (
        <section className="vh-100 bg-image" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/pw/AMWts8AypubVIK2f7_ULlKclY6W-MWbDWAuy0rJ4_knaEKTbBpviu1MHgXxukBtcCWv05wb5kEn5yXql2x4Su2L1Q0HPkhDrAy1UJxgDt5h1v_MQhcXQgcKCzG9vdQKVJrhwryxWQgrQ2w2zXA7k-zypnRgL=w1980-h1080-no?authuser=0')` }}>
            <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div className="card" style={{ borderRadius: "15px" }}>
                                <div className="card-body p-5 ">
                                    <h2 className="text-uppercase text-center mb-5">CREATE A POST</h2>

                                    <form onSubmit={submitCreateHandler}>

                                        <InputFiend
                                            title={"Title"}
                                            htmlFor={"titleInput"}
                                            type={"text"}
                                            validItem={validTitle}
                                            value={title}
                                            onChange={changeTitleHandler}
                                            onBlur={changeTitleHandler}
                                            validFeedback={"Right title."}
                                            invalidFeedback={"Enter post's title."}
                                        />

                                        <InputFiend
                                            title={"Location"}
                                            htmlFor={"locationInput"}
                                            type={"text"}
                                            validItem={validLocation}
                                            value={location}
                                            onChange={changeLocationHandler}
                                            onBlur={changeLocationHandler}
                                            validFeedback={"Right location."}
                                            invalidFeedback={"Enter post's location."}
                                        />

                                        <InputFiend
                                            title={"Image Link"}
                                            htmlFor={"imageInput"}
                                            type={"url"}
                                            validItem={validImageUrl}
                                            value={imageUrl}
                                            onChange={changeImageUrlHandler}
                                            onBlur={changeImageUrlHandler}
                                            validFeedback={"Right image link"}
                                            invalidFeedback={"Enter post's image link."}
                                        />

                                        <InputTextarea
                                            title={"Your Post"}
                                            htmlFor={"createTextarea"}
                                            validItem={validPost}
                                            value={post}
                                            onChange={changePostHandler}
                                            onBlur={changePostHandler}
                                            validFeedback={"Right post."}
                                            invalidFeedback={"Enter your post."}
                                        />

                                        <div className="d-flex justify-content-center">
                                            <button type="submit" className={`btn btn-secondary btn-lg m-3 ${!(validTitle && validLocation && validImageUrl && validPost) ? "disabled" : ""}`}>Create</button>
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