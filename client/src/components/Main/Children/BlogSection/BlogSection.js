//REACT
import { useState, useEffect } from 'react';
//REACT COMPONENTS
import { CardPost } from '../../../UI/Card.js';
import { Button } from '../../../UI/Button.js';
//REACT HOOKS
//REACT CONTEXT
//REACT ROUTER
//SERVICES
import { getAllPosts } from '../../../../services/posts.js';


export const BlogSection = () => {

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
        < section className="container bg-secondary  m-5 mx-auto" >
            <div className="row bg-black">
                <h2 className="text-center p-4 text-light ">ARCHITECTURE POSTS</h2>
            </div>;

            {posts.length !== 0 ?
                posts.map(post =>
                    <CardPost key={post.postId}
                        imageUrl={post.imageUrl}
                        altImage={post.altImage}
                        title={post.title}
                        location={post.location}
                        date={post.date}
                        likes={post.likes}
                        info={post.info}
                        postId={post.postId}
                    />) :
                <h3 className="text-center p-4 text-light">There are no posts yet.</h3>}

            {posts.length === 0 ||
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