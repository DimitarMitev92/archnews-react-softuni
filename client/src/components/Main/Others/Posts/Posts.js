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
import { ButtonSubmit } from "../../../UI/ButtonSubmit.js";
import { RadioButton } from "../../../UI/RadioButton.js";

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

    const radioButtons = [{
        key: "0",
        classNameDiv: "form-check form-check-inline",
        classNameInput: "form-check-input",
        classNameLabel: "form-check-label",
        nameInput: "inlineRadioOptions",
        idInput: "inlineRadio1",
        valueInput: "newest",
        onClick: sortClickHandler,
        style: { backgroundColor: "#adb5bd" },
        htmlFor: "inlineRadio1",
        titleLabel: "Newest",
        defaultChecked: false,
    }, {
        key: "1",
        classNameDiv: "form-check form-check-inline",
        classNameInput: "form-check-input",
        classNameLabel: "form-check-label",
        nameInput: "inlineRadioOptions",
        idInput: "inlineRadio2",
        valueInput: "oldest",
        onClick: sortClickHandler,
        style: { backgroundColor: "#adb5bd" },
        htmlFor: "inlineRadio2",
        titleLabel: "Oldest",
        defaultChecked: true,

    }, {
        key: "2",
        classNameDiv: "form-check form-check-inline",
        classNameInput: "form-check-input",
        classNameLabel: "form-check-label",
        nameInput: "inlineRadioOptions",
        idInput: "inlineRadio3",
        valueInput: "mostLiked",
        onClick: sortClickHandler,
        style: { backgroundColor: "#adb5bd" },
        htmlFor: "inlineRadio3",
        titleLabel: "Most liked",
        defaultChecked: false,

    }];

    return (
        <section className="container bg-secondary  m-5 mx-auto p-5">
            <div className="row bg-black">
                <h2 className="text-center p-4 text-light">ARCHITECTURE NEWS</h2>
            </div>
            <form className="d-flex m-3" role="search" onSubmit={searchSubmitHandler}>
                <input className="form-control me-2" type="search" placeholder="Search by name" aria-label="Search" onChange={searchViaNameHandler} value={searchName} />
                <ButtonSubmit
                    className="btn btn-light btn-lg"
                    title="Search"
                />
            </form>

            <div className="d-flex justify-content-center align-items-center m-3 bg-light" style={{ borderRadius: "5px" }}>
                <p className="d-flex justify-content-center align-items-center m-2">Sort by: </p>

                {radioButtons.map(radioButton => <RadioButton
                    key={radioButton.key}
                    classNameDiv={radioButton.classNameDiv}
                    classNameInput={radioButton.classNameInput}
                    classNameLabel={radioButton.classNameLabel}
                    nameInput={radioButton.nameInput}
                    idInput={radioButton.idInput}
                    valueInput={radioButton.valueInput}
                    onClick={radioButton.onClick}
                    style={radioButton.style}
                    htmlFor={radioButton.htmlFor}
                    titleLabel={radioButton.titleLabel}
                    defaultChecked={radioButton.defaultChecked}
                />)}

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