import styled from "styled-components";

export const Menu = styled.nav`
ul {
  list-style: none;
  padding: 0;
  display: flex;
  /* gap: 15px; */
  li > a {
    color: green;
    text-decoration: none;
  }
  li + li {
    margin-left: 20px;
  }
}

`