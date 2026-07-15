import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="bg-base-300 border-b border-base-content/10">
      <div className="mx-auto max-w-6xl p-4">
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
