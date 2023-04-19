import { ReactNode } from "react";
import { IntersectionOptions, useInView } from "react-intersection-observer";

interface Props {
  children: ReactNode;
  id?: string;
  className?: string;
  intersectionOptions?: IntersectionOptions;
}

const Card = (props: Props) => {
  const intersectionOptions = props.intersectionOptions || {
    threshold: 0.2,
    triggerOnce: true,
  };

  const { ref, inView } = useInView(intersectionOptions);
  const isIntersectingStyles = inView ? "opacity-100" : "opacity-0";

  return (
    <div
      ref={ref}
      id={props.id}
      className={`bg-inherit text-white rounded-md m-4 p-3 ${props.className} ${isIntersectingStyles} transition-opacity duration-[1s] ease-in-out}`}
    >
      {props.children}
    </div>
  );
};

export default Card;
