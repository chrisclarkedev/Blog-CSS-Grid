import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">

      <body>
        <div class="wrapper">
          <header class="header">
            <h1>Don't Fail To Try, Fail Trying</h1>
          </header>
          <figure class="featured-image-1">
            <img src={require('./components/images/7.jpeg')} />
          </figure>
          <div class="number-1">1</div>
          <article class="article article-1">
            <h1>Tony Hawk</h1>
            <p>I won’t quit skating until I am physically unable.</p>
          </article>
          <figure class="featured-image-2">
            <img src={require('./components/images/3.jpeg')} />
          </figure>
          <div class="number-2">2</div>
          <article class="article article-2">
            <h2>Marc Johnson</h2>
            <p>All skateboarding is, is putting ideas into action.</p>
          </article>
          <figure class="featured-image-3">
            <img src={require('./components/images/1.jpeg')} />
          </figure>
          <div class="number-3">3</div>
          <article class="article article-3">
            <h2>Blog with CSS Grid</h2>
            <p>lorem ipsum</p>
          </article>
          <figure class="featured-image-4">
            <img src={require('./components/images/4.jpeg')} />
          </figure>
          <div class="number-4">4</div>
          <article class="article article-4">
            <h2>Blog with CSS Grid</h2>
            <p>lorem ipsum</p>
          </article>
        </div>
      </body>
    </div>
  );
}

export default App;
