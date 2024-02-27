import { HashRouter, Route, Routes } from 'react-router-dom';
import ProtectedRoutes from './assets/component/ProtectedRoutes';
import HomePage from './assets/page/HomePage';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import AboutPage from './assets/page/AboutPage';
import 'animate.css';

function App() {



  return (
    <div className="App">
      <HashRouter>
        <Routes>
            <Route path='/' element={<HomePage />} />
          <Route element={<ProtectedRoutes />}>
            <Route path='/about' element={<AboutPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
