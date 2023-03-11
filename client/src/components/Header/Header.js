import logo from '../../assets/logos/main-icon/ArchNews-1.png';

import { Link } from 'react-router-dom';

export const Header = () => {
    return (

        <header>
            {/*  Start: Navigation Bar */}
            <nav className="navbar fixed-top bg-white border-bottom border-1 border-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt="Logo" height="45"
                            className="d-inline-block align-text-center" />
                    </Link>
                    <ul className="nav nav-pills ">
                        <li className="nav-item p-1">
                            <Link className="btn btn-secondary" to="/">Home</Link>
                        </li>
                        <li className="nav-item p-1">
                            <Link className="btn btn-secondary" to="/posts">Posts</Link>
                        </li>
                        <li className="nav-item p-1">
                            <Link className="btn btn-secondary" to="/contact-us">Contact Us</Link>
                        </li>
                        <li className="nav-item p-1">
                            <Link className="btn btn-secondary" to="/create">Create Post</Link>
                        </li>
                        <li className="nav-item p-1">
                            <Link className="btn btn-secondary" to="/register">Register</Link>
                        </li>
                        <li className="nav-item p-1">
                            <Link className="btn btn-secondary" to="/login">Login</Link>
                        </li>
                        <li className="nav-item p-1">
                            <Link className="btn btn-secondary" to="/">Logout</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            {/*  End: Navigation Bar */}
        </header>

    );
};