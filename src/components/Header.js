import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 100px;
  background-color: black;
`;

export default function Header() {
  return (
    <NavHeader className="Header">
      <ul>
        <Link to="/">
          <li>Create Post</li>
        </Link>
        <Link to="/posts">
          <li>Show Post</li>
        </Link>
      </ul>
    </NavHeader>
  );
}
