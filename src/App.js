import "./App.css";
import Header from "./components/Header";
import Product from "./components/Product";
import ImageOverlay from "./components/ImageOverlay";
import { useCartContext } from "./context/CartContext";

function App() {
  const { showOverlay } = useCartContext();

  return (
    <div className="App">
      <Header />
      <Product />
      {showOverlay && <ImageOverlay />}
    </div>
  );
}

export default App;
