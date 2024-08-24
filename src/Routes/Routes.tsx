import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Account from "../Pages/Account/Account";
import Logout from "../Pages/Logout/Logout";
import CreateVacancies from "../Pages/CreateVacancies/CreateVacancies";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {path: "", element: <Home />},
            {path: "login", element: <Login />},
            {path: "register", element: <Register />},
            {path: "account", element: <Account />},
            {path: "logout", element: <Logout />},
            {path: "create", element: <CreateVacancies />},
            {path: "vacancies/:id", element: <CreateVacancies />},
        ]
    }
])