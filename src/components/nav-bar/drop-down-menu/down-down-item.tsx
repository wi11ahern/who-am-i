import { ReactNode, useState } from "react";

interface Props {
  href: string;
  children?: ReactNode;
}

const DropDownItem = (props: Props) => {
  return (
    <a href={props.href} className="">
      <li className="flex items-center justify-center h-10">
        {props.children}
      </li>
    </a>
  );
};

export default DropDownItem;
