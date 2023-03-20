//REACT
//REACT COMPONENTS
//REACT HOOKS
//REACT CONTEXT
//REACT ROUTER
import { Link } from 'react-router-dom';
//SERVICES



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