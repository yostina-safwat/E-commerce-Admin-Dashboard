import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import DashboardLayout from "../components/DashboardLayout";
import Home from "../pages/Home";
import Orders from "../pages/Orders";
import Products from "../pages/Products";
import Customers from "../pages/Customers";
const AppRoutes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<DashboardLayout />}>
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="orders" element={<Orders />} />
      <Route path="products" element={<Products />} />
      <Route path="customers" element={<Customers />} />
    </Route>
  )
);
export default AppRoutes;
