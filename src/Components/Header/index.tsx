import React from "react";
import { Link } from "react-router-dom";
import { StyledHeader } from "./styles";

export const Header = () => (
  <StyledHeader>
    <Link to="/">Job APP Tracker</Link>
    <nav>
      <ul>
        <li>
          <Link to="/">Job</Link>
        </li>
        <li>
          <Link to="/company">Company</Link>
        </li>
        <li>
          <Link to="/recruiter">Recruiter</Link>
        </li>
      </ul>
    </nav>
  </StyledHeader>
);
