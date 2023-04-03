import { useSelector } from "react-redux";
import styles from "./experience-item.module.css";
import { RootState } from "../../store/store";

export type Experience = {
  experienceName: string;
  startDate: string;
  endDate: string;
  summaryItems: string[];
};

interface Props {
  id: number;
  experience: Experience;
}

const ExperienceItem = (props: Props) => {
  const activeExperienceId = useSelector(
    (state: RootState) => state.experience.activeExperienceId
  );

  const summaryItems = props.experience.summaryItems.map((summaryItem) => (
    <li>{summaryItem}</li>
  ));

  return (
    <div hidden={activeExperienceId !== props.id} className={styles.experience}>
      <h2>{props.experience.experienceName}</h2>
      <p>
        {props.experience.startDate} - {props.experience.endDate}
      </p>
      <ul>{summaryItems}</ul>
    </div>
  );
};

export default ExperienceItem;
