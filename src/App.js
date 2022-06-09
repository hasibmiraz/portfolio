import './App.css';
import About from './components/About';
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
      <Projects />
      <ContactForm />
    </div>
  );
}

export default App;
