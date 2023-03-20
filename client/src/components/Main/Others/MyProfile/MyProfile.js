//REACT
//REACT COMPONENTS
import { CardProfile } from './CardProfile.js';
//REACT HOOKS
//REACT CONTEXT
//REACT ROUTER
//SERVICES


export const MyProfile = () => {

    const currentUser = "Dimitar Mitev";

    const myPosts = [];
    // const myPosts =
    //     [
    //         {
    //             postId: "1",
    //             imageUrl: "https://lh3.googleusercontent.com/pw/AMWts8CSJQZw5TziHGvx-rIGHyUOwF_dZoermaBARiy4QjMWXIAgsokJNd5-sXk-pC04dckew_r7yn9wcRdER4LBIvGHm0qDswpiqjWB3eKTT6pAbYPsMPGTgC1uXkPf-Hyl9msfC3u4g0o-RYVXsN_CtcBt=w2120-h1413-no?authuser=0",
    //             title: "Most Visited Products of Wallcovering",
    //             location: "Milano",
    //             date: "22.02.2023",
    //             likes: "10",
    //             info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto facere molestias voluptatibus impedit architecto aliquid cum culpa perferendis? Voluptate, consectetur!",
    //         },
    //         {
    //             postId: "2",
    //             imageUrl: "https://lh3.googleusercontent.com/pw/AMWts8BQzX4Azc4oGZMkrASpZgTFNTZtI8ej_sNQ85JDZ7y8hyy1P7T4yfUs7BPt-_rcZQjwPwjx26t92xjdZN5wruPgyrAwXQh5EQo-N-Cto5DHZ2NaaqqamTxK83Sd6DSY1g7bAKq5DSe5cq3lNn-tpUJw=w1886-h1413-no?authuser=0",
    //             title: "Most Visited Products of Wallcovering",
    //             location: "Milano",
    //             date: "22.02.2023",
    //             likes: "10",
    //             info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto facere molestias voluptatibus impedit architecto aliquid cum culpa perferendis? Voluptate, consectetur!",
    //         },
    //         {
    //             postId: "3",
    //             imageUrl: "https://lh3.googleusercontent.com/pw/AMWts8C7oubJFAavqfbOygAYshzKGN6bMwld3-a7nZFHDXC7vl7N47SDohZlHDidr9TwoEo6OPrraPZ0VbXRhW9HbtmILWK1U934fN64Mh2vmSwEM-hHkMM9yD83TJvA3p0rMn4y7INsJDukJk77_lJeo8Xl=w1979-h1413-no?authuser=0",
    //             title: "Most Visited Products of Wallcovering",
    //             location: "Milano",
    //             date: "22.02.2023",
    //             likes: "10",
    //             info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto facere molestias voluptatibus impedit architecto aliquid cum culpa perferendis? Voluptate, consectetur!",
    //         }
    //     ];


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
                        key={post.postId}
                        postId={post.postId}
                        imageUrl={post.imageUrl}
                        title={post.title}
                        location={post.location}
                        date={post.date}
                        likes={post.likes}
                        info={post.info}
                    />) :
                <h3 className="text-center p-4 text-light">There are no posts yet.</h3>
            }

        </section>
    );
};