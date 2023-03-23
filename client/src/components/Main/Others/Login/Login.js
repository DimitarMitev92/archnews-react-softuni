//IMAGES AND LOGOS
import background from '../../../../assets/images/login/login-imageNew.jpg';

//REACT
import { useState, useContext } from 'react';

//REACT COMPONENTS
import { LoginInput } from './LoginInput.js';

//REACT HOOKS

//REACT CONTEXT
import { AuthContext } from '../../../../contexts/authContext.js';

//REACT ROUTER
import { useNavigate, Link } from 'react-router-dom';


//SERVICES
import { login } from '../../../../services/auth.js';


export const Login = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [validEmail, setValidEmail] = useState(false);
    const [validPassword, setValidPassword] = useState(false);

    const { loginUser } = useContext(AuthContext);


    const changeEmailHandler = (e) => {
        setEmail(e.target.value);
        const regex = /^[a-z]{3,}@[a-z]{2,}\.[a-z]{2,}$/gm;
        setValidEmail(previousState => previousState = regex.test(e.target.value.trim()));
    };

    const changePasswordHandler = (e) => {
        setPassword(e.target.value);
        if (e.target.value.trim().length > 4) {
            setValidPassword(previousState => previousState = true);
        } else {
            setValidPassword(previousState => previousState = false);
        }
    };


    const loginSubmitHandler = (e) => {
        e.preventDefault();
        login(email, password)
            .then(user => {
                console.log(user);
                if (user === undefined) {
                    throw new Error('Email or password is not valid');
                }
                if (user.code === 403) {
                    throw new Error(user.message);
                }
                loginUser(user);
                navigate('/');
            }).catch(error => {
                alert(error.message);
            });
    };

    return (
        <section className="vh-100">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 text-black d-flex justify-content-center align-items-center flex-md-column">
                        <h2 className="text-uppercase text-center m-5">LOGIN</h2>
                        <form onSubmit={loginSubmitHandler}>

                            <LoginInput
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

                            <LoginInput
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

                            <div className="d-flex justify-content-center">
                                <button type="submit" className={`btn btn-secondary btn-lg ${!(validEmail && validPassword) ? 'disabled' : ''}`}>Login</button>
                            </div>

                            <p className="text-center text-muted mt-5 mb-0">Don't have an account? <Link to="/register"
                                className="fw-bold text-body"><u>Register here</u></Link></p>

                        </form>
                    </div>
                    <div className="col-sm-6 px-0 d-none d-sm-block">
                        <img src={background} alt="Login" className="w-100 vh-100"
                            style={{ objectFit: "cover", objectPosition: "left" }} />
                    </div>
                </div>
            </div>
        </section>
    );
};