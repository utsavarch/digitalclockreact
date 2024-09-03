import React, { useState, useEffect } from "react";

function Watch() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let ampm;
    if (hours >= 12) {
      ampm = "PM";
    } else {
      ampm = "AM";
    }

    hours = hours % 12;
    if (hours === 0) {
      hours = 12;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    } else {
      minutes = minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    } else {
      seconds = seconds;
    }

    return `${hours}:${minutes}:${seconds} ${ampm}`;
  };

  return (
    <div className="flex items-center justify-center h-screen bg-slate-900 flex-col">
      <div className="text-[#fbbf24] m-[-10px] gap-[600px] text-5xl font-extrabold flex">
        <div>|</div> <div>|</div>
      </div>
      <div className="border-4 border-[#fbbf24] bg-[#059669] p-4">
        <div className="border-4 border-[#fbbf24] text-[#fef08a] text-9xl p-10 bg-slate-900">
          {formatTime(time)}
        </div>
      </div>
      <div className="text-[#fbbf24] m-[-10px] gap-[600px] text-5xl font-extrabold flex">
        <div>|</div> <div>|</div>
      </div>
    </div>
  );
}

export default Watch;
