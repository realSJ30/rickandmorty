import React from "react";
import CharacterList from "../components/characters/CharacterList";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Locations from "./Locations";
import Episodes from "./Episodes";
import NotFound from "./NotFound";

function Dashboard() {
  return (
    <div className="App">
      <Router>
        <Header />
        <SubHeader />
        <Routes>
          <Route path="/" element={<CharacterList />} />
          <Route index element={<CharacterList />} />
          <Route path="locations" element={<Locations />} />
          <Route path="episodes" element={<Episodes />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default Dashboard;
