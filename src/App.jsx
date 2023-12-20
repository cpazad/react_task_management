import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Navbartwo from "./components/Navbar/Navbartwo";

function App() {
  return (
    <>
      <div className="root-container bg-slate-100 ">
        {/* <Navbar></Navbar> */}
        <Navbartwo></Navbartwo>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
