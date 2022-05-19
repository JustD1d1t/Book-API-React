import { useRoutes } from "react-router-dom";

import MainPage from "./pages/MainPage";
import Book from "./pages/Book";
import Favorites from "./pages/Favorites";
import Search from "./pages/Search";

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <MainPage /> },
    { path: "/:id", element: <Book /> },
    { path: "/favorites", element: <Favorites /> },
    { path: "/search", element: <Search /> },
  ]);
  return routes;
};

export default App;
