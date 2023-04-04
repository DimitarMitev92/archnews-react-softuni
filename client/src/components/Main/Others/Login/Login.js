//IMAGES AND LOGOS
import background from '../../../../assets/images/login/login-imageNew.png';
//REACT
import { useState, useContext, useEffect } from 'react';
//REACT COMPONENTS
import { LoginInput } from './LoginInput.js';
import { ModalAuth } from '../../../UI/ModalAuth.js';
import { Image } from '../../../UI/Image.js';
//REACT HOOKS
//REACT CONTEXT
import { AuthContext } from '../../../../contexts/authContext.js';
//REACT ROUTER
import { useNavigate, Link } from 'react-router-dom';
//SERVICES
import { login } from '../../../../services/auth.js';
import { ButtonSubmit } from '../../../UI/ButtonSubmit.js';


export const Login = () => {

    const navigate = useNavigate();

    const { loginUser } = useContext(AuthContext);

    const [loginForm, setLoginForm] = useState([]);

    const [loginUserData, setLoginUserData] = useState({
        email: '',
        password: ''
    });

    const [validLoginData, setValidLoginData] = useState({
        email: false,
        password: false
    });

    const [isClickLoginUser, setIsClickLoginUser] = useState({
        email: false,
        password: false
    });

    // const [isClickEmail, setIsClickEmail] = useState(false);
    // const [isClickPassword, setIsClickPassword] = useState(false);

    const [showModalAuth, setShowModalAuth] = useState(false);
    const [modalAuthError, setModalAuthError] = useState('');

    const clickLoginUserHandler = (e) => {
        setIsClickLoginUser({ ...isClickLoginUser, [e.target.name]: true });
    };

    const changeEmailHandler = (e) => {
        setLoginUserData({ ...loginUserData, [e.target.name]: e.target.value });
        const regex = /^[a-z]{3,}@[a-z]{2,}\.[a-z]{2,}$/;
        setValidLoginData({ ...validLoginData, [e.target.name]: regex.test(e.target.value.trim()) });
    };

    const changePasswordHandler = (e) => {
        setLoginUserData({ ...loginUserData, [e.target.name]: e.target.value });
        if (e.target.value.trim().length > 4) {
            setValidLoginData({ ...validLoginData, [e.target.name]: true });
        } else {
            setValidLoginData({ ...validLoginData, [e.target.name]: false });
        }
    };


    const loginSubmitHandler = (e) => {
        e.preventDefault();
        login(loginUserData.email, loginUserData.password)
            .then(user => {
                if (user === undefined) {
                    throw new Error('Email or password is not valid');
                }
                if (user.code === 403) {
                    throw new Error(user.message);
                }
                loginUser(user);
                navigate('/');
            }).catch(error => {
                setShowModalAuth(previousState => previousState = true);
                setModalAuthError(previousState => previousState = `${error.message}`);
            });

        setLoginUserData({
            email: '',
            password: ''
        });
    };

    useEffect(() => {
        setValidLoginData({
            title: false,
            password: false
        });
        setIsClickLoginUser({
            title: false,
            password: false
        });
    }, [modalAuthError, showModalAuth]);

    const loginInputs = [{
        title: "Your Email",
        htmlFor: "emailInput",
        type: "email",
        validItem: validLoginData.email,
        value: loginUserData.email,
        name: "email",
        onChange: changeEmailHandler,
        onBlur: changeEmailHandler,
        onClick: clickLoginUserHandler,
        isClicked: isClickLoginUser.email,
        validFeedback: "Right email.",
        invalidFeedback: "Enter your email.",
    }, {
        title: "Password",
        htmlFor: "passwordInput",
        type: "password",
        validItem: validLoginData.password,
        value: loginUserData.password,
        name: "password",
        onChange: changePasswordHandler,
        onBlur: changePasswordHandler,
        onClick: clickLoginUserHandler,
        isClicked: isClickLoginUser.password,
        validFeedback: "Valid password.",
        invalidFeedback: "Enter your password.",
    }];

    useEffect(() => {
        setLoginForm(previousState => previousState = loginInputs);
    }, [isClickLoginUser.email,
    isClickLoginUser.password,
    loginUserData.email,
    loginUserData.password]);

    const showPassword = (e) => {
        const password = document.querySelector('#passwordInput');
        if (e.target.checked) {
            password.type = 'text';
        } else {
            password.type = 'password';
        }
    };

    const showModalHandler = () => {
        setShowModalAuth(previousState => previousState = false);
    };

    return (
        <>
            {showModalAuth && <ModalAuth
                error={modalAuthError}
                onClickClose={showModalHandler}
            />}
            <section className="vh-100">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6 text-black d-flex justify-content-center align-items-center flex-md-column">
                            <h2 className="text-uppercase text-center m-5">LOGIN</h2>
                            <form onSubmit={loginSubmitHandler}>

                                {loginForm.map((loginInput, index) => <LoginInput
                                    key={index}
                                    title={loginInput.title}
                                    htmlFor={loginInput.htmlFor}
                                    type={loginInput.type}
                                    validItem={loginInput.validItem}
                                    value={loginInput.value}
                                    name={loginInput.name}
                                    onChange={loginInput.onChange}
                                    onBlur={loginInput.onBlur}
                                    onClick={loginInput.onClick}
                                    isClicked={loginInput.isClicked}
                                    validFeedback={loginInput.validFeedback}
                                    invalidFeedback={loginInput.invalidFeedback}
                                />)}
                                <div className="form-check form-check-inline mx-4 mb-4">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="clicked" onClick={showPassword}
                                        style={{ backgroundColor: "#adb5bd" }} />
                                    <label className="form-check-label" htmlFor="inlineCheckbox1">Show password</label>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <ButtonSubmit
                                        className={`btn btn-secondary btn-lg ${!(
                                            validLoginData.email && validLoginData.password) ?
                                            'disabled' : ''}`}
                                        title="Login"
                                    />
                                </div>

                                <p className="text-center text-muted mt-5 mb-0">Don't have an account? <Link to="/register"
                                    className="fw-bold text-body"><u>Register here</u></Link></p>

                            </form>
                        </div>
                        <div className="col-sm-6 px-0 d-none d-sm-block">
                            <Image
                                src={background}
                                alt="Login"
                                className="w-100 vh-100"
                                style={{ objectFit: "cover", objectPosition: "left" }}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};