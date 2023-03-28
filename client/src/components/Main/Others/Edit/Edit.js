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

export const Edit = () => {

    const { postId } = useParams();
    const { auth } = useContext(AuthContext);
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [post, setPost] = useState('');

    const [likes, setLikes] = useState(0);
    const [usersLiked, setUsersLiked] = useState([]);

    const [validTitle, setValidTitle] = useState(true);
    const [validLocation, setValidLocation] = useState(true);
    const [validImageUrl, setValidImageUrl] = useState(true);
    const [validPost, setValidPost] = useState(true);

    useEffect(() => {
        getPostByPostId(postId)
            .then(post => {
                setTitle(post.title);
                setLocation(post.location);
                setImageUrl(post.imageUrl);
                setPost(post.post);
                setLikes(post.likes);
                setUsersLiked(post.usersLiked);
            }).catch(error => alert(error.message));
    }, [postId]);


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
        const postData = {
            title,
            location,
            imageUrl,
            post,
            likes,
            usersLiked
        };
        updatePost(postId, postData, auth.accessToken)
            .then(result => {
                if (result.code === 403) throw new Error('You are not authorized!');
                if (result.code === 404) throw new Error(result.message);
                navigate(`/details/${postId}`);
            })
            .catch(error => alert(error.message));

        setTitle(previousState => previousState = '');
        setLocation(previousState => previousState = '');
        setImageUrl(previousState => previousState = '');
        setPost(previousState => previousState = '');

    };

    const editInputs = [{
        title: "Title",
        htmlFor: "titleInput",
        type: "text",
        validItem: validTitle,
        value: title,
        onChange: changeTitleHandler,
        onBlur: changeTitleHandler,
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
        validFeedback: "Right image link.",
        invalidFeedback: "Enter post's image link.",
    }];

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
                                        {editInputs.map((editInput, index) => <InputField
                                            key={index}
                                            title={editInput.title}
                                            htmlFor={editInput.htmlFor}
                                            type={editInput.type}
                                            validItem={editInput.validItem}
                                            value={editInput.value}
                                            onChange={editInput.onChange}
                                            onBlur={editInput.onBlur}
                                            validFeedback={editInput.validFeedback}
                                            invalidFeedback={editInput.invalidFeedback}
                                        />)}

                                        <InputTextarea
                                            title={"Your Post"}
                                            htmlFor={"editTextarea"}
                                            validItem={validPost}
                                            value={post}
                                            onChange={changePostHandler}
                                            onBlur={changePostHandler}
                                            validFeedback={"Right post."}
                                            invalidFeedback={"Enter your post."}

                                        />

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