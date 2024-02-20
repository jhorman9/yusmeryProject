import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ProtectedRoutes from './assets/component/ProtectedRoutes';
import HomePage from './assets/page/HomePage';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import AboutPage from './assets/page/AboutPage';

function App() {



  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
