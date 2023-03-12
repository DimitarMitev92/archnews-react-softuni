import { Link } from 'react-router-dom';

export const Header = () => {
    return (

        <header>
            {/*  Start: Navigation Bar */}
            <nav className="navbar fixed-top bg-white border-bottom border-1 border-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src="https://lh3.googleusercontent.com/pw/AMWts8A6BXSwv_9rWhqKm5tJ3h0IET50m4d6tsNqGRGOPbnIuvqMd-khh_11BFRMMVZEUGDxqZy8DE8fRvzElmM2UlxJZ4XCYPsxu8CwdNJ_J24lddwCJymMluEAka9OywdTOo_ript5_ILYHfycU-poG3-D=w797-h174-no?authuser=0" alt="Logo" height="40"
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