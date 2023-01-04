import React from "react";

const HeaderStyles = {
  width: "100%",
  background: "#fe918d",
  height: "70px",
  display: "flex",
  alignItems: "center",
  paddingLeft: "30px",
  color: "white",
  fontWeight: "600",
  fontSize: "27px",
};
const FooterStyles = {
  width: "100%",
  height: "50px",
  display: "flex",
  background: "#fe918d",
  color: "white",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "15px",
  fontWeight: "400",
};

const layoutStyles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "90vh",
  margin: "0 auto",
  maxwidth: "1200px",
  minwidth: "800px",
};

function Header() {
  return (
    <div style={{ ...HeaderStyles }}>
      <span>Heeseung's TodoList (ver.2)</span>
    </div>
  );
}

function Footer() {
  return (
    <div style={{ ...FooterStyles }}>
      <span>2022.12 React Redux Router</span>
    </div>
  );
}

function Layout({ children }) {
  return (
    <div>
      <Header />
      <div style={{ ...layoutStyles }}>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
