import { Link } from 'react-router-dom';
import { HeaderLink } from './HeaderLink.js';

export const Header = () => {
    return (

        <header>
            {/*  Start: Navigation Bar */}
            <nav className="navbar fixed-top bg-white border-bottom border-1 border-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src="https://lh3.googleusercontent.com/pw/AMWts8A6BXSwv_9rWhqKm5tJ3h0IET50m4d6tsNqGRGOPbnIuvqMd-khh_11BFRMMVZEUGDxqZy8DE8fRvzElmM2UlxJZ4XCYPsxu8CwdNJ_J24lddwCJymMluEAka9OywdTOo_ript5_ILYHfycU-poG3-D=w797-h174-no?authuser=0" alt="Logo" height="40"
                            className="d-inline-block align-text-center" />
                    </Link>
                    <ul className="nav nav-pills ">


                        <HeaderLink
                            to={"/"}
                            title={"Home"}
                        />
                        <HeaderLink
                            to={"/posts"}
                            title={"Posts"}
                        />


                        {/* Start: Guests */}
                        <HeaderLink
                            to={"/register"}
                            title={"Register"}
                        />
                        <HeaderLink
                            to={"/login"}
                            title={"Login"}
                        />
                        {/* End: Guests */}


                        {/* Start: User */}
                        <HeaderLink
                            to={"/create"}
                            title={"Create Post"}
                        />
                        <HeaderLink
                            to={"/my-profile"}
                            title={"My Profile"}
                        />
                        <HeaderLink
                            to={"/"}
                            title={"Logout"}
                        />
                        {/* End: User */}


                        <HeaderLink
                            to={"/contact-us"}
                            title={"Contact Us"}
                        />

                    </ul>
                </div>
            </nav>
            {/*  End: Navigation Bar */}
        </header>

    );
};