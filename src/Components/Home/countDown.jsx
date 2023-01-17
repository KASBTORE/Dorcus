import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [endTime, setEndTime] = useState(new Date("2022-01-01T00:00:00"));
  const [remainingTime, setRemainingTime] = useState(
    endTime - new Date()
  );
  const [intervalId, setIntervalId] = useState(null);

useEffect(() => {
    const id = setInterval(() => {
      setRemainingTime(endTime - new Date());
    }, 1000);
    setIntervalId(id);
    return () => clearInterval(intervalId);
  }, []);

  const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 120));
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  return (
    <div className="bg-gray-200 text-center py-4">
      <div className="text-5xl">
        {hours}:{minutes}:{seconds}
      </div>
    </div>
  );
};

export default CountdownTimer;
