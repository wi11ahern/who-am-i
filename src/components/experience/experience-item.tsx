import { useSelector } from "react-redux";
import styles from "./experience-item.module.css";
import { RootState } from "../../store/store";

export type Experience = {
  experienceName: string;
  roleName: string;
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

  const summaryItems = props.experience.summaryItems.map(
    (summaryItem, index) => <li key={index}>{summaryItem}</li>
  );

  return (
    <div hidden={activeExperienceId !== props.id} className={styles.experience}>
      <h2 className={styles.title}>{props.experience.experienceName}</h2>
      <p className={styles.role}>{props.experience.roleName}</p>
      <p className={styles.tenure}>
        {props.experience.startDate} - {props.experience.endDate}
      </p>
      <ul>{summaryItems}</ul>
    </div>
  );
};

export default ExperienceItem;
