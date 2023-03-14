import { PartnerItem } from "./PartnerItem.js";

export const PartnersSection = () => {

    const partners = [
        {
            title: 'partner1',
            classNameDiv: "col text-center",
            classNameImg: "img-fluid",
            imageUrl: "https://lh3.googleusercontent.com/pw/AMWts8AFVKLsn5iVwP7ATYcVJwXLF_-Vzahp4VkZOLnFdtgi1VlqTyUDY5dhXAxau_7WyKQv3WaxNZN3Zql-bJVUFWr4omzki_LPzgUAjnM5q7_1TNkBcQKT-h83-Gfz3km-HDDRxTKIrEgE34tYKY2_yZHZ=w200-h150-no?authuser=0"
        },
        {
            title: 'partner2',
            classNameDiv: "col text-center",
            classNameImg: "img-fluid",
            imageUrl: "https://lh3.googleusercontent.com/pw/AMWts8DxW1MvIRjyYb1BA4d6LiD0jxhdz3nkjm4isanRrl-xZqN4veOt6l6lllBUZn4TkS8YsqzvoFeV8_M5OuH7_CG4NjMiwixN7yeD_6kWpQQoLH5ubybrcbuJV0O4feuR_qD1VCBFuQRSqAiFWwxHiwMG=w200-h151-no?authuser=0"
        },
        {
            title: 'partner3',
            classNameDiv: "col text-center",
            classNameImg: "img-fluid",
            imageUrl: "https://lh3.googleusercontent.com/pw/AMWts8BCjkrzMxD9k8oX98ZdTkB30u0-1UplzqZvUdEnnGUfb_5y__X94Ys_poxBxMGij6xMvSvl2VabVe76Jt0-K-O-TZSalRuTLo3Phs--r-PKcUsSpZFJetm7Ae0FsslrftQMvzGUw94f_bzuTvd-VCuf=w200-h151-no?authuser=0"
        }
    ];


    return (
        <section className="container-fluid p-3 mt-3">
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