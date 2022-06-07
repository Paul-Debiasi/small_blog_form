import Header from "./components/Header";
import { useContext,useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import CreatePost from "./components/CreatePost";
import ShowCurrent from "./components/ShowCurrent";
import SinglePost from "./components/SinglePost";
import { Switch, Route } from "react-router-dom";
import "./App.scss";
import {BlogContext} from "./utils/Context"



function App() {
  //Just need the post array to find the single selected post 
  const { posts } = useContext(BlogContext);

  return (
  
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <CreatePost />
        </Route>
        <Route exact path="/posts">
          <ShowCurrent />
        </Route>
        <Route
          exact
          path="/posts/post/:id"
          render={({ match }) => {
            const selectedPostData = posts.find(
              (post) => post.id === match.params.id
            );
            return <SinglePost {...selectedPostData} />;
          }}
        />
      </Switch>
    </div>
  );
}

export default App;
