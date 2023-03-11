import { HeroSection } from "./Children/HeroSection.js";
import { PartnersSection } from "./Children/PartnersSection.js";
import { BlogSection } from "./Children/BlogSection.js";
import { AboutUs } from "./Children/AboutUs.js";

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