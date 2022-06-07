import React from "react";
import "./SinglePost.scss";
import { useHistory } from "react-router-dom";

import styled from "styled-components";

const DivCont = styled.div`
  display: grid;
  background: white;
  width: 45%;
  height: 55%;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 8px;
  grid-row-gap: 8px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
`;

export default function SinglePost({ username, title, content, image, time }) {


  const history = useHistory();
  return (
    <div className="SinglePost">
      <DivCont>
        <h4>
          Title: <span>{title}</span>{" "}
        </h4>
        <img src={image} alt={`${username}`} />
        <p>{content}</p>
        <span>{time}</span>
        {/* <div className="container"></div> */}
        <button onClick={() => history.goBack()}>Back</button>
      </DivCont>
    </div>
  );
}
