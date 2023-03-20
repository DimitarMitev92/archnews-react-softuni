//REACT
import React, { useContext } from 'react';
//REACT COMPONENTS
import { HeaderLink } from './HeaderLink.js';
//REACT HOOKS
//REACT CONTEXT
import { AuthContext } from '../../contexts/authContext.js';
//REACT ROUTER
import { Link } from 'react-router-dom';
//SERVICES


export const Header = () => {

    const { auth } = useContext(AuthContext);
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

                        {auth.accessToken ?
                            <React.Fragment>
                                <HeaderLink
                                    to={"/create"}
                                    title={"Create Post"}
                                />
                                <HeaderLink
                                    to={"/my-profile"}
                                    title={"My Profile"}
                                />
                                <HeaderLink
                                    to={"/logout"}
                                    title={"Logout"}
                                />
                            </React.Fragment> :
                            <React.Fragment>
                                <HeaderLink
                                    to={"/register"}
                                    title={"Register"}
                                />
                                <HeaderLink
                                    to={"/login"}
                                    title={"Login"}
                                />
                            </React.Fragment>
                        }



                        {/* Start: Guests */}
                        {/* <HeaderLink
                            to={"/register"}
                            title={"Register"}
                        />
                        <HeaderLink
                            to={"/login"}
                            title={"Login"}
                        /> */}
                        {/* End: Guests */}


                        {/* Start: User */}
                        {/* <HeaderLink
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
                        /> */}
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