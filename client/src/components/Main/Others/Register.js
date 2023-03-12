import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { register } from '../../../services/auth.js';

export const Register = () => {

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPasword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    const [validName, setValidName] = useState(false);
    const [validUsername, setValidUsername] = useState(false);
    const [validEmail, setValidEmail] = useState(false);
    const [validPassword, setValidPassword] = useState(false);
    const [validRepeatPassword, setValidRepeatPassword] = useState(false);

    const [authToken, setAuthToken] = useState(null);


    const changeNameHandler = (e) => {
        setName(e.target.value);
        if (e.target.value.trim().length > 3) {
            setValidName(previousState => previousState = true);
        } else {
            setValidName(previousState => previousState = false);
        }
    };

    const changeUsernameHandler = (e) => {
        setUsername(e.target.value);
        if (e.target.value.trim().length > 3) {
            setValidUsername(previousState => previousState = true);
        } else {
            setValidUsername(previousState => previousState = false);
        }
    };

    const changeEmailHandler = (e) => {
        setEmail(e.target.value);
        const regex = /^[a-z]{3,}@[a-z]{2,}\.[a-z]{1,}$/gm;
        setValidEmail(previousState => previousState = regex.test(e.target.value.trim()));
    };

    const changePasswordHandler = (e) => {
        setPasword(e.target.value);
        if (e.target.value.trim().length > 5) {
            setValidPassword(previousState => previousState = true);
        } else {
            setValidPassword(previousState => previousState = false);
        }
    };

    const changeRepeatPasswordHandler = (e) => {
        setRepeatPassword(e.target.value);
        if (e.target.value === password) {
            setValidRepeatPassword(previousState => previousState = true);
        } else {
            setValidRepeatPassword(previousState => previousState = false);
        }

    };

    const registerSubmitHandler = (e) => {
        e.preventDefault();

        if (validName && validUsername && validUsername && validPassword && validRepeatPassword) {
            try {
                const token = register(name, username, email, password);

                setAuthToken(previousState => previousState = token);
                navigate('/');
            } catch (error) {
                console.log(error.message);
            }
        }
    };


    return (
        <section className="vh-100 bg-image" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/pw/AMWts8BDJbc97V1ZUW03fEMa_mhHvYqEX3hGP7P9VpgjglZ8eTTHZH0W15ga8kzfQG0gL0UglfYXXAa-WKAQIP5GWcYIVu9gw_Wm4A2GN6xwHJ4fDDEcSZx093PXRs4be5_j79N4EKEvukMpowYOoXmNhMvI=w1980-h1080-no?authuser=0')` }}>
            <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div className="card" style={{ borderRadius: "15px" }}>
                                <div className="card-body p-5">
                                    <h2 className="text-uppercase text-center mb-5">CREATE AN ACCOUNT</h2>

                                    <form onSubmit={registerSubmitHandler}>

                                        <div className="form-outline mb-2">
                                            <label className="form-label" htmlFor="nameInput">Your Name</label>
                                            <input type="text" id="nameInput"
                                                className={`form-control form-control-lg ${validName ? 'is-valid' : 'is-invalid'}`}
                                                value={name}
                                                onInput={changeNameHandler}
                                                onBlur={changeNameHandler} />
                                            <div className="valid-feedback">
                                                Right Name.
                                            </div>
                                            <div className="invalid-feedback">
                                                Enter your name. Must be longer than 3 characters.
                                            </div>
                                        </div>

                                        <div className="form-outline mb-2">
                                            <label className="form-label" htmlFor="usernameInput">Your
                                                Username</label>
                                            <input type="text" id="usernameInput"
                                                className={`form-control form-control-lg ${validUsername ? 'is-valid' : 'is-invalid'}`}
                                                value={username}
                                                onInput={changeUsernameHandler}
                                                onBlur={changeUsernameHandler} />
                                            <div className="valid-feedback">
                                                Right Username.
                                            </div>
                                            <div className="invalid-feedback">
                                                Enter your username. Must be longer than 3 characters.
                                            </div>
                                        </div>

                                        <div className="form-outline mb-2">
                                            <label className="form-label" htmlFor="emailInput">Your Email</label>
                                            <input type="email" id="emailInput"
                                                className={`form-control form-control-lg ${validEmail ? 'is-valid' : 'is-invalid'}`}
                                                value={email}
                                                onInput={changeEmailHandler}
                                                onBlur={changeEmailHandler} />
                                            <div className="valid-feedback">
                                                Right Email.
                                            </div>
                                            <div className="invalid-feedback">
                                                Enter your email. Must be like this <strong>example@email.com</strong> .
                                            </div>
                                        </div>

                                        <div className="form-outline mb-2">
                                            <label className="form-label" htmlFor="passwordInput">Password</label>
                                            <input type="password" id="passwordInput"
                                                className={`form-control form-control-lg ${validPassword ? 'is-valid' : 'is-invalid'}`}
                                                value={password}
                                                onInput={changePasswordHandler}
                                                onBlur={changePasswordHandler} />
                                            <div className="valid-feedback">
                                                Valid Password.
                                            </div>
                                            <div className="invalid-feedback">
                                                Enter your password. Must be longer than 5 symbols.
                                            </div>
                                        </div>

                                        <div className="form-outline mb-2">
                                            <label className="form-label" htmlFor="rePasswordInput">Repeat your
                                                password</label>
                                            <input type="password" id="rePasswordInput"
                                                className={`form-control form-control-lg ${validRepeatPassword ? 'is-valid' : 'is-invalid'}`}
                                                value={repeatPassword}
                                                onInput={changeRepeatPasswordHandler}
                                                onBlur={changeRepeatPasswordHandler} />
                                            <div className="valid-feedback">
                                                Passwords match.
                                            </div>
                                            <div className="invalid-feedback">
                                                Passwords mismatch.
                                            </div>
                                        </div>

                                        <div className="d-flex justify-content-center">
                                            <button type="submit" className="btn btn-secondary btn-lg">Register</button>
                                        </div>

                                        <p className="text-center text-muted m-3">Have already an account? <a
                                            href="/login" className="fw-bold text-body"><u>Login here</u></a></p>

                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </section >
    );
};;