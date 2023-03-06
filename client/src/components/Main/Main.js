import { HeroSection } from "./Children/HeroSection.js";
import { PartnersSection } from "./Children/PartnersSection.js";
import { BlogSection } from "./Children/BlogSection.js";
import { AboutUs } from "./Children/AboutUs.js";

import { Login } from "./Children/Login.js";
import { Register } from "./Children/Register.js";
import { Edit } from "./Children/Edit.js";
import { Details } from "./Children/Details.js";
import { Create } from "./Children/Create.js";
import { ContactUs } from "./Children/ContactUs.js";
import { Catalog } from "./Children/Catalog.js";

export const Main = () => {
    return (
        <main>
            <HeroSection />

            <PartnersSection />

            <BlogSection />

            <AboutUs />

            <Login />

            <Register />

            <Edit />

            <Details />

            <Create />

            <ContactUs />

            <Catalog />

        </main>
    );
};