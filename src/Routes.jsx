import { createBrowserRouter } from "react-router-dom";
import Main from "./Layouts/Main";
import Home from "./Pages/Home/Home/Home";
import Category from "./Pages/Home/Category/Category";
import NewsLayout from "./Layouts/NewsLayout";
import News from "./Pages/News/News";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/category/:id',
            element: <Category />,
            loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
        }
      ]
    },
    {
      path: 'news',
      element: <NewsLayout />,
      children: [
        {
          path: ':id',
          element: <News />


        }
      ]
    }
]);

export default router;

