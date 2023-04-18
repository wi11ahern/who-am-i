import About from "../about/about";
import Contact from "../contact/contact";
import Experience from "../experience/experience";
import Greeting from "../greeting/greeting";

const Content = () => {
  return (
    <div className="flex flex-col mx-auto mt-60 w-full min-h-screen">
      <Greeting />
      <About />
      <Experience />
      <Contact />
    </div>
  );
};

export default Content;
