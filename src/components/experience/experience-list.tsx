import { useState } from "react";
import styles from "./experience-list.module.css";
import ExperienceItem, { Experience } from "./experience-item";

interface Props {
  experiences: Experience[];
}

const ExperienceList = (props: Props) => {
  const experienceItems = props.experiences.map((experience, index) => {
    return <ExperienceItem key={index} id={index} experience={experience} />;
  });

  return <div>{experienceItems}</div>;
};

export default ExperienceList;
