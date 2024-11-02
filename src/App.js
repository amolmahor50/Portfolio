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
import Theme from "./Components/Theme";

function App() {

  const handleResumeDownload = () => {
    // Use the 'a' tag to trigger the download
    const link = document.createElement('a');
    link.href = '/Resume.pdf'; // Path to your resume file
    link.download = 'Amol_Resume.pdf'; // Name for the downloaded file
    link.click();
  };
  
  return (
    <div className="app">
        <Header/>
        <Home/>
        <About handleResumeDownload={handleResumeDownload}/>
        <Resume handleResumeDownload={handleResumeDownload}/>
        <Service/>
        <Skills/>
        <Project/>
        <Blogs/>
        <Contact/>
        <Footer/>
        <Theme/>
    </div>
  );
}

export default App;
