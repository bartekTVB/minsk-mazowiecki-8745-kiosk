import axios from 'axios';

const read = (path, names, setXmlData) => {
  axios.get(path)
    .then(response => {
      const parser = new DOMParser();
      const xml = parser.parseFromString(response.data, "application/xml");
      const currencyArray = getCurrency(xml, names);
      setXmlData({
        isFile: true,
        tableNumber: sanitizeInfo(xml.querySelector('tableNo').innerHTML),
        tableDate: sanitizeInfo(xml.querySelector('tableDate').innerHTML),
        tableHour: sanitizeInfo(xml.querySelector('tableHour').innerHTML),
        currency: currencyArray,
      });
    })
    .catch(() => {
      setXmlData({
        isFile: false,
        tableNumber: '',
        tableDate: '',
        tableHour: '',
        currency: [],
      });
    });
}

const getCurrency = (xml, names) => {
  let currencyArray = [];

  names.forEach(e => {
    const currency = xml.querySelector(`[name='${e.SYMBOL.toUpperCase()}']`);

    if (!currency) {
      currencyArray.push({
        name: e.symbol.toUpperCase(),
        buy: "",
        sell: "",
        average: "",
        moneyBuy: "",
        moneySell: "",
      });
    } else {
      currencyArray.push({
        name: currency.attributes.name.value.substring(0, 3).toUpperCase(),
        buy: sanitize(currency.attributes.buy?.value),
        sell: sanitize(currency.attributes.sell?.value),
        average: sanitize(currency.attributes.average?.value),
        moneyBuy: sanitize(currency.attributes.money_buy?.value),
        moneySell: sanitize(currency.attributes.money_sell?.value),
      });
    }
  });

  return currencyArray;
};

const sanitize = course => {
  const reg = /[^0-9,.]/gim;
  course = course ? course : "";
  course = course.replace(reg, "");
  course = course.replace(",", ".").substring(0, 6);
  return course !== '0.0000' ? course : '-';
};

const sanitizeInfo = value => {
  const reg = /\W\/-/gim;
  value = value ? value : "";
  return value.replace(reg, "");
};

export default read;