//REACT
import { useState, useContext } from "react";
//IMAGES AND LOGOS
import background from '../../../../assets/images/chat-bot/background.png';
//REACT COMPONENTS
import { ChatBotAnswer } from "./ChatBotAnswer.js";
import { ChatBotUserQuestion } from "./ChatBotUserQuestion.js";
import { Image } from "../../../UI/Image.js";
//REACT CONTEXT
import { AuthContext } from "../../../../contexts/authContext.js";

export const ChatBot = (props) => {

    const { auth } = useContext(AuthContext);

    const [messageUser, setMessageUser] = useState('');
    const [userMessages, setUserMessages] = useState([]);

    const onChangeMessageUser = (e) => {
        setMessageUser(previousState => previousState = e.target.value);
    };

    const onClickMessageHandler = (e) => {


        const date = new Date();
        console.log(auth.name);
        console.log(date);
        console.log(messageUser);
    };

    return (
        < section className="position-relative" >
            <Image
                src={background}
                alt="hero"
                className="w-100"
            />
            <div className="container position-absolute  top-50 start-50 translate-middle text-center py-5">

                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-10 col-lg-8 col-xl-6">

                        <div className="card m-5">
                            <div className="card-header d-flex justify-content-center align-items-center p-3"
                                style={{ borderTop: "4px solid #6c757d" }}>
                                <h5 className="mb-0">Chat messages</h5>

                            </div>
                            <div className="card-body" data-mdb-perfect-scrollbar="true" style={{ position: "relative", height: "400px" }}>

                                <ChatBotUserQuestion name="Dimitar" date="04. 05. 2023" message="Please tell me what is architecture" />
                                <ChatBotAnswer date="04.05.2023" message="I don't know. You have more questions?" />


                            </div>
                            <div className="card-footer text-muted d-flex justify-content-start align-items-center p-3">
                                <div className="input-group mb-0">
                                    <input type="text" className="form-control" placeholder="Type message"
                                        aria-label="Recipient's username" aria-describedby="button-addon2" />
                                    <button
                                        className="btn btn-secondary text-white"
                                        type="button"
                                        id="button-addon2"
                                        style={{ paddingTop: ".55rem" }}
                                        onChange={onChangeMessageUser}
                                        value={messageUser}
                                        onClick={onClickMessageHandler}
                                    >
                                        Send
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </ section >
    );
};