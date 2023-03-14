import { Link } from 'react-router-dom';


export const HeaderLink = ({
    title,
    to
}) => {
    return (
        <li className="nav-item p-1">
            <Link className="btn btn-secondary" to={to}>{title}</Link>
        </li>
    );
};