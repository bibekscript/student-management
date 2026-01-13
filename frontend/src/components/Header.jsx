import React from "react";
import HomePage from "../pages/HomePage";
function Header() {
  return (
    <header style={styles.header}>
      <h2>Shining Star English School</h2>
      <nav>
        <a href="/">HomePage</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
}
const styles = {
  header: {
    padding: "10px",
    backgroundColor: "#c2baba",
    color: "white",
    textAlign: "center",
  },
};

export default Header;
