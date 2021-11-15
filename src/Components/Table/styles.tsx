import styled from "styled-components";

export const TableWrapper = styled.table`
  border-collapse: collapse;
  margin: 25px auto;
  width: 80%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);

  tr {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  tbody tr {
    cursor: pointer;
    border-bottom: 1px solid #dddddd;
  }

  tbody tr:nth-of-type(even) {
    background-color: ${(props) => props.theme.colors.gray};
  }

  thead tr {
    background-color: ${(props) => props.theme.colors.green};
    color: ${(props) => props.theme.colors.white};
    text-align: left;
    font-size: ${(props) => props.theme.fontSizes.md};
  }

  th,
  td {
    padding: 12px 15px;
  }

  tbody tr:hover {
    font-weight: bold;
    color: ${(props) => props.theme.colors.green};
  }
`;
