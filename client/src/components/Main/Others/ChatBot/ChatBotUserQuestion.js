import { Image } from '../../../UI/Image.js';
import user from '../../../../assets/logos/chat-bot/user.png';
export const ChatBotUserQuestion = ({
    name,
    date,
    message
}) => {
    return (
        <>
            <div className="d-flex justify-content-between">
                <p className="small mb-1">{name}</p>
                <p className="small mb-1 text-muted">{date}</p>
            </div>
            <div className="d-flex flex-row justify-content-start">
                <Image src={user}
                    alt="avatar 2"
                    style={{ width: "45px", height: "100%" }} />
                <div>
                    <p className="small p-2 ms-3 mb-3 rounded-3" style={{ backgroundColor: "#f5f6f7" }}>{message}</p>
                </div>
            </div>
        </>
    );
};