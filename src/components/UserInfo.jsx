import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { styled } from "styled-components";

const API = `https://jsonplaceholder.typicode.com/users`;

const UserInfo = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    try {
      const getUser = async () => {
        const response = await fetch(`${API}/${id}`);
        const data = await response.json();
        setUser(data);
      };
      getUser();
    } catch (error) {}
  }, [id]);
  return (
    <>
      <Contant>
        <p>
          <Span>Name:</Span>
          {user.name}
        </p>
        <p>
          <Span>Username:</Span>
          {user.username}
        </p>
        <p>
          <Span>Id:</Span>
          {user.id}
        </p>
        <Link to=".." relative="path">
          Go back
        </Link>
      </Contant>
    </>
  );
};
export default UserInfo;

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
