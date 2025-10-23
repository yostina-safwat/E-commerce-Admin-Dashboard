import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const AppRoutes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<div>Layout Component</div>}>
      <Route index element={<div>Home Component</div>} />
      <Route path="home" element={<div>Home Component</div>} />
    </Route>
  )
);
export default AppRoutes;
