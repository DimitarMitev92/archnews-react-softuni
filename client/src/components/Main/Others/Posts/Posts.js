//REACT
import { useEffect, useState } from "react";
//REACT COMPONENTS
import { CardPost } from "../../../UI/Card.js";
//REACT HOOKS
//REACT CONTEXT
//REACT ROUTER
//SERVICES
import { getAllPosts } from '../../../../services/posts.js';

export const Posts = () => {

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        getAllPosts()
            .then(allPosts => {
                if (allPosts.code === 404) {
                    console.log('Not Found');
                    setPosts([]);
                } else {
                    setPosts(allPosts);
                }
            });
    }, []);
    return (
        <section className="container bg-secondary  m-5 mx-auto">
            <div className="row bg-black">
                <h2 className="text-center p-4 text-light">ARCHITECTURE NEWS</h2>
            </div>

            {posts.length !== 0 ?
                posts.map(post =>
                    <CardPost
                        key={post._id}
                        imageUrl={post.imageUrl}
                        title={post.title}
                        location={post.location}
                        date={post._createdOn}
                        likes={post.likes}
                        info={post.post}
                        postId={post._id}
                    />) :
                <h3 className="text-center p-4 text-light">There are no posts yet.</h3>}

        </section>
    );
};