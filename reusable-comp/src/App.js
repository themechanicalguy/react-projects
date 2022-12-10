import AccordionPage from "./pages/AccordionPage.js";
import DropdownPage from "./pages/DropdownPage.js";
import ButtonPage from "./pages/ButtonPage.js";
import Route from "./components/Route";
import ModalPage from "./pages/ModalPage.js";
import Sidebar from "./components/Sidebar.js";
import TablePage from "./pages/TablePage";
import CounterPage from "./pages/CounterPage.js";

function App() {
  return (
    <div>
      <div className="container mx-auto grid-cols-4 gap-4 mt-4  ">
        <Sidebar />
      </div>
      <div className="col-span-5 grid-cols-8">
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/dropdown">
          <DropdownPage />
        </Route>
        <Route path="/button">
          <ButtonPage />
        </Route>
        <Route path="/modal">
          <ModalPage />
        </Route>
        <Route path="/table">
          <TablePage />
        </Route>
        <Route path="/counter">
          <CounterPage initialCount={10} />
        </Route>
      </div>
    </div>
  );
}

export default App;
