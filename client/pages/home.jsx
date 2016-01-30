import React from 'react';

const Home = () => (
  <div className='container'>
    <header role='banner'>
      <h1>gHubTags</h1>
    </header>
    <div>
      <p>We label stuff for you, because, we can&trade;</p>
      <a href='/login' className='button button-large'>
        <span className='mega-octicon octicon-mark-github'></span> Login with GitHub
      </a>
    </div>
  </div>
);

export default Home;
