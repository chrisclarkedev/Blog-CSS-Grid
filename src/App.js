import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">

      <body>
        <div class="wrapper">
          <header class="header">
            <h1>Blog with CSS Grid</h1>
          </header>
          <figure class="featured-image-1">
            <img src={require('./components/images/6.jpeg')} />
          </figure>
        </div>
      </body>
    </div>
  );
}

export default App;
