import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Top from '@/top';
import About from '@/about';
import Blogs from '@/blogs';
import Apps from '@/apps';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Top />} />
      <Route path="about" element={<About />} />
      <Route path="blogs" element={<Blogs />} />
      <Route path="apps" element={<Apps />} />
      <Route path="*" element={<div>not found!</div>} />
    </Routes>
  </BrowserRouter>
);

export default App;
