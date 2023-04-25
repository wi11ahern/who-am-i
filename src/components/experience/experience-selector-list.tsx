import { useDispatch, useSelector } from "react-redux";
import ExperienceSelectorButton from "./experience-selector-button";
import { RootState } from "../../store/store";
import { experienceActions } from "../../store/experience";

interface Props {
  experiences: any[];
}

const ExperienceSelectorList = (props: Props) => {
  const isMobile = useSelector((state: RootState) => state.ui.isMobile);
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
        <li
          key={index}
          className="bg-blue-800 bg-opacity-60 border-solid border-x border-blue-300 sm:border-none sm:bg-transparent"
        >
          <ExperienceSelectorButton
            id={index}
            experienceName={experience.experienceName}
            onClick={() => setActiveExperienceIdHandler(index)}
          />
        </li>
      );
    }
  );

  return (
    <div className="relative grid w-full grid-cols-1 grid-rows-1 sm:row-start-1 sm:row-end-2 sm:inline sm:grid-rows-none sm:grid-cols-none">
      {!isMobile && (
        <div
          className={`absolute top-0 left-0 w-1 h-10 rounded-3xl bg-emerald-300
                      transition-all duration-150`}
          style={{
            transform: `translateY(calc(${activeExperienceId} * 40px))`,
          }}
        />
      )}
      <ul
        className="flex overflow-scroll max-w-full mx-auto border-x-2 border-emerald-300
                   sm:block sm:overflow-hidden sm:border-none sm:mx-0"
      >
        {experienceSelectorButtons}
      </ul>
    </div>
  );
};

export default ExperienceSelectorList;
