import "./App.css";
import { Home, ShoppingCart, Package, Settings } from "lucide-react";

function App() {
  return (
    <>
      <div className="p-6 flex flex-col gap-4">
        <h1 className="text-3xl font-bold text-blue-600 flex items-center gap-2">
          <Home className="w-6 h-6" /> Dashboard
        </h1>

        <nav className="flex flex-col gap-3 text-gray-700">
          <button className="flex items-center gap-2 hover:text-blue-600">
            <Package className="w-5 h-5" /> Products
          </button>
          <button className="flex items-center gap-2 hover:text-blue-600">
            <ShoppingCart className="w-5 h-5" /> Orders
          </button>
          <button className="flex items-center gap-2 hover:text-blue-600">
            <Settings className="w-5 h-5" /> Settings
          </button>
        </nav>
      </div>
    </>
  );
}

export default App;
