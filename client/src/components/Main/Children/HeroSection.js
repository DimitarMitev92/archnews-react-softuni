import heroImage from '../../../assets/images/hero-section/hero-image.jpg';

export const HeroSection = () => {
    return (
        < section className="position-relative" >
            <img src={heroImage} alt="hero" className="w-100" />
            <div className="position-absolute  top-50 start-50 translate-middle text-center">
                <h1 className="display-5">EXPLORING THE ART AND SCIENCE OF BUILDING DESIGN.</h1>
            </div>
        </ section >
    );
};