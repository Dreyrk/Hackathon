import React, { useEffect } from "react";
import Formulaire from "../Components/Formulaire";

export default function MonVoyage({ setPageTitle, setFooterOpen }) {
  useEffect(() => setPageTitle("Mon Voyage"));
  useEffect(() => {
    setFooterOpen(false);
  });

  return (
    <div>
      <Formulaire />
    </div>
  );
}
