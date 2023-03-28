//IMAGES AND LOGOS
import logo from '../../assets/logos/main-icon/ArchNews-1.png';
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
            <nav className="navbar fixed-top bg-white border-bottom border-1 border-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt="Logo" height="40"
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

                        <HeaderLink
                            to={"/contact-us"}
                            title={"Contact Us"}
                        />

                    </ul>
                </div>
            </nav>
        </header>
    );
};