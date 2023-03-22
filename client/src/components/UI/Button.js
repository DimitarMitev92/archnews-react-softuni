//REACT
//REACT COMPONENTS
//REACT HOOKS
//REACT CONTEXT
//REACT ROUTER
import { Link } from "react-router-dom";
//SERVICES


export const Button = ({
    to,
    className,
    onClick,
    title,
    disabled
}) => {
    return (
        <Link to={to} className={`${className} ${disabled ? 'disabled' : ''}`} onClick={onClick}>{title}</Link>
    );
};