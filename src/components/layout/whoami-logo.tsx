// import styles from "./whoami-logo.module.css";

const WhoAmILogo = () => {
  const backToTopHandler = () => {
    window.scrollTo(0, 0);
  };

  return (
    <button
      className="bg-transparent text-left border-solid border-r border-gray-300 h-full w-30 p-3"
      onClick={backToTopHandler}
    >
      <p>
        <span className="text-yellow-500 pr-2">$</span>whoami
      </p>
      <span className="text-xl text-yellow-500">william</span>
    </button>
  );
};

export default WhoAmILogo;
