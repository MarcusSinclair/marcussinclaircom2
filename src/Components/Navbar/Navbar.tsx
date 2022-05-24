import React from "react";

import Head from "./Head/Head";
import Dropdown from "./Dropdown/Dropdown";

export default function Navbar() {
  return (
    <nav className="Navbar">
      <Head />
      <Dropdown />
    </nav>
  );
}
