// import "../style/SecondaryHero.css";
// import Card from "./Card";
// import Img1 from "../assets/property-01.jpg";
// import Img2 from "../assets/property-02.jpg";
// import Img3 from "../assets/property-03.jpg";
// import Img4 from "../assets/property-04.jpg";
// import Img5 from "../assets/property-05.jpg";
// import Img6 from "../assets/property-06.jpg";
// import Img7 from "../assets/property-03.jpg";
// import Img8 from "../assets/property-02.jpg";
// import Img9 from "../assets/property-01.jpg";
// const SecondaryHero = () => {
//   return (
//     <div id="secondary-hero">
//       <div className="img-holder">
//         <div className="title">
//           <p>HOME / PROPERTIES</p>
//           <h1>PROPERTIES</h1>
//         </div>
//       </div>
//       <div className="filter">
//         <ul>
//           <li>Show All</li>
//           <li>Apartment</li>
//           <li>Villa House</li>
//           <li>Penthouse</li>
//         </ul>
//       </div>
//       <div className="cards">
//         <Card
//           uri={Img1}
//           type="Villa House"
//           cast="$2.264.000"
//           title="18 New Street Miami, OR 97219"
//           numberOfBedrooms={8}
//           numberOfBathrooms={8}
//           area="545m2"
//           floor="3"
//           parking="6 spots"
//         />
//         <Card
//           uri={Img2}
//           type="Villa House"
//           cast="$1.180.000"
//           title="54 Mid Street Florida, OR 27001"
//           numberOfBedrooms={6}
//           numberOfBathrooms={5}
//           area="450m2"
//           floor="3"
//           parking="8 spots"
//         />
//         <Card
//           uri={Img3}
//           type="Villa House"
//           cast="$1.460.000"
//           title="26 Mid Street Portland, OR 38540"
//           numberOfBedrooms={5}
//           numberOfBathrooms={4}
//           area="225m2"
//           floor="3"
//           parking="10 spots"
//         />
//         <Card
//           uri={Img4}
//           type="Apartment"
//           cast="$584.500"
//           title="12 Hope Street Portland, OR 12650"
//           numberOfBedrooms={4}
//           numberOfBathrooms={3}
//           area="125m2"
//           floor="25th"
//           parking="2 cars"
//         />
//         <Card
//           uri={Img5}
//           type="Penthouse"
//           cast="$925.600"
//           title="34 Hope Street Portland, OR 42680"
//           numberOfBedrooms={4}
//           numberOfBathrooms={4}
//           area="180m2"
//           floor="38th"
//           parking="2 cars"
//         />
//         <Card
//           uri={Img6}
//           type="Penthouse"
//           cast="$450.000"
//           title="22 New Street Portland, OR 16450"
//           numberOfBedrooms={3}
//           numberOfBathrooms={2}
//           area="165m2"
//           floor="26th"
//           parking="3 cars"
//         />
//         <Card
//           uri={Img7}
//           type="Apartment"
//           cast="$980.000"
//           title="14 Mid Street Miami, OR 36450"
//           numberOfBedrooms={8}
//           numberOfBathrooms={8}
//           area="550m2"
//           floor="3"
//           parking="12 spots"
//         />
//         <Card
//           uri={Img8}
//           type="Apartment"
//           cast="$1.520.000"
//           title="26 Old Street Miami, OR 12870"
//           numberOfBedrooms={12}
//           numberOfBathrooms={15}
//           area="380m2"
//           floor="3"
//           parking="14 spots"
//         />
//         <Card
//           uri={Img9}
//           type="Apartment"
//           cast="$450.000"
//           title="34 New Street Miami, OR 24650"
//           numberOfBedrooms={10}
//           numberOfBathrooms={12}
//           area="860m2"
//           floor="3"
//           parking="10 spots"
//         />
//       </div>
//       <div className="cards-navigate">
//         <ul>
//           <li>1</li>
//           <li>2</li>
//           <li>3</li>
//           <li>4</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default SecondaryHero;

import PropTypes from "prop-types";
import "../style/Test.css";
const SecondaryHero = ({ location, title }) => {
  return (
    <>
      <div className="secondary-hero">
        <div className="img-holder">
          <div className="title">
            <p>{location}</p>
            <h1>{title}</h1>
          </div>
        </div>
      </div>
    </>
  );
};
SecondaryHero.propTypes = {
  location: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export default SecondaryHero;
