import { Link } from "react-router-dom";

export const Button = ({
    to,
    className,
    title
}) => {
    return (
        <Link to={to} className={className}>{title}</Link>
    );
};