import React from "react";
import { useHistory } from "react-router-dom";
import "./SinglePost.scss";
import styled from "styled-components";

const DivCont = styled.div`
	display: grid;
	background: white;
	width: 35%;
	height: 55%;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(2, 1fr);
	grid-column-gap: 8px;
	grid-row-gap: 8px;
	box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
`;

export default function SinglePost(selectedPostData) {
	//Getting the post object through params route base on the id 
	const { content, image, time, title, username } = selectedPostData;
	const history = useHistory();

	return (
		<div className='SinglePost'>
			<DivCont>
				<div className='imgContainer'>
					<img src={image} alt={`${username}`} />
					<span>
						{time} - <span className='titleSpan'>{title}</span>
					</span>
				</div>
				<p>{content}</p>
				<button onClick={() => history.goBack()}>Back</button>
			</DivCont>
		</div>
	);
}
