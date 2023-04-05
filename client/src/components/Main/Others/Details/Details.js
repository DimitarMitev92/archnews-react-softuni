//REACT
import { useEffect, useState, useContext } from 'react';
//REACT COMPONENTS
import { Button } from '../../../UI/Button.js';
import { ModalDelete } from '../../../UI/ModalDelete.js';
import { CommentLine } from '../../../UI/CommentLine.js';
import { Image } from '../../../UI/Image.js';
import { Loading } from '../../../UI/Loading.js';
//REACT HOOKS
//REACT CONTEXT
import { AuthContext } from '../../../../contexts/authContext.js';
//REACT ROUTER
import { useParams, useNavigate } from 'react-router-dom';
//SERVICES
import { getPostByPostId, deletePost } from '../../../../services/posts.js';
import { createLikes, deleteLike, getAllLikesForPost } from '../../../../services/likes.js';
import { createComments, getAllCommentsForPost, deleteComment } from '../../../../services/comments.js';
//UTILS
import { dateParser } from '../../../../utils/dateParser.js';
import { FullScreenImage } from '../../../UI/FullScreenImage.js';
import { ButtonSubmit } from '../../../UI/ButtonSubmit.js';


export const Details = () => {

    const navigate = useNavigate();

    const { postId } = useParams();
    const { auth } = useContext(AuthContext);

    const [isOwner, setIsOwner] = useState(false);
    const [isLogIn, setIsLogIn] = useState(false);

    const [post, setPost] = useState({});

    const [likes, setLikes] = useState(0);
    const [isLiked, setIsLiked] = useState(false);
    const [likeId, setLikeId] = useState('');

    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const [commentText, setCommentText] = useState('');
    const [isComment, setIsComment] = useState(false);
    const [commentsPost, setCommentPost] = useState([]);

    const [isClickedImage, setIsClickImage] = useState(false);

    const [showLoading, setShowLoading] = useState(true);

    const [clickDeleteComment, setClickDeleteComment] = useState(false);

    useEffect(() => {
        getPostByPostId(postId)
            .then(post => {
                setPost(previousState => previousState = post);
                if (post._ownerId === auth._id) {
                    setIsOwner(previousState => previousState = true);
                }
                setShowLoading(previousState => previousState = false);
            }).catch(error => alert(error.message));
    }, [postId, auth._id]);

    // -----> START: LIKES <------

    useEffect(() => {
        getAllLikesForPost(postId)
            .then((result) => {
                if (result.code === 404) {
                    result = [];
                }
                setLikes(previousState => previousState = result.length);
                const currentLike = result.filter(like => like._ownerId === auth._id);
                if (currentLike.length !== 0) {

                    setIsLiked(previousState => previousState = true);
                    setLikeId(previousState => previousState = currentLike[0]._id);
                }
            }).catch(error => alert(error.message));

    }, [auth, postId, isLiked]);

    const likeHandler = () => {
        const dataLike = {
            likedUser: auth._id,
            postId
        };
        createLikes(dataLike, auth.accessToken)
            .then((result) => {
                setIsLiked(previousState => previousState = true);
            }).catch(error => {
                alert(error.message);
            });
    };

    const dislikeHandler = () => {
        deleteLike(likeId, auth.accessToken)
            .then(result => {
                setIsLiked(previousState => previousState = false);
            }).catch(error => alert(error.message));
    };

    // -----> END: LIKES <------

    // -----> START: LogIn <------

    useEffect(() => {
        if (auth._id) {
            setIsLogIn(previousState => previousState = true);
        } else {
            setIsLogIn(previousState => previousState = false);
        }
    }, [auth._id]);

    // -----> END: LogIn <------

    // -----> START: DELETE <------

    const clickDeleteHandler = () => {
        setShowDeleteModal(previousState => previousState = true);
    };

    const closeModalHandler = () => {
        setShowDeleteModal(previousState => previousState = false);
    };

    const deletePostHandler = () => {
        deletePost(postId, auth.accessToken)
            .then((result) => {
                if (result.code === 403) throw new Error(result.message);
                navigate('/my-profile');
            })
            .catch((error) => alert(error.message));
    };

    // -----> END: DELETE <------

    // -----> START: COMMENTS <------

    const changeCommentHandler = (e) => {
        setCommentText(previousState => previousState = e.target.value);


    };

    useEffect(() => {
        getAllCommentsForPost(postId)
            .then(result => {
                result = result.map((comment) => comment = { ...comment, isOwnerComment: auth._id === comment._ownerId ? true : false });
                setCommentPost(previousState => previousState = result);
            }).catch((error) => alert(error.message));
    }, [auth, postId, isComment, clickDeleteComment]);

    const onSubmitComment = async (e) => {
        e.preventDefault();
        const comment = commentText;
        const author = auth.name;
        const accessToken = auth.accessToken;

        const commentData = {
            postId,
            comment,
            author
        };

        await createComments(commentData, accessToken);
        setIsComment(previousState => previousState = !previousState);
        setCommentText(previousState => previousState = '');
    };

    const clickDeleteCommentHandler = (e) => {
        deleteComment(e.target.parentElement.id, auth.accessToken)
            .then(result => {
                setClickDeleteComment(previousState => previousState = !previousState);
            })
            .catch(error => console.log(error.message));
    };

    // -----> END: COMMENTS <------

    // -----> START: FULL SCREEN IMAGE <------

    const fullScreenHandler = () => {
        setIsClickImage(previousState => previousState = true);
    };

    const closeFullScreenHandler = () => {
        setIsClickImage(previousState => previousState = false);
    };

    // -----> END: FULL SCREEN IMAGE <------

    return (
        <>
            {showLoading ? <Loading /> :
                <>
                    {isClickedImage && <FullScreenImage imageUrl={post.imageUrl} onClick={closeFullScreenHandler} />}
                    {showDeleteModal && <ModalDelete
                        onClickClose={closeModalHandler}
                        onClickDelete={deletePostHandler} />}
                    <section className="vh-auto overflow-hidden mt-5">
                        <div className="d-flex justify-content-center align-content-center">
                            <div className="row">
                                <div className="col-sm-6 text-black d-flex justify-content-center align-items-center flex-md-column">
                                    <h2 className="text-uppercase text-center m-5">{post.title}</h2>
                                    <h5 className="text-dark"><i><ion-icon name="location-outline"></ion-icon></i> {post.location}</h5>
                                    <h5 className="text-dark"><i><ion-icon name="calendar-outline"></ion-icon></i> {dateParser(post._createdOn)}</h5>
                                    <h5 className="text-dark">LIKES: {likes}</h5>
                                    <article style={{ textIndent: "50px" }} className="text-dark p-4 ">{post.post}
                                    </article>
                                    <div className="d-flex justify-content-center">
                                        {isLogIn &&
                                            <>
                                                {isOwner ?
                                                    <>
                                                        <Button
                                                            to={`/edit/${post._id}`}
                                                            className={"btn btn-success m-2"}
                                                            title={"Edit"}
                                                        />
                                                        <Button
                                                            onClick={clickDeleteHandler}
                                                            className={"btn btn-danger m-2"}
                                                            title={"Delete"}
                                                        />
                                                    </> :
                                                    <>
                                                        {isLiked ?
                                                            <Button
                                                                onClick={dislikeHandler}
                                                                className={"btn btn-danger m-2"}
                                                                title={"Dislike"}
                                                            />
                                                            :
                                                            < Button
                                                                onClick={likeHandler}
                                                                className={"btn btn-success m-2"}
                                                                title={"Like"}
                                                            />
                                                        }
                                                    </>
                                                }
                                            </>
                                        }
                                    </div>
                                </div>
                                <div className="col-sm-6 px-0 d-none d-sm-block">
                                    <Image
                                        src={post.imageUrl}
                                        alt="post"
                                        className="img-fluid"
                                        style={{ objectFit: "cover", objectPosition: "left", cursor: "pointer" }}
                                        onClick={fullScreenHandler}
                                    />
                                </div>
                            </div>
                        </div>
                        <form className='row d-flex justify-content-center align-items-center m-5' onSubmit={onSubmitComment}>
                            <div className="col-6 text-light d-flex justify-content-center align-items-center flex-md-column bg-secondary p-3" style={{ borderRadius: "5px" }}>
                                {commentsPost.length !== 0 ? commentsPost.map((comment) =>
                                    <CommentLine
                                        key={comment._id}
                                        id={comment._id}
                                        author={comment.author}
                                        comment={comment.comment}
                                        onClick={clickDeleteCommentHandler}
                                        title="Delete"
                                        className="btn btn-danger m-2"
                                        isOwnerComment={comment.isOwnerComment}
                                    />) :
                                    <h5 className='d-flex justify-content-center align-items-center border-bottom border-light border-2 w-100 p-2'>No one has commented yet.</h5>}
                                {isLogIn && !isOwner ? <>
                                    <textarea className='form-control w-75 m-3' value={commentText} onChange={changeCommentHandler}></textarea>
                                    <ButtonSubmit
                                        className="btn btn-light btn"
                                        title="Comment"
                                    />
                                </> : ''}
                            </div>
                        </form>
                    </section>
                </>
            }
        </>
    );
};