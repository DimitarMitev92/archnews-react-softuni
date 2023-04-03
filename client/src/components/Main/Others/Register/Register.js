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

    const [registerForm, setRegisterForm] = useState([]);

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    const [validName, setValidName] = useState(false);
    const [validUsername, setValidUsername] = useState(false);
    const [validEmail, setValidEmail] = useState(false);
    const [validPassword, setValidPassword] = useState(false);
    const [validRepeatPassword, setValidRepeatPassword] = useState(false);

    const [isClickName, setIsClickName] = useState(false);
    const [isClickUsername, setIsClickUsername] = useState(false);
    const [isClickEmail, setIsClickEmail] = useState(false);
    const [isClickPassword, setIsClickPassword] = useState(false);
    const [isClickRepeatPassword, setIsClickRepeatPassword] = useState(false);

    const [showModalAuth, setShowModalAuth] = useState(false);
    const [modalAuthError, setModalAuthError] = useState('');

    const clickNameHandler = (e) => {
        setIsClickName(previousState => previousState = true);
    };

    const clickUsernameHandler = (e) => {
        setIsClickUsername(previousState => previousState = true);
    };

    const clickEmailHandler = (e) => {
        setIsClickEmail(previousState => previousState = true);
    };

    const clickPasswordHandler = (e) => {
        setIsClickPassword(previousState => previousState = true);
    };

    const clickRepeatPasswordHandler = (e) => {
        setIsClickRepeatPassword(previousState => previousState = true);
    };

    const { loginUser } = useContext(AuthContext);

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
        const regex = /^[a-z]{3,}@[a-z]{2,}\.[a-z]{2,}$/;
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
        register(name, username, email, password)
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

        setName(previousState => previousState = '');
        setUsername(previousState => previousState = '');
        setEmail(previousState => previousState = '');
        setPassword(previousState => previousState = '');
        setRepeatPassword(previousState => previousState = '');
    };

    useEffect(() => {
        setValidName(previousState => previousState = false);
        setValidUsername(previousState => previousState = false);
        setValidEmail(previousState => previousState = false);
        setValidPassword(previousState => previousState = false);
        setValidRepeatPassword(previousState => previousState = false);

        setIsClickName(previousState => previousState = false);
        setIsClickUsername(previousState => previousState = false);
        setIsClickEmail(previousState => previousState = false);
        setIsClickPassword(previousState => previousState = false);
        setIsClickRepeatPassword(previousState => previousState = false);
    }, [modalAuthError, showModalAuth]);

    const registerInputs = [{
        title: "Your Name",
        htmlFor: "nameInput",
        type: "text",
        validItem: validName,
        value: name,
        onChange: changeNameHandler,
        onBlur: changeNameHandler,
        onClick: clickNameHandler,
        isClicked: isClickName,
        validFeedback: "Right name.",
        invalidFeedback: "Enter your name.",
    }, {
        title: "Your Username",
        htmlFor: "usernameInput",
        type: "text",
        validItem: validUsername,
        value: username,
        onChange: changeUsernameHandler,
        onBlur: changeUsernameHandler,
        onClick: clickUsernameHandler,
        isClicked: isClickUsername,
        validFeedback: "Right username.",
        invalidFeedback: "Enter your username.",
    }, {
        title: "Your Email",
        htmlFor: "emailInput",
        type: "email",
        validItem: validEmail,
        value: email,
        onChange: changeEmailHandler,
        onBlur: changeEmailHandler,
        onClick: clickEmailHandler,
        isClicked: isClickEmail,
        validFeedback: "Right email.",
        invalidFeedback: "Enter your email.",
    }, {
        title: "Password",
        htmlFor: "passwordInput",
        type: "password",
        validItem: validPassword,
        value: password,
        onChange: changePasswordHandler,
        onBlur: changePasswordHandler,
        onClick: clickPasswordHandler,
        isClicked: isClickPassword,
        validFeedback: "Valid password.",
        invalidFeedback: "Enter your password.",
    }, {
        title: "Repeat your password",
        htmlFor: "rePasswordInput",
        type: "password",
        validItem: validRepeatPassword,
        value: repeatPassword,
        onChange: changeRepeatPasswordHandler,
        onBlur: changeRepeatPasswordHandler,
        onClick: clickRepeatPasswordHandler,
        isClicked: isClickRepeatPassword,
        validFeedback: "Passwords match.",
        invalidFeedback: "Passwords mismatch.",
    }];

    useEffect(() => {
        setRegisterForm(previousState => previousState = registerInputs);

    }, [isClickName, isClickUsername, isClickEmail, isClickPassword, isClickRepeatPassword, name, username, email, password, repeatPassword]);

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
                                                    className={`btn btn-secondary btn-lg ${!(validName && validUsername && validEmail && validPassword && validRepeatPassword) ? 'disabled' : ''}`}
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