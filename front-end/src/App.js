import {React, useState} from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import MaValise from "./Pages/MaValise";
import MonVoyage from "./Pages/MonVoyage";

function App() {
  const [pageTitle, setPageTitle] = useState("La Valise")
  const [footerOpen, setFooterOpen] = useState(true);
  const[voyageInfos,setVoyageInfos] = useState({})
  const [travelTime, setTravelTime] = useState(0)

  return (
    <div className="App bg-gradient-to-b from-stone-100 to-orange-200 h-screen">
      <Header pageTitle={pageTitle}/>
     <Routes>
      <Route path="/" element={ <Home setPageTitle={setPageTitle}setFooterOpen={setFooterOpen}/>} />
      <Route path="/monvoyage" element={ <MonVoyage setPageTitle={setPageTitle} setFooterOpen={setFooterOpen} setVoyageInfos={setVoyageInfos} voyageInfos={voyageInfos} setTravelTime={setTravelTime}/>} />
      <Route path="/mavalise" element={ <MaValise setPageTitle={setPageTitle} setFooterOpen={setFooterOpen} voyageInfos={voyageInfos} travelTime={travelTime}/>} />
     </Routes>
     
     <Footer footerOpen={footerOpen} setFooterOpen={setFooterOpen} />
    </div>
  );
}

export default App;
