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
      className={`text-center w-[200px] h-full rounded-sm transition-all duration-150 
                  sm:text-left sm:h-10 sm:pl-4 sm:min-w-full ${
                    props.className
                  } ${
        props.id === activeExperienceId ? "bg-blue-500 bg-opacity-60" : ""
      }`}
      onClick={props.onClick}
    >
      {props.experienceName}
    </button>
  );
};

export default ExperienceSelectorButton;
