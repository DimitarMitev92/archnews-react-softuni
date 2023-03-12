import { useState } from 'react';

import { contact } from '../../../services/contact.js';

import { useNavigate } from 'react-router-dom';


export const ContactUs = () => {

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');

    const [validName, setValidName] = useState(false);
    const [validEmail, setValidEmail] = useState(false);
    const [validPhoneNumber, setValidPhoneNumber] = useState(false);
    const [validMessage, setValidMessage] = useState(false);

    const changeNameHandler = (e) => {
        setName(e.target.value);
        if (e.target.value.trim().length > 0) {
            setValidName(previousState => previousState = true);
        } else {
            setValidName(previousState => previousState = false);
        }
    };

    const changeEmailHandler = (e) => {
        setEmail(e.target.value);
        const regex = /^[a-z]{3,}@[a-z]{2,}\.[a-z]{2,}$/gm;
        setValidEmail(previousState => previousState = regex.test(e.target.value.trim()));
    };

    const changePhoneNumberHandler = (e) => {
        setPhoneNumber(e.target.value);
        const regex = /^[0]{1}[0-9]{9}$/gm;
        setValidPhoneNumber(previousState => previousState = regex.test(e.target.value.trim()));
    };

    const changeMessageHandler = (e) => {
        setMessage(e.target.value);
        if (e.target.value.trim().length > 10) {
            setValidMessage(previousState => previousState = true);
        } else {
            setValidMessage(previousState => previousState = false);
        }
    };

    const contactSubmitHandler = (e) => {
        e.preventDefault();

        try {
            contact(name, email, phoneNumber, message)
                .then(result => console.log(result));
            navigate('/');

        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <section className="vh-100 bg-image" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/pw/AMWts8CcOITLGfZuYLWEJwxlEkhUrXGSrF6033yH3_uyByd47llheWbhPfQHtRGZmCnEcvFBCHN38ESip3uFCt5_PAFZjixmyowkGYPU0o20NVth-4ANuEpL3_5veBP5A4nGckoJ-XlJbJ4I5NtR-qeyQOcg=w1980-h1080-no?authuser=0')` }}>
            <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div className="card" style={{ borderRadius: "15px" }}>
                                <div className="card-body p-5 ">
                                    <h2 className="text-uppercase text-center mb-5">CONTACT US</h2>

                                    <div className="d-flex justify-content-center m-3">
                                        <p>Call us: <strong>+01 234 567 89</strong> / <strong>+09 999 999
                                            99</strong></p>
                                    </div>
                                    <form onSubmit={contactSubmitHandler}>

                                        <div className="form-outline mb-2">
                                            <label className="form-label" htmlFor="nameInput">Your Name</label>
                                            <input type="text" id="nameInput"
                                                className={`form-control form-control-lg ${validName ? 'is-valid' : 'is-invalid'}`}
                                                value={name}
                                                onChange={changeNameHandler}
                                                onBlur={changeNameHandler} />
                                            <div className="valid-feedback">
                                                Right Name.
                                            </div>
                                            <div className="invalid-feedback">
                                                Enter your name.
                                            </div>
                                        </div>

                                        <div className="form-outline mb-2">
                                            <label className="form-label" htmlFor="emailInput">Your Email</label>
                                            <input type="text" id="emailInput"
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

                                        <div className="form-outline mb-2">
                                            <label className="form-label" htmlFor="phoneInput">Your Phone</label>
                                            <input type="text" id="phoneInput"
                                                className={`form-control form-control-lg ${validPhoneNumber ? 'is-valid' : 'is-invalid'}`}
                                                value={phoneNumber}
                                                onChange={changePhoneNumberHandler}
                                                onBlur={changePhoneNumberHandler} />
                                            <div className="valid-feedback">
                                                Right Phone Number.
                                            </div>
                                            <div className="invalid-feedback">
                                                Enter your phone number. Must be like this <strong>0123456789</strong>.
                                            </div>
                                        </div>

                                        <div className="form-outline mb-2">
                                            <div className="form-group">
                                                <label htmlFor="messageTextarea1">Your Message</label>
                                                <textarea
                                                    id="messageTextarea1"
                                                    className={`form-control ${validMessage ? 'is-valid' : 'is-invalid'}`}
                                                    value={message}
                                                    onChange={changeMessageHandler}
                                                    onBlur={changeMessageHandler}
                                                    rows="3"></textarea>
                                                <div className="valid-feedback">
                                                    Right Message.
                                                </div>
                                                <div className="invalid-feedback">
                                                    Enter your message. Must be longer then 10 characters.
                                                </div>
                                            </div>
                                        </div>

                                        <div className="d-flex justify-content-center">
                                            <button type="submit"
                                                className={`btn btn-secondary btn-lg m-3 ${!(validName && validEmail && validPhoneNumber && validMessage) ? 'disabled' : ''}`}
                                            >Send</button>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};