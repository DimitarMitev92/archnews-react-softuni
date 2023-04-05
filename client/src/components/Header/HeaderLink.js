//REACT
//REACT COMPONENTS
//REACT HOOKS
//REACT CONTEXT
//REACT ROUTER
import { NavLink } from 'react-router-dom';
//SERVICES



export const HeaderLink = ({
    title,
    to
}) => {
    return (
        <li className="nav-item p-1">
            <NavLink className="btn btn-secondary" style={({ isActive, isPending }) => {
                return {
                    backgroundColor: isActive ? "#545b62" : '',
                    transform: `scale(${isActive ? "1.08" : "1"})`
                };
            }} to={to}>{title}</NavLink>
        </li>
    );
};