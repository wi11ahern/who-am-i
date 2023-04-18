import Card from "../ui/card";

const Greeting = () => {
  return (
    <Card className="mx-auto px-8 h-screen">
      <p className="text-2xl">Hi, my name is</p>
      <h1 className="text-8xl text-yellow-500">
        William Ahern<span className="text-white">.</span>
      </h1>
      <p className="text-2xl">
        I am a software engineer with experience across the stack, but more
        importantly,
      </p>
      <p className="text-2xl">
        I am a <span className="text-emerald-400">builder</span>,{" "}
        <span className="text-emerald-400">problem solver</span>, and{" "}
        <span className="text-emerald-400">lifelong learner</span>.
      </p>
    </Card>
  );
};

export default Greeting;
