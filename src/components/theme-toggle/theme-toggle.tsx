import { useDispatch, useSelector } from "react-redux";
import { Theme, uiActions } from "../../store/ui";
import { RootState } from "../../store/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";

interface Props {}

const ThemeToggle = () => {
  const toggleRef = useRef<HTMLInputElement>(null);
  const [checked, setChecked] = useState(true);
  const dispatcher = useDispatch();
  const theme = useSelector((state: RootState) => state.ui.theme);

  const onToggleHandler = () => {
    setChecked((prevState) => !prevState);
    dispatcher(
      uiActions.setTheme(theme === Theme.Light ? Theme.Dark : Theme.Light)
    );
  };

  return (
    <label
      htmlFor="theme-toggle"
      className="relative ml-auto mr-4 sm:mx-auto sm:ml-4 inline-block my-auto min-w-[20px] h-10 min-h-[40px] cursor-pointer"
    >
      <input
        id="theme-toggle"
        type="checkbox"
        onChange={onToggleHandler}
        ref={toggleRef}
        checked={checked}
        className="w-0 h-0 opacity-0 peer"
      />
      <span
        className="absolute z-[1] top-0 left-0 bottom-0 right-0 border-solid border-[1px] rounded-full
                  before:absolute before:content-[''] before:h-4 before:w-4 before:left-[1px] before:top-[1px]
                  before:rounded-full before:bg-slate-300
                  peer-checked:before:translate-y-5 before:transition-all"
      />
      <FontAwesomeIcon
        icon={faMoon}
        className="absolute top-[2px] left-[5px] w-[10px]"
      />
      <FontAwesomeIcon
        icon={faLightbulb}
        className="absolute left-[5.5px] right-0 bottom-[2px] w-[10px] text-yellow-500"
      />
    </label>
  );
};

export default ThemeToggle;
