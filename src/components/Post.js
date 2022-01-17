import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

export default function App({
  content,
  image,
  id,
  time,
  title,
  username,
  removePost,
}) {
  return (
    <MDBCard style={{ maxWidth: "440px" }}>
      <MDBRow className="g-0">
        <MDBCol md="4">
          <MDBCardImage src={image} alt="..." fluid />
        </MDBCol>
        <MDBCol md="8">
          <MDBCardBody>
            <MDBCardTitle>{title}</MDBCardTitle>
            <MDBCardText>
              {content?.length > 20 ? (
                <>
                  {content.substring(0, 5)}
                  <Link to={`/posts/post/${id}`}>more </Link>
                </>
              ) : (
                content
              )}
            </MDBCardText>
            <MDBCardText>
              <small className="text-muted">
                Last updated <br /> {time} by {username}
              </small>
            </MDBCardText>
            <button onClick={() => removePost(id)}>Remove Post</button>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
  );
}
