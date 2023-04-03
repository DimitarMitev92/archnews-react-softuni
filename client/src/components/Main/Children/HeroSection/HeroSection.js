//IMAGES AND LOGOS
import background from '../../../../assets/images/hero-section/hero-image.png';
//REACT
//REACT COMPONENTS
import { Image } from '../../../UI/Image.js';
//REACT HOOKS
//REACT CONTEXT
//REACT ROUTER
//SERVICES

export const HeroSection = () => {
    return (
        < section className="position-relative" >
            <Image
                src={background}
                alt="hero"
                className="w-100"
            />
            <div className="position-absolute  top-50 start-50 translate-middle text-center ">
                <h1 className="display-5 text-black">EXPLORING THE ART AND SCIENCE OF BUILDING DESIGN.</h1>
            </div>
        </ section >
    );
};