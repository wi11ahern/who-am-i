import Header from "./components/layout/header";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import Content from "./components/layout/content";

function App() {
  const theme = useSelector((state: RootState) => state.ui.theme);
  document.getElementById("body")!.className = theme;

  return (
    <>
      <Header />
      <Content />
    </>
  );
}

export default App;
