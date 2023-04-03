//IMAGES AND LOGOS
import background from '../../../../assets/images/create/create-imageNew.png';
//REACT
import { useContext, useEffect, useState } from 'react';
//REACT COMPONENTS
import { InputField } from '../../../UI/InputField.js';
import { InputTextarea } from '../../../UI/InputTextarea.js';
//REACT HOOKS
//REACT CONTEXT
import { AuthContext } from '../../../../contexts/authContext.js';
//REACT ROUTER
import { useNavigate } from 'react-router-dom';
//SERVICES
import { createPost } from '../../../../services/posts.js';
import { ButtonSubmit } from '../../../UI/ButtonSubmit.js';


export const Create = () => {

    const navigate = useNavigate();

    const { auth } = useContext(AuthContext);

    const [createForm, setCreateForm] = useState([]);

    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [post, setPost] = useState('');

    const [validTitle, setValidTitle] = useState(false);
    const [validLocation, setValidLocation] = useState(false);
    const [validImageUrl, setValidImageUrl] = useState(false);
    const [validPost, setValidPost] = useState(false);

    const [isClickTitle, setIsClickTitle] = useState(false);
    const [isClickLocation, setIsClickLocation] = useState(false);
    const [isClickImageLink, setIsClickImageLink] = useState(false);
    const [isClickPost, setIsClickPost] = useState(false);

    const clickTitleHandler = (e) => {
        setIsClickTitle(previousState => previousState = true);
    };

    const clickLocationHandler = (e) => {
        setIsClickLocation(previousState => previousState = true);
    };

    const clickImageLinkHandler = (e) => {
        setIsClickImageLink(previousState => previousState = true);
    };

    const clickPostHandler = (e) => {
        setIsClickPost(previousState => previousState = true);
    };




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
        const regex = /^https?:\/\//;
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

        const postData = {
            title,
            location,
            imageUrl,
            post,
        };

        createPost(auth.accessToken, postData)
            .then((result) => {
                navigate('/posts');
            })
            .catch(() => navigate('/404'));

        setTitle(preventDefault => preventDefault = '');
        setLocation(preventDefault => preventDefault = '');
        setImageUrl(preventDefault => preventDefault = '');
        setPost(preventDefault => preventDefault = '');
    };

    const createInputs = [
        {
            title: "Title",
            htmlFor: "titleInput",
            type: "text",
            validItem: validTitle,
            value: title,
            onChange: changeTitleHandler,
            onBlur: changeTitleHandler,
            onClick: clickTitleHandler,
            isClicked: isClickTitle,
            validFeedback: "Right title.",
            invalidFeedback: "Enter post's title.",
        }, {
            title: "Location",
            htmlFor: "locationInput",
            type: "text",
            validItem: validLocation,
            value: location,
            onChange: changeLocationHandler,
            onBlur: changeLocationHandler,
            onClick: clickLocationHandler,
            isClicked: isClickLocation,
            validFeedback: "Right location.",
            invalidFeedback: "Enter post's location.",
        }, {
            title: "Image Link",
            htmlFor: "imageInput",
            type: "url",
            validItem: validImageUrl,
            value: imageUrl,
            onChange: changeImageUrlHandler,
            onBlur: changeImageUrlHandler,
            onClick: clickImageLinkHandler,
            isClicked: isClickImageLink,
            validFeedback: "Right image link",
            invalidFeedback: "Enter post's image link.",
        }];

    useEffect(() => {
        setCreateForm(previousState => previousState = createInputs);
    }, [isClickTitle, isClickLocation, isClickImageLink, isClickPost, title, location, imageUrl, post]);


    return (
        <section className="vh-100 bg-image" style={{ backgroundImage: `url(${background})` }}>
            <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div className="card" style={{ borderRadius: "15px" }}>
                                <div className="card-body p-5 ">
                                    <h2 className="text-uppercase text-center mb-5">CREATE A POST</h2>

                                    <form onSubmit={submitCreateHandler}>

                                        {createForm.map((createInput, index) => <InputField
                                            key={index}
                                            title={createInput.title}
                                            htmlFor={createInput.htmlFor}
                                            type={createInput.type}
                                            validItem={createInput.validItem}
                                            value={createInput.value}
                                            onChange={createInput.onChange}
                                            onBlur={createInput.onBlur}
                                            onClick={createInput.onClick}
                                            isClicked={createInput.isClicked}
                                            validFeedback={createInput.validFeedback}
                                            invalidFeedback={createInput.invalidFeedback}
                                        />)}

                                        <InputTextarea
                                            title={"Your Post"}
                                            htmlFor={"createTextarea"}
                                            validItem={validPost}
                                            value={post}
                                            onChange={changePostHandler}
                                            onBlur={changePostHandler}
                                            onClick={clickPostHandler}
                                            isClicked={isClickPost}
                                            validFeedback={"Right post."}
                                            invalidFeedback={"Enter your post."}
                                        />

                                        <div className="d-flex justify-content-center">
                                            <ButtonSubmit
                                                className={`btn btn-secondary btn-lg m-3 ${!(validTitle && validLocation && validImageUrl && validPost) ? "disabled" : ""}`}
                                                title="Create"
                                            />
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