import React from "react";
import "./accueil.css";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { RiComputerFill } from "react-icons/ri";
import { MdOutlineScience } from "react-icons/md";
import {GiMaterialsScience} from "react-icons/gi";
import {TbBuilding} from "react-icons/tb";

const donneesAccueil = [
  {
    nomDepartement: "Genie Informatique",
    icon: <RiComputerFill />,
  },
  {
    nomDepartement: "Genie Mecanique",
    icon: <GiMaterialsScience/>,
  },
  {
    nomDepartement: "Genie Civil",
    icon: <TbBuilding />,
  },
];
const donneesAccueil2 = [
  {
    nomDepartement: "GCBA",
    icon: "icon",
  },
  {
    nomDepartement: "Gestion",
    icon: "icon",
  },
  {
    nomDepartement: "Genie Chimique ",
    icon: <MdOutlineScience />,
  },
];
export default function Accueil() {
  return (
    <div className="page-accueil">
      <div className="page-accueil-item">
        {donneesAccueil.map((item, index) => {
          return (
            <div className="accueil-element">
              <IconContext.Provider
                value={{ color: "#2CC4FE", className: "dpt-informatique-icon" }}
              >
                <div>{item.icon}</div>
              </IconContext.Provider>
              <Link
                to="/statistiques"
                style={{ textDecoration: "none", color: "#222" }}
              >
                <p>{item.nomDepartement}</p>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="page-accueil-item">
        {donneesAccueil2.map((item, index) => {
          return (
            <div className="accueil-element">
              <IconContext.Provider
                value={{ color: "#2CC4FE", className: "dpt-informatique-icon" }}
              >
                <div>{item.icon}</div>
              </IconContext.Provider>
              <Link
                to="/statistiques"
                style={{ textDecoration: "none", color: "#222" }}
              >
                <p>{item.nomDepartement}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
