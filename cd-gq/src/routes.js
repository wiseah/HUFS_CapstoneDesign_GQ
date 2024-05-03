import Main from "./pages/main";
import Sitemap from "./pages/Sitemap";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

const routes = [
    {
        path: '/',
        element: <Sitemap />,
    },
    {
        path: '/main',
        element: <Main />,
        name: '메인(첫 페이지)'
    },
    {
        path: '/home',
        element: <Home />,
        name: '홈 페이지(두 번째 페이지)'
    },
    {
        path: '/detail',
        element: <Detail />,
        name: '해충설명페이지(세 번째 페이지)'
    },
]

export default routes;