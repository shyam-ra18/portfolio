import { Toaster } from "react-hot-toast";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Testimonial from "./components/Testimonial";
import TimeLine from "./components/TimeLine";
import Work from "./components/Work";

function App() {
  return (
    <>
      <Header/>
      <Home/>
      <Work/>
      <TimeLine/>
      <Testimonial/>
      <Contact/>
      <Footer/>
      <Toaster/>
    </>
  );
}

export default App;
