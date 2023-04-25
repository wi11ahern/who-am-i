import Header from "./components/layout/header";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store/store";
import { uiActions } from "./store/ui";
import Content from "./components/layout/content";
import Footer from "./components/layout/footer";
import { useEffect } from "react";

function App() {
  const theme = useSelector((state: RootState) => state.ui.theme);
  const dispatcher = useDispatch();

  useEffect(() => {
    function handleResize() {
      dispatcher(uiActions.setIsMobile(window.innerWidth < 640));
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
