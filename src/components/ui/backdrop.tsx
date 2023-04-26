import { MouseEventHandler } from "react";

interface Props {
  onClick?: MouseEventHandler;
}

const Backdrop = (props: Props) => {
  return (
    <div
      className="fixed top-0 left-0 z-10 w-full h-screen bg-black bg-opacity-50"
      onClick={props.onClick}
    />
  );
};

export default Backdrop;
