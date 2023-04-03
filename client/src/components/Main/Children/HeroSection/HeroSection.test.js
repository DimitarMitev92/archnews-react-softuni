import React from 'react';
import { render } from '@testing-library/react';
import { HeroSection } from './HeroSection.js';

describe('Hero section', () => {
    it('renders a title', () => {
        const { getByText } = render(<HeroSection />);
        const staticText = getByText('EXPLORING THE ART AND SCIENCE OF BUILDING DESIGN.');
        expect(staticText).toBeInTheDocument();
    });
    it('render a background image', () => {
        const src = "../../../../assets/images/hero-section/hero-image.png";
        const alt = "hero";
        const className = "w-100";

        const { getByAltText } = render(<HeroSection
            src={src}
            alt={alt}
            className={className}
        />);
        const image = getByAltText(`${alt}`);
        expect(image).toBeInTheDocument();
    });
});