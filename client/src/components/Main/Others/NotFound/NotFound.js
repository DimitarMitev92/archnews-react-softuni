//IMAGES AND LOGOS
import status404 from '../../../../assets/images/404/404.png';
//REACT
//REACT COMPONENTS
import { Image } from '../../../UI/Image.js';
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
                    <Image
                        src={status404}
                        alt="404"
                        className="img-fluid"
                    />
                    <h3 className="display-7">THANKS. YOU JUST BROKE IT ALL!</h3>
                    <Link className="btn btn-secondary mt-2" to="/">GET ME OUT OF HERE</Link>
                </div>
            </div>
        </div>
    );
};