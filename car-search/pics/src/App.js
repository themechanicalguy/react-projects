import SearchBar from "./components/SearchBar";
import SearchImage from "./api";
const App = () => {
  const handleSubmit = async (term) => {
    // console.log(term);
    const result = await SearchImage(term);
    console.log(result);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
    </div>
  );
};

export default App;
