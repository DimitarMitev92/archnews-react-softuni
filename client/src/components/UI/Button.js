//REACT
//REACT COMPONENTS
//REACT HOOKS
//REACT CONTEXT
//REACT ROUTER
import { Link } from "react-router-dom";
//SERVICES


export const Button = ({
    to,
    type,
    className,
    onClick,
    title,
    style,
    disabled
}) => {
    return (
        <Link to={to} className={`${className} ${disabled ? 'disabled' : ''}`} onClick={onClick} style={style}>{title}</Link>
    );
};