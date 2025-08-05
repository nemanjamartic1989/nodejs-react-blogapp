import { createBrowserRouter, RouterProvider, Route} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Blog App</div>
  }
]);

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
