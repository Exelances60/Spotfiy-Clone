import "./App.css";
import Login from "./componets/LogIn/Login";
import { useSelector } from "react-redux";
import { selectUserLogin } from "./store/user/user.selector";
import HomePage from "./componets/HomePage/HomePage";

function App() {
  const userLogin = useSelector(selectUserLogin);
  return (
    <div className="w-full h-[100vh]">
      {!userLogin ? <Login></Login> : <HomePage></HomePage>}
    </div>
  );
}

export default App;
