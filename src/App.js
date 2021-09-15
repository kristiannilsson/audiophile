import ProductDetail from "./pages/Details/ProductDetail";
import data from "./data/data.json";

export default function App() {
  return (
    <div>
      <ProductDetail data={data[1]} />
    </div>
  );
}
