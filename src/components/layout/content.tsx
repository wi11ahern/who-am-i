import About from "../about/about";
import Contact from "../contact/contact";
import Experience from "../experience/experience";
import Greeting from "../greeting/greeting";
import ScrollDownButton from "../ui/scroll-down-button";

const Content = () => {
  return (
    <div className="flex flex-col mx-auto w-full min-h-screen">
      <Greeting />
      <ScrollDownButton targetId="about" />
      <About />
      <Experience />
      <Contact />
    </div>
  );
};

export default Content;
