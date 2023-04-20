import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { IntersectionOptions, useInView } from "react-intersection-observer";

interface Props {
  targetId: string;
  topOffset?: number;
  className?: string;
  intersectionOptions?: IntersectionOptions;
}

const ScrollDownButton = (props: Props) => {
  const intersectionOptions = props.intersectionOptions || {
    threshold: 1,
    trackVisibility: true,
    rootMargin: "-80% 0px 0px 0px",
  };

  const { ref, inView } = useInView(intersectionOptions);
  const isIntersectingStyles = inView ? "opacity-100" : "opacity-0";
  console.log(`ScrollDownButton: ${isIntersectingStyles}`);

  const scrollToHandler = () => {
    const targetElement = document.getElementById(props.targetId);
    window.scrollTo({
      top: targetElement!.offsetTop + (props.topOffset || 0),
      behavior: "smooth",
    });
  };

  return (
    <button
      ref={ref}
      className={`absolute bottom-[7vh] right-[50vw] w-7 h-7 text-blue-400 hover:text-emerald-400 hover:transition-colors
                  hover:duration-500 transition-all ease-in-out duration-[1s] animate-bounce ${props.className} ${isIntersectingStyles}`}
      onClick={scrollToHandler}
    >
      <FontAwesomeIcon icon={faAnglesDown} className="w-auto h-auto" />
    </button>
  );
};

export default ScrollDownButton;
