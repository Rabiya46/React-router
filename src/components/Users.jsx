import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const API = " https://jsonplaceholder.typicode.com/users";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetch(API);
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getUsers();
  }, []);

  if (isLoading) {
    return <Loading>Loading...</Loading>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <InfoContainer>
        <h1>Users</h1>
        <Table>
          <tbody>
            <tr>
              <Th>name</Th>
              <Th>username</Th>
              <Th>#</Th>
              <Th>Info</Th>
            </tr>
            {users.map(({ id, name, username }) => (
              <tr key={id}>
                <Td>{name}</Td>
                <Td>{username}</Td>
                <Td>{id}</Td>
                <Td>
                  <LinkC to={id.toString()}>Full</LinkC>
                </Td>
              </tr>
            ))}
          </tbody>
        </Table>
      </InfoContainer>
    </>
  );
};

export default Users;

const Loading = styled.div`
  font-size: 50px;
  background-color: yellow;
  padding: 20px;
  border-radius: 20px;
  width: 100%;
`;

const Td = styled.td`
  border: 1px solid;
  border-collapse: collapse;
  text-align: center;
`;

const Th = styled.th`
  border: 1px solid;
  border-collapse: collapse;
  background-color: #4576e2;
  color: white;
  text-align: center;
`;

const Table = styled.table`
  border: 1px solid;
  border-collapse: collapse;
  width: 60rem;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
`;

const LinkC = styled(Link)`
  font-size: 18px;
  color: #4576e2;
`;
