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
        const { getByAltText } = render(<HeroSection />);
        const image = getByAltText('hero');
        expect(image).toBeInTheDocument();
        expect(image.src).toContain('hero-image.jpg');
    });
});