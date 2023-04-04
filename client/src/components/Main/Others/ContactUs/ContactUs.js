//IMAGES AND LOGOS
import background from '../../../../assets/images/contact-us/contactUs-image.png';
//REACT
import { useEffect, useState } from 'react';
//REACT COMPONENTS
import { InputField } from '../../../UI/InputField.js';
import { InputTextarea } from '../../../UI/InputTextarea.js';
import { ButtonSubmit } from '../../../UI/ButtonSubmit.js';
//REACT HOOKS
//REACT CONTEXT
//REACT ROUTER
import { useNavigate } from 'react-router-dom';
//SERVICES
import { contact } from '../../../../services/contact.js';

export const ContactUs = () => {

    const navigate = useNavigate();

    const [contactsForm, setContactForm] = useState([]);

    const [contactUserData, setContactUserData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        message: ''
    });

    const [validContactData, setValidContactData] = useState({
        name: false,
        email: false,
        phoneNumber: false,
        message: false
    });

    const [isClickContactUser, setIsClickContactUser] = useState({
        name: false,
        email: false,
        phoneNumber: false,
        message: false
    });

    const clickContactUserHandler = (e) => {
        setIsClickContactUser({ ...isClickContactUser, [e.target.name]: true });
    };

    const changeNameHandler = (e) => {
        setContactUserData({ ...contactUserData, [e.target.name]: e.target.value });
        if (e.target.value.trim().length > 0) {
            setValidContactData({ ...validContactData, [e.target.name]: true });
        } else {
            setValidContactData({ ...validContactData, [e.target.name]: false });
        }
    };

    const changeEmailHandler = (e) => {
        setContactUserData({ ...contactUserData, [e.target.name]: e.target.value });
        const regex = /^[a-z_\-0-9]{3,}@[a-z]{2,}\.[a-z]{2,}$/;
        setValidContactData({ ...validContactData, [e.target.name]: regex.test(e.target.value.trim()) });
    };

    const changePhoneNumberHandler = (e) => {
        setContactUserData({ ...contactUserData, [e.target.name]: e.target.value });
        const regex = /^[0]{1}[0-9]{9}$/;
        setValidContactData({ ...validContactData, [e.target.name]: regex.test(e.target.value.trim()) });
    };

    const changeMessageHandler = (e) => {
        setContactUserData({ ...contactUserData, [e.target.name]: e.target.value });
        if (e.target.value.trim().length > 10) {
            setValidContactData({ ...validContactData, [e.target.name]: true });
        } else {
            setValidContactData({ ...validContactData, [e.target.name]: false });
        }
    };

    const contactSubmitHandler = (e) => {
        e.preventDefault();
        contact(contactUserData.name,
            contactUserData.email,
            contactUserData.phoneNumber,
            contactUserData.message)
            .then(result => {
                console.log(result);
                navigate('/');
            })
            .catch(error => alert(error.message));

        setContactUserData({
            name: '',
            email: '',
            phoneNumber: '',
            message: ''
        });
    };

    const contactsInputs = [
        {
            title: "Your Name",
            htmlFor: "nameInput",
            type: "text",
            validItem: validContactData.name,
            value: contactUserData.name,
            name: 'name',
            onChange: changeNameHandler,
            onBlur: changeNameHandler,
            onClick: clickContactUserHandler,
            isClicked: isClickContactUser.name,
            validFeedback: "Right name.",
            invalidFeedback: "Enter your name.",
        }, {
            title: "Your Email",
            htmlFor: "emailInput",
            type: "email",
            validItem: validContactData.email,
            value: contactUserData.email,
            name: 'email',
            onChange: changeEmailHandler,
            onBlur: changeEmailHandler,
            onClick: clickContactUserHandler,
            isClicked: isClickContactUser.email,
            validFeedback: "Right email.",
            invalidFeedback: "Enter your email.",
        }, {
            title: "Your Phone",
            htmlFor: "phoneInput",
            type: "text",
            validItem: validContactData.phoneNumber,
            value: contactUserData.phoneNumber,
            name: 'phoneNumber',
            onChange: changePhoneNumberHandler,
            onBlur: changePhoneNumberHandler,
            onClick: clickContactUserHandler,
            isClicked: isClickContactUser.phoneNumber,
            validFeedback: "Right phone number.",
            invalidFeedback: "Enter your phone number.",
        }
    ];

    useEffect(() => {
        setContactForm(preventDefault => preventDefault = contactsInputs);
    }, [isClickContactUser.name,
    isClickContactUser.email,
    isClickContactUser.phoneNumber,
    isClickContactUser.message,
    contactUserData.name,
    contactUserData.email,
    contactUserData.phoneNumber,
    contactUserData.message]);

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

                                        {contactsForm.map((contact, index) => <InputField
                                            key={index}
                                            title={contact.title}
                                            htmlFor={contact.htmlFor}
                                            validItem={contact.validItem}
                                            value={contact.value}
                                            name={contact.name}
                                            onChange={contact.onChange}
                                            onBlur={contact.onBlur}
                                            onClick={contact.onClick}
                                            isClicked={contact.isClicked}
                                            validFeedback={contact.validFeedback}
                                            invalidFeedback={contact.invalidFeedback}
                                        />)}

                                        <InputTextarea
                                            title={"Your Message"}
                                            htmlFor={"messageTextarea"}
                                            validItem={validContactData.message}
                                            value={contactUserData.message}
                                            name="message"
                                            onChange={changeMessageHandler}
                                            onBlur={changeMessageHandler}
                                            onClick={clickContactUserHandler}
                                            isClicked={isClickContactUser.message}
                                            validFeedback={"Right message."}
                                            invalidFeedback={"Enter your message."}
                                        />

                                        <div className="d-flex justify-content-center">
                                            <ButtonSubmit
                                                className={`btn btn-secondary btn-lg m-3 ${!(validContactData.name && validContactData.email && validContactData.phoneNumber && validContactData.message) ?
                                                    'disabled' : ''}`}
                                                title="Send"
                                            />

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