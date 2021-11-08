/*
  *****
  *****
  Import App.scss - Navbar.js - Showcase -Services - About - Slider
*/
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Showcase from "./components/showcase/Showcase";
import Services from "./components/services/Services";
import About from "./components/About/About";
import Slider from "./components/Slider/Slider";
import Logos from "./components/Logos/Logos";
import Bottom from "./components/Bottom/Bottom";

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
      <Slider />
      <Logos />
      <Bottom />
    </>
  );
}
/*
  *****
  *****
  Export The Main Application
*/
export default App;
