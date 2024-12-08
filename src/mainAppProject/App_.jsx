import Accordion from "./components/pages/Accordion";
import DropDown from "./components/pages/DropDown";
import Route from "./components/Route";
import Sidebar from "./components/Sidebar";
import ButtonPage from "./components/pages/ButtonPage";
import ModalPage from "./components/pages/ModalPage";
import TablePage from "./components/pages/TablePage";
import CounterPage from "./components/pages/CounterPage";

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
        <Route path={"/modal"}>
          <ModalPage />
        </Route>{" "}
        <Route path={"/table"}>
          <TablePage />
        </Route>
        <Route path={"/counter"}>
          <CounterPage initialCount={0} />
        </Route>
      </div>
    </div>
  );
};

export default App;
