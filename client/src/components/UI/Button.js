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
    title
}) => {
    return (
        <Link to={to} className={className}>{title}</Link>
    );
};