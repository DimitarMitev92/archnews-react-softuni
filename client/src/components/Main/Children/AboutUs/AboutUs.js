import { Link } from 'react-router-dom';

import { CardMember } from './CardMember.js';

export const AboutUs = () => {

    const members = [
        {
            profession: "Editor-in-Chief",
            imageUrl: "https://lh3.googleusercontent.com/pw/AMWts8C_yAdD52u5N4xmK45tokahKxA8wa9WgJeCqK9wR0R7oAhqviHELD-KLV4TX15XFbyhkILwvMjOzaRfZZMV2Obyzuv5G4nhaWEhopTXJWvDKEw26IpKF0ruXT3CGu6Ms_cEbzyVqYuMLjHh6PA-c6No=s400-no?authuser=0",
            altImage: "member1",
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit Libero, nobis!"
        },
        {
            profession: "CEO",
            imageUrl: "https://lh3.googleusercontent.com/pw/AMWts8Dt6fN0VeuLpwlepGGJlutPIC5OBPOwl_YHS7w7d0c1tSmqZeZ20iks7OTNAGfuLim8zZCcB1yrnc4ySBGueuwGnCokpOI7p41VE4DW_PliulbMNe1-ZgVwbyHbOGnN1kwpOozMMhKapvE_FdrS6Bts=s400-no?authuser=0",
            altImage: "owner",
            info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.         Dolore, porro."
        },
        {
            profession: "Marketing Manager",
            imageUrl: "https://lh3.googleusercontent.com/pw/AMWts8B09xB5FEEPJ09kDVM74tRY76GUhH0eOG9Y9ur3M6jOwKCFef7JIuwWo9W0Ns2cNE3jy0UQw6sg2wy_PtJL2s7ueFwTZF6yHezTQ3yv3iRZVc82hc2L6fDuCUgwBTlyHlaSZU7rctTN7gXjrFTSii3z=s400-no?authuser=0",
            altImage: "member2",
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.           Tempore, sint."
        },
        {
            profession: "Social Media Manager",
            imageUrl: "https://lh3.googleusercontent.com/pw/AMWts8A_8CE56PnwoqbkyiDceCe4XdBRdr4hOiUn0kryELFHoW6HcQzspw-Iv4ZGecfzqCJU1IVHNb865G_F9RkjH8IJXDmC_XwviRmoOAFVv3qd_s5KRMtXpZxOtr0y2cujlTfaYY-Y2yT4ReyMNDsDPzwi=s400-no?authuser=0",
            altImage: "member3",
            info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.          Sequi, culpa."
        },
        {
            profession: "Web Designer",
            imageUrl: "https://lh3.googleusercontent.com/pw/AMWts8A2WEtjiSjbr8LQvlpLlVp0BuA5z7KzH3VnfZfILG4PVuXrZ58CAZu-O_xOtH2zEB_Z0s2YfeB5BsaDyOBfC74GvhYkTWRy0FMIVyTNZgqchGCiE-vJAakmkCQoUYVU7jS8fL289Pdz9DngEW6lN3bV=s400-no?authuser=0",
            altImage: "member4",
            info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, nisi!"
        },
        {
            profession: "Writer",
            imageUrl: "https://lh3.googleusercontent.com/pw/AMWts8CrDybG8lOuAISMQ17IrUWTPE8NyDPcyKnzW5S8uzDYS0NoXOk9wkifihJhxac0kZH1HrsgdmGuimlZw7KWvcvzf6l04NqhX8uqLSj3SGW49Z4Dq9XWcGfCGnqZ3VvKIRyVG0QkVW2BTBgT0muBPQ_O=s400-no?authuser=0",
            altImage: "member5",
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, fuga."
        }
    ];


    return (
        <section className="position-relative" id="aboutUs">
            <img src="https://lh3.googleusercontent.com/pw/AMWts8A1hXNSfNF0-KT9Y9ZzxcqSoWXEhaAWaWxo_AqNpX9GGZhoEHWneseLIZ8G3g8bItxqd6rtnlRzt5eb8VH5TVLQM4bB-uhIx3MYXO2QPM5kvIiJfmo7FvRzdVTsEEsBsalMeJGJiOyxWPFIv5ymSwdH=w1500-h1000-no?authuser=0" alt="background" className="w-100" />
            <div className="position-absolute top-50 start-50 translate-middle text-center">
                <h1>OUR TEAM</h1>
                <Link className="btn btn-secondary border border-2 border-light" to="/contact-us">Contact Us <ion-icon
                    name="call-outline"></ion-icon></Link>

                <div className="row d-none d-lg-block">
                    <div className="row row-cols-md-3 g-4">
                        {members.map(member =>
                            <CardMember
                                profession={member.profession}
                                imageUrl={member.imageUrl}
                                altImage={member.altImage}
                                info={member.info}
                            />)}
                    </div>
                </div>

            </div>

        </section >
    );
};