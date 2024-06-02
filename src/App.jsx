import Login from "./Components/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import LoginnedUser from "./Components/LoginnedUser";
import { useState } from "react";
function App() {
  const [IsLoggin, setIsLoggin] = useState(false);
  const [currentUsername, setCurrentUsername] = useState("");
  return (
    <div>
      {!IsLoggin ? (
        <Login
          IsLoggin={IsLoggin}
          setIsLoggin={setIsLoggin}
          setCurrentUsername={setCurrentUsername}
        />
      ) : (
        <LoginnedUser
          IsLoggin={IsLoggin}
          setIsLoggin={setIsLoggin}
          currentUsername={currentUsername}
        />
      )}
    </div>
  );
}

export default App;
