import React, { useState } from "react";

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="Hamburger">
      <button onClick={handleToggle}>{isOpen ? "O" : "X"}</button>
    </div>
  );
}
