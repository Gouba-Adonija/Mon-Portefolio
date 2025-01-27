import { NavLink } from "react-router-dom";

import "../../../../public/css/dashboard.css";
import "../../../../public/css/pagination.css";
import { DeliveryList } from "./../Livraison";

export const Dashboard = () => {
  return (
    <>
      <div className="">
        <div className="cont-recap">
          <NavLink to="" className="s-dash">
            <span className="dash-numb">23</span>
            <span className="dash-name">En cours</span>
            <div className="s-dash-img"></div>
          </NavLink>
          <NavLink className="s-dash">
            <span className="dash-numb">14</span>
            <span className="dash-name">Effectuées</span>
            <div className="s-dash-img"></div>
          </NavLink>
          <NavLink className="s-dash">
            <span className="dash-numb">12</span>
            <span className="dash-name">Annulées</span>
            <div className="s-dash-img"></div>
          </NavLink>
          <NavLink className="s-dash">
            <span className="dash-numb">8</span>
            <span className="dash-name">Livreurs</span>
            <div className="s-dash-img"></div>
          </NavLink>
        </div>
        <DeliveryList
          url={
            "https://jsonplaceholder.typicode.com/posts?_limit=10&_delay=20000"
          }
        ></DeliveryList>
      </div>
    </>
  );
};
