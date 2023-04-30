import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "./Layouts/Main";
import Category from "./Pages/Home/Category/Category";
import NewsLayout from "./Layouts/NewsLayout";
import News from "./Pages/News/News";
import LoginLayout from "./Layouts/LoginLayout";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Terms from "./Pages/Shared/Terms/Terms";

const router = createBrowserRouter([
    {
      path: '/',
      element: <LoginLayout />,
      children: [
        {
          path: '/',
          element: <Navigate to="/category/0" />
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/register',
          element: <Register />
        },
        {
          path: 'terms',
          element: <Terms />
        }
      ]
    },
    {
      path: "category",
      element: <Main />,
      children: [
        // {
        //   path: '/',
        //   // element: <Home />
        //   element: <Category />,
        //   loader: () => fetch('https://the-news-dragon-server-omega-eight.vercel.app/news')
        // },
        {
            path: ':id',
            element: <Category />,
            loader: ({params}) => fetch(`https://the-news-dragon-server-omega-eight.vercel.app/categories/${params.id}`)
        }
      ]
    },
    {
      path: 'news',
      element: <NewsLayout />,
      children: [
        {
          path: ':id',
          element: <PrivateRoute><News /></PrivateRoute>,
          loader: ({params}) => fetch(`https://the-news-dragon-server-omega-eight.vercel.app/news/${params.id}`)
        }
      ]
    }
]);

export default router;

