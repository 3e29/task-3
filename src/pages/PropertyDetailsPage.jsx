import SecondaryHero from "../components/SecondaryHero";
import img1 from "../assets/img.jpg";
import ic1 from "../assets/info-icon-01.png";
import ic2 from "../assets/info-icon-02.png";
import ic3 from "../assets/info-icon-03.png";
import ic4 from "../assets/info-icon-04.png";
import "../style/PropertyDetailsPage.css";
import Deals from "../components/Deals";
import { useState } from "react";
const PropertyDetailsPage = () => {
  const [activeParagraph, setActiveParagraph] = useState(null);

  const toggleActive = (paraId) => {
    setActiveParagraph(activeParagraph === paraId ? null : paraId);
  };
  return (
    <>
      <div id="properties-page">
        <SecondaryHero
          location="HOME / SINGLE PROPERTY"
          title="SINGLE PROPERTY"
        />
        <div className="container">
          <div className="description">
            <div className="image-card">
              <div className="image-holder">
                <img className="img1" src={img1} alt="" />
                <p className="desc">Apartment</p>
                <h2 className="title">24 New Street Miami, OR 24560</h2>
                <hr />
                <div className="content">
                  <div>
                    <p>
                      Get <b>the best villa agency</b> HTML CSS Bootstrap
                      template for your website. Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Necessitatibus voluptatibus
                      voluptatum, deserunt perspiciatis culpa dolor sed quisquam
                      accusantium nemo hic eos aut voluptas ad amet consequatur
                      eligendi corrupti! Consequatur, eaque.
                    </p>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Magni quibusdam quia ducimus amet accusantium provident
                      saepe suscipit eaque, est ex dicta alias, blanditiis
                      repudiandae ullam quas non repellendus earum esse!
                    </p>
                  </div>
                </div>

                <div className="card">
                  <div className="card-body">
                    <div className="border">
                      <h4
                        onClick={() => toggleActive("p3")}
                        data-para="p3"
                        className={`${
                          activeParagraph === "p3" ? "active" : ""
                        }`}
                      >
                        Best useful links ?
                      </h4>
                      <p
                        className={activeParagraph === "p3" ? "active" : ""}
                        data-id="p3"
                      >
                        Get <span className="bold">the best villa</span> website
                        template in HTML CSS and Bootstrap for your business.
                        templateMo provides you the{" "}
                        <a>best free CSS templates</a> in the world. please tell
                        your friends about it.
                      </p>
                    </div>

                    <div className="border">
                      <h4
                        onClick={() => toggleActive("p1")}
                        data-para="p1"
                        className={`${
                          activeParagraph === "p1" ? "active" : ""
                        }`}
                      >
                        How does this word ?
                      </h4>
                      <p
                        className={activeParagraph === "p1" ? "active" : ""}
                        data-id="p1"
                      >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Totam quibusdam fugit accusantium odit tenetur
                        perferendis!
                      </p>
                    </div>

                    <h4
                      onClick={() => toggleActive("p2")}
                      className={`${
                        activeParagraph === "p2" ? "active" : ""
                      } card-footer`}
                      data-para="p2"
                    >
                      Why is Villa Agency the best ?
                    </h4>
                    <p
                      className={activeParagraph === "p2" ? "active" : ""}
                      data-id="p2"
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Unde quod molestias exercitationem nam aut velit?
                    </p>
                  </div>
                </div>
              </div>
              <ul className="offers">
                <li>
                  <img src={ic1} alt="ic1" />

                  <div className="note">
                    <p>250 m2</p>
                    <span>Total Flat Space</span>
                  </div>
                </li>

                <li>
                  <img src={ic2} alt="ic1" />

                  <div className="note">
                    <p>Contract</p>
                    <span>Contract Ready</span>
                  </div>
                </li>

                <li>
                  <img src={ic3} alt="ic1" />

                  <div className="note">
                    <p>Payment</p>
                    <span>Payment</span>
                  </div>

                  <span className="float">Control</span>
                </li>

                <li>
                  <img src={ic4} alt="ic1" />

                  <div className="note">
                    <p>Safety</p>
                    <span>24/7 Under Control</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Deals />
      </div>
    </>
  );
};

export default PropertyDetailsPage;
