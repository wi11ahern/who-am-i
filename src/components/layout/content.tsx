import About from "../about/about";
import Contact from "../contact/contact";
import Experience from "../experience/experience";
import Greeting from "../greeting/greeting";
import ScrollDownButton from "../ui/scroll-down-button";

const Content = () => {
  return (
    <div className="grid grid-cols-[10%_80%_10%] grid-rows-[auto_auto_auto_auto] gap-y-40">
      <Greeting />
      <ScrollDownButton targetId="about" />
      <About />
      <Experience />
      <Contact />
    </div>
  );
};

export default Content;
