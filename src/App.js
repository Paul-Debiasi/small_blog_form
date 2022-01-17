import Header from "./components/Header";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/Home";
import CreatePost from "./components/CreatePost";
import ShowCurrent from "./components/ShowCurrent";
import UseLocalStorageState from "./components/UseLocalStorageState";
import Post from "./components/Post";
import SinglePost from "./components/SinglePost";
import { useState, useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import "./App.scss";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

function App() {
  // const location = useLocation();
  const time = moment().format("LLLL");

  const initialPosts = JSON.parse(window.localStorage.getItem("posts") || "[]");
  const [posts, setPost] = useState(initialPosts);

  useEffect(() => {
    window.localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  const addPost = async (newUser, newTitle, newPost) => {
    const getImage = async () => {
      const data = await fetch("https://randomuser.me/api/");
      const response = await data.json();
      return response.results[0].picture.medium;
    };
    const imageUrl = await getImage();
    const NewPost = [
      ...posts,
      {
        id: uuidv4(),
        username: newUser,
        title: newTitle,
        content: newPost,
        image: imageUrl,
        time: time,
      },
    ];
    setPost(NewPost);
  };

  const removePost = (postId) => {
    const updatedPosts = posts.filter((post) => post.id !== postId);

    setPost(updatedPosts);
  };

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/post">
          <CreatePost addPost={addPost} />
        </Route>
        <Route exact path="/posts">
          <ShowCurrent posts={posts} removePost={removePost} />
        </Route>
        <Route
          exact
          path="/posts/post/:id"
          render={({ match }) => {
            console.log("App here: inside route routeProps object is", match);
            const selectedPostData = posts.find(
              (post) => post.id === match.params.id
            );

            console.log("Selected Data", selectedPostData);

            return <SinglePost {...selectedPostData} />;
          }}
          // component={Post}
        />
      </Switch>
    </div>
  );
}

export default App;
