//REACT
import { useEffect, useState, useContext } from 'react';
//REACT COMPONENTS
import { Button } from '../../../UI/Button.js';
//REACT HOOKS
//REACT CONTEXT
import { AuthContext } from '../../../../contexts/authContext.js';
//REACT ROUTER
import { useParams, useNavigate } from 'react-router-dom';
//SERVICES
import { getPostByPostId, deletePost } from '../../../../services/posts.js';
import { createLikes, getAllLikesForPost } from '../../../../services/likes.js';
//UTILS
import { dateParser } from '../../../../utils/dateParser.js';


export const Details = () => {

    const navigate = useNavigate();

    const { postId } = useParams();
    const { auth } = useContext(AuthContext);

    const [isOwner, setIsOwner] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const [likes, setLikes] = useState(0);
    const [isLogIn, setIsLogIn] = useState(false);

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

    const deletePostHandler = () => {
        const userChoice = window.confirm('Are you sure you want to delete this post? If you delete it, you won\'t be able to recover it.');
        if (userChoice) {
            deletePost(postId, auth.accessToken)
                .then((result) => {
                    if (result.code === 403) throw new Error(result.message);
                    navigate('/posts');
                })
                .catch((error) => alert(error.message));
        }
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

    return (
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
                                                onClick={deletePostHandler}
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
                            style={{ objectFit: "cover", objectPosition: "left" }} />
                    </div>
                </div>
            </div>
        </section>
    );
};