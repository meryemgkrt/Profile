import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import RegisrerPages from "../pages/RegisrerPages";
import CheckPasswordPage from "../pages/CheckPasswordPage";
import Home from "../pages/Home";
import MessagePage from "../pages/MessagePage";
import Login from "../pages/Login";
import AuthLayouts from "../layout";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <App />,
            children: [{

                path: "register",
                element: <AuthLayouts><RegisrerPages/></AuthLayouts>

            },
        {
            path: "login",
            element: <AuthLayouts><Login/></AuthLayouts>
        },
        {
            path: "password",
            element:<AuthLayouts><CheckPasswordPage /></AuthLayouts>
        },
        {
            path:"",
            element:<AuthLayouts><Home/></AuthLayouts>,
            children:[{
                path:"userId",
                element:<AuthLayouts><MessagePage /></AuthLayouts>
            }]
        }
        
        ]

        }
    ]
);

export default router;