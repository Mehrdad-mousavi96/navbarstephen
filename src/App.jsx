import App_ from "./mainAppProject/App_";
import {NavigationProvider} from "./mainAppProject/context/navigation.jsx";


const App = () => {
  return (
      <NavigationProvider >
        <App_ />
      </NavigationProvider>
  );
};

export default App;
