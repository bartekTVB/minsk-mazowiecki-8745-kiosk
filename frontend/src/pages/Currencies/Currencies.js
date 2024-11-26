import { useState, useEffect } from 'react';
import StyledCurrency, { StyledFlag } from './Currencies.style';
import read from './currencyAPI';
import names from './constants';
import { motion } from 'framer-motion';
import { tableVariants, tableTransition } from './motionConfig';
import Loader from '../../components/Loader/Loader';

function Currencies(props) {
  const { config, setBreadcrumb } = props;
  const { pathXmlCurrency } = config;
  const [xmlData, setXmlData] = useState({ isFile: false, data: [] });
  const { isFile, tableNumber, tableDate, tableHour, currency } = xmlData;

  useEffect(() => {
    read(pathXmlCurrency, names, setXmlData);
    setBreadcrumb(prevItems => [...prevItems, { label: 'Kursy walut', path: '/currencies' }]);
  }, [pathXmlCurrency]);

  return (
    <>
      {
        isFile ? (
          <StyledCurrency>
            <h2>Tabela kursów walut dla dewiz nr: {tableNumber} / obowiązująca w dniu: {tableDate} / godzina: {tableHour}</h2>
            <motion.table
              animate='in'
              exit='out'
              variants={tableVariants}
              transition={tableTransition}
            >
              <thead>
                <tr>
                  <td rowSpan='2'>Kraj</td>
                  <td colSpan='3'>Waluta</td>
                  <td colSpan='2'>Dewizy</td>
                  <td colSpan='2'>Pieniądz</td>
                  <td rowSpan='2'>Kurs średni NBP</td>
                </tr>
                <tr>
                  <td>Symbol</td>
                  <td>Kod</td>
                  <td>Jednostka</td>
                  <td>Kupno</td>
                  <td>Sprzedaż</td>
                  <td>Kupno</td>
                  <td>Sprzedaż</td>
                </tr>
              </thead>
              <tbody>
                {
                  names.map((e, i) => {
                    return (
                      <tr key={e.CODE}>
                        <td>{e.NAME}</td>
                        <td>
                          <div>
                            <StyledFlag index={i} />
                            {e.SYMBOL}
                          </div>
                        </td>
                        <td>{e.CODE}</td>
                        <td>{e.UNIT}</td>
                        <td>{currency[i].buy}</td>
                        <td>{currency[i].sell}</td>
                        <td>{currency[i].moneyBuy}</td>
                        <td>{currency[i].moneySell}</td>
                        <td>{currency[i].average}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </motion.table>
          </StyledCurrency>
        ) : (
          <Loader position={'block'} />
        )
      }
    </>
  )
}

export default Currencies;