"use client";
import React, { useState, useEffect } from "react";

const Countdown = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const calculateTimeLeft = () => {
    const targetDate = new Date("2024-06-21T00:00:00").getTime();
    const now = new Date().getTime();
    const timeDifference = targetDate - now;

    if (timeDifference > 0) {
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setCountdown({
        days,
        hours,
        minutes,
        seconds,
      });
    }
  };

  useEffect(() => {
    const countdownInterval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  return (
    <div className="flex flex-col sm:flex-row justify-center gap-6  mt-10">
      <div className="flex flex-col  items-center">
        <div className="border-4 border-sky-500 bg-sky-900 text-white rounded-sm py-5 px-10 w-[117px] text-center">
          <span className="font-semibold text-2xl tracking-wider">
            {countdown.days}
          </span>
        </div>
        <p className="text-base sm:text-xl font-semibold text-sky-700 tracking-wider">
          Days
        </p>
      </div>
      <div className="flex flex-col  items-center justify-center">
        <div className="border-4 border-sky-500 bg-sky-900 text-white rounded-sm py-5 px-10 w-[117px] text-center">
          <span className="font-semibold text-2xl tracking-wider text-center">
            {countdown.hours}
          </span>
        </div>
        <p className="text-base sm:text-xl font-semibold text-sky-700 tracking-wider">
          Hours
        </p>
      </div>
      <div className="flex flex-col  items-center">
        <div className="border-4 border-sky-500 bg-sky-900 text-white rounded-sm py-5 px-10 w-[117px] text-center">
          <span className="font-semibold text-2xl tracking-wider">
            {countdown.minutes}
          </span>
        </div>
        <p className="text-base sm:text-xl font-semibold text-sky-700 tracking-wider">
          Minutes
        </p>
      </div>
      <div className="flex flex-col  items-center">
        <div className="border-4 border-sky-500 bg-sky-900 text-white rounded-sm py-5 px-10 w-[117px] text-center">
          <span className="font-semibold text-2xl tracking-wider">
            {countdown.seconds}
          </span>
        </div>
        <p className="text-base sm:text-xl font-semibold text-sky-700 tracking-wider">
          Seconds
        </p>
      </div>
    </div>
  );
};

export default Countdown;
