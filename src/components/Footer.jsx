// import React from "react";

export default function Footer() {
  let name = "Girish N";
  const year = new Date().getFullYear();

  return (
    <div className="footer--container">
      <p>
        © Copyright {year}. Made by {name}
      </p>
    </div>
  );
}
