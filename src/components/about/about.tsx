import Card from "../ui/card";
import profilePicture from "../../assets/wa.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <Card
      className="col-start-2 col-end-2 row-start-2 row-end-2 justify-self-center m-0 flex items-start flex-wrap min-w-[300px] max-w-[900px]"
      id="about"
    >
      <div className="mx-auto flex-grow-3 min-w-[300px] w-[65%]">
        <h2 className="pb-4 text-xl font-bold text-yellow-500 underline underline-offset-4">
          01. About
        </h2>
        <p className="mb-4">
          Hi! My name is Will. I started my journey towards being a software
          engineer back in 2015 when I began community college for web
          development. From there, I ended up transferring to a 3-year
          university program where I received my bachelor's in computer science
          as well as my first full-time software engineering job upon
          graduation.
        </p>
        <p className="mb-4">
          So far, I have been privileged to work for two fortune 500 companies;
          one a major competitor in{" "}
          <a
            href="https://cigna.com"
            target="_blank"
            className="text-blue-400 hover:text-emerald-300"
          >
            healthcare
          </a>{" "}
          and the other in{" "}
          <a
            href="https://aws.amazon.com"
            target="_blank"
            className="text-blue-400 hover:text-emerald-300"
          >
            global technology and cloud services
          </a>
          .
        </p>
        <p className="mb-4">
          My diverse experiences within these roles have provided me with
          tremendous opportunities to work with passionate technologists and
          have allowed me to gain valuable knowledge with many programming
          languages and technologies such as, but not limited to:
        </p>
        <div className="flex items-center justify-start mb-4 space-x-10">
          <ul className="list-disc list-inside">
            <li>TypeScript</li>
            <li>Python</li>
            <li>Java</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
          <ul className="list-disc list-inside">
            <li>AWS</li>
            <li>Terraform</li>
            <li>Terragrunt</li>
            <li>React</li>
            <li>Docker</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center flex-grow-1 min-w-[100px] max-w-[175px] mx-auto mt-[10%]">
        <img
          src={profilePicture}
          className="transition-all duration-500 border-4 border-yellow-500 border-solid rounded-full sepia hover:filter-none"
        ></img>
        <a
          href="https://www.linkedin.com/in/william-ahern/"
          target="_blank"
          className="flex-grow-4 flex flex-col items-center min-w-[30px] min-h-[30px] mt-2 hover:text-blue-400"
        >
          <FontAwesomeIcon icon={faLinkedin} className="w-auto h-auto" />
        </a>
      </div>
    </Card>
  );
};

export default About;
