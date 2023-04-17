import Card from "../ui/card";
import styles from "./greeting.module.css";

const Greeting = () => {
  return (
    <Card className="mx-auto px-8 h-screen">
      <p className="text-2xl">Hi, my name is</p>
      <h1 className="text-8xl">
        William Ahern<span className={styles.period}>.</span>
      </h1>
      <p className="text-2xl">
        I am a software engineer with experience across the stack, but more importantly,
      </p>
      <p className="text-2xl">
        I am a <span className="text-yellow-500">builder</span>,{" "}
        <span className="text-yellow-500">problem solver</span>, and{" "}
        <span className="text-yellow-500">lifelong learner</span>.
      </p>
    </Card>
  );
};

export default Greeting;
