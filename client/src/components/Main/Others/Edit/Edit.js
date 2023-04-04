//IMAGES AND LOGOS
import background from '../../../../assets/images/edit/edit-image.png';
//REACT
//REACT COMPONENTS
import { InputField } from '../../../UI/InputField.js';
import { InputTextarea } from '../../../UI/InputTextarea.js';
//REACT HOOKS
import { useState, useEffect, useContext } from 'react';
//REACT CONTEXT
import { AuthContext } from '../../../../contexts/authContext.js';
//REACT ROUTER  
import { useParams, useNavigate } from 'react-router-dom';
//SERVICES
import { getPostByPostId, updatePost } from '../../../../services/posts.js';
import { ButtonSubmit } from '../../../UI/ButtonSubmit.js';

export const Edit = () => {

    const { postId } = useParams();
    const { auth } = useContext(AuthContext);
    const navigate = useNavigate();

    const [editForm, setEditForm] = useState([]);

    const [editUserData, setEditUserData] = useState({
        title: '',
        location: '',
        imageUrl: '',
        post: ''
    });

    const [likesData, setLikesData] = useState({
        likes: 0,
        usersLiked: []
    });

    const [validEditData, setValidEditData] = useState({
        title: true,
        location: true,
        imageUrl: true,
        post: true
    });

    const [isClickEdit, setIsClickEdit] = useState({
        title: false,
        location: false,
        imageUrl: false,
        post: false
    });

    const clickEditHandler = (e) => {
        setIsClickEdit({ ...isClickEdit, [e.target.name]: true });
    };

    useEffect(() => {
        getPostByPostId(postId)
            .then(post => {
                setEditUserData({
                    title: post.title,
                    location: post.location,
                    imageUrl: post.imageUrl,
                    post: post.post
                });
                setLikesData({
                    likes: post.likes,
                    usersLiked: post.usersLiked
                });
            }).catch(error => alert(error.message));
    }, [postId]);


    const changeTitleHandler = (e) => {
        setEditUserData({ ...editUserData, [e.target.name]: e.target.value });
        if (e.target.value.trim().length > 0) {
            setValidEditData({ ...validEditData, [e.target.name]: true });
        } else {
            setValidEditData({ ...validEditData, [e.target.name]: false });

        }
    };

    const changeLocationHandler = (e) => {
        setEditUserData({ ...editUserData, [e.target.name]: e.target.value });
        if (e.target.value.trim().length > 0) {
            setValidEditData({ ...validEditData, [e.target.name]: true });
        } else {
            setValidEditData({ ...validEditData, [e.target.name]: false });
        }
    };

    const changeImageUrlHandler = (e) => {
        setEditUserData({ ...editUserData, [e.target.name]: e.target.value });
        const regex = /^https?:\/\//;
        setValidEditData({ ...validEditData, [e.target.name]: regex.test(e.target.value.trim()) });

    };

    const changePostHandler = (e) => {
        setEditUserData({ ...editUserData, [e.target.name]: e.target.value });
        if (e.target.value.trim().length > 20) {
            setValidEditData({ ...validEditData, [e.target.name]: true });
        } else {
            setValidEditData({ ...validEditData, [e.target.name]: false });
        }
    };

    const submitEditHandler = (e) => {
        e.preventDefault();
        const postData = {
            title: editUserData.title,
            location: editUserData.location,
            imageUrl: editUserData.imageUrl,
            post: editUserData.post,
            likes: likesData.likes,
            usersLiked: likesData.usersLiked
        };
        updatePost(postId, postData, auth.accessToken)
            .then(result => {
                if (result.code === 403) throw new Error('You are not authorized!');
                if (result.code === 404) throw new Error(result.message);
                navigate(`/details/${postId}`);
            })
            .catch(error => alert(error.message));

        setEditUserData({
            title: '',
            location: '',
            imageUrl: '',
            post: ''
        });

    };

    const editInputs = [{
        title: "Title",
        htmlFor: "titleInput",
        type: "text",
        validItem: validEditData.title,
        value: editUserData.title,
        name: "title",
        onChange: changeTitleHandler,
        onBlur: changeTitleHandler,
        onClick: clickEditHandler,
        isClicked: isClickEdit.title,
        validFeedback: "Right title.",
        invalidFeedback: "Enter post's title.",
    }, {
        title: "Location",
        htmlFor: "locationInput",
        type: "text",
        validItem: validEditData.location,
        value: editUserData.location,
        name: "location",
        onChange: changeLocationHandler,
        onBlur: changeLocationHandler,
        onClick: clickEditHandler,
        isClicked: isClickEdit.location,
        validFeedback: "Right location.",
        invalidFeedback: "Enter post's location.",
    }, {
        title: "Image Link",
        htmlFor: "imageInput",
        type: "url",
        validItem: validEditData.imageUrl,
        value: editUserData.imageUrl,
        name: "imageUrl",
        onChange: changeImageUrlHandler,
        onBlur: changeImageUrlHandler,
        onClick: clickEditHandler,
        isClicked: isClickEdit.imageUrl,
        validFeedback: "Right image link.",
        invalidFeedback: "Enter post's image link.",
    }];

    useEffect(() => {
        setEditForm(previousState => previousState = editInputs);
    }, [
        isClickEdit.title,
        isClickEdit.location,
        isClickEdit.imageUrl,
        isClickEdit.post,
        editUserData.title,
        editUserData.location,
        editUserData.imageUrl,
        editUserData.post]);

    return (
        <section className="vh-100 bg-image" style={{ backgroundImage: `url(${background})` }}>
            <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div className="card" style={{ borderRadius: "15px" }}>
                                <div className="card-body p-5 ">
                                    <h2 className="text-uppercase text-center mb-5">EDIT POST</h2>

                                    <form onSubmit={submitEditHandler}>
                                        {editForm.map((editInput, index) => <InputField
                                            key={index}
                                            title={editInput.title}
                                            htmlFor={editInput.htmlFor}
                                            type={editInput.type}
                                            validItem={editInput.validItem}
                                            value={editInput.value}
                                            name={editInput.name}
                                            onChange={editInput.onChange}
                                            onBlur={editInput.onBlur}
                                            onClick={editInput.onClick}
                                            isClicked={editInput.isClicked}
                                            validFeedback={editInput.validFeedback}
                                            invalidFeedback={editInput.invalidFeedback}
                                        />)}

                                        <InputTextarea
                                            title={"Your Post"}
                                            htmlFor={"editTextarea"}
                                            validItem={validEditData.post}
                                            value={editUserData.post}
                                            name="post"
                                            onChange={changePostHandler}
                                            onBlur={changePostHandler}
                                            onClick={clickEditHandler}
                                            isClicked={isClickEdit.post}
                                            validFeedback={"Right post."}
                                            invalidFeedback={"Enter your post."}

                                        />

                                        <div className="d-flex justify-content-center">
                                            <ButtonSubmit
                                                className={`btn btn-secondary btn-lg m-3 ${!(
                                                    validEditData.title && validEditData.location && validEditData.imageUrl && validEditData.post) ? "disabled" : ""}`}
                                                title="Edit"
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