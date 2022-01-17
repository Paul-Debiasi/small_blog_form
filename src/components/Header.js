import React from "react";
import "./Header.scss";
import { Link, Route } from "react-router-dom";
import styled from "styled-components";

const NavHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 100px;
  background-color: rgb(72, 111, 112);
`;

export default function Header() {
  return (
    <NavHeader className="Header">
      <Link to="/">
        <div className="Header-div">Home</div>
      </Link>
      <ul>
        <Link to="/post">
          <li>Create Post</li>
        </Link>
        <Link to="/posts">
          <li>Show Post</li>
        </Link>
      </ul>
    </NavHeader>
  );
}
