import Header from './Header.js';
import Nav from './Nav.js';
import Footer from './Footer.js';
import Home from './Home.js';
import NewPost from './NewPost.js';
import PostPage from './PostPage.js';
import EditPost from './EditPost.js';
import About from './About.js';
import Missing from './Missing.js';
import { Route, Routes} from 'react-router-dom';
import { DataProvider } from "./context/DataContext.js";

function App() {
  
  return (
    <div className="App">
      
      <Header title="React JS Blog" />
      <DataProvider>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route path="/post" element={<NewPost />} />

          <Route path="/edit/:id" element={<EditPost />} />

          <Route path="/post/:id" element={<PostPage />} />

          <Route path="/about" element={<About />} />

          <Route path="*" element={<Missing />} />

        </Routes>
      </DataProvider>
      <Footer />
    </div>
  );
}

export default App;
