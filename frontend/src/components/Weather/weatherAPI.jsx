import axios from 'axios';

const read = (path, setXmlWeather) => {
  axios.get(path)
    .then(response => {
      const parser = new DOMParser();
      const xml = parser.parseFromString(response.data, "application/xml");

      const osadAndObl = getIconIndex(getOsad(xml), getObl(xml));

      setXmlWeather({
        isFile: true,
        tmin: getTmin(xml),
        tmax: getTmax(xml),
        osad: osadAndObl.osad,
        obl: osadAndObl.obl,
      });
    })
    .catch(() => {
      setXmlWeather({ isFile: false });
    });
}

/**
 * Wybiera z xml najniższą temperaturę z całego dnia.
 * 
 * @param {object} xml 
 * @returns 
 */
const getTmin = xml => {
  const tminXml = xml.querySelectorAll('Day:first-child tmin');
  let tminArray = [];
  tminXml.forEach(tmin => tminArray.push(parseInt(tmin.innerHTML)));
  return Math.min(...tminArray);
};

/**
 * Wybiera z xml najwyższą temperaturę z całego dnia.
 * 
 * @param {object} xml 
 * @returns 
 */
const getTmax = xml => {
  const tmaxXml = xml.querySelectorAll('Day:first-child tmax');
  let tmaxArray = [];
  tmaxXml.forEach(tmax => tmaxArray.push(parseInt(tmax.innerHTML)));
  return Math.max(...tmaxArray);
};

/**
 * Wybiera z xml osad dla danej pory dnia i zwraca polski odpowiednik.
 * 
 * @param {object} xml 
 * @returns
 */
const getOsad = xml => {
  return xml
    .querySelector('Day:first-child > Time[name="' + getTimeOfDay() + '"] osad')
    .innerHTML
    .slice(0, 5);
};

/**
 * Wybiera z xml obl dla danej pory dnia i zamienia na index ikonki.
 * 
 * @param {object} xml 
 * @returns 
 */
const getObl = xml => {
  let obl = parseInt(
    xml
      .querySelector('Day:first-child > Time[name="' + getTimeOfDay() + '"] obl')
      .innerHTML
  );

  return [0, 0, 1, 1, 2, 3][obl];
};

/**
 * Zamienia oryginalne nazwy osad na polskie. Wprowadza modyfikacje dla ikon obl.
 * Jeżeli są opady to ikona zostaje zmieniona na odpowiednią
 * (deszcz, śnieg, deszcz-śnieg).
 * 
 * @param {string} osad 
 * @param {int} obl 
 * @returns 
 */
const getIconIndex = (osad, obl) => {
  if (osadPl[osad].icon) {
    obl = osadPl[osad].icon;
  }

  osad = osadPl[osad].pl;
  !osad && (osad = '');

  return { osad, obl }
};

const osadPl = {
  osad0: { pl: 'Brak opadów', icon: null },
  osad1: { pl: 'Brak opadów', icon: null },
  osad2: { pl: 'Niewielkie opady', icon: 4 },
  osad3: { pl: 'Opady', icon: 4 },
  osad4: { pl: 'Silne opady', icon: 4 },
  osad5: { pl: 'Bardzo silne opady', icon: 4 },
  snow2: { pl: 'Niewielki śnieg', icon: 6 },
  snow3: { pl: 'Śnieg', icon: 6 },
  snow4: { pl: 'Silny śnieg', icon: 6 },
  snow5: { pl: 'Silny śnieg', icon: 6 },
  rain2: { pl: 'Niewielki deszcz', icon: 5 },
  rain3: { pl: 'Deszcz', icon: 5 },
  rain4: { pl: 'Silny deszcz', icon: 5 },
  rain5: { pl: 'Ulewa', icon: 5 },
};

/**
 * Na podstawie aktualnej godziny zwraca nazwę pory dnia.
 * 
 * @returns 
 */
const getTimeOfDay = () => {
  const today = new Date();
  const hour = today.getHours();

  if (hour < 6) {
    return 'night';
  } else if (hour >= 6 && hour < 12) {
    return 'morning';
  } else if (hour >= 12 && hour < 18) {
    return 'day';
  } else {
    return 'evening';
  }
};

export default read;