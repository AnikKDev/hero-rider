import { createContext, useState } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
export const JOIN_STATE_CONTEXT = createContext(null);
function App() {
  const [joinState, setJoinState] = useState("rider");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // console.log(joinState);
  return (
    <JOIN_STATE_CONTEXT.Provider
      value={{ joinState: joinState, setJoinState, isLoggedIn, setIsLoggedIn }}
    >
      <div>
        <RouterProvider router={router} />
      </div>
    </JOIN_STATE_CONTEXT.Provider>
  );
}

export default App;
