import { MouseEventHandler } from "react";
import styles from "./experience-selector-button.module.css";
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
      className={`${styles.button} ${props.className} ${
        activeExperienceId === props.id ? styles.active : ""
      }`}
      onClick={props.onClick}
    >
      {props.experienceName}
    </button>
  );
};

export default ExperienceSelectorButton;
