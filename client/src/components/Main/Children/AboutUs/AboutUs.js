//IMAGES AND LOGOS
import background from '../../../../assets/images/about-us/about-us-imageNew.png';
import member1 from '../../../../assets/images/about-us/members/member1.png';
import member2 from '../../../../assets/images/about-us/members/member2.png';
import member3 from '../../../../assets/images/about-us/members/member3.png';
import member4 from '../../../../assets/images/about-us/members/member4.png';
import member5 from '../../../../assets/images/about-us/members/member5.png';
import owner1 from '../../../../assets/images/about-us/members/owner1.png';

//REACT
//REACT COMPONENTS
import { CardMember } from './CardMember.js';
import { Button } from '../../../UI/Button.js';
//REACT HOOKS
//REACT CONTEXT
//REACT ROUTER
//SERVICES

export const AboutUs = () => {

    const members = [
        {
            profession: "Editor-in-Chief",
            imageUrl: member1,
            altImage: "member1",
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit Libero, nobis!"
        },
        {
            profession: "CEO",
            imageUrl: owner1,
            altImage: "owner",
            info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, porro."
        },
        {
            profession: "Marketing Manager",
            imageUrl: member2,
            altImage: "member2",
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, sint."
        },
        {
            profession: "Social Media Manager",
            imageUrl: member3,
            altImage: "member3",
            info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi, culpa."
        },
        {
            profession: "Web Designer",
            imageUrl: member4,
            altImage: "member4",
            info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, nisi!"
        },
        {
            profession: "Writer",
            imageUrl: member5,
            altImage: "member5",
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, fuga."
        }
    ];


    return (
        <section className="position-relative" id="aboutUs">
            <img src={background} alt="background" className="w-100" />
            <div className="position-absolute top-50 start-50 translate-middle text-center">
                <h1>OUR TEAM</h1>
                <Button
                    to={"/contact-us"}
                    className={"btn btn-secondary border border-2 border-light"}
                    title={"Contact Us"}
                />
                <div className="row d-none d-lg-block">
                    <div className="row row-cols-md-3 g-4">
                        {members.map((member, index) =>
                            <CardMember
                                key={index}
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