import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  id?: string;
  className?: string;
}

const Card = (props: Props) => {
  return (
    <div
      id={props.id}
      className={`bg-inherit text-white rounded-md m-4 p-3 ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default Card;
