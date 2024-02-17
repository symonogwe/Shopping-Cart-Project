import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <p>Hello World</p>
      <Outlet />
    </>
  );
}

export default App;
