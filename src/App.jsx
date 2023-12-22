import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Navbartwo from "./components/Navbar/Navbartwo";
import 'sweetalert2/src/sweetalert2.scss'

function App() {
  return (
    <>
      <div className="root-container bg-slate-100 ">
        <Navbar></Navbar>
        {/* <Navbartwo></Navbartwo> */}
        <div>
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
