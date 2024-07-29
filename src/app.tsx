
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Blog } from './pages/Blog';
import { Post } from './pages/Post';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/post/:issueNumber" element={<Post />} />
      </Routes>
    </Router>
  );
}

export default App;
