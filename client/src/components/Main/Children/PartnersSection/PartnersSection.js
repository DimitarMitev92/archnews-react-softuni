//IMAGES AND LOGOS
import partner1 from '../../../../assets/logos/partners/partner1.png';
import partner2 from '../../../../assets/logos/partners/partner2.png';
import partner3 from '../../../../assets/logos/partners/partner3.png';
//REACT
//REACT COMPONENTS
import { PartnerItem } from "./PartnerItem.js";
//REACT HOOKS
//REACT CONTEXT
//REACT ROUTER
//SERVICES


export const PartnersSection = () => {

    const partners = [
        {
            title: 'partner1',
            classNameDiv: "col text-center",
            classNameImg: "img-fluid",
            imageUrl: partner1
        },
        {
            title: 'partner2',
            classNameDiv: "col text-center",
            classNameImg: "img-fluid",
            imageUrl: partner2
        },
        {
            title: 'partner3',
            classNameDiv: "col text-center",
            classNameImg: "img-fluid",
            imageUrl: partner3
        }
    ];


    return (
        <section className="container-fluid p-5 mt-3">
            <div className="row">
                <h5 className="text-center">OUR PARTNERS</h5>
            </div>
            <div className="row ">
                {partners.map((partner, index) =>
                    <PartnerItem
                        key={index}
                        title={partner.title}
                        classNameDiv={partner.classNameDiv}
                        classNameImg={partner.classNameImg}
                        imageUrl={partner.imageUrl}
                    />)}
            </div>
        </section>
    );
};