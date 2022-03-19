import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Top from '@/top';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Top />} />
    </Routes>
  </BrowserRouter>
);

export default App;
