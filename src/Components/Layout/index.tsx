import React from "react";
import { Header } from "../Header";
import { StyledLayout } from "./styles";
import { Outlet } from "react-router-dom";

interface LayoutProps {
  props?: JSX.Element;
}

export const Layout = (props: LayoutProps) => (
  <StyledLayout>
    <Header />
    <div className="main">
      <Outlet />
    </div>
  </StyledLayout>
);
