import { React, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import MaValise from "./Pages/MaValise";
import MonVoyage from "./Pages/MonVoyage";
import NotFound from "./Components/NotFound";

function App() {
  const [pageTitle, setPageTitle] = useState("La Valise");
  const [footerOpen, setFooterOpen] = useState(true);

  return (
    <div className="App">
      <Header pageTitle={pageTitle} />
      <Routes>
        <Route
          path="/"
          element={
            <Home setPageTitle={setPageTitle} setFooterOpen={setFooterOpen} />
          }
        />
        <Route
          path="/monvoyage"
          element={
            <MonVoyage
              setPageTitle={setPageTitle}
              setFooterOpen={setFooterOpen}
            />
          }
        />
        <Route
          path="/mavalise"
          element={
            <MaValise
              setPageTitle={setPageTitle}
              setFooterOpen={setFooterOpen}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
