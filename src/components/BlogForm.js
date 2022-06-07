import { useState } from "react";
import "./BlogForm.scss";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";

const Form = styled.form`
	background: rgb(145, 196, 52);
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
	const history = useHistory();

	const [formData, setFormData] = useState({
		user: "",
		title: "",
		content: "",
	});


	const [message] = useState("Please fill out all inputs...");

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

	const handleSubmit = (e) => {
		const { user, title, content } = formData;
		e.preventDefault();
		if (user && title && content) {
			addPost(user, title, content);
			history.push("/posts");
		}
		notify();
	};

	return (
		<>
			<Form onSubmit={handleSubmit}>
				<FormDiv className='FormDiv'>
					<input
						onChange={(e) => setFormData({ ...formData, user: e.target.value })}
						value={formData.user}
						id='username'
						type='text'
						placeholder='Username'
						autoComplete='off'
					/>
				</FormDiv>
				<FormDiv className='FormDiv'>
					<input
						onChange={(e) =>
							setFormData({ ...formData, title: e.target.value })
						}
						value={formData.title}
						id='title'
						type='text'
						placeholder='Title'
					/>
				</FormDiv>
				<FormDiv className='FormDiv'>
					<textarea
						onChange={(e) =>
							setFormData({ ...formData, content: e.target.value })
						}
						value={formData.content}
						id='content'
						type='text'
						rows='8'
						cols='50'
						placeholder='Content'
					/>
				</FormDiv>
				<div className='btnContainer'>
					<button className='FormBtn' type='submit'>
						Submit
					</button>
				</div>
			</Form>
			<ToastContainer theme='theme' className='Toast' />
		</>
	);
}
