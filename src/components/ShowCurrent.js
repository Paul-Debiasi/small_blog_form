import { useEffect, useState } from "react";
import Post from "./Post";
import moment from "moment";

export default function ShowCurrent({ posts, removePost }) {
  return (
    <div>
      {posts.map((item) => (
        <>
          <div key={item.id}>
            <Post
              image={item.image}
              username={item.username}
              content={item.content}
              id={item.id}
              title={item.title}
              time={item.time}
              removePost={removePost}
            />
          </div>
        </>
      ))}
    </div>
  );
}
