import Header from './Header.js';
import Nav from './Nav.js';
import Footer from './Footer.js';
import Home from './Home.js';
import NewPost from './NewPost.js';
import PostPage from './PostPage.js';
import About from './About.js';
import Missing from './Missing.js';
import { Route, Routes, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';  

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />}/>

        <Route path="/post" element={<NewPost />} />

        <Route path="/post/:id" element={<PostPage />} />

        <Route path="/about" element={<About />} />

        <Route path="*" element={<Missing />} />

      </Routes>
      <Footer />

    </div>
  );
}

export default App;
