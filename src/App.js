import "./App.css";
import ProductDetail from "./pages/Details/ProductDetail";
import Category from "./components/Category";
import data from "./data/data.json";

export default function App() {
  return (
    <div className="App">
      <ProductDetail data={data[1]} />
      <CategoryContainer />
    </div>
  );
}
