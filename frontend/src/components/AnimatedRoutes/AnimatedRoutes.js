import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion"
import Menu from '../Menu/Menu';
import Currencies from '../../pages/Currencies/Currencies';

function AnimatedRoutes(props) {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route
          path='/currencies'
          element={<Currencies {...props} />}
        />
        <Route
          path='/*'
          element={<Menu {...props} />}
        />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes