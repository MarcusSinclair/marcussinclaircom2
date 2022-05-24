import {useState} from "react";
import LinkGroup from "./LinkGroup/LinkGroup";

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  return (
  <div className={isOpen? "" : "close"}>
    <LinkGroup />
  </div>);
}
