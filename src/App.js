import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ModingPage from "./pages/ModingPage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/react-houses",
    basename: "/react-houses",
    element: <HomePage />,
    errorElement: <ErrorPage />,
    children: [{ path: ":command", element: <ModingPage /> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
