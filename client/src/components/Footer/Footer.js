//REACT
//REACT COMPONENTS
import { FooterLink } from './FooterLink.js';
//REACT HOOKS
//REACT CONTEXT
//REACT ROUTER
import { Link } from 'react-router-dom';
//SERVICES


export const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-white text-muted">

      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3 text-secondary"></i>ARCHNEWS LTD.
              </h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis exercitationem
                vitae dolorem odio possimus temporibus eligendi ipsam ex autem voluptas.
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="fw-bold mb-4">
                USEFUL LINKS
              </h6>

              <FooterLink
                title={"Posts"}
                to={"/posts"}
              />

              <FooterLink
                title={"Login"}
                to={"/login"}
              />

              <FooterLink
                title={"Register"}
                to={"/register"}
              />

              <FooterLink
                title={"Contact Us"}
                to={"/contact-us"}
              />



            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p><i className="fas fa-home me-3 text-secondary"></i> New York, NY 1234, US</p>
              <p>
                <i className="fas fa-envelope me-3 text-secondary"></i>
                info@archnews.com
              </p>
              <p><i className="fas fa-print me-3 text-secondary"></i> + 01 234 567 89</p>
              <p><i className="fas fa-phone me-3 text-secondary"></i> + 09 999 999 99</p>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.025)' }}>
        © 2023 Copyright:
        <Link className="text-reset fw-bold" to="/">ARCHNEWS.com</Link>
      </div>
    </footer >
  );
};