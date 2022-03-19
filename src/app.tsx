import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Top from '@/components/pages/top';
import About from '@/components/pages/about';
import Blogs from '@/components/pages/blogs';
import Apps from '@/components/pages/apps';

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
