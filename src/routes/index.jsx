import { createBrowserRouter } from "react-router-dom";
import { LandingLayout } from "../layouts/LandingLayout";
import Home from "../pages/Home"
import Umkm from "../pages/Umkm";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "umkm",
                element: <Umkm />
            }
        ]
    }
])