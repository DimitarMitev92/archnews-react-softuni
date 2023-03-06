import logo from '../../assets/logos/main-icon/ArchNews-1.png';

export const Header = () => {
    return (

        <header>
            {/*  Start: Navigation Bar */}
            <nav className="navbar fixed-top bg-white border-bottom border-1 border-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src={logo} alt="Logo" height="45"
                            className="d-inline-block align-text-center" />
                    </a>
                    <ul className="nav nav-pills ">
                        <li className="nav-item p-1">
                            <a className="btn btn-secondary" href="/">Home</a>
                        </li>
                        <li className="nav-item p-1">
                            <a className="btn btn-secondary" href="/">News</a>
                        </li>
                        <li className="nav-item p-1">
                            <a className="btn btn-secondary" href="/">Contact Us</a>
                        </li>
                        <li className="nav-item p-1">
                            <a className="btn btn-secondary" href="/">About Us</a>
                        </li>
                        <li className="nav-item p-1">
                            <a className="btn btn-secondary" href="/">Create Post</a>
                        </li>
                        <li className="nav-item p-1">
                            <a className="btn btn-secondary" href="/">Register</a>
                        </li>
                        <li className="nav-item p-1">
                            <a className="btn btn-secondary" href="/">Login</a>
                        </li>
                        <li className="nav-item p-1">
                            <a className="btn btn-secondary" href="/">Logout</a>
                        </li>
                    </ul>
                </div>
            </nav>
            {/*  End: Navigation Bar */}
        </header>

    );
};