import { Route, Routes } from 'react-router-dom';

import Fibonacci from '../pages/fibonacci';
import Home from '../pages/home';
import Others from '../pages/others';
import Search from '../pages/search';
import SignIn from '../pages/singin';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/fibonacci" element={<Fibonacci />} />
      <Route path="/otherpage" element={<Others />} />
      <Route path="/search" element={<Search />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
};

export default Routers;
