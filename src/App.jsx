import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import PropertiesPage from "./pages/PropertiesPage";
import PropertyDetailsPage from "./pages/PropertyDetailsPage";
import HomePage from "./pages/HomePage";
import ContactUsPage from "./pages/ContactUsPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/properties" element={<PropertiesPage />} />
          <Route path="/property-details" element={<PropertyDetailsPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
