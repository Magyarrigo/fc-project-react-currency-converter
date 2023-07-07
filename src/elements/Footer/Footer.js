import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footerContainer">
        <div className="logoContainer">
          <img className="logo" src="logo-magyarrigo.svg" alt="logoOfCompany" />
        </div>
        <div className="footerContainerButtons">
          <a className="footerButton" href="#description">
            DESCRIPTION
          </a>
          <a className="footerButton" href="#converter">
            CONVERTER
          </a>
        </div>

        <div className="footerContainerContact">
          <div className="meansOfContact" id="phone">
            <img src="phone.svg" className="phoneIcon" alt="phoneNumber" />
            <p className="phoneNumber"> +48 535 062 908</p>
          </div>
          <div className="meansOfContact" id="mail">
            <img src="mail.svg" className="mailIcon" alt="mailIcon" />
            <p>b.drozd07@gmail.com</p>
          </div>
        </div>
        <div className="footerContainerMediaIcons">
          <FontAwesomeIcon icon={faTwitter} color="white" />
          <FontAwesomeIcon icon={faFacebook} color="white" />
          <FontAwesomeIcon icon={faTiktok} color="white" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
