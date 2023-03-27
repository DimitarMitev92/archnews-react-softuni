//REACT
import { useEffect, useState } from "react";
//REACT COMPONENTS
import { CardPost } from "../../../UI/Card.js";
//REACT HOOKS
//REACT CONTEXT
//REACT ROUTER
//SERVICES
import { getAllPosts } from '../../../../services/posts.js';
//UTILS
import { searcherViaName } from '../../../../utils/searchViaName.js';

export const Posts = () => {

    const [posts, setPosts] = useState([]);
    const [searchName, setSearchName] = useState('');

    useEffect(() => {
        getAllPosts()
            .then(allPosts => {
                if (allPosts.code === 404) {
                    setPosts([]);
                } else {
                    setPosts(allPosts);
                }
            }).catch((error) => alert(error));
    }, [searchName]);

    const searchViaNameHandler = (e) => {
        setSearchName(e.target.value);

    };

    const searchSubmitHandler = (e) => {
        e.preventDefault();
        setPosts(searcherViaName(searchName, posts));
    };

    return (
        <section className="container bg-secondary  m-5 mx-auto">
            <div className="row bg-black">
                <h2 className="text-center p-4 text-light">ARCHITECTURE NEWS</h2>
            </div>
            <form className="d-flex m-3" role="search" onSubmit={searchSubmitHandler}>
                <input className="form-control me-2" type="search" placeholder="Search via name" aria-label="Search" onChange={searchViaNameHandler} value={searchName} />
                <button className="btn btn-light btn-lg" type="submit">Search</button>
            </form>


            {posts.length !== 0 ?
                posts.map(post =>
                    <CardPost
                        key={post._id}
                        imageUrl={post.imageUrl}
                        title={post.title}
                        location={post.location}
                        date={post._createdOn}
                        info={post.post}
                        postId={post._id}
                    />) :
                (searchName ?
                    <h3 className="text-center p-4 text-light">Posts with this name doesn't exists.</h3> :
                    <h3 className="text-center p-4 text-light">There are no posts yet.</h3>)
            }
        </section>
    );
};