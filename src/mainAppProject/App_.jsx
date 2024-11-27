import Link from "./components/Link";
import Accordion from "./components/pages/Accordion";
import DropDown from "./components/pages/DropDown";
import Route from "./components/Route";
import Sidebar from "./components/Sidebar";
import ButtonPage from "./components/pages/ButtonPage";

const App = () => {
  return (
    <div className="p-2">
      <Sidebar />
      <div>
        <Route path={"/accordion"}>
          <Accordion />
        </Route>
        <Route path={"/"}>
          <DropDown />
        </Route>{" "}
        <Route path={"/buttons"}>
          <ButtonPage />
        </Route>
      </div>
    </div>
  );
};

export default App;
