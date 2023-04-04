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

    const [createUserData, setCreateUserData] = useState({
        title: '',
        location: '',
        imageUrl: '',
        post: ''
    });

    const [validCreateData, setValidCreateData] = useState({
        title: false,
        location: false,
        imageUrl: false,
        post: false
    });

    const [isClickCreateUser, setIsClickCreateUser] = useState({
        title: false,
        location: false,
        imageUrl: false,
        post: false
    });

    const clickCreateUserHandler = (e) => {
        setIsClickCreateUser({ ...isClickCreateUser, [e.target.name]: true });
    };

    const changeTitleHandler = (e) => {
        setCreateUserData({ ...createUserData, [e.target.name]: e.target.value });
        if (e.target.value.trim().length > 0) {
            setValidCreateData({ ...validCreateData, [e.target.name]: true });
        } else {
            setValidCreateData({ ...validCreateData, [e.target.name]: false });

        }
    };

    const changeLocationHandler = (e) => {
        setCreateUserData({ ...createUserData, [e.target.name]: e.target.value });
        if (e.target.value.trim().length > 0) {
            setValidCreateData({ ...validCreateData, [e.target.name]: true });
        } else {
            setValidCreateData({ ...validCreateData, [e.target.name]: false });
        }
    };

    const changeImageUrlHandler = (e) => {
        setCreateUserData({ ...createUserData, [e.target.name]: e.target.value });
        const regex = /^https?:\/\//;
        setValidCreateData({ ...validCreateData, [e.target.name]: regex.test(e.target.value.trim()) });

    };

    const changePostHandler = (e) => {
        setCreateUserData({ ...createUserData, [e.target.name]: e.target.value });

        if (e.target.value.trim().length > 20) {
            setValidCreateData({ ...validCreateData, [e.target.name]: true });
        } else {
            setValidCreateData({ ...validCreateData, [e.target.name]: false });
        }
    };

    const submitCreateHandler = (e) => {
        e.preventDefault();

        const postData = {
            title: createUserData.title,
            location: createUserData.location,
            imageUrl: createUserData.imageUrl,
            post: createUserData.post,
        };

        createPost(auth.accessToken, postData)
            .then((result) => {
                navigate('/posts');
            })
            .catch(() => navigate('/404'));

        setCreateUserData({
            title: '',
            location: '',
            imageUrl: '',
            post: ''
        });

    };

    const createInputs = [
        {
            title: "Title",
            htmlFor: "titleInput",
            type: "text",
            validItem: validCreateData.title,
            value: createUserData.title,
            name: "title",
            onChange: changeTitleHandler,
            onBlur: changeTitleHandler,
            onClick: clickCreateUserHandler,
            isClicked: isClickCreateUser.title,
            validFeedback: "Right title.",
            invalidFeedback: "Enter post's title.",
        }, {
            title: "Location",
            htmlFor: "locationInput",
            type: "text",
            validItem: validCreateData.location,
            value: createUserData.location,
            name: 'location',
            onChange: changeLocationHandler,
            onBlur: changeLocationHandler,
            onClick: clickCreateUserHandler,
            isClicked: isClickCreateUser.location,
            validFeedback: "Right location.",
            invalidFeedback: "Enter post's location.",
        }, {
            title: "Image Link",
            htmlFor: "imageInput",
            type: "url",
            validItem: validCreateData.imageUrl,
            value: createUserData.imageUrl,
            name: "imageUrl",
            onChange: changeImageUrlHandler,
            onBlur: changeImageUrlHandler,
            onClick: clickCreateUserHandler,
            isClicked: isClickCreateUser.imageUrl,
            validFeedback: "Right image link",
            invalidFeedback: "Enter post's image link.",
        }];

    useEffect(() => {
        setCreateForm(previousState => previousState = createInputs);
    }, [
        isClickCreateUser.title,
        isClickCreateUser.location,
        isClickCreateUser.imageUrl,
        isClickCreateUser.post,
        createUserData.title,
        createUserData.location,
        createUserData.imageUrl,
        createUserData.post
    ]);


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
                                            name={createInput.name}
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
                                            validItem={validCreateData.post}
                                            value={createUserData.post}
                                            name="post"
                                            onChange={changePostHandler}
                                            onBlur={changePostHandler}
                                            onClick={clickCreateUserHandler}
                                            isClicked={isClickCreateUser.post}
                                            validFeedback={"Right post."}
                                            invalidFeedback={"Enter your post."}
                                        />

                                        <div className="d-flex justify-content-center">
                                            <ButtonSubmit
                                                className={`btn btn-secondary btn-lg m-3 ${!(
                                                    validCreateData.title && validCreateData.location &&
                                                    validCreateData.imageUrl &&
                                                    validCreateData.post) ?
                                                    "disabled" : ""}`}
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