import React from "react";
// import Logo from "./logo-light.png";

function Header() {
  return (
    <div className="header bg-gradient-to-r from-blue-600 to-green-600 p-4 flex flex-col justify-center items-center">
      <p className="text-white font-semibold text-lg">
        <i class="bi bi-megaphone"></i>
        <span> Tabalerts</span>
      </p>
    </div>
  );
}

export default Header;
