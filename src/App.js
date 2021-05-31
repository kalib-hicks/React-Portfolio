import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  return (
    <div >
      <Nav></Nav>
      <main>
        <About></About>
        <Work></Work>
        <Contact></Contact>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;