import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const MainLayout = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <>
      {pathname !== "/list" && (
        <Header appName="ShoppiZilla" className="header" />
      )}
      <main>{children}</main>
      {pathname !== "/list" && (
        <Footer companyName="Buschbär &amp; Litty Inc" />
      )}
    </>
  );
};

export default MainLayout;
