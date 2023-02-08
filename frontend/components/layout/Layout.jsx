import React from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar/Navbar";
// import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Bernie Beigne</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="main-container">{children}</main>
      <footer>{/* <Footer /> */}</footer>
    </>
  );
};

export default Layout;
