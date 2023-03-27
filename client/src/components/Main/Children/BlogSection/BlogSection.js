//REACT
import { useState, useEffect, useContext } from 'react';
//REACT COMPONENTS
import { CardPost } from '../../../UI/Card.js';
import { Button } from '../../../UI/Button.js';
//REACT HOOKS
//REACT CONTEXT
import { AuthContext } from '../../../../contexts/authContext.js';
//REACT ROUTER
//SERVICES
import { getAllPosts } from '../../../../services/posts.js';
import { getAllLikes } from '../../../../services/likes.js';
//UTILS
import { addLikesToCurrentPost } from '../../../../utils/addLikesToPost.js';


export const BlogSection = () => {

    const { auth } = useContext(AuthContext);

    const [myPosts, setPosts] = useState([]);
    const [myPostsWithLikes, setMyPostsWithLikes] = useState([]);
    const [likes, setLikes] = useState([]);

    useEffect(() => {

        getAllPosts()
            .then(allPosts => {
                if (allPosts.code === 404) {
                    setPosts([]);
                } else {
                    setPosts(allPosts.slice(-3).reverse());
                }
            })
            .catch((error) => alert(error));
    }, []);

    useEffect(() => {
        getAllLikes()
            .then((result) => {
                setLikes(previousState => previousState = result);
            });
    }, [auth._id]);

    useEffect(() => {
        setMyPostsWithLikes(previousState => previousState = addLikesToCurrentPost(myPosts, likes));
    }, [myPosts, likes]);

    return (
        < section className="container bg-secondary  m-5 mx-auto" >
            <div className="row bg-black">
                <h2 className="text-center p-4 text-light ">ARCHITECTURE POSTS</h2>
            </div>

            {myPostsWithLikes.length !== 0 ?
                myPostsWithLikes.map(post =>
                    <CardPost key={post._id}
                        imageUrl={post.imageUrl}
                        title={post.title}
                        location={post.location}
                        date={post._createdOn}
                        likes={post.likes}
                        info={post.post}
                        postId={post._id}
                    />) :
                <h3 className="text-center p-4 text-light">There are no posts yet.</h3>}

            {myPostsWithLikes.length === 0 ||
                <div className="d-flex align-items-center justify-content-center" style={{ height: "100px" }}>
                    <Button
                        to={"/posts"}
                        className={"btn btn-light btn-lg"}
                        title={"Load More"}
                    />
                </div>
            }

        </ section>
    );
};