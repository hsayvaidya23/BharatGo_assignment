import { useRoutes, BrowserRouter } from "react-router-dom";
// import { ShoopingCartProvider } from "../../contexts";
import Home from "./components/Home";
import MyAccount from "./components/MyAccount"; 
import MyOrder from "./components/MyOrder"; 
import MyOrders from "./components/MyOrders"; 
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar"; 
import SideMenu from "./components/SideMenu";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/clothes", element: <Home /> },
    { path: "/electronics", element: <Home /> },
    { path: "/furnitures", element: <Home /> },
    { path: "/toys", element: <Home /> },
    { path: "/others", element: <Home /> },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/my-orders/last", element: <MyOrder /> },
    { path: "/my-orders/:id", element: <MyOrder /> },
    { path: "*", element: <NotFound /> },
  ]);

  return routes;
};

function App() {
  return (
    // <ShoopingCartProvider>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
        <SideMenu />
      </BrowserRouter>
    // </ShoopingCartProvider>
  );
}

export default App;