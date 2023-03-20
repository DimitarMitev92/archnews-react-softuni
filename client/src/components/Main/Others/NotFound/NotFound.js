//REACT
//REACT COMPONENTS
//REACT HOOKS
//REACT CONTEXT
//REACT ROUTER
import { Link } from 'react-router-dom';
//SERVICES

export const NotFound = () => {
    return (
        <div className="container d-flex justify-content-center align-items-center text-center" style={{ height: "100vh" }}>
            <div className="row">
                <div className="col">
                    <img className="img-fluid" src='https://lh3.googleusercontent.com/pw/AMWts8BWQI_MgwG4BiB3s4Am4TQkP4tfXUUFIQEX0tqVK3CI_9X1meYvJ8zKOVBPaERiH8WLrULxWy7ve4Fbj8wMr3mtjEDlspF2JcYIS1e5Z_xSJJHkg-TRLwmGYYqzepv9Cv9o0qnBH7b_ZYBxVtqSG-tb=w2000-h1000-no?authuser=0' alt="404" />
                    <h3 className="display-7">THANKS. YOU JUST BROKE IT ALL!</h3>
                    <Link className="btn btn-secondary mt-2" to="/">GET ME OUT OF HERE</Link>
                </div>
            </div>
        </div>
    );
};