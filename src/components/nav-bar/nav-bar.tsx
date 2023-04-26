import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const NavBar = (props: Props) => {
  return (
    <nav className="flex items-center justify-end w-full h-full mr-1">
      <ul className="flex justify-end max-w-full max-h-full">
        {props.children}
      </ul>
    </nav>
  );
};

export default NavBar;
