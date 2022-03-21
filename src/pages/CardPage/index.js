import React from "react";
import UserCard from "../../components/Card";
import Navbar from "../../components/Navbar";
import { NavLink, useHistory } from "react-router-dom";
import { Icon } from "semantic-ui-react";

import "./styles.css";

export default function CardPage() {
  const { location } = useHistory();

  return (
    <div className="card-container">
      <Navbar searchTerm={location.state.userInput} />

      <NavLink to="/">
        <div className="arrow-container">
          <Icon name="arrow alternate circle left outline" size="big" />
        </div>
      </NavLink>

      <UserCard searchTerm={location.state.userInput} />
    </div>
  );
}
