import { createBrowserRouter } from "react-router-dom";
import { LandingLayout } from "../layouts/LandingLayout";
import Home from "../pages/Home"
import Umkm from "../pages/Umkm";
import NotFound from "../pages/NotFound";
import AiFeature from "../pages/AiFeature";

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
            },
            {
                path: "feature",
                element: <AiFeature />
            },
            {
                path: "*",
                element: <NotFound />
            },
        ]
    },
])