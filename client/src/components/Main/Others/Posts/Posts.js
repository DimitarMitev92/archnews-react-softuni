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
    const [sortBy, setSortBy] = useState('oldest');


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
        const posts = addLikesToCurrentPost(myPosts, likes);
        if (sortBy === 'oldest') {
            setMyPostsWithLikes(previousState => previousState = posts.sort((a, b) => a._createdOn - b._createdOn));
        } else if (sortBy === 'newest') {
            setMyPostsWithLikes(previousState => previousState = posts.sort((a, b) => b._createdOn - a._createdOn));
        } else if (sortBy === 'mostLiked') {
            setMyPostsWithLikes(previousState => previousState = posts.sort((a, b) => b.likes - a.likes));
        }
    }, [myPosts, likes, sortBy]);

    const searchViaNameHandler = (e) => {
        setSearchName(e.target.value);
    };

    const searchSubmitHandler = (e) => {
        e.preventDefault();
        setPosts(searcherViaName(searchName, myPosts));
    };

    const sortClickHandler = (e) => {
        setSortBy(previousState => previousState = e.target.value);
    };

    return (
        <section className="container bg-secondary  m-5 mx-auto">
            <div className="row bg-black">
                <h2 className="text-center p-4 text-light">ARCHITECTURE NEWS</h2>
            </div>
            <form className="d-flex m-3" role="search" onSubmit={searchSubmitHandler}>
                <input className="form-control me-2" type="search" placeholder="Search by name" aria-label="Search" onChange={searchViaNameHandler} value={searchName} />
                <button className="btn btn-light btn-lg" type="submit">Search</button>
            </form>

            <div className="d-flex justify-content-center align-items-center m-3 bg-light" style={{ borderRadius: "5px" }}>
                <p className="d-flex justify-content-center align-items-center m-2">Sort by: </p>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="newest" onClick={sortClickHandler} style={{ backgroundColor: "#adb5bd" }} />
                    <label className="form-check-label" htmlFor="inlineRadio1">Newest</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="oldest" onClick={sortClickHandler} defaultChecked style={{ backgroundColor: "#adb5bd" }} />
                    <label className="form-check-label" htmlFor="inlineRadio2">Oldest</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="mostLiked" onClick={sortClickHandler} style={{ backgroundColor: "#adb5bd" }} />
                    <label className="form-check-label" htmlFor="inlineRadio3">Most liked</label>
                </div>
            </div>

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