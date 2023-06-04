import { RouterProvider } from "react-router-dom";
import router from "./All_Routers/Routers";


function App() {
  return (

    <RouterProvider router={router}></RouterProvider>
   
  );
}

export default App;
