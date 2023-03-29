import React from 'react';
import { render } from '@testing-library/react';
import { PartnerItem } from '../PartnersSection/PartnerItem.js';

describe('Partner section tests', () => {

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

        const altText = getByAltText(`${title}`);
        expect(altText).toBeInTheDocument();
    });

});
