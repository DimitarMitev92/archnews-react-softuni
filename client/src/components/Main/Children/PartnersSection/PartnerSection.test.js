import { render } from '@testing-library/react';
import { PartnersSection } from './PartnersSection.js';

describe('Partner section tests', () => {

    it('Render partner1', () => {
        const { getByAltText } = render(<PartnersSection />);
        const image = getByAltText(`partner1`);
        expect(image).toBeInTheDocument();
    });
    it('Render partner2', () => {
        const { getByAltText } = render(<PartnersSection />);
        const image = getByAltText(`partner2`);
        expect(image).toBeInTheDocument();
    });
    it('Render partner3', () => {
        const { getByAltText } = render(<PartnersSection />);
        const image = getByAltText(`partner3`);
        expect(image).toBeInTheDocument();
    });
});