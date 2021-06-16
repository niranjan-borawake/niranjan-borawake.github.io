import React from 'react';
import './page.css';

function App() {
  return (
    <div className="page">
      <div className="lines">
        <section>
          <br />
          <br />
          {new Date().toDateString()}
          <br />
          <br />
          Hello there.
          <br />
          <br />
          Welcome to my page.
          <br />
          <br />
          I'm not sure how you got here, but please allow me to introduce myself
          while you're here.
          <br />
          <br />
          My name is Niranjan. I have over ten years of web development
          experience. I've created projects using jQuery, BackboneJS, d3,
          AngularJS, and React. Needless to say, without the fundamentals of
          HTML, CSS, and JavaScript, none of this would have been possible.
          <br />
          <br />
          I tweet random thoughts <a href="https://twitter.com/niranjandb" target="_blank" rel="noreferrer">@niranjandb</a>, and when those thoughts mature, I
          turn them into <a href="https://blog.niranjanborawake.in/" target="_blank" rel="noreferrer">blog posts</a>.
          <br />
          <br />
          I enjoy playing carom, and watching movies.
          <br />
          <br />
          Try out a <a href="https://www.niranjanborawake.in/fifteen/" target="_blank" rel="noreferrer">simple game</a> I built before you leave.
          <br />
          <br />
          Thank you very much.
          <br />
          Borawake, Niranjan
          <br />
          <br />
          <br />
          <br />
        </section>
      </div>
    </div>
  );
}

export default App;
