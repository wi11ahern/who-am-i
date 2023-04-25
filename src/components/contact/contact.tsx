import Card from "../ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";


const Contact = () => {
  return (
    <Card
      className="row-start-4 row-end-5 col-start-2 col-end-3 justify-self-center flex items-center flex-col w-full mb-10 sm:mb-40"
      id="contact"
    >
      <h2 className="pb-4 text-xl font-bold text-yellow-500 underline underline-offset-4">
        03. Contact
      </h2>
      <p className="min-w-[200px] max-w-[280px] text-center">
        Have a question? Just want to say hi? No problem! My inbox is always
        open.
      </p>
      <a
        className="mx-auto mt-4"
        href="mailto:williamahern.com@gmail.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        <FontAwesomeIcon
          icon={faEnvelope}
          className="w-[50px] h-[50px] text-blue-400 hover:text-emerald-300 hover:animate-wiggle"
        />
      </a>
    </Card>
  );
};

export default Contact;
