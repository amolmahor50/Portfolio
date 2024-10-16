import About from "./Components/About";
import Blogs from "./Components/Blogs";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Project from "./Components/Project";
import Resume from "./Components/Resume";
import Service from "./Components/Service";
import Skills from "./Components/Skills";

function App() {
  
  return (
    <div className="app">
        <Header/>
        <Home/>
        <About/>
        <Resume/>
        <Service/>
        <Skills/>
        <Project/>
        <Blogs/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
