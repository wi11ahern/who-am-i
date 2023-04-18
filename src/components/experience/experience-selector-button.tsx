import { MouseEventHandler } from "react";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";

interface Props {
  id: number;
  experienceName: string;
  onClick: MouseEventHandler;
  className?: string;
}

const ExperienceSelectorButton = (props: Props) => {
  const activeExperienceId = useSelector(
    (state: RootState) => state.experience.activeExperienceId
  );

  return (
    <button
      id={props.id.toString()}
      className={`flex items-center relative h-10 w-48 border-solid border-slate-300 rounded-sm pl-4 transition-all duration-150 ${
        props.className
      } ${props.id === activeExperienceId ? "bg-blue-500 bg-opacity-60" : ""}`}
      onClick={props.onClick}
    >
      {props.experienceName}
    </button>
  );
};

export default ExperienceSelectorButton;
