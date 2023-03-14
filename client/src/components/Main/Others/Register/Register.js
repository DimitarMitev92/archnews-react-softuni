import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { register } from '../../../../services/auth.js';
import { InputFiend } from '../../../UI/InputField.js';

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
        if (e.target.value.trim().length > 0) {
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
        const regex = /^[a-z]{3,}@[a-z]{2,}\.[a-z]{2,}$/gm;
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

        if (validName && validUsername && validEmail && validPassword && validRepeatPassword) {
            try {
                register(name, username, email, password)
                    .then(token => {
                        setAuthToken(previousState => previousState = token);
                        navigate('/');
                    });

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

                                        <InputFiend
                                            title={"Your Name"}
                                            htmlFor={"nameInput"}
                                            type={"text"}
                                            validItem={validName}
                                            value={name}
                                            onChange={changeNameHandler}
                                            onBlur={changeNameHandler}
                                            validFeedback={"Right name."}
                                            invalidFeedback={"Enter your name."}
                                        />

                                        <InputFiend
                                            title={"Your Username"}
                                            htmlFor={"usernameInput"}
                                            type={"text"}
                                            validItem={validUsername}
                                            value={username}
                                            onChange={changeUsernameHandler}
                                            onBlur={changeUsernameHandler}
                                            validFeedback={"Right username."}
                                            invalidFeedback={"Enter your username."}
                                        />

                                        <InputFiend
                                            title={"Your Email"}
                                            htmlFor={"emailInput"}
                                            type={"email"}
                                            validItem={validEmail}
                                            value={email}
                                            onChange={changeEmailHandler}
                                            onBlur={changeEmailHandler}
                                            validFeedback={"Right email."}
                                            invalidFeedback={"Enter your email."}
                                        />

                                        <InputFiend
                                            title={"Password"}
                                            htmlFor={"passwordInput"}
                                            type={"password"}
                                            validItem={validPassword}
                                            value={password}
                                            onChange={changePasswordHandler}
                                            onBlur={changePasswordHandler}
                                            validFeedback={"Valid password."}
                                            invalidFeedback={"Enter your password."}
                                        />

                                        <InputFiend
                                            title={"Repeat your password"}
                                            htmlFor={"rePasswordInput"}
                                            type={"password"}
                                            validItem={validRepeatPassword}
                                            value={repeatPassword}
                                            onChange={changeRepeatPasswordHandler}
                                            onBlur={changeRepeatPasswordHandler}
                                            validFeedback={"Passwords match."}
                                            invalidFeedback={"Passwords mismatch."}
                                        />

                                        <div className="d-flex justify-content-center">
                                            <button type="submit" className={`btn btn-secondary btn-lg ${!(validName && validUsername && validEmail && validPassword && validRepeatPassword) ? 'disabled' : ''}`}>Register</button>
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