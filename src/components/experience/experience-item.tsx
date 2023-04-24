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
      <li key={index} className="mb-2 pr-4 font-light">
        {summaryItem}
      </li>
    )
  );

  return (
    <div
      hidden={activeExperienceId !== props.id}
      className="row-start-2 row-end-3 ml-6 sm:row-start-1 sm:row-end-2 sm:col-start-2 sm:col-end-3"
    >
      <h2 className="text-lg text-emerald-400 underline underline-offset-[6px] mb-2">
        {props.experience.experienceName}
      </h2>
      <p className="mb-1 font-semibold">{props.experience.roleName}</p>
      <p className="mb-6 text-sm italic">
        {props.experience.startDate} - {props.experience.endDate}
      </p>
      <ul
        className="w-full max-h-[80%] overflow-y-scroll list-disc list-inside
                   sm:max-w-[500px]"
      >
        {summaryItems}
      </ul>
    </div>
  );
};

export default ExperienceItem;
