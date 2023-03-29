//IMAGES AND LOGOS
import background from '../../../../assets/images/register/register-imageNew.png';
//REACT
import { useContext, useState } from 'react';
//REACT COMPONENTS
import { InputField } from '../../../UI/InputField.js';
//REACT HOOKS
//REACT CONTEXT
import { AuthContext } from '../../../../contexts/authContext.js';
//REACT ROUTER
import { useNavigate } from 'react-router-dom';
//SERVICES
import { register } from '../../../../services/auth.js';


export const Register = () => {

    const navigate = useNavigate();

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
            .catch(error => alert(error.message));

        setName(previousState => previousState = '');
        setUsername(previousState => previousState = '');
        setEmail(previousState => previousState = '');
        setPassword(previousState => previousState = '');
        setRepeatPassword(previousState => previousState = '');
    };

    const registerInputs = [{
        title: "Your Name",
        htmlFor: "nameInput",
        type: "text",
        validItem: validName,
        value: name,
        onChange: changeNameHandler,
        onBlur: changeNameHandler,
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
        validFeedback: "Passwords match.",
        invalidFeedback: "Passwords mismatch.",
    }];


    return (
        <section className="vh-100 bg-image" style={{ backgroundImage: `url(${background})` }}>
            <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div className="card" style={{ borderRadius: "15px" }}>
                                <div className="card-body p-5">
                                    <h2 className="text-uppercase text-center mb-5">CREATE AN ACCOUNT</h2>

                                    <form onSubmit={registerSubmitHandler}>

                                        {registerInputs.map((registerInput, index) =>
                                            <InputField
                                                key={index}
                                                title={registerInput.title}
                                                htmlFor={registerInput.htmlFor}
                                                type={registerInput.type}
                                                validItem={registerInput.validItem}
                                                value={registerInput.value}
                                                onChange={registerInput.onChange}
                                                onBlur={registerInput.onBlur}
                                                validFeedback={registerInput.validFeedback}
                                                invalidFeedback={registerInput.invalidFeedback}
                                            />)}

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