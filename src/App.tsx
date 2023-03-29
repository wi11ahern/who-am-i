import About from "./components/about/about";
import Greeting from "./components/greeting/greeting";
import Header from "./components/layout/header";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";

function App() {
  const theme = useSelector((state: RootState) => state.ui.theme);
  document.getElementById("body")!.className = theme;

  return (
    <>
      <Header />
      <Greeting />
      <About />
    </>
  );
}

export default App;
