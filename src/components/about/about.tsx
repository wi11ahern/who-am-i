import Card from "../ui/card";
import profilePicture from "../../assets/wa.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

interface Props {}

const About = (props: Props) => {
  return (
    <Card
      className="flex items-center flex-row flex-wrap min-w-[600px] max-w-[600px] mx-auto mb-40"
      id="about"
    >
      <div className="flex-grow-3 w-[65%] mx-auto">
        <h2 className="text-xl font-bold underline underline-offset-4 pb-4 text-yellow-500">
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
            className="text-emerald-400 hover:text-blue-300"
          >
            healthcare
          </a>{" "}
          and the other in{" "}
          <a
            href="https://aws.amazon.com"
            target="_blank"
            className="text-emerald-400 hover:text-blue-300"
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
        <div className="flex items-center justify-start space-x-10 mb-4">
          <ul className="list-inside list-disc">
            <li>TypeScript</li>
            <li>Python</li>
            <li>Java</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
          <ul className="list-inside list-disc">
            <li>AWS</li>
            <li>Terraform</li>
            <li>Terragrunt</li>
            <li>React</li>
            <li>Docker</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center flex-grow-1 max-w-[175px] ml-2">
        <img
          src={profilePicture}
          className="rounded-full border-solid border-4 border-yellow-500 sepia hover:filter-none transition-all duration-500"
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
