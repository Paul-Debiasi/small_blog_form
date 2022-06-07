import { createContext, useState, useEffect } from "react";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";

// This code allow me consume my state around the platform 
export const BlogContext = createContext();

export default function BlogContextProvider({ children }) {
	// Using moment library to get date on the posts
	const time = moment().format("LL - hh:mm:ss");
	//Creating a var that will get my posts saved on the local storage and using them when th page load
	const initialPosts = JSON.parse(window.localStorage.getItem("posts") || "[]");
	const [posts, setPost] = useState(initialPosts);

	useEffect(() => {
		window.localStorage.setItem("posts", JSON.stringify(posts));
	}, [posts]);

	// Calling random user API to get random picture of fake users 
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
		<BlogContext.Provider
			value={{
				addPost,
				removePost,
				posts,
				setPost,
			}}
		>
			{children}
		</BlogContext.Provider>
	);
}
