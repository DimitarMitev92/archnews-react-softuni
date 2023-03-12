export const BlogSection = () => {
    return (
        < section className="container bg-secondary  m-5 mx-auto" >
            <div className="row bg-black">
                <h2 className="text-center p-4 text-light ">ARCHITECTURE POSTS</h2>
            </div>;

            {/* <!-- Start: Current Post --> */}
            <div className="row p-5 border-top border-light border-2">
                <div className="col zoom-in">
                    <img className="img-fluid  border border-2 border-light" src="https://lh3.googleusercontent.com/pw/AMWts8CSJQZw5TziHGvx-rIGHyUOwF_dZoermaBARiy4QjMWXIAgsokJNd5-sXk-pC04dckew_r7yn9wcRdER4LBIvGHm0qDswpiqjWB3eKTT6pAbYPsMPGTgC1uXkPf-Hyl9msfC3u4g0o-RYVXsN_CtcBt=w2120-h1413-no?authuser=0"
                        alt="partner1" />
                </div>
                <div className="col">
                    <h3 className="text-light">Most Visited Products of Wallcovering </h3>
                    <h5 className="text-light"><i><ion-icon name="location-outline"></ion-icon></i> Milano</h5>
                    <h5 className="text-light"><i><ion-icon name="calendar-outline"></ion-icon></i> 22.02.2023</h5>
                    <article className="text-light">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto facere
                        molestias
                        voluptatibus
                        impedit architecto aliquid cum culpa perferendis? Voluptate, consectetur!</article>
                    <a href="/details/:postId" className="btn btn-light mt-2">Read More &larr;</a>
                </div>
            </div>;
            {/* <!-- End: Current Post --> */}

            {/* <!-- Start: Current Post --> */}
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
                    <article className="text-light">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto facere
                        molestias
                        voluptatibus
                        impedit architecto aliquid cum culpa perferendis? Voluptate, consectetur!</article>
                    <a href="/details/:postId" className="btn btn-light mt-2">Read More &larr;</a>
                </div>
            </div>;
            {/* <!-- End: Current Post --> */}

            {/* <!-- Start: Current Post --> */}
            <div className="row p-5 border-top border-light border-2">
                <div className="col">
                    <img className="img-fluid  border border-2 border-light" src="https://lh3.googleusercontent.com/pw/AMWts8C7oubJFAavqfbOygAYshzKGN6bMwld3-a7nZFHDXC7vl7N47SDohZlHDidr9TwoEo6OPrraPZ0VbXRhW9HbtmILWK1U934fN64Mh2vmSwEM-hHkMM9yD83TJvA3p0rMn4y7INsJDukJk77_lJeo8Xl=w1979-h1413-no?authuser=0"
                        alt="partner1" />
                </div>
                <div className="col">
                    <h3 className="text-light">Most Visited Products of Wallcovering </h3>
                    <h5 className="text-light"><i><ion-icon name="location-outline"></ion-icon></i>Sidney</h5>
                    <h5 className="text-light"><i><ion-icon name="calendar-outline"></ion-icon></i> 12.02.2023</h5>
                    <article className="text-light">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto facere
                        molestias
                        voluptatibus
                        impedit architecto aliquid cum culpa perferendis? Voluptate, consectetur!</article>
                    <a href="/details/:postId" className="btn btn-light mt-2">Read More &larr;</a>
                </div>
            </div>
            {/* <!-- End: Current Post --> */}
            <div className="d-flex align-items-center justify-content-center" style={{ height: "100px" }}>
                <a href="/posts" className="btn btn-light btn-lg">Load More &larr;</a>
            </div>

        </ section>
    );
};