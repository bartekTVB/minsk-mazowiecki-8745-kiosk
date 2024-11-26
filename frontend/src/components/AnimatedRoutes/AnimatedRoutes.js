import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion"
import Menu from '../Menu/Menu';
// import Management from '../../pages/Management/Management';
import BankBranches from '../../pages/BankBranches/BankBranches';
import AboutBank from '../../pages/AboutBank/AboutBank';

function AnimatedRoutes(props) {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        {/* <Route
          path='/management'
          element={<Management {...props} />}
        /> */}
        <Route
          path='/bank_branches'
          element={<BankBranches {...props} />}
        />
        <Route
          path='/about_bank'
          element={<AboutBank {...props} />}
        />
        <Route
          path='/bank_branches'
          element={<AboutBank {...props} />}
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