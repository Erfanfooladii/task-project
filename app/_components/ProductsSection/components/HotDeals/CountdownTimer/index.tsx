"use client";
import React, { useState, useEffect } from "react";
import { AiTwotoneClockCircle } from "react-icons/ai";

const CountdownTimer = () => {
  const endDate = new Date("2025-05-31T23:59:59").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    expired: false,
  });
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate - now;
      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ ...timeLeft, expired: true });
        return;
      }
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
        expired: false,
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (timeLeft.expired) {
    return <div className="p-3">End time!</div>;
  }

  return (
    <div className="bg-red-100 p-3 rounded-full">
      <div className="text-red-600 flex gap-2 items-center">
        <AiTwotoneClockCircle color="#ff0000" size={25} />
        <span>
          {timeLeft.days.toString().padStart(2, "0")}D :
          {timeLeft.hours.toString().padStart(2, "0")}H :
          {timeLeft.minutes.toString().padStart(2, "0")}M :
          {timeLeft.seconds.toString().padStart(2, "0")}S
        </span>
      </div>
    </div>
  );
};

export default CountdownTimer;
