import Header from "./components/layout/header";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import Content from "./components/layout/content";
import Footer from "./components/layout/footer";

function App() {
  const theme = useSelector((state: RootState) => state.ui.theme);
  document.getElementById("body")!.className = theme;

  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
}

export default App;
