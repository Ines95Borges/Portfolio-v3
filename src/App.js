import React from 'react';
import AboutMe from './components/AboutMe';
import ChooseTheme from './components/ChooseTheme';
import Experience from './components/Experience';
import Header from './components/Header';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './sass/main.scss';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <ChooseTheme />
        <AboutMe />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
