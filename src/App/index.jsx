import React from "react";
import { RouterProvider } from "react-router-dom";

import { Routers } from "../Config/auth.router";
const App = () => {
  return (
    <div>
      <RouterProvider router={Routers} />
    </div>
  );
};

export default App;
