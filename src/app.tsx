import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '@/components/pages/home';
import About from '@/components/pages/about';
import Posts from '@/components/pages/posts';
import Apps from '@/components/pages/apps';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="blogs" element={<Posts />} />
      <Route path="apps" element={<Apps />} />
      <Route path="*" element={<div>not found!</div>} />
    </Routes>
  </BrowserRouter>
);

export default App;
