import background from '../../../assets/images/about-us/about-us-imageNew.png';
import member1 from '../../../assets/images/about-us/members/member1.png';
import member2 from '../../../assets/images/about-us/members/member2.png';
import member3 from '../../../assets/images/about-us/members/member3.png';
import member4 from '../../../assets/images/about-us/members/member4.png';
import member5 from '../../../assets/images/about-us/members/member5.png';
import owner from '../../../assets/images/about-us/members/owner1.png';

export const AboutUs = () => {
    return (
        <section className="position-relative" id="aboutUs">
            <img src={background} alt="background" className="w-100" />
            <div className="position-absolute top-50 start-50 translate-middle text-center">
                <h1>OUR TEAM</h1>
                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Commodi, neque delectus modi molestias
                    ipsum ea accusantium exercitationem qui nobis quis.</h5>
                <a className="btn btn-secondary border border-2 border-light" href="/contactUs.html">Contact Us <ion-icon
                    name="call-outline"></ion-icon></a>

                <div className="row ">
                    <div className="row row-cols-md-3 g-4">
                        <div className="col">
                            <div className="card bg-secondary border border-2 border-light">
                                <img src={member1} className="card-img-top" alt="member1" />
                                <div className="card-body ">
                                    <h5 className="card-title text-light">Editor-in-Chief</h5>
                                    <p className="card-text text-light">Lorem ipsum dolor sit amet consectetur adipisicing
                                        elit.
                                        Libero, nobis!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card bg-secondary border border-2 border-light">
                                <img src={owner} className="card-img-top" alt="owner" />
                                <div className="card-body ">
                                    <h5 className="card-title text-light">CEO</h5>
                                    <p className="card-text text-light">Lorem ipsum dolor, sit amet consectetur adipisicing
                                        elit.
                                        Dolore, porro.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card bg-secondary border border-2 border-light">
                                <img src={member2} className="card-img-top" alt="member2" />
                                <div className="card-body ">
                                    <h5 className="card-title text-light">Marketing Manager</h5>
                                    <p className="card-text text-light">Lorem ipsum dolor sit amet consectetur adipisicing
                                        elit.
                                        Tempore, sint.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card bg-secondary border border-2 border-light">
                                <img src={member3} className="card-img-top" alt="member3" />
                                <div className="card-body ">
                                    <h5 className="card-title text-light">Social Media Manager</h5>
                                    <p className="card-text text-light">Lorem ipsum, dolor sit amet consectetur adipisicing
                                        elit.
                                        Sequi, culpa?</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card bg-secondary border border-2 border-light">
                                <img src={member4} className="card-img-top" alt="member4" />
                                <div className="card-body ">
                                    <h5 className="card-title text-light">Web Designer</h5>
                                    <p className="card-text text-light">Lorem ipsum, dolor sit amet consectetur adipisicing
                                        elit. Et,
                                        nisi!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card bg-secondary border border-2 border-light">
                                <img src={member5} className="card-img-top" alt="member5" />
                                <div className="card-body ">
                                    <h5 className="card-title text-light">Writer</h5>
                                    <p className="card-text text-light">Lorem ipsum dolor sit amet consectetur adipisicing
                                        elit.
                                        Architecto, fuga.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </section >
    );
};