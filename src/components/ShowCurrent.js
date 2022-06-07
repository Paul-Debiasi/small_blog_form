import Post from "./Post";
import { BlogContext } from "../utils/Context";
import { useContext } from "react";
import styled from "styled-components";

const PostsContainer = styled.div`
  display: grid;
	grid-template-columns: repeat(4,1fr);
	grid-auto-rows: 350px;
  gap: 10px;
`;

export default function ShowCurrent() {

  const { posts } = useContext(BlogContext);
  //Mapping through the posts array to show a single post, if there is no posts I render the h2 message 
	return (
		<PostsContainer>
			{posts.length > 0 ? posts.map((item) => <Post key={item.id}  post={item}/>):(
        <h2 style={{justifySelf: 'center',alignSelf: 'center',gridColumn: '1/5'}}> No Posts at the moment </h2>
      )
      }
		</PostsContainer>
	);
}
