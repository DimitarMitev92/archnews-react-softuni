//IMAGES AND LOGOS
import logo from '../../assets/logos/main-icon/ArchNews-1.png';
//REACT
import React, { useContext, useEffect, useState } from 'react';
//REACT COMPONENTS
import { HeaderLink } from './HeaderLink.js';
import { Image } from '../UI/Image.js';
//REACT HOOKS
//REACT CONTEXT
import { AuthContext } from '../../contexts/authContext.js';
//REACT ROUTER
import { Link } from 'react-router-dom';
import { ModalWeather } from '../UI/ModalWeather.js';
//SERVICES

const API_KEY = '77a9d5510293493818c19ab7105d0811';

export const Header = () => {

    const { auth } = useContext(AuthContext);

    const [currentWeather, setCurrentWeather] = useState(null);
    const [showModalWeather, setShowModalWeather] = useState(false);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=${API_KEY}`)
                .then(response => response.json())
                .then(result => {
                    setCurrentWeather(previousState => previousState = result);
                })
                .catch(error => console.log(error));
        });
    }, []);

    const clickModalWeatherHandler = (e) => {
        setShowModalWeather(previousState => previousState = true);
    };

    const closeModalWeatherHandler = (e) => {
        setShowModalWeather(previousState => previousState = false);
    };

    return (
        <>
            {showModalWeather && <ModalWeather onClickClose={closeModalWeatherHandler} weatherInfo={currentWeather} />}
            <header>
                <nav className="navbar fixed-top bg-white border-bottom border-1 border-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">
                            <Image
                                src={logo}
                                alt="Logo"
                                className="d-inline-block align-text-center"
                                style={{ height: "40px" }}
                            />
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
                        {currentWeather ?


                            <article
                                className="btn btn-secondary"
                                style={{ margin: '0', padding: '0' }}
                                onClick={clickModalWeatherHandler}>{currentWeather.name} - {currentWeather.main.temp}°C -
                                <Image
                                    src={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
                                    alt="weather"
                                    className="w-25 h-25 m-0"
                                /></article>
                            :
                            ''
                        }
                    </div>
                </nav>
            </header >
        </>
    );
};