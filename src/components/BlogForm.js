import { useState } from "react";
import "./BlogForm.scss";
import styled from "styled-components";
import { ToastContainer, toast, Zoom, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = styled.form`
  background: url(https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fblog-background&psig=AOvVaw1-ICIcYT_SMNMwXgJRhIbt&ust=1642246440005000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPj5wPWSsfUCFQAAAAAdAAAAABAM)
      center no-repeat,
    rgba(0, 0, 0, 0.6);
  display: flex;
  background-size: cover;
  flex-direction: column;
  color: white;
  width: 100%;
  height: 650px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
  text-align: center;
  margin-top: 10%;
`;

const FormDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 40px 0px;
  padding-left: 50px;
  width: 100%;
`;

export default function BlogForm({ addPost }) {
  const [user, setUser] = useState("");

  const [title, setTitle] = useState("");

  const [content, setContent] = useState("");

  const [message, setMessage] = useState("Please fill out all inputs...");

  const notify = () => {
    toast.error(message, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  // const handleChange = (e) => {
  //   console.log(e.target.value);
  // };

  const reset = () => {
    setUser("");
    setTitle("");
    setContent("");
  };
  return (
    <>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("On submit");
          user && title && content ? addPost(user, title, content) : notify();
          reset();
        }}
      >
        <FormDiv className="FormDiv">
          <label htmlFor="username">Username :</label>
          <input
            onChange={(e) => {
              setUser(e.target.value);
              console.log(user);
            }}
            value={user}
            id="username"
            type="text"
            placeholder="Username"
          />
        </FormDiv>
        <FormDiv className="FormDiv">
          <label htmlFor="title">Title :</label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            id="title"
            type="text"
            placeholder="Title"
          />
        </FormDiv>
        <FormDiv className="FormDiv">
          <label htmlFor="content">Content :</label>
          <textarea
            onChange={(e) => setContent(e.target.value)}
            value={content}
            id="content"
            type="text"
            rows="8"
            cols="50"
            placeholder="Content"
          />
        </FormDiv>
        <button className="FormBtn" type="submit">
          Submit
        </button>
      </Form>
      <ToastContainer theme="theme" className="Toast" />
    </>
  );
}
