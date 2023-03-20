//REACT
//REACT COMPONENTS
//REACT HOOKS
//REACT CONTEXT
//REACT ROUTER
import { Link } from "react-router-dom";
//SERVICES


export const FooterLink = ({
    title,
    to
}) => {
    return (
        <p>
            <Link to={to} className="text-reset">{title}</Link>
        </p>
    );
};