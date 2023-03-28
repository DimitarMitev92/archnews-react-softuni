//REACT
import { useContext, useEffect, useState } from "react";
//REACT COMPONENTS
import { CardPost } from "../../../UI/Card.js";
//REACT HOOKS
//REACT CONTEXT
import { AuthContext } from "../../../../contexts/authContext.js";
//REACT ROUTER
//SERVICES
import { getAllPosts } from '../../../../services/posts.js';
import { getAllLikes } from "../../../../services/likes.js";
//UTILS
import { searcherViaName } from '../../../../utils/searchViaName.js';
import { addLikesToCurrentPost } from "../../../../utils/addLikesToPost.js";

export const Posts = () => {

    const { auth } = useContext(AuthContext);

    const [myPosts, setPosts] = useState([]);
    const [myPostsWithLikes, setMyPostsWithLikes] = useState([]);
    const [searchName, setSearchName] = useState('');
    const [likes, setLikes] = useState([]);

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

    useEffect(() => {
        getAllLikes()
            .then((result) => {
                if (result.code === 404) {
                    result = [];
                }
                setLikes(previousState => previousState = result);
            })
            .catch((error) => alert(error.message));
    }, [auth._id]);


    useEffect(() => {
        setMyPostsWithLikes(previousState => previousState = addLikesToCurrentPost(myPosts, likes));
    }, [myPosts, likes]);

    const searchViaNameHandler = (e) => {
        setSearchName(e.target.value);
    };

    const searchSubmitHandler = (e) => {
        e.preventDefault();
        setPosts(searcherViaName(searchName, myPosts));
    };

    // TODO: MAYBE MAKE A SORTING
    // useEffect(() => {
    //     if (sortBy === 'Newest') {
    //         setMyPostsWithLikes(previousState => previousState = myPostsWithLikes.sort((a, b) => new Date(b._createdOn) - new Date(a._createdOn)));
    //     } else if (sortBy === 'Oldest') {
    //         setMyPostsWithLikes(previousState => previousState = myPostsWithLikes.sort((a, b) => new Date(a._createdOn) - new Date(b._createdOn)));
    //     } else if (sortBy === "Most liked") {
    //         setMyPostsWithLikes(previousState => previousState = myPostsWithLikes.sort((a, b) => b.likes - a.likes));
    //     }

    // }, [sortBy]);




    return (
        <section className="container bg-secondary  m-5 mx-auto">
            <div className="row bg-black">
                <h2 className="text-center p-4 text-light">ARCHITECTURE NEWS</h2>
            </div>
            <form className="d-flex m-3" role="search" onSubmit={searchSubmitHandler}>
                <input className="form-control me-2" type="search" placeholder="Search via name" aria-label="Search" onChange={searchViaNameHandler} value={searchName} />
                <button className="btn btn-light btn-lg" type="submit">Search</button>
            </form>

            {myPostsWithLikes.length !== 0 ?
                myPostsWithLikes.map(post =>
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
                (searchName ?
                    <h3 className="text-center p-4 text-light">Posts with this name doesn't exists.</h3> :
                    <h3 className="text-center p-4 text-light">There are no posts yet.</h3>)
            }
        </section>
    );
};