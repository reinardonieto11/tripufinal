import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/Main/Main";
import { UserLoggedContext } from "./context/userLoggedContext";
import { useEffect, useState } from "react";

function App() {

  // const [userLogged, setUserLogged] = useState({});

  // const updateUserLogged = (user) => {
  //   setUserLogged(user);
  // };

  // const userLoggedData = {
  //   userLogged,
  //   updateUserLogged,
  // };

  return (
    <>
      <BrowserRouter>
        {/* <UserLoggedContext.Provider value={userLoggedData}> */}
          <Main />
        {/* </UserLoggedContext.Provider> */}
      </BrowserRouter>
    </>
  );
}

export default App;
