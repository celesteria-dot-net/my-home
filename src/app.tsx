import { BrowserRouter, Route, Routes } from 'react-router-dom';

import About from '@/components/pages/about';
import Apps from '@/components/pages/apps';
import Home from '@/components/pages/home';
import Posts from '@/components/pages/posts';
import { internalPaths } from '@/paths';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path={internalPaths.about.path} element={<About />} />
      <Route path={internalPaths.posts.path} element={<Posts />} />
      <Route path={internalPaths.apps.path} element={<Apps />} />
      <Route path="*" element={<div>not found!</div>} />
    </Routes>
  </BrowserRouter>
);

export default App;
