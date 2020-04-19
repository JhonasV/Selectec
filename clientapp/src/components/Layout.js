import React from "react";

// components
import Navbar from "./Navbar";
// import Footer from "./Footer";

// css style
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="main">
        <div className="container">{children}</div>
      </main>
      <footer>{/* <Footer /> */}</footer>
    </div>
  );
};

export default Layout;
