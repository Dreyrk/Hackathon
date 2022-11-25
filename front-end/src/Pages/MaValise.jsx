import React, { useEffect } from "react";
import { useState } from "react";
import CheckListResult from "../Components/CheckListResult";

export default function MaValise({ setPageTitle, setFooterOpen }) {
  const [contenuValise, setContenuValise] = useState([]);

  useEffect(() => setPageTitle("Ma Valise"));
  useEffect(() => setFooterOpen(false));

  useEffect(() => {
    fetch("http://localhost:5020/api/items/essentiels")
      .then((results) => results.json())
      .then((datas) => {
        setContenuValise(datas);
      });
  }, []);

  return (
    <div>
      <legend className="text-lg font-medium self-center text-gray-900">
        Votre Valise:
      </legend>
      <legend>Produits d'hygiène:</legend>
      <CheckListResult
        items={contenuValise.filter((item) => item.categorie === "hygiene")}
      />
      <legend>Vêtements:</legend>
      <CheckListResult
        items={contenuValise.filter((item) => item.categorie === "vetement")}
      />
      <legend>Autres:</legend>
      <CheckListResult
        items={contenuValise.filter((item) => item.categorie === "autre")}
      />
    </div>
  );
}
