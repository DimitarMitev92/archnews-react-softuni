import { Link } from 'react-router-dom';

export const MyProfile = () => {
    return (
        <section className="container bg-secondary  m-5 mx-auto">
            <div className="row bg-black">
                <h2 className="text-center pt-4 text-light ">YOUR PROFILE</h2>
                <h3 className="text-center pb-1 pt-4 text-light ">Dimitar Mitev</h3>
                <h4 className="text-center p-1 text-light">Posts: 3</h4>
            </div>

            {/* Start: Current Post */}
            <div className="row p-5 border-top border-light border-2">
                <div className="col zoom-in">
                    <img className="img-fluid  border border-2 border-light" src="https://lh3.googleusercontent.com/pw/AMWts8CSJQZw5TziHGvx-rIGHyUOwF_dZoermaBARiy4QjMWXIAgsokJNd5-sXk-pC04dckew_r7yn9wcRdER4LBIvGHm0qDswpiqjWB3eKTT6pAbYPsMPGTgC1uXkPf-Hyl9msfC3u4g0o-RYVXsN_CtcBt=w2120-h1413-no?authuser=0"
                        alt="partner1" />
                </div>
                <div className="col">
                    <h3 className="text-light">Most Visited Products of Wallcovering </h3>
                    <h5 className="text-light"><i><ion-icon name="location-outline"></ion-icon></i> Milano</h5>
                    <h5 className="text-light"><i><ion-icon name="calendar-outline"></ion-icon></i> 22.02.2023</h5>
                    <h5 className="text-light"><i><ion-icon name="heart-outline"></ion-icon></i> Likes: 10</h5>

                    <article className="text-light">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto facere
                        molestias
                        voluptatibus
                        impedit architecto aliquid cum culpa perferendis? Voluptate, consectetur!</article>
                    <Link href="/edit/:postId" className="btn btn-success m-2">Edit</Link>
                    <Link href="/" className="btn btn-danger m-2">Delete</Link>
                </div>
            </div>
            {/* End: Current Post  */}

            {/* Start: Current Post  */}
            <div className="row p-5 border-top border-light border-2">
                <div className="col">
                    <figure>
                        <img className="img-fluid  border border-2 border-light" src="https://lh3.googleusercontent.com/pw/AMWts8BQzX4Azc4oGZMkrASpZgTFNTZtI8ej_sNQ85JDZ7y8hyy1P7T4yfUs7BPt-_rcZQjwPwjx26t92xjdZN5wruPgyrAwXQh5EQo-N-Cto5DHZ2NaaqqamTxK83Sd6DSY1g7bAKq5DSe5cq3lNn-tpUJw=w1886-h1413-no?authuser=0"
                            alt="partner1" />
                    </figure>
                </div>
                <div className="col">
                    <h3 className="text-light">Most Visited Products of Wallcovering </h3>
                    <h5 className="text-light"><i><ion-icon name="location-outline"></ion-icon></i>Dubai</h5>
                    <h5 className="text-light"><i><ion-icon name="calendar-outline"></ion-icon></i> 20.02.2023</h5>
                    <h5 className="text-light"><i><ion-icon name="heart-outline"></ion-icon></i> Likes: 10</h5>

                    <article className="text-light">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto facere
                        molestias
                        voluptatibus
                        impedit architecto aliquid cum culpa perferendis? Voluptate, consectetur!</article>
                    <Link href="/edit/:postId" className="btn btn-success m-2">Edit</Link>
                    <Link href="/" className="btn btn-danger m-2">Delete</Link>
                </div>
            </div>
            {/* End: Current Post  */}

            {/* Start: Current Post  */}
            <div className="row p-5 border-top border-light border-2">
                <div className="col">
                    <img className="img-fluid  border border-2 border-light" src="https://lh3.googleusercontent.com/pw/AMWts8C7oubJFAavqfbOygAYshzKGN6bMwld3-a7nZFHDXC7vl7N47SDohZlHDidr9TwoEo6OPrraPZ0VbXRhW9HbtmILWK1U934fN64Mh2vmSwEM-hHkMM9yD83TJvA3p0rMn4y7INsJDukJk77_lJeo8Xl=w1979-h1413-no?authuser=0"
                        alt="partner1" />
                </div>
                <div className="col">
                    <h3 className="text-light">Most Visited Products of Wallcovering </h3>
                    <h5 className="text-light"><i><ion-icon name="location-outline"></ion-icon></i>Sidney</h5>
                    <h5 className="text-light"><i><ion-icon name="calendar-outline"></ion-icon></i> 12.02.2023</h5>
                    <h5 className="text-light"><i><ion-icon name="heart-outline"></ion-icon></i> Likes: 10</h5>

                    <article className="text-light">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto facere
                        molestias
                        voluptatibus
                        impedit architecto aliquid cum culpa perferendis? Voluptate, consectetur!</article>
                    <Link href="/edit/:postId" className="btn btn-success m-2">Edit</Link>
                    <Link href="/" className="btn btn-danger m-2">Delete</Link>
                </div>
            </div>
            {/* End: Current Post  */}
        </section>
    );
};