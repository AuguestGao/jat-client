import styled from "styled-components";

export const StyledHeader = styled.header`
  grid-area: header;
  background-color: ${(props) => props.theme.colors.green};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  & > a {
    font-size: ${(props) => props.theme.fontSizes.lg};
    color: ${(props) => props.theme.colors.white};
  }

  ul li {
    display: inline-block;
    margin-right: ${(props) => props.theme.sizes.md};

    a {
      padding: ${(props) => props.theme.sizes.xsm};
    }

    a:hover,
    a:active {
      color: ${(props) => props.theme.colors.white};
      border-bottom: 5px solid ${(props) => props.theme.colors.white};
    }
  }
`;
