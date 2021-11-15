import React from "react";
import { useAppSelector } from "../../redux/hooks";
import dateFormat from "dateformat";

import { Table, MainContainer } from "../../Components";

export const JobPage = () => {
  const jobs = useAppSelector((state) => state.records.jobs);
  const companies = useAppSelector((state) => state.records.companies);

  const tableData = jobs.map(({ id, title, company_id, added_at }) => {
    const companyFound = companies.filter(
      (company) => company.id === company_id
    )[0];
    const date = new Date(added_at);
    return [id, title, companyFound.name, dateFormat(date, "isoDate")];
  });

  const renderTable = jobs.length ? (
    <Table columns={["Title", "Company", "Created on"]} data={tableData} />
  ) : (
    <p>loading</p>
  );

  return (
    <MainContainer>
      <h1>Job Page</h1>
      {renderTable}
    </MainContainer>
  );
};
