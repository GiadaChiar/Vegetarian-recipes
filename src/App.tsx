import { BrowserRouter} from "react-router-dom";
import Menu from "./components/menu";
import NavigationRoots from "./router/router";




function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <NavigationRoots/>
      </BrowserRouter>
    </>
  );
}

export default App;