import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { fetchAll } from "../redux/recordsSlice";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { JobPage, CompanyPage, RecruiterPage, NoMatchPage } from "../pages";

import { theme } from "../styles/theme";
import { Layout } from ".";

const App = (): JSX.Element => {
  const [status, setStatus] = useState(
    useAppSelector((state: any) => state.records.status)
  );

  const fetchData = async () => {
    await dispatch(fetchAll()).unwrap();
    setStatus("success");
  };

  useEffect(() => {
    if (!status) {
      fetchData();
    }
  }, [status]);

  const dispatch = useAppDispatch();

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<JobPage />} />
            <Route path="company" element={<CompanyPage />} />
            <Route path="recruiter" element={<RecruiterPage />} />
            <Route path="*" element={<NoMatchPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
