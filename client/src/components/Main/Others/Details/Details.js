//REACT
import { useEffect, useState } from 'react';
//REACT COMPONENTS
import { Button } from '../../../UI/Button.js';
//REACT HOOKS
//REACT CONTEXT
//REACT ROUTER
import { useParams } from 'react-router-dom';
//SERVICES
import { getPostById } from '../../../../services/posts.js';
//UTILS
import { dateParser } from '../../../../utils/dateParser.js';


export const Details = () => {
    const { postId } = useParams();

    const [post, setPost] = useState({});

    useEffect(() => {
        getPostById(postId)
            .then(post => {
                setPost(post);
            });

    }, [postId]);

    //TODO LIKES, EDIT, DELETE, AND VISIBLE BUTTONS BY USER AND OWNER

    return (
        <section className="vh-auto overflow-hidden">
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
                            <Button
                                to={"/"}
                                className={"btn btn-success m-2"}
                                title={"Like"}
                            />
                            <Button
                                to={"/"}
                                className={"btn btn-danger m-2"}
                                title={"Dislike"}
                            />
                            {/* //TODO FIX POSTID */}
                            <Button
                                to={`/edit/${post._id}`}
                                className={"btn btn-success m-2"}
                                title={"Edit"}
                            />
                            <Button
                                to={"/"}
                                className={"btn btn-danger m-2"}
                                title={"Delete"}
                            />
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