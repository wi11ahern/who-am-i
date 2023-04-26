import DropDownItem from "./drop-down-item";

const DropDownMenu = () => {
  return (
    <ul className="absolute top-[70px] w-[300px] translate-x-[-45%] p-1 bg-slate-600 dark:bg-slate-700 rounded-md overflow-hidden">
      <DropDownItem href="#about">About</DropDownItem>
      <DropDownItem href="#experience">Experience</DropDownItem>
      <DropDownItem href="#contact">Contact</DropDownItem>
    </ul>
  );
};

export default DropDownMenu;
