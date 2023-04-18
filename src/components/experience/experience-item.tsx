import { useSelector } from "react-redux";
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
    (summaryItem, index) => (
      <li key={index} className="max-w-[300px] mb-2 font-light">
        {summaryItem}
      </li>
    )
  );

  return (
    <div hidden={activeExperienceId !== props.id} className="max-w-[500px]">
      <h2 className="text-lg text-emerald-400 underline underline-offset-[6px] mb-2">
        {props.experience.experienceName}
      </h2>
      <p className="font-semibold mb-1">{props.experience.roleName}</p>
      <p className="mb-6 italic text-sm">
        {props.experience.startDate} - {props.experience.endDate}
      </p>
      <ul className="list-inside list-disc w-[325px] max-h-[400px] overflow-y-scroll">
        {summaryItems}
      </ul>
    </div>
  );
};

export default ExperienceItem;
