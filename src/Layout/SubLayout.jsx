import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../commons/Footer/Footer";
import Header from "../commons/Header";

export default function SubLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
