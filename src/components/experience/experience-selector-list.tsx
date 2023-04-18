import { useDispatch, useSelector } from "react-redux";
import ExperienceSelectorButton from "./experience-selector-button";
import { RootState } from "../../store/store";
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
    <div className="relative self-start flex flex-nowrap items-start justify-start w-[30%] mr-8">
      <div
        className={`absolute top-0 left-0 w-1 h-10 rounded-3xl bg-emerald-300
                    transition-all duration-150`}
        style={{
          transform: `translateY(calc(${activeExperienceId} * 40px))`,
        }}
      />
      <ul className="flex flex-col justify-start ml-1">
        {experienceSelectorButtons}
      </ul>
    </div>
  );
};

export default ExperienceSelectorList;
