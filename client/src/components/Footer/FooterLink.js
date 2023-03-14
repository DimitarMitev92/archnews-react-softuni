import { Link } from "react-router-dom";

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