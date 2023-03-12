import { useState } from 'react';

import { useNavigate, Link } from 'react-router-dom';

import { login } from '../../../services/auth.js';

export const Login = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPasword] = useState('');

    const [validEmail, setValidEmail] = useState(false);
    const [validPassword, setValidPassword] = useState(false);

    const [authToken, setAuthToken] = useState(null);

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


    const loginSubmitHandler = (e) => {
        e.preventDefault();
        if (validEmail && validPassword) {
            try {
                const response = login(email, password)
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
        <section className="vh-100">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 text-black d-flex justify-content-center align-items-center flex-md-column">
                        <h2 className="text-uppercase text-center m-5">LOGIN</h2>
                        <form onSubmit={loginSubmitHandler}>
                            <div className="form-outline m-4">
                                <label className="form-label" htmlFor="emailInput">Your Email</label>
                                <input type="email" id="emailInput"
                                    className={`form-control form-control-lg ${validEmail ? 'is-valid' : 'is-invalid'}`}
                                    value={email}
                                    onChange={changeEmailHandler}
                                    onBlur={changeEmailHandler} />
                                <div className="valid-feedback">
                                    Right Email.
                                </div>
                                <div className="invalid-feedback">
                                    Enter your email. Must be like this <strong>example@email.com</strong> .
                                </div>
                            </div>

                            <div className="form-outline m-4">
                                <label className="form-label" htmlFor="passwordInput">Password</label>
                                <input type="password" id="passwordInput"
                                    className={`form-control form-control-lg ${validPassword ? 'is-valid' : 'is-invalid'}`}
                                    value={password}
                                    onChange={changePasswordHandler}
                                    onBlur={changePasswordHandler} />
                                <div className="valid-feedback">
                                    Valid Password.
                                </div>
                                <div className="invalid-feedback">
                                    Enter your password. Must be longer than 5 symbols.
                                </div>
                            </div>

                            <div className="d-flex justify-content-center">
                                <button type="submit" className={`btn btn-secondary btn-lg ${!(validEmail && validPassword) ? 'disabled' : ''}`}>Login</button>
                            </div>

                            <p className="text-center text-muted mt-5 mb-0">Don't have an account? <Link to="/register"
                                className="fw-bold text-body"><u>Register here</u></Link></p>

                        </form>
                    </div>
                    <div className="col-sm-6 px-0 d-none d-sm-block">
                        <img src="https://lh3.googleusercontent.com/pw/AMWts8CF6X8Pw-im5OuYgpHogjzwc3N6INqpMm7acvUcrE-7DEaW1PSQj39PYNrbjkVUSxaatu-2dGohKdeX6EgoJK1vcOfFfZ9nk1O8W2rGmuqk6KSW1VYy_YNxTPLD86RuV6ENT__tibbD9v046yB0NguW=w1061-h1413-no?authuser=0" alt="Login" className="w-100 vh-100"
                            style={{ objectFit: "cover", objectPosition: "left" }} />
                    </div>
                </div>
            </div>
        </section>
    );
};