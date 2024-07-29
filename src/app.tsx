
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Blog } from "./pages/Blog";
import { Post } from "./pages/Post";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Blog/>,
  },
  {
    path: "/post",
    element: <Post/>
    
  },
]);

export function App() {
return  <RouterProvider router={router} />
}
