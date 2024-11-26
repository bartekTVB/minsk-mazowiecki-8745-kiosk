import { useEffect } from 'react';
import StyledManagment from './Management.style';
import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from '../utils/motionConfig';

function Management(props) {
  const { setBreadcrumb } = props;

  useEffect(() => {
    setBreadcrumb(prevItems => [...prevItems, { label: 'Dane osób wchodzących w skład organu', path: '/management' }]);
  }, []);

  return (
    <StyledManagment>
      <motion.div
        initial='initial'
        animate='in'
        exit='out'
        variants={pageVariants}
        transition={pageTransition}
      >
        <h3>Zarząd:</h3>
        <ol>
          <li>Prezes zarządu – Łopocz Beata</li>
          <li>Wiceprezes zarządu – Kura Michał</li>
          <li>Członek zarządu – Szulik Beata</li>
        </ol>

        <h3>Rada nadzorcza:</h3>
        <ol>
          <li>Witeczek Walter</li>
          <li>Ciapka Zdzisław</li>
          <li>Buba Sonia</li>
          <li>Derkowski Ireneusz</li>
          <li>Pośpiech Marta</li>
          <li>Zawadka  Martyna</li>
          <li>Klein Wiesław</li>
        </ol>

        <h3>Pełnomocnicy:</h3>
        <ol>
          <li>Ulman Piotr</li>
        </ol>
      </motion.div>
    </StyledManagment >
  )
}

export default Management;