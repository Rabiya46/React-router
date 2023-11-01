import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { styled } from "styled-components";

const API = `https://jsonplaceholder.typicode.com/posts`;

const PostInfo = () => {
  const [post, setPost] = useState({});
  const { id } = useParams();

  useEffect(() => {
    try {
      const getPosts = async () => {
        const response = await fetch(`${API}/${id}`);
        const data = await response.json();
        setPost(data);
      };
      getPosts();
    } catch (error) {}
  }, [id]);
  return (
    <>
      <Contant>
        <p>
          <Span>Id:</Span>
          {post.id}
        </p>
        <p>
          <Span>Title:</Span>
          {post.title}
        </p>
        <p>
          <Span>Body:</Span>
          {post.body}
        </p>
        <Link to=".." relative="path">
          Go back
        </Link>
      </Contant>
    </>
  );
};
export default PostInfo;

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
