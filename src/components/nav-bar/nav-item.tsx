import { ReactNode, useState } from "react";
import ReactDOM from "react-dom";
import Backdrop from "../ui/backdrop";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui";

interface Props {
  icon: ReactNode;
  children?: ReactNode;
}

const NavItem = (props: Props) => {
  const dispatcher = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const clickHandler = () => {
    setIsOpen((prevState) => {
      dispatcher(uiActions.setDropDownOpen(!prevState));
      return !prevState;
    });
  };

  return (
    <>
      {isOpen &&
        ReactDOM.createPortal(
          <Backdrop onClick={clickHandler} />,
          document.getElementById("backdrop-root")!
        )}
      <li className="flex items-center justify-center w-[calc(var(--nav-size)*0.8)]">
        <a
          className={`flex items-center justify-center text-blue-400
                   transition-all duration-200 hover:text-emerald-400 ${
                     isOpen ? "rotate-0 text-emerald-400" : "rotate-90"
                   }`}
          onClick={clickHandler}
        >
          {props.icon}
        </a>
        {isOpen && props.children}
      </li>
    </>
  );
};

export default NavItem;
