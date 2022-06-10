import './App.css';
import About from './components/About';
import Blogs from './components/Blogs';
import ContactForm from './components/ContactForm';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Skills />
      <Blogs />
      <Projects />
      <ContactForm />
    </div>
  );
}

export default App;
