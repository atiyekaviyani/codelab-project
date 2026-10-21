import Layout from "../App/Layout";
import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../Screens/LandingPage";
import CoursePage from"../Screens/CoursePage";
import DetailCoursePage from "../Screens/DetailCoursePage"
import Article from "../Screens/ArticlePage"
import DetailArticlePage from "../Screens/DetailArticlePage"
export const Routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "/Landing",
        element: <LandingPage />,
      },
       {
        path: "/Course",
        element: <CoursePage />,
      },
       {
        path: "/DetailCourse",
        element: <DetailCoursePage />,
      },
       {
        path: "/Article",
        element: < Article/>,
      },
       {
        path: "/DetailArticle",
        element: < DetailArticlePage/>,
      },
    ],
  },
]);
