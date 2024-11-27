import Link from "./components/Link";
import Accordion from "./components/pages/Accordion";
import DropDown from "./components/pages/DropDown";
import Route from "./components/Route";

const App = () => {
  return (
    <div className="p-2">
      <Link to={"/accordion"}>Go to Accordion</Link>
      <Link to={"/dropdown"}>Go to DropDown</Link>
      <div>
        <Route path={"/accordion"}>
          <Accordion />
        </Route>
        <Route path={"/dropdown"}>
          <DropDown />
        </Route>
      </div>
    </div>
  );
};

export default App;
