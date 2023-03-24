//REACT
import { useEffect, useState, useContext } from 'react';
//REACT COMPONENTS
import { CardProfile } from './CardProfile.js';
//REACT HOOKS
//REACT CONTEXT
import { AuthContext } from '../../../../contexts/authContext.js';
//REACT ROUTER
import { useNavigate } from 'react-router-dom';
//SERVICES
import { getAllPostByUserId, deletePost } from '../../../../services/posts.js';
//UTILS
import { dateParser } from '../../../../utils/dateParser.js';


export const MyProfile = () => {

    const navigate = useNavigate();



    const { auth } = useContext(AuthContext);

    const [myPosts, setMyPosts] = useState([]);

    const currentUser = auth.name;

    useEffect(() => {
        getAllPostByUserId(auth._id)
            .then(result => {
                setMyPosts(result);
            });
    }, [myPosts]);

    const deletePostHandler = (postId) => {
        const userChoice = window.confirm('Are you sure you want to delete this post? If you delete it ,you won\'t be able to recover it.');
        if (userChoice) {
            deletePost(postId, auth.accessToken)
                .then((result) => {
                    console.log(postId);
                    if (result.code === 403) throw new Error(result.message);
                    navigate('/my-profile');
                })
                .catch((error) => alert(error.message));
        }
    };


    return (
        <section className="container bg-secondary  m-5 mx-auto">
            <div className="row bg-black">
                <h2 className="text-center pt-4 text-light ">YOUR PROFILE</h2>
                <h3 className="text-center pb-1 pt-4 text-light ">{currentUser}</h3>
                <h4 className="text-center p-1 text-light">Posts: {myPosts.length}</h4>
            </div>


            {myPosts.length !== 0 ?
                myPosts.map(post =>
                    <CardProfile
                        key={post._id}
                        postId={post._id}
                        imageUrl={post.imageUrl}
                        title={post.title}
                        location={post.location}
                        date={dateParser(post._createdOn)}
                        likes={post.likes}
                        info={post.post}
                        deleteHandler={deletePostHandler}
                    />) :
                <h3 className="text-center p-4 text-light">There are no posts yet.</h3>
            }

        </section>
    );
};