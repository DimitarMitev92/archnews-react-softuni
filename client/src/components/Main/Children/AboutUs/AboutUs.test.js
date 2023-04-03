import { render } from '@testing-library/react';
import { AboutUs } from "./AboutUs.js";
import { BrowserRouter } from 'react-router-dom';

describe('About us section tests', () => {

    it('render a Editor-in-Chief title', () => {
        const { getByText } = render(<BrowserRouter><AboutUs /></BrowserRouter>);
        const text = getByText('Editor-in-Chief');
        expect(text).toBeInTheDocument();
    });

    it('render a CE0', () => {
        const { getByText } = render(<BrowserRouter><AboutUs /></BrowserRouter>);
        const text = getByText('CEO');
        expect(text).toBeInTheDocument();
    });

    it('render a Marketing Manager', () => {
        const { getByText } = render(<BrowserRouter><AboutUs /></BrowserRouter>);
        const text = getByText('Marketing Manager');
        expect(text).toBeInTheDocument();
    });

    it('render a Social Media Manager', () => {
        const { getByText } = render(<BrowserRouter><AboutUs /></BrowserRouter>);
        const text = getByText('Social Media Manager');
        expect(text).toBeInTheDocument();
    });

    it('render a Web Designer', () => {
        const { getByText } = render(<BrowserRouter><AboutUs /></BrowserRouter>);
        const text = getByText('Web Designer');
        expect(text).toBeInTheDocument();
    });

    it('render a Writer', () => {
        const { getByText } = render(<BrowserRouter><AboutUs /></BrowserRouter>);
        const text = getByText('Writer');
        expect(text).toBeInTheDocument();
    });

    it('render background image', () => {
        const { getByAltText } = render(<BrowserRouter><AboutUs /></BrowserRouter>);
        const image = getByAltText('aboutUs');
        expect(image).toBeInTheDocument();
    });

    it('render member1 image', () => {
        const { getByAltText } = render(<BrowserRouter><AboutUs /></BrowserRouter>);
        const image = getByAltText('member1');
        expect(image).toBeInTheDocument();
    });

    it('render owner image', () => {
        const { getByAltText } = render(<BrowserRouter><AboutUs /></BrowserRouter>);
        const image = getByAltText('owner');
        expect(image).toBeInTheDocument();
    });

    it('render member2 image', () => {
        const { getByAltText } = render(<BrowserRouter><AboutUs /></BrowserRouter>);
        const image = getByAltText('member2');
        expect(image).toBeInTheDocument();
    });

    it('render member3 image', () => {
        const { getByAltText } = render(<BrowserRouter><AboutUs /></BrowserRouter>);
        const image = getByAltText('member3');
        expect(image).toBeInTheDocument();
    });

    it('render member4 image', () => {
        const { getByAltText } = render(<BrowserRouter><AboutUs /></BrowserRouter>);
        const image = getByAltText('member4');
        expect(image).toBeInTheDocument();
    });


    it('render member5 image', () => {
        const { getByAltText } = render(<BrowserRouter><AboutUs /></BrowserRouter>);
        const image = getByAltText('member5');
        expect(image).toBeInTheDocument();
    });

    it('render button contact us', () => {
        const { getByText } = render(<BrowserRouter><AboutUs /></BrowserRouter>);
        const button = getByText('Contact Us');
        expect(button).toBeInTheDocument();
    });

});