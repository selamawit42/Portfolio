import Navbar from "./NavBar/navbar";
import Intro from './Intro/intro';
import Skills from "./Skills/skills";
import Works from "./Works/works";
import Contact from "./Contact/contact";
import Education from './Education/education';
import Projects from './Projects/projects';
import Certifications from './Certifications/certifications';
import Footer from "./Footer/footer";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Intro />
            <Skills />
            <Education />
            <Projects/>
            <Works/>
            <Certifications/>
            <Contact />
            <Footer />
           
           
        </div>
    );
}

export default App;
