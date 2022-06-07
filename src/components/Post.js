import { Link } from "react-router-dom";
import { MDBCardText } from "mdb-react-ui-kit";

import "./Post.scss";
export default function Post({
	content,
	image,
	id,
	time,
	title,
	username,
	removePost,
}) {
	return (
		<div className='postCard'>
			<div className='headerCard'>
				<Link to={`/posts/post/${id}`}>
					{" "}
					<img src={image} alt={`${username}`} fluid />
				</Link>
				<div className='headerSide'>
					<h4>{title}</h4>
					<p>- by "{username}"</p>
				</div>
			</div>

			<div className='bodyCard'>
				<p>
					{content?.length > 140 ? (
						<>
							{content.substring(0, 140)}
							<Link to={`/posts/post/${id}`}> ....more </Link>
						</>
					) : (
						content
					)}
				</p>
				<MDBCardText>
					<small className='text-muted'>Last updated : {time}</small>
				</MDBCardText>			
					<button style={{ width: "100%" }} onClick={() => removePost(id)}>
						Remove Post
					</button>
			</div>
		</div>
	);
}
