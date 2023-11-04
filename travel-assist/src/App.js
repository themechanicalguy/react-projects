import "./index.css";
import InputPanel from "./InputPanel";
import PackingList from "./PackingList";
import Header from "./Header";
import Stats from "./Stats";

const initialItems = [
  {
    id: 1,
    description: "Passport",
    quantity: 1,
    packed: true,
  },
  {
    id: 2,
    description: "Keys",
    quantity: 1,
    packed: true,
  },
  {
    id: 2,
    description: "Charger",
    quantity: 1,
    packed: true,
  },
];

const App = () => {
  return (
    <div className="app">
      <Header />
      <InputPanel />
      <PackingList initialItems={initialItems} />
      <Stats />
    </div>
  );
};

export default App;
