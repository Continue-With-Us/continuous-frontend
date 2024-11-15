import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CoursePage from "./pages/CoursePage";
import QuestionAndAnswer from "./pages/QuestionAndAnswerPage";
import AnswerListPage from "./pages/AnswerListPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CoursePage />,
  },
  {
    path: "/question-and-answer",
    element: <QuestionAndAnswer />,
  },
  {
    path: "/answer-list",
    element: <AnswerListPage />,
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
