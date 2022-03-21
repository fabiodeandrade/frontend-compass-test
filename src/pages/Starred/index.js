import React from "react";
import StarredTable from "../../components/StarredTable";
import Navbar from "../../components/Navbar";
import { NavLink, useHistory } from "react-router-dom";
import { Icon } from "semantic-ui-react";

import "./styles.css";

export default function Starred() {
  const { location } = useHistory();

  return (
    <div>
      <Navbar searchTerm={location.state.searchTerm} />
      <div className="table-container">
        <NavLink to="/">
          <div className="arrow-container">
            <Icon name="long arrow alternate left" size="large" />
          </div>
        </NavLink>

        <StarredTable searchTerm={location.state.searchTerm} />
      </div>
    </div>
  );
}
