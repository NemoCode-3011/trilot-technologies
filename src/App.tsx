import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Work from "./pages/Work";
import DePrime from "./pages/works/DePrime";
import Orita from "./pages/works/Orita";
import Arcadia from "./pages/works/Arcadia";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import ContactModal from "./components/ContactModal";
import Scrolltotop from "./components/ScrollToTop";
import { useState } from "react";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <BrowserRouter>
      <LoadingScreen />
      <Scrolltotop />
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <Navbar onContactClick={() => setModalOpen(true)} />
      <Routes>
        <Route
          path="/"
          element={<Home onContactClick={() => setModalOpen(true)} />}
        />
        <Route path="/work" element={<Work />} />
        <Route path="/work/de-prime" element={<DePrime />} />
        <Route path="/work/orita" element={<Orita />} />
        <Route path="/work/arcadia" element={<Arcadia />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
