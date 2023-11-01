import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Menu = () => {
  return (
    <Nav>
      <NavLink
        style={({ isActive }) =>
          isActive ? { color: "lightyellow", textDecoration: "none" } : {}
        }
        to="post"
      >
        Post
      </NavLink>
      <NavLink to="comments">Comments</NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "activeLink" : "link")}
        to="users"
      >
        Users
      </NavLink>
    </Nav>
  );
};

export default Menu;

const Nav = styled.nav`
  display: flex; 
  flex-direction: column;
  background-color: darkslategray;
  padding: 15px;
`