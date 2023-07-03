import "./Footer.css";

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footerContainer">
        <div>
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
            <img src="phone.svg" alt="phoneNumber" />
            <p>+48 535 092 608</p>
          </div>
          <div className="meansOfContact" id="mail">
            <img src="mail.svg" alt="mailIcon" />
            <p>b.drozd07@gmail.com</p>
          </div>
        </div>
        <div className="footerContainerMediaIcons">
          <img src="Twitter.svg" alt="twitterIcon" />
          <img src="Facebook.svg" alt="facebookIcon" />
          <img
            className="tiktokIcon"
            id="tiktok"
            src="Tiktok.jpg"
            alt="tiktokIcon"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
