/*
  *****
  *****
  Import App.scss - Navbar.js - Showcase -Services
*/
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Showcase from "./components/showcase/Showcase";
import Services from "./components/services/Services";
import About from "./components/About/About";

/*
  *****
  *****
  Main Function Application 
*/
function App() {
  return (
    <>
      <Navbar />
      <Showcase />
      <Services />
      <About />
    </>
  );
}
/*
  *****
  *****
  Export The Main Application
*/
export default App;
