import React from "react";
import RepoTable from "../../components/RepoTable";
import Navbar from "../../components/Navbar";
import { NavLink, useHistory } from "react-router-dom";
import { Icon } from "semantic-ui-react";

import "./styles.css";

export default function Repos() {
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

        <RepoTable searchTerm={location.state.searchTerm} />
      </div>
    </div>
  );
}
