import { Link } from 'react-router-dom';

import { Button } from '../../../UI/Button.js';

export const Details = () => {
    return (
        <section className="vh-auto">
            <div className="d-flex justify-content-center align-content-center">
                <div className="row">
                    <div className="col-sm-6 text-black d-flex justify-content-center align-items-center flex-md-column">
                        <h2 className="text-uppercase text-center m-5">Most Visited Products of Wallcovering</h2>
                        <h5 className="text-dark"><i><ion-icon name="location-outline"></ion-icon></i> Milano</h5>
                        <h5 className="text-dark"><i><ion-icon name="calendar-outline"></ion-icon></i> 22.02.2023</h5>
                        <h5 className="text-dark">LIKES: 10</h5>
                        <article style={{ textIndent: "50px" }} className="text-dark p-4 ">Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Placeat,
                            provident. Iste quibusdam reprehenderit sequi quisquam repudiandae mollitia. Doloremque
                            aspernatur explicabo vero saepe quidem eligendi pariatur quibusdam repellat, error dolor
                            itaque sint, a officiis quia? Culpa fugit unde inventore sapiente doloribus eius cumque vero
                            numquam animi itaque consequatur, deleniti quaerat cupiditate ducimus, tenetur architecto
                            ullam alias officia minus dolor est? Saepe aliquid reiciendis tempore aperiam blanditiis
                            impedit rem amet voluptatibus quos ipsum eligendi similique cum quia, velit maxime illo
                            omnis unde aut magni, repellendus expedita mollitia. Labore esse voluptatem sunt, quo
                            eveniet, obcaecati amet tempora, asperiores unde eligendi adipisci dolorum doloremque.
                        </article>
                        <div className="d-flex justify-content-center">
                            <Button
                                to={"/"}
                                className={"btn btn-success m-2"}
                                title={"Like"}
                            />
                            <Button
                                to={"/"}
                                className={"btn btn-danger m-2"}
                                title={"Dislike"}
                            />
                            {/* //TODO FIX POSTID */}
                            <Button
                                to={"/edit/:postId"}
                                className={"btn btn-success m-2"}
                                title={"Edit"}
                            />
                            <Button
                                to={"/"}
                                className={"btn btn-danger m-2"}
                                title={"Delete"}
                            />
                        </div>
                    </div>
                    <div className="col-sm-6 px-0 d-none d-sm-block">
                        <img className="img-fluid" src="https://lh3.googleusercontent.com/pw/AMWts8CSJQZw5TziHGvx-rIGHyUOwF_dZoermaBARiy4QjMWXIAgsokJNd5-sXk-pC04dckew_r7yn9wcRdER4LBIvGHm0qDswpiqjWB3eKTT6pAbYPsMPGTgC1uXkPf-Hyl9msfC3u4g0o-RYVXsN_CtcBt=w2120-h1413-no?authuser=0" alt="post"
                            style={{ objectFit: "cover", objectPosition: "left" }} />
                    </div>
                </div>
            </div>
        </section>
    );
};