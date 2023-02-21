import { RouterProvider } from "react-router-dom";
import "./App.css";
import ProducktProvaider from "./Context/ProducktProvaider";

import { router } from "./Rourer/Root";

function App() {
  return (
    <>
      <ProducktProvaider>
        <RouterProvider router={router}></RouterProvider>
      </ProducktProvaider>
    </>
  );
}

export default App;
