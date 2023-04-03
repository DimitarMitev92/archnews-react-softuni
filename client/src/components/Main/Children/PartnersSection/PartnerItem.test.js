import { render } from '@testing-library/react';
import { PartnerItem } from './PartnerItem.js';

describe('Partner item tests', () => {

    it('Render partner', () => {
        const key = 0;
        const title = 'partner1';
        const classNameDiv = "col text-center";
        const classNameImg = "img-fluid";
        const imageUrl = "../../../../assets/logos/partners/partner1.png";

        const { getByAltText } = render(<PartnerItem
            key={key}
            title={title}
            classNameDiv={classNameDiv}
            classNameImg={classNameImg}
            imageUrl={imageUrl}
        />);

        const image = getByAltText(`${title}`);
        expect(image).toBeInTheDocument();
    });

});
