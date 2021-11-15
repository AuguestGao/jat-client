import React from "react";
import { TableWrapper } from "./styles";

export const Table = ({ columns, data }: { columns: string[]; data: any }) => {
  return (
    <TableWrapper>
      <thead>
        <tr>
          {columns.map((column: string) => (
            <th key={column}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row: any) => (
          <tr key={row[0]} onClick={() => console.log(row)}>
            {row.slice(1).map((value: any) => (
              <td key={`${row[0]}.${value}`}>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </TableWrapper>
  );
};
