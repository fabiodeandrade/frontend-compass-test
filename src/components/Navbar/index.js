import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "semantic-ui-react";
import "./styles.css";
import CompassLogo from "../../assets/logo.svg";

export default function Navbar({ searchTerm }) {
  return (
    <div className="navbar">
      <NavLink to="/">
        <img src={CompassLogo} alt="Compass Company Logo" />
      </NavLink>

      {searchTerm ? (
        <div className="buttons">
          <NavLink to={{ pathname: "/repos", state: { searchTerm } }}>
            <Button inverted color="yellow">
              Repositórios
            </Button>
          </NavLink>
          <NavLink to={{ pathname: "/starred", state: { searchTerm } }}>
            <Button inverted color="yellow">
              Estrelados
            </Button>
          </NavLink>
        </div>
      ) : null}
    </div>
  );
}
