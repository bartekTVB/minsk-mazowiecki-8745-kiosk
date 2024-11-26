import { useEffect } from 'react';
import StyledAboutBank from './AboutBank.style';
import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from '../utils/motionConfig';

function AboutBank(props) {
  const { setBreadcrumb } = props;

  useEffect(() => {
    setBreadcrumb(prevItems => [...prevItems, { label: 'O Banku', path: '/about_bank' }]);
  }, []);

  return (
    <StyledAboutBank>
      <motion.div
        initial='initial'
        animate='in'
        exit='out'
        variants={pageVariants}
        transition={pageTransition}
      >
        <h3>Informacje o banku</h3>
        <p><b>Meander Bank Spółdzielczy w Krzyżanowicach</b> zrzeszony jest w Banku Polskiej Spółdzielczości S.A. z siedzibą w Warszawie. Bank prowadzi swoją działalność statutową na terenie województwa śląskiego oraz powiatów kędzierzyńsko-kozielskiego i głubczyckiego.</p>
        <p>Meander Bank Spółdzielczy w Krzyżanowicach posiada obecnie Centralę oraz trzy Punkty Kasowe w Chałupkach, Tworkowie i Raciborzu.</p>
        <h3>Dane Banku</h3>
        <p><b>Meander Bank Spółdzielczy w Krzyżanowicach</b> z siedzibą w Krzyżanowicach, ul. Tworkowska 12, 47-450 Krzyżanowice, którego akta rejestrowe są przechowywane w Sądzie Rejonowym w Gliwicach, X Wydział Gospodarczy Krajowego Rejestru Sądowego, wpisanym do rejestru przedsiębiorców pod numerem KRS 0000163865, NIP 639-13-80-724, REGON 000504775, <b>SWIFT: POLUPLPR</b></p>
        <h3>Wizja Banku</h3>
        <p>„Liczący się na rynku lokalnym Bank, zaspokajający potrzeby finansowe społeczności lokalnych i rozwijającego się biznesu a także utrzymywania wymaganych standardów ”</p>
        <h3>Misja Banku</h3>
        <p>„Efektywne, kompleksowe i profesjonalne zaspokajanie potrzeb bankowych i finansowych właścicieli banku, klientów lokalnego rynku, w warunkach bezpieczeństwa zgromadzonych w Banku de­pozytów, a także aktywne oddziaływanie na rzecz rozwoju go­spodarczego środowiska lokalnego i ku jego pożytkowi”</p>
        <p>Określając cele, potrzeby i zamierzenia Banku, należy przyjąć iż priorytetem będzie rozwój, ale w warunkach bezpiecznego działania oraz właściwej identyfikacji podstawowych ryzyk bankowych, jak również sprawne i efektywne działanie systemu kontroli wewnętrznej. Pakiet kluczowych działań realizacyjnych, obejmował będzie przedsięwzięcia w ramach następujących bloków tematycznych:</p>
        <ol>
          <li>potencjał rynku upatrywany jest w możliwości pozyskiwania relatywnie tanich depozytów,</li>
          <li>sprzedaży produktów rozliczeniowych,</li>
          <li>możliwości większego zaangażowania kredytowego w sektorze małych i średnich przedsiębiorstw oraz zróżnicowanej warstwie osób fizycznych, w tym również emerytów i rencistów</li>
        </ol>
        <h3>Działalność społeczna</h3>
        <p>Od początku swej działalności Bank wspiera projekty społeczne, charytatywne, edukacyjno-kulturalne i sportowe na rzecz społeczności lokalnej. Bank finansuje przede wszystkim wydarzenia kulturalne, takie jak festyny, dożynki gminne i inne imprezy kulturalne o zasięgu gminnym, jak również wspiera działania lokalnych instytucji charytatywnych (współorganizacja z CARITAS – Mikołajek dla dzieci), Ochotniczych Straży Pożarnych czy Klubów Sportowych. Bank promuje kształtowanie wśród uczniów i młodzieży nawyków systematycznego oszczędzania poprzez zakup nagród dla oszczędzających w SKO. Sponsoring powyższych wydarzeń oraz wspieranie lokalnych organizacji, utrwala w lokalnej społeczności wizerunek Banku, jako mecenasa kultury, któremu nie jest obce życie lokalnych społeczności.</p>
      </motion.div>
    </StyledAboutBank>
  )
}

export default AboutBank;