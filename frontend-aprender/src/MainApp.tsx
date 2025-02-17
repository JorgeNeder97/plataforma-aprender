import { Routes, Route } from 'react-router-dom';
import Home from '#pages/Home.tsx';

const MainApp = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </>
  )
}

export default MainApp;