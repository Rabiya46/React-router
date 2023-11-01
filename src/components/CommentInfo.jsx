import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { styled } from "styled-components";

const API = `https://jsonplaceholder.typicode.com/comments`;

const CommentInfo = () => {
  const [comment, setComment] = useState({});
  const { id } = useParams();

  useEffect(() => {
    try {
      const getComment = async () => {
        const response = await fetch(`${API}/${id}`);
        const data = await response.json();
        setComment(data);
      };
      getComment();
    } catch (error) {}
  }, [id]);
  return (
    <>
      <Contant>
        <p>
          <Span>Name:</Span>
          {comment.name}
        </p>
        <p>
          <Span>Email:</Span>
          {comment.email}
        </p>
        <p>
          <Span>Body:</Span>
          {comment.body}
        </p>
      </Contant>
      <Link to=".." relative="path">
        Go back
      </Link>
    </>
  );
};
export default CommentInfo;

const Contant = styled.div`
  border: 2px solid;
  padding: 20px;
  font-size: 20px;
  margin: 30px 30px;
  background-color: #4576e2;
`;
const Span = styled.span`
  color: black;
  font-weight: bold;
`;
