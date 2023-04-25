import { slide as Menu } from "react-burger-menu";
import NavItem from "./nav-item";
import { MouseEventHandler, useState } from "react";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu right width={"200px"} isOpen={isOpen}>
      <ul>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </Menu>
  );
};

export default BurgerMenu;
