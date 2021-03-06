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
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="top"><h2>Lorem</h2></div>
              <div className="bottom"><img className="picture" src="./images/columns.jpg" /></div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="card">
              <div className="top"><h2>Ipsum</h2></div>
              <div className="bottom"><img className="picture" src="./images/library.jpg" /></div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="card">
              <div className="top"><h2>Nunc</h2></div>
              <div className="bottom"><img className="picture" src="./images/write.jpg" /></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
