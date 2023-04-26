import { useState } from "react";

interface Props {
  name: string;
  beforeContent?: string;
  beforeContentOffset?: string;
  hoverContent?: string;
}

const MainNavItem = (props: Props) => {
  const beforeContent = props.beforeContent ? props.beforeContent : "";
  const beforeContentOffset = props.beforeContentOffset
    ? props.beforeContentOffset
    : "left-0";
  const [spanContent, setSpanContent] = useState(beforeContent);

  const mouseEnterHandler = () => {
    if (props.hoverContent) setSpanContent(props.hoverContent);
  };

  const mouseLeaveHandler = () => {
    setSpanContent(beforeContent);
  };

  return (
    <a
      href={`#${props.name.toLowerCase()}`}
      className="relative w-full hover:text-yellow-500"
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      <li className="float-left h-10 ml-[80px] flex text-center items-center justify-center">
        <span className={`absolute ${beforeContentOffset} w-14 text-right`}>
          {spanContent}.
        </span>
        {props.name}
      </li>
    </a>
  );
};

export default MainNavItem;
