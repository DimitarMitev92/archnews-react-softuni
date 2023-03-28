//IMAGES AND LOGOS
import background from '../../../../assets/images/contact-us/contactUs-image.png';
//REACT
import { useState } from 'react';
//REACT COMPONENTS
import { InputField } from '../../../UI/InputField.js';
import { InputTextarea } from '../../../UI/InputTextarea.js';
//REACT HOOKS
//REACT CONTEXT
//REACT ROUTER
import { useNavigate } from 'react-router-dom';
//SERVICES
import { contact } from '../../../../services/contact.js';

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
        const regex = /^[a-z_\-0-9]{3,}@[a-z]{2,}\.[a-z]{2,}$/gm;
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
        contact(name, email, phoneNumber, message)
            .then(result => {
                console.log(result);
                navigate('/');
            })
            .catch(error => alert(error.message));
    };

    const contactsInputs = [
        {
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
            title: "Your Phone",
            htmlFor: "phoneInput",
            type: "text",
            validItem: validPhoneNumber,
            value: phoneNumber,
            onChange: changePhoneNumberHandler,
            onBlur: changePhoneNumberHandler,
            validFeedback: "Right phone number.",
            invalidFeedback: "Enter your phone number.",
        }, {
            title: "Your Message",
            htmlFor: "messageTextarea",
            validItem: validMessage,
            value: message,
            onChange: changeMessageHandler,
            onBlur: changeMessageHandler,
            validFeedback: "Right message.",
            invalidFeedback: "Enter your message.",
        }
    ];

    return (
        <section className="vh-100 bg-image" style={{ backgroundImage: `url(${background})` }}>
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

                                        {contactsInputs.map((contact, index) => <InputField
                                            key={index}
                                            title={contact.title}
                                            htmlFor={contact.htmlFor}
                                            validItem={contact.validItem}
                                            value={contact.value}
                                            onChange={contact.onChange}
                                            onBlur={contact.onBlur}
                                            validFeedback={contact.validFeedback}
                                            invalidFeedback={contact.invalidFeedback}
                                        />)}

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