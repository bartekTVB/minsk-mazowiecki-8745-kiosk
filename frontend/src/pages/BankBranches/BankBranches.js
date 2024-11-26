import { useEffect } from 'react';
import { StyledBankBranches, StyledSection, StyledTable, StyledLink } from './BankBranches.style';
import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from '../utils/motionConfig';
import { Link } from 'react-router-dom';

function Management(props) {
  const { setBreadcrumb } = props;

  useEffect(() => {
    setBreadcrumb(prevItems => [...prevItems, { label: 'Placówki banku', path: '/bank_branches' }]);
  }, []);

  const tableHours = (hours) => (
    <StyledTable>
      <thead>
        <tr>
          {['pon.', 'wt.', 'śr.', 'czw.', 'pt.'].map((day, index) => (
            <td key={index}>{day}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {hours.map((hour, index) => (
            <td key={index}>{hour}</td>
          ))}
        </tr>
      </tbody>
    </StyledTable>
  );

  return (
    <StyledBankBranches>
      <motion.div
        initial='initial'
        animate='in'
        exit='out'
        variants={pageVariants}
        transition={pageTransition}
      >
        <StyledSection>
          <div>
            <h3>Centrala</h3>
            <p>
              <b>Meander Bank Spółdzielczy w Krzyżanowicach</b><br />
              ul. Tworkowska 12<br />
              47-450 Krzyżanowice<br />
              Tel. 32 419 40 11, 32 419 40 44<br />
              Adres mailowy: info@meanderbank.pl
            </p>
          </div>
          <div>
            {
              tableHours(['8.00-15.45', '8.00-15.45', '8.00-15.45', '8.00-16.45', '8.00-14.45',])
            }
          </div>
        </StyledSection>

        <h3>Punkty Kasowe:</h3>

        <StyledSection>
          <div>
            <p>
              <b>Punkt Kasowy w Raciborzu</b><br />
              ul. Częstochowska 8<br />
              47-400 Racibórz<br />
              Tel. 32 419 40 11 wew. 150
            </p>
          </div>
          <div>
            {
              tableHours(['8:00-15:45', '8:00-15:45', '8:00-15:45', '8:00-16:45', '8:00-14:45',])
            }
          </div>
        </StyledSection>

        <StyledSection>
          <div>
            <p>
              <b>Punkt Kasowy w Tworkowie</b><br />
              ul. Główna 48<br />
              47-451 Tworków<br />
              Tel. 32 419 62 19
            </p>
          </div>
          <div>
            {
              tableHours(['8.00-15.45', '8.00-15.45', '8.00-16.45', '8.00-14.45', '8.00-15.45',])
            }
          </div>
        </StyledSection>

        <StyledSection>
          <div>
            <p>
              <b>Punkt Kasowy w Chałupkach</b><br />
              ul. Raciborska 83<br />
              47-460 Chałupki<br />
              Tel. 32 419 32 81
            </p>
          </div>
          <div>
            {
              tableHours(['9.00-16.45', '8.00-15.45', '8.00-15.45', '8.00-15.45', '8.00-15.45',])
            }
          </div>
        </StyledSection>

        <StyledLink>
          <Link to="https://www.meanderbank.pl/dojazd.php">DOJAZD</Link>
        </StyledLink>

      </motion.div>
    </StyledBankBranches>
  )
}

export default Management;