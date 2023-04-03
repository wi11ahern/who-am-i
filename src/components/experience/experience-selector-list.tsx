import { useDispatch, useSelector } from "react-redux";
import ExperienceSelectorButton from "./experience-selector-button";
import { RootState } from "../../store/store";
import styles from "./experience-selector-list.module.css";
import { experienceActions } from "../../store/experience";

interface Props {
  experiences: any[];
}

const ExperienceSelectorList = (props: Props) => {
  const dispatcher = useDispatch();
  const activeExperienceId = useSelector(
    (state: RootState) => state.experience.activeExperienceId
  );

  const setActiveExperienceIdHandler = (id: number) => {
    dispatcher(experienceActions.setActiveExperienceId(id));
  };

  const experienceSelectorButtons = props.experiences.map(
    (experience, index) => {
      return (
        <ExperienceSelectorButton
          key={index}
          id={index}
          experienceName={experience.experienceName}
          onClick={() => setActiveExperienceIdHandler(index)}
        />
      );
    }
  );

  return (
    <div className={styles.selector}>
      <div className={styles.buttons}>{experienceSelectorButtons}</div>
      <div
        className={styles.highlighter}
        style={{
          transform: `translateY(calc(${activeExperienceId} * var(--selector-height)))`,
        }}
      ></div>
    </div>
  );
};

export default ExperienceSelectorList;
