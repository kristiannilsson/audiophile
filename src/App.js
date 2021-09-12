import "./App.css";
import ProductDetail from "./pages/ProductDetail";
import data from "./data/data.json";

function App() {
  return (
    <div className="App">
      <ProductDetail data={data[0]} />
    </div>
  );
}

export default App;
