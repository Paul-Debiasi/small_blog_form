import Post from "./Post";
import styled from "styled-components";

const PostsContainer = styled.div`
  display: grid;
	grid-template-columns: repeat(4,1fr);
	grid-auto-rows: 350px;
  gap: 10px;
`;

export default function ShowCurrent({ posts, removePost }) {
  console.log(posts.length);
	return (
		<PostsContainer>
			{posts.length > 0 ? posts.map((item) => (
				<Post
					key={item.id}
					image={item.image}
					username={item.username}
					content={item.content}
					id={item.id}
					title={item.title}
					time={item.time}
					removePost={removePost}
				/>
			)):(
        <h2 style={{justifySelf: 'center',alignSelf: 'center',gridColumn: '1/5'}}> No Posts at the moment </h2>
      )
      }
		</PostsContainer>
	);
}
