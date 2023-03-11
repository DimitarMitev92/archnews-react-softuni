import postImage1 from '../../../assets/images/catalog/post-image-1.jpg';
import postImage2 from '../../../assets/images/catalog/post-image-2.jpg';
import postImage3 from '../../../assets/images/catalog/post-image-3.jpg';

export const Posts = () => {
    return (
        <section className="container bg-secondary  m-5 mx-auto">
            <div className="row bg-black">
                <h2 className="text-center p-4 text-light ">ARCHITECTURE NEWS</h2>
            </div>

            {/* Start: Current Post */}
            <div className="row p-5 border-top border-light border-2">
                <div className="col zoom-in">
                    <img className="img-fluid  border border-2 border-light" src={postImage1}
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
            </div>
            {/* End: Current Post  */}

            {/* Start: Current Post  */}
            <div className="row p-5 border-top border-light border-2">
                <div className="col">
                    <figure>
                        <img className="img-fluid  border border-2 border-light" src={postImage2}
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
            </div>
            {/* End: Current Post  */}

            {/* Start: Current Post  */}
            <div className="row p-5 border-top border-light border-2">
                <div className="col">
                    <img className="img-fluid  border border-2 border-light" src={postImage3}
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
            {/* End: Current Post  */}
        </section>
    );
};