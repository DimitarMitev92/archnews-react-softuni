//REACT
import { useEffect, useState, useContext } from 'react';
//REACT COMPONENTS
import { Button } from '../../../UI/Button.js';
import { ModalDelete } from '../../../UI/ModalDelete.js';
import { CommentLine } from '../../../UI/CommentLine.js';
//REACT HOOKS
//REACT CONTEXT
import { AuthContext } from '../../../../contexts/authContext.js';
//REACT ROUTER
import { useParams, useNavigate } from 'react-router-dom';
//SERVICES
import { getPostByPostId, deletePost } from '../../../../services/posts.js';
import { createLikes, getAllLikesForPost } from '../../../../services/likes.js';
import { createComments, getAllCommentsForPost } from '../../../../services/comments.js';
//UTILS
import { dateParser } from '../../../../utils/dateParser.js';
import { FullScreenImage } from '../../../UI/FullScreenImage.js';


export const Details = () => {

    const navigate = useNavigate();

    const { postId } = useParams();
    const { auth } = useContext(AuthContext);

    const [isOwner, setIsOwner] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const [likes, setLikes] = useState(0);
    const [isLogIn, setIsLogIn] = useState(false);

    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const [commentText, setCommentText] = useState('');
    const [isComment, setIsComment] = useState(false);
    const [commentsPost, setCommentPost] = useState([]);

    const [isClickedImage, setIsClickImage] = useState(false);

    const [post, setPost] = useState({});

    useEffect(() => {
        getPostByPostId(postId)
            .then(post => {
                setPost(previousState => previousState = post);
                if (post._ownerId === auth._id) {
                    setIsOwner(previousState => previousState = true);
                }
            }).catch(error => alert(error.message));
    }, [postId, auth._id]);

    useEffect(() => {
        if (auth._id) {
            setIsLogIn(previousState => previousState = true);
        } else {
            setIsLogIn(previousState => previousState = false);
        }
    }, [auth._id]);

    useEffect(() => {
        getAllLikesForPost(postId)
            .then((result) => {
                if (result.code === 404) {
                    return setLikes(0);
                }
                setLikes(result.length);
                const isCurrentUserLikedPost = Boolean(result.filter(x => x.likedUser === auth._id).length);
                setIsLiked(isCurrentUserLikedPost);
            }).catch(error => alert(error.message));
    }, [auth._id, likes, postId]);

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

    const likeHandle = async () => {
        const likeData = {
            likedUser: auth._id,
            postId: postId
        };
        createLikes(likeData, auth.accessToken)
            .then((result) => {
                getAllLikesForPost(postId)
                    .then((result) => {
                        setLikes(result.length);
                    });
            }).catch(error => alert(error.message));
    };

    const comments = [{
        _id: '0',
        author: 'Dimitar',
        comment: 'Mnogo qko prodaljavai'
    }, {
        _id: '1',
        author: 'Kondio',
        comment: 'Pisna mi da se zanimawam s prostotii'
    }];

    const changeCommentHandler = (e) => {
        setCommentText(previousState => previousState = e.target.value);
    };

    useEffect(() => {
        console.log(postId);
        getAllCommentsForPost(postId)
            .then(result => {
                setCommentPost(previousState => previousState = result);
            }).catch((error) => console.log(error.message));
    }, [auth, postId, isComment]);

    const onSubmitComment = async (e) => {
        e.preventDefault();
        const comment = commentText;
        const author = auth.email.split("@")[0];
        const _id = auth._id;
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

    const fullScreenHandler = () => {
        setIsClickImage(previousState => previousState = true);
    };

    const closeFullScreenHandler = () => {
        setIsClickImage(previousState => previousState = false);
    };

    return (
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
                                            <Button
                                                onClick={likeHandle}
                                                className={"btn btn-success m-2"}
                                                title={"Like"}
                                                disabled={isLiked}
                                            />

                                        }
                                    </>
                                }
                            </div>
                        </div>
                        <div className="col-sm-6 px-0 d-none d-sm-block">
                            <img className="img-fluid" src={post.imageUrl} alt="post"
                                style={{ objectFit: "cover", objectPosition: "left" }} onClick={fullScreenHandler} />
                        </div>
                    </div>
                </div>
                <form className='row d-flex justify-content-center align-items-center m-5' onSubmit={onSubmitComment}>
                    <div className="col-6 text-light d-flex justify-content-center align-items-center flex-md-column bg-secondary p-3" style={{ borderRadius: "5px" }}>
                        {commentsPost.length !== 0 ? commentsPost.map((comment) =>
                            <CommentLine
                                key={comment._id}
                                author={comment.author}
                                comment={comment.comment}
                                _createdOn={comment._createdOn}
                            />) :
                            <h5 className='d-flex justify-content-center align-items-center border-bottom border-light border-2 w-100 p-2'>No one has commented yet.</h5>}
                        {isLogIn && !isOwner ? <>
                            <textarea className='form-control w-75 m-3' value={commentText} onChange={changeCommentHandler}></textarea>
                            <button type="submit" className="btn btn-light btn">Comment</button>
                        </> : ''}
                    </div>
                </form>
            </section>
        </>
    );
};