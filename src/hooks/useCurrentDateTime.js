import React from "react"

import { useState, useEffect } from 'react';

function useCurrentDateTime() {
  const [formattedTime, setFormattedTime] = useState('');

  useEffect(() => {
    const update = () => {
      const now = new Date();

      const time = now.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      });

      const date = now.toLocaleDateString('en-US', {
        weekday: 'short',   // "Wed"
        month: 'short',     // "Jul"
        day: 'numeric',     // "30"
      });

      setFormattedTime(`${time} • ${date}`);
    };

    update(); // initial call
    const interval = setInterval(update, 1000); // update every second

    return () => clearInterval(interval);
  }, []);

  return formattedTime;
}

export default useCurrentDateTime;
