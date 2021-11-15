import styled from "styled-components";

export const StyledLayout = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 60px auto;
  grid-template-areas:
    "header"
    "main";

  div {
    grid-area: main;
    margin: 30px;
  }
`;
