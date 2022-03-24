import { BrowserRouter, Route, Routes } from 'react-router-dom';

import NotFound from '@/components/pages/404';
import About from '@/components/pages/about';
import Posts from '@/components/pages/posts';
import Apps from '@/containers/pages/apps';
import Home from '@/containers/pages/home';
import { internalPaths } from '@/paths';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path={internalPaths.about.path} element={<About />} />
      <Route path={internalPaths.posts.path} element={<Posts />} />
      <Route path={internalPaths.apps.path} element={<Apps />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
