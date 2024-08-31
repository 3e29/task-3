import Card from "../components/Card";
import SecondaryHero from "../components/SecondaryHero";
import Img1 from "../assets/property-01.jpg";
import Img2 from "../assets/property-02.jpg";
import Img3 from "../assets/property-03.jpg";
import Img4 from "../assets/property-04.jpg";
import Img5 from "../assets/property-05.jpg";
import Img6 from "../assets/property-06.jpg";
import Img7 from "../assets/property-03.jpg";
import Img8 from "../assets/property-02.jpg";
import Img9 from "../assets/property-01.jpg";
const Images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9];

import "../style/PropertiesPage.css";
import cardsData from "../config/properties.json";
import { useState } from "react";
const PropertiesPage = () => {
  const [selectedType, setSelectedType] = useState("All");

  // Function to handle type selection
  const handleTypeChange = (value) => {
    setSelectedType(value);
  };

  // Filter cards based on selected type
  const filteredCards =
    selectedType === "All"
      ? cardsData
      : cardsData.filter((card) => card.type === selectedType);
  return (
    <>
      <div id="property">
        <SecondaryHero location="HOME / PROPERTIES" title="PROPERTIES" />
        <div className="filter">
          <ul>
            <li
              onClick={() => handleTypeChange("All")}
              className={selectedType === "All" ? "active" : ""}
            >
              Show All
            </li>
            <li
              onClick={() => handleTypeChange("Apartment")}
              className={selectedType === "Apartment" ? "active" : ""}
            >
              Apartment
            </li>
            <li
              onClick={() => handleTypeChange("Villa House")}
              className={selectedType === "Villa House" ? "active" : ""}
            >
              Villa House
            </li>
            <li
              onClick={() => handleTypeChange("Penthouse")}
              className={selectedType === "Penthouse" ? "active" : ""}
            >
              Penthouse
            </li>
          </ul>
        </div>
        <div className="cards">
          {filteredCards.map((card, index) => (
            <Card
              key={index} // Use a unique key if available
              uri={Images[index]}
              type={card.type}
              cast={card.cast}
              title={card.title}
              numberOfBedrooms={card.numberOfBedrooms}
              numberOfBathrooms={card.numberOfBathrooms}
              area={card.area}
              floor={card.floor}
              parking={card.parking}
            />
          ))}
        </div>

        <div className="cards-navigate">
          <ul>
            <li>1</li>
            <li className="active">2</li>
            <li>3</li>
            <li>4</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default PropertiesPage;
