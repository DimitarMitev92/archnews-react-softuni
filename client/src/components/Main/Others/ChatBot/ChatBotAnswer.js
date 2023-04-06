import { Image } from "../../../UI/Image.js";
export const ChatBotAnswer = ({
    date,
    message
}) => {
    return (
        <>
            <div className="d-flex justify-content-between">
                <p className="small mb-1 text-muted">{date}</p>
                <p className="small mb-1">Chat Bot Tom</p>
            </div>
            <div className="d-flex flex-row justify-content-end mb-4 pt-1">
                <div>
                    <p className="small p-2 me-3 mb-3 text-black rounded-3" style={{ backgroundColor: "#f5f6f7" }}>{message}</p>
                </div>
                <Image src="https://cdn.iconscout.com/icon/premium/png-512-thumb/modern-robot-head-5338145-4464573.png?f=avif&w=512"
                    alt="avatar 1"
                    style={{ width: "45px", height: "100%" }}
                />
            </div>
        </>
    );
};