import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const API = "https://jsonplaceholder.typicode.com/comments";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getComments = async () => {
      try {
        const response = await fetch(API);
        const data = await response.json();
        setComments(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getComments();
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
        <h1>Comments</h1>
        <Table>
          <tbody>
            <tr>
              <Th>name</Th>
              <Th>email</Th>
              <Th>body</Th>
              <Th>button</Th>
            </tr>
            {comments.map(({ id, name, email, body }) => (
              <tr key={id}>
                <Td>{name}</Td>
                <Td>{email}</Td>
                <Td>{body}</Td>
                <Td>
                  <LinkC className="link" to={id.toString()}>
                    Full
                  </LinkC>
                </Td>
              </tr>
            ))}
          </tbody>
        </Table>
      </InfoContainer>
    </>
  );
};

export default Comments;

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
