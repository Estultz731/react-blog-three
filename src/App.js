import React from 'react';
import logo from './logo.svg';
import './App.css';

const Nav = () => 
(<nav>
  <a className="left" href="#blog">Acme Blog</a>
  <a className="right" href="#social">Social</a>
  <a className="right" href="#contact">Contact</a>
  <input className="find" />
</nav>)

function App() {
  return (
    <>
      <Nav />
    </>
  );
}

export default App;
