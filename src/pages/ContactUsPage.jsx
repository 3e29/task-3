import SecondaryHero from "../components/SecondaryHero";
import phImg from "../assets/phone-icon.png";
import maImg from "../assets/email-icon.png";
import "../style/ContactUsPage.css";
const ContactUsPage = () => {
  return (
    <>
      <div id="contact-page">
        <SecondaryHero location="HOME/ CONTACT US" title="CONTACT US" />
        <div className="container">
          <div className="first-half">
            <div className="header">
              <p className="title">| Contact Us</p>
              <h2>
                Get In Touch <br /> With Our <br /> Agent
              </h2>
            </div>
            <div className="info">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
                iste corporis? Quibusdam necessitatibus quasi maiores totam quos
                doloremque! Tempore blanditiis nobis dolore illum exercitationem
                laboriosam ut eligendi, quidem quae quaerat.
              </p>
              <div className="flex">
                <div className="card">
                  <img src={phImg} alt="contact" />
                  <div className="text">
                    <p>010-020-340</p>
                    <span>Phone Number</span>
                  </div>
                </div>

                <div className="card">
                  <img src={maImg} alt="contact" />
                  <div className="text">
                    <p>info@villa.co</p>
                    <span>Business Email</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="form">
            <form action="">
              <label htmlFor="">Full Name</label>
              <input type="text" placeholder="Your Name..." />
              <label htmlFor="">Email Address</label>
              <input type="email" placeholder="Your E-mail..." />
              <label htmlFor="">Subject</label>
              <input type="text" placeholder="Subject" />
              <label htmlFor="">Message</label>
              <input
                className="textarea"
                name=""
                id=""
                placeholder="Your Message"
              ></input>
              <button>Send Message</button>
            </form>
          </div>
        </div>
        <div className="container block">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28703.05352148686!2d-80.1250171!3d25.9391092!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9acfee073549d%3A0xf4e74db7a5da487a!2sSunny%20Isles%20Beach%2C%20FL%2033160%2C%20USA!5e0!3m2!1sen!2s!4v1724055531093!5m2!1sen!2s"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default ContactUsPage;
