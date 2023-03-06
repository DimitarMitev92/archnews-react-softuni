import partner1Logo from '../../../assets/logos/partners/partner1.png';
import partner2Logo from '../../../assets/logos/partners/partner2.png';
import partner3Logo from '../../../assets/logos/partners/partner3.png';

export const PartnersSection = () => {
    return (
        <section className="container-fluid p-3 mt-3">
            <div className="row">
                <h5 className="text-center">OUR PARTNERS</h5>
            </div>
            <div className="row ">
                <div className="col text-center">
                    <img className="img-fluid" src={partner1Logo} alt="partner4" />
                </div>
                <div className="col text-center">
                    <img className="img-fluid" src={partner2Logo} alt="partner2" />
                </div>
                <div className="col text-center">
                    <img className="img-fluid" src={partner3Logo} alt="partner3" />
                </div>
            </div>
        </section>
    );
};