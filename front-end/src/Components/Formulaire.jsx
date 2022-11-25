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
    fetch("http://localhost:5020/api/destinations")
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
    <div className="border rounded-sm border-black bg-slate-100">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          duration();
        }}
        action=""
        method="post">
        <div className="flex h-screen flex-col items-center justify-evenly">
          <div>
            <label className="mr-4" htmlFor="Name">
              Name :
            </label>
            <input
              className="rounded-md shadow-sm border border-black"
              type="text"
            />
          </div>
          <div className="flex">
            <label className="mr-4" htmlFor="Name">
              Gender :
            </label>
            <select className="border border-black rounded-md" name="gender">
              <option value="value">Male</option>
              <option value="value">Female</option>
            </select>
          </div>
          <div className="flex">
            <label className="mr-4" htmlFor="dateDepart">
              Date de départ :
            </label>
            <input
              value={selectedDepart}
              onChange={(e) => {
                const selected = e.target.value;
                setSelectedDepart(selected);
              }}
              className="border border-black rounded-md"
              type="date"
            />
          </div>
          <div className="">
            <label className="mr-4" htmlFor="dateRetour">
              Date de de retour :
            </label>
            <input
              value={selectedRetour}
              onChange={(e) => {
                const selected = e.target.value;
                setSelectedRetour(selected);
              }}
              className="border border-black rounded-md"
              type="date"
            />
          </div>

          <div className="">
            <label className="mr-4" htmlFor="Name">
              Destination :
            </label>
            <select
              value={selectedDestination}
              onChange={(e) => {
                const selected = e.value;
                setSelectedDestination(selected);
              }}
              className="border border-black rounded-md"
              name="destination">
              {destinations.map((el) => {
                return <option value="value">{el.city}</option>;
              })}
            </select>
          </div>
          <div>
            <label htmlFor="climat">Type de climat : </label>
            <select
              value={selectedClimat}
              onChange={(e) => {
                const selected = e.value;
                setSelectedClimat(selected);
              }}
              className="border border-black rounded-md"
              name="destination">
              {formData.climat.map((el) => {
                return <option value="value">{el}</option>;
              })}
            </select>
          </div>
          <div>
            <label className="mr-4" htmlFor="climat">
              Météo :
            </label>
            <select
              value={selectedMeteo}
              onChange={(e) => {
                const selected = e.value;
                setSelectedMeteo(selected);
              }}
              className="border border-black rounded-md"
              name="destination">
              {formData.meteo.map((el) => {
                return <option value="value">{el}</option>;
              })}
            </select>
          </div>
          <div className="">
            <label className="mr-4" htmlFor="climat">
              Type de voyage :{" "}
            </label>
            <select
              value={selectedVoyage}
              onChange={(e) => {
                const selected = e.value;
                setSelectedVoyage(selected);
              }}
              className="border border-black rounded-md"
              name="destination">
              {formData.typeVoyage.map((el) => {
                return <option value="value">{el}</option>;
              })}
            </select>
          </div>
          <div className="">
            <label className="mr-4" htmlFor="climat">
              Type de Lieu :{" "}
            </label>
            <select
              value={selectedLieu}
              onChange={(e) => {
                const selected = e.value;
                setSelectedLieu(selected);
              }}
              className="border border-black rounded-md"
              name="destination">
              {formData.typeLieu.map((el) => {
                return <option value="value">{el}</option>;
              })}
            </select>
          </div>
          <div className="flex justify-evenly">
            {formData.saison.map((el) => {
              return (
                <div className="p-2">
                  <label htmlFor="climat">{el}</label>
                  <input
                    checked={(e) => setSelectedSaison(e.target.value)}
                    type="radio"
                  />
                </div>
              );
            })}
          </div>
          <div className="w-full flex justify-center">
            <button
              onClick={console.log(selectedSaison)}
              className="w-28 border shadow-md rounded-md border-black"
              type="submit">
              Soumettre
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Formulaire;
