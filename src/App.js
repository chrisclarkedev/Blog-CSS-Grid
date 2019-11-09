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
            <img src={require('./components/images/7.jpeg')} />
          </figure>
          <div class="number-1">1</div>
          <article class="article article-1">
            <h2>Blog with CSS Grid</h2>
            <p>lorem ipsum</p>
          </article>
          <figure class="featured-image-2">
            <img src={require('./components/images/3.jpeg')} />
          </figure>
          <div class="number-2">2</div>
          <article class="article article-2">
            <h2>Blog with CSS Grid</h2>
            <p>lorem ipsum</p>
          </article>
        </div>
      </body>
    </div>
  );
}

export default App;
