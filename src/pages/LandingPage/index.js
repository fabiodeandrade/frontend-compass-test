import React, { useState } from "react";
import { Form } from "semantic-ui-react";
import Navbar from "../../components/Navbar";
import { NavLink } from "react-router-dom";
import "./styles.css";

export default function LandingPage() {
  const [userInput, setUserInput] = useState("");

  const handleSearch = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <div>
      <Navbar />
      <div className="container__search">
        <Form>
          <Form.Group>
            <Form.Input
              size="massive"
              placeholder="ex: fabiodeandrade"
              name="github user"
              onChange={handleSearch}
            />
            <NavLink to={{ pathname: "/card", state: { userInput } }}>
              <Form.Button size="massive" color="yellow" content="Procurar" />
            </NavLink>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}
