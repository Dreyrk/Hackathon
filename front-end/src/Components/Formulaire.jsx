import React, { useEffect, useState } from "react";

function Formulaire() {
  const [destinations, setDestinations] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState("");
  const [selectedDepart, setSelectedDepart] = useState("");
  const [selectedRetour, setSelectedRetour] = useState("");
  const [travelTime, setTravelTime] = useState(0);
  const [selectedClimat, setSelectedClimat] = useState("");
  const [selectedMeteo, setSelectedMeteo] = useState("");
  const [selectedVoyage, setSelectedVoyage] = useState("");
  const [selectedLieu, setSelectedLieu] = useState("");
  const [selectedSaison, setSelectedSaison] = useState("");

  const formData = {
    climat: ["Chaud", "Froid", "Tempéré"],
    meteo: ["Pluvieux", "Soleil", "jsp"],
    typeVoyage: ["Chill", "Sportif"],
    typeLieu: ["Plage", "Désert", "Montagne", "Ville", "Campagne"],
    saison: ["Automne/Hiver", "Printemps/Eté"],
  };

  useEffect(() => {
    fetch("http://localhost:5000/api/destinations")
      .then((res) => res.json())
      .then((data) => {
        setDestinations(data);
      });
  }, []);

  const depart = new Date(selectedDepart);
  const retour = new Date(selectedRetour);

  const duration = () => {
    setTravelTime(parseInt(depart.getDate() - retour.getDate()) * -1);
    console.log(travelTime);
  };

  return (
    <div className="flex h-full flex-col">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          duration();
        }}
        action=""
        method="post"
        className="flex flex-col justify-between h-full"
      >
        <div className="flex justify-between">
          <label className="text-white" htmlFor="Name">
            Prénom :
          </label>
          <input
            className="self-center rounded-md shadow-sm h-full border  "
            type="text"
          />
        </div>
        <div className="flex justify-between">
          <label className="text-white" htmlFor="dateDepart">
            Date de départ :
          </label>
          <input
            value={selectedDepart}
            onChange={(e) => {
              const selected = e.target.value;
              setSelectedDepart(selected);
            }}
            className="border rounded-md h-10"
            type="date"
          />
        </div>
        <div className="flex justify-between">
          <label className="text-white" htmlFor="dateRetour">
            Date de de retour :
          </label>
          <input
            value={selectedRetour}
            onChange={(e) => {
              const selected = e.target.value;
              setSelectedRetour(selected);
            }}
            className="border rounded-md h-10"
            type="date"
          />
        </div>
        <div className="flex justify-between">
          <label className="text-white" htmlFor="Name">
            Gender :
          </label>
          <select className="border   rounded-md h-10" name="gender">
            <option value="value">Male</option>
            <option value="value">Female</option>
          </select>
        </div>
        <div className="flex justify-between">
          <label className="text-white" htmlFor="Name">
            Destination :
          </label>
          <select
            value={selectedDestination}
            onChange={(e) => {
              const selected = e.value;
              setSelectedDestination(selected);
            }}
            className="border  rounded-md h-10"
            name="destination"
          >
            {destinations.map((el) => {
              return <option value="value">{el.city}</option>;
            })}
          </select>
        </div>
        <div className="justify-between flex">
          <label htmlFor="climat" className="text-white">
            Type de climat :
          </label>
          <select
            value={selectedClimat}
            onChange={(e) => {
              const selected = e.value;
              setSelectedClimat(selected);
            }}
            className="border  rounded-md h-10"
            name="destination"
          >
            {formData.climat.map((el) => {
              return <option value="value">{el}</option>;
            })}
          </select>
        </div>
        <div className="justify-between flex ">
          <label htmlFor="climat" className="text-white">
            Météo :
          </label>
          <select
            value={selectedMeteo}
            onChange={(e) => {
              const selected = e.value;
              setSelectedMeteo(selected);
            }}
            className="border rounded-md h-10"
            name="destination"
          >
            {formData.meteo.map((el) => {
              return <option value="value">{el}</option>;
            })}
          </select>
        </div>
        <div className="justify-between flex">
          <label htmlFor="climat" className="text-white">
            Type de voyage :
          </label>
          <select
            value={selectedVoyage}
            onChange={(e) => {
              const selected = e.value;
              setSelectedVoyage(selected);
            }}
            className="border  rounded-md h-10"
            name="destination"
          >
            {formData.typeVoyage.map((el) => {
              return <option value="value">{el}</option>;
            })}
          </select>
        </div>
        <div className="justify-between flex">
          <label htmlFor="climat" className="text-white">
            Type de Lieu :
          </label>
          <select
            value={selectedLieu}
            onChange={(e) => {
              const selected = e.value;
              setSelectedLieu(selected);
            }}
            className="border  rounded-md h-10"
            name="destination"
          >
            {formData.typeLieu.map((el) => {
              return <option value="value">{el}</option>;
            })}
          </select>
        </div>
        <div className="flex justify-between">
          {formData.saison.map((el) => {
            return (
              <div className="ml-4">
                <label htmlFor="climat" className="text-white">
                  {el}
                </label>
                <input value={el} type="radio" />
              </div>
            );
          })}
        </div>
        <div className="flex justify-center">
          <button
            className="px-4 rounded-3xl text-slate-100 text-6xl bg-button"
            type="submit"
          >
            Soumettre
          </button>
        </div>
      </form>
    </div>
  );
}

export default Formulaire;
