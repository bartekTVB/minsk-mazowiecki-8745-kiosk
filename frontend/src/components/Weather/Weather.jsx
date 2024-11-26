import React, { useState, useEffect } from 'react';
import StyledWeather, { StyledIcon } from './Weather.style';
import read from './weatherAPI';

function Weather(props) {
  const { pathXmlWeather } = props.config;
  const [xmlWeather, setXmlWeather] = useState({ isFile: false });
  const { isFile, tmin, tmax, osad, obl } = xmlWeather;

  useEffect(() => {
    const startRead = () => {
      read(pathXmlWeather, setXmlWeather);
      setTimeout(startRead, 3600000);
    }

    startRead();
  }, [pathXmlWeather]);

  return (
    <>
      {
        isFile && (
          <StyledWeather >
            <StyledIcon index={obl} />
            <div>
              <div>{osad}</div>
              <div>max <span>{tmax}&deg;</span></div>
              <div>min <span>{tmin}&deg;</span></div>
            </div>
          </StyledWeather >
        )
      }
    </>
  )
}

export default Weather;