import { HeroSection } from "./Children/HeroSection/HeroSection.js";
import { PartnersSection } from "./Children/PartnersSection/PartnersSection.js";
import { BlogSection } from "./Children/BlogSection/BlogSection.js";
import { AboutUs } from "./Children/AboutUs/AboutUs.js";

export const Main = () => {
    return (
        <main>
            <HeroSection />

            <PartnersSection />

            <BlogSection />

            <AboutUs />

        </main>
    );
};