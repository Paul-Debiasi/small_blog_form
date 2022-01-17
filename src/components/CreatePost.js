import { useState } from "react";
import BlogForm from "./BlogForm";
import styled from "styled-components";

const FormCont = styled.div`
  display: grid;
  place-content: center;
  width: 100%;
`;

export default function CreatePost({ addPost }) {
  return (
    <FormCont>
      <BlogForm addPost={addPost} />
    </FormCont>
  );
}
