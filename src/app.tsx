import { Route, Routes } from 'react-router-dom';

import NotFound from '@/components/pages/404';
import About from '@/components/pages/about';
import Apps from '@/components/pages/apps';
import Post from '@/components/pages/post';
import Posts from '@/components/pages/posts';
import Home from '@/containers/pages/home';
import { internalPaths } from '@/paths';

const App = () => (
  <Routes>
    <Route index element={<Home />} />
    <Route path={internalPaths.about.path} element={<About />} />
    <Route path={internalPaths.posts.path}>
      <Route index element={<Posts />} />
      <Route path=":postId" element={<Post />} />
    </Route>
    <Route path={internalPaths.apps.path} element={<Apps />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default App;
