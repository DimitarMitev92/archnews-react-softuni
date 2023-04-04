//IMAGES AND LOGOS
import background from '../../../../assets/images/register/register-imageNew.png';
//REACT
import { useContext, useEffect, useState } from 'react';
//REACT COMPONENTS
import { InputField } from '../../../UI/InputField.js';
import { ModalAuth } from '../../../UI/ModalAuth.js';
//REACT HOOKS
//REACT CONTEXT
import { AuthContext } from '../../../../contexts/authContext.js';
//REACT ROUTER
import { useNavigate } from 'react-router-dom';
//SERVICES
import { register } from '../../../../services/auth.js';
import { ButtonSubmit } from '../../../UI/ButtonSubmit.js';


export const Register = () => {

    const navigate = useNavigate();

    const { loginUser } = useContext(AuthContext);

    const [registerForm, setRegisterForm] = useState([]);

    const [registerUserData, setRegisterUserData] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        repeatPassword: ''
    });

    const [validRegisterData, setValidRegisterData] = useState({
        name: false,
        username: false,
        email: false,
        password: false,
        repeatPassword: false
    });

    const [isClickRegisterUser, setIsClickRegisterUser] = useState({
        name: false,
        username: false,
        email: false,
        password: false,
        repeatPassword: false
    });

    const [showModalAuth, setShowModalAuth] = useState(false);
    const [modalAuthError, setModalAuthError] = useState('');

    const clickRegisterUserHandler = (e) => {
        setIsClickRegisterUser({ ...isClickRegisterUser, [e.target.name]: true });
    };

    const changeNameHandler = (e) => {
        setRegisterUserData({ ...registerUserData, [e.target.name]: e.target.value });
        if (e.target.value.trim().length > 3) {
            setValidRegisterData({ ...validRegisterData, [e.target.name]: true });
        } else {
            setValidRegisterData({ ...validRegisterData, [e.target.name]: false });
        }
    };

    const changeUsernameHandler = (e) => {
        setRegisterUserData({ ...registerUserData, [e.target.name]: e.target.value });
        if (e.target.value.trim().length > 3) {
            setValidRegisterData({ ...validRegisterData, [e.target.name]: true });
        } else {
            setValidRegisterData({ ...validRegisterData, [e.target.name]: false });
        }
    };

    const changeEmailHandler = (e) => {
        setRegisterUserData({ ...registerUserData, [e.target.name]: e.target.value });
        const regex = /^[a-z]{3,}@[a-z]{2,}\.[a-z]{2,}$/;
        setValidRegisterData({ ...validRegisterData, [e.target.name]: regex.test(e.target.value.trim()) });
    };

    const changePasswordHandler = (e) => {
        setRegisterUserData({ ...registerUserData, [e.target.name]: e.target.value });

        if (e.target.value.trim().length > 4) {
            setValidRegisterData({ ...validRegisterData, [e.target.name]: true });
        } else {
            setValidRegisterData({ ...validRegisterData, [e.target.name]: false });
        }
    };

    const changeRepeatPasswordHandler = (e) => {
        setRegisterUserData({ ...registerUserData, [e.target.name]: e.target.value });
        if (e.target.value === registerUserData.password) {
            setValidRegisterData({ ...validRegisterData, [e.target.name]: true });
        } else {
            setValidRegisterData({ ...validRegisterData, [e.target.name]: false });
        }

    };

    const registerSubmitHandler = (e) => {
        e.preventDefault();
        register(
            registerUserData.name,
            registerUserData.username,
            registerUserData.email,
            registerUserData.password)
            .then(user => {
                if (user.code === 409) {
                    throw new Error("A user with the same email already exists");
                }
                loginUser(user);
                navigate('/');
            })
            .catch(error => {
                setShowModalAuth(previousState => previousState = true);
                setModalAuthError(previousState => previousState = `${error.message}`);
            });

        setRegisterUserData(previousState =>
            previousState = {
                name: '',
                username: '',
                email: '',
                password: '',
                repeatPassword: ''
            });
    };

    useEffect(() => {

        setValidRegisterData({
            name: false,
            username: false,
            email: false,
            password: false,
            repeatPassword: false
        });

        setIsClickRegisterUser({
            name: false,
            username: false,
            email: false,
            password: false,
            repeatPassword: false
        });

    }, [modalAuthError, showModalAuth]);

    const registerInputs = [{
        title: "Your Name",
        htmlFor: "nameInput",
        type: "text",
        validItem: validRegisterData.name,
        value: registerUserData.name,
        name: 'name',
        onChange: changeNameHandler,
        onBlur: changeNameHandler,
        onClick: clickRegisterUserHandler,
        isClicked: isClickRegisterUser.name,
        validFeedback: "Right name.",
        invalidFeedback: "Enter your name.",
    }, {
        title: "Your Username",
        htmlFor: "usernameInput",
        type: "text",
        validItem: validRegisterData.username,
        value: registerUserData.username,
        name: 'username',
        onChange: changeUsernameHandler,
        onBlur: changeUsernameHandler,
        onClick: clickRegisterUserHandler,
        isClicked: isClickRegisterUser.username,
        validFeedback: "Right username.",
        invalidFeedback: "Enter your username.",
    }, {
        title: "Your Email",
        htmlFor: "emailInput",
        type: "email",
        validItem: validRegisterData.email,
        value: registerUserData.email,
        name: 'email',
        onChange: changeEmailHandler,
        onBlur: changeEmailHandler,
        onClick: clickRegisterUserHandler,
        isClicked: isClickRegisterUser.email,
        validFeedback: "Right email.",
        invalidFeedback: "Enter your email.",
    }, {
        title: "Password",
        htmlFor: "passwordInput",
        type: "password",
        validItem: validRegisterData.password,
        value: registerUserData.password,
        name: 'password',
        onChange: changePasswordHandler,
        onBlur: changePasswordHandler,
        onClick: clickRegisterUserHandler,
        isClicked: isClickRegisterUser.password,
        validFeedback: "Valid password.",
        invalidFeedback: "Enter your password.",
    }, {
        title: "Repeat your password",
        htmlFor: "rePasswordInput",
        type: "password",
        validItem: validRegisterData.repeatPassword,
        value: registerUserData.repeatPassword,
        name: 'repeatPassword',
        onChange: changeRepeatPasswordHandler,
        onBlur: changeRepeatPasswordHandler,
        onClick: clickRegisterUserHandler,
        isClicked: isClickRegisterUser.repeatPassword,
        validFeedback: "Passwords match.",
        invalidFeedback: "Passwords mismatch.",
    }];

    useEffect(() => {
        setRegisterForm(previousState => previousState = registerInputs);

    }, [isClickRegisterUser.name,
    isClickRegisterUser.username,
    isClickRegisterUser.email,
    isClickRegisterUser.password,
    isClickRegisterUser.repeatPassword,
    registerUserData.name,
    registerUserData.username,
    registerUserData.email,
    registerUserData.password,
    registerUserData.repeatPassword]);

    const showPassword = (e) => {
        const password = document.querySelector('#passwordInput');
        const repeatPassword = document.querySelector('#rePasswordInput');
        if (e.target.checked) {
            password.type = 'text';
            repeatPassword.type = 'text';
        } else {
            password.type = 'password';
            repeatPassword.type = 'password';
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
            <section className="vh-100 bg-image" style={{ backgroundImage: `url(${background})` }}>
                <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div className="card" style={{ borderRadius: "15px" }}>
                                    <div className="card-body p-5">
                                        <h2 className="text-uppercase text-center mb-5">CREATE AN ACCOUNT</h2>

                                        <form onSubmit={registerSubmitHandler}>

                                            {registerForm.map((registerInput, index) =>
                                                <InputField
                                                    key={index}
                                                    title={registerInput.title}
                                                    htmlFor={registerInput.htmlFor}
                                                    type={registerInput.type}
                                                    validItem={registerInput.validItem}
                                                    value={registerInput.value}
                                                    name={registerInput.name}
                                                    onChange={registerInput.onChange}
                                                    onBlur={registerInput.onBlur}
                                                    onClick={registerInput.onClick}
                                                    isClicked={registerInput.isClicked}
                                                    validFeedback={registerInput.validFeedback}
                                                    invalidFeedback={registerInput.invalidFeedback}
                                                />)}
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="clicked" onClick={showPassword} style={{ backgroundColor: "#adb5bd" }} />
                                                <label className="form-check-label" htmlFor="inlineCheckbox1">Show passwords</label>
                                            </div>
                                            <div className="d-flex justify-content-center">
                                                <ButtonSubmit
                                                    className={`btn btn-secondary btn-lg 
                                                    ${!(validRegisterData.name &&
                                                            validRegisterData.username &&
                                                            validRegisterData.email &&
                                                            validRegisterData.password &&
                                                            validRegisterData.repeatPassword) ?
                                                            'disabled' : ''}`}
                                                    title="Register"
                                                />
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
        </>
    );
};;