import { createBrowserRouter } from "react-router-dom";
import TodoView from "../pages/TodoPage/TodoView";
import ErrorView from "../pages/ErroPage/ErrorView";
import LoginView from "../pages/LoginPage/LoginView";
import RegisterView from "../pages/RegisterPage/RegisterView";


export const router = createBrowserRouter([
   {
      path: '/',
      element: <TodoView />,
      errorElement: <ErrorView />
   },
   {
      path: "/login",
      element: <LoginView />
   },
   {
      path: "/register",
      element: <RegisterView />
   }
])