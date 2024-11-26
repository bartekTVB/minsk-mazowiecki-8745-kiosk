import React, { useEffect, useState } from 'react';
import StyledClock from './Clock.style';

function Clock() {
  const [hour, setHour] = useState('00');
  const [minute, setMinute] = useState('00');
  const [dateName, setDateName] = useState('');

  useEffect(() => {
    const setClock = () => {
      const date = new Date();
      const optionsTime = { hour: '2-digit', minute: '2-digit', hour12: false }
      const time = date.toLocaleTimeString('pl-PL', optionsTime).split(':');
      setHour(time[0]);
      setMinute(time[1]);
      const optionsDateName = { weekday: 'long', month: 'long', day: 'numeric' };
      setDateName(date.toLocaleDateString('pl-PL', optionsDateName));
    };

    const intervalClock = setInterval(() => setClock(), 1000);
    setClock();

    return () => clearInterval(intervalClock);
  }, []);

  return (
    <StyledClock>
      <div>
        <span>{hour}</span>
        <span>:</span>
        <span>{minute}</span>
      </div>
      <div>
        {dateName}
      </div>
    </StyledClock>
  )
}

export default Clock;