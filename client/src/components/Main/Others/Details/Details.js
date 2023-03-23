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
import { getPostById, deletePost } from '../../../../services/posts.js';
//UTILS
import { dateParser } from '../../../../utils/dateParser.js';


export const Details = () => {

    const navigate = useNavigate();

    const { postId } = useParams();

    const { auth } = useContext(AuthContext);

    const [currentPost, setCurrentPost] = useState({});
    const [isOwner, setIsOwner] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const [isLogIn, setIsLogIn] = useState(false);

    const [post, setPost] = useState({});

    useEffect(() => {
        getPostById(postId)
            .then(post => {
                setCurrentPost(previousState => previousState = post);
                setPost(previousState => previousState = post);
                if (post._ownerId === auth._id) {
                    setIsOwner(previousState => previousState = true);
                }
            });

    }, [postId, auth._id]);

    useEffect(() => {
        if (auth._id) {
            setIsLogIn(previousState => previousState = true);
        } else {
            setIsLogIn(previousState => previousState = false);
        }
    }, [auth]);

    const deletePostHandler = () => {
        const userChoice = window.confirm('Are you sure you want to delete this post? If you delete it, you won\'t be able to recover it.');
        if (userChoice) {
            deletePost(postId, auth.accessToken)
                .then((result) => {
                    if (result.code === 403) throw new Error(result.message);
                    console.log(result);
                    navigate('/posts');
                })
                .catch((error) => alert(error.message));
        }
    };

    //TODO: FIX LIKES AND DISLIKE FUNCTIONALITY
    const likeHandle = () => {
        // setIsLiked(previousState => previousState = true);
        // console.log(currentPost);
        // setCurrentPost(post => ({ ...post, likes: (post.likes + 1), usersLiked: [...post.usersLiked, auth._id] }));
        // console.log(currentPost);
        // updatePost(postId, currentPost, auth.accessToken)
        //     .then(result => console.log(result));
    };

    const dislikeHandler = () => {
        // console.log('dislike');
    };

    return (
        <section className="vh-auto overflow-hidden mt-5">
            <div className="d-flex justify-content-center align-content-center">
                <div className="row">
                    <div className="col-sm-6 text-black d-flex justify-content-center align-items-center flex-md-column">
                        <h2 className="text-uppercase text-center m-5">{post.title}</h2>
                        <h5 className="text-dark"><i><ion-icon name="location-outline"></ion-icon></i> {post.location}</h5>
                        <h5 className="text-dark"><i><ion-icon name="calendar-outline"></ion-icon></i> {dateParser(post._createdOn)}</h5>
                        <h5 className="text-dark">LIKES: {post.likes}</h5>
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
                                        <>
                                            <Button
                                                onClick={likeHandle}
                                                className={"btn btn-success m-2"}
                                                title={"Like"}
                                                disabled={isLiked}
                                            />
                                            <Button
                                                onClick={dislikeHandler}
                                                className={"btn btn-danger m-2"}
                                                title={"Dislike"}
                                                disabled={isLiked}
                                            />
                                        </>
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