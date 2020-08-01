import React from "react";

export default function ContactBox(props) {
  const schedule = [
    { day: `Monday:`, hours: `9 AM to 5 PM` },
    { day: `Tuesday:`, hours: `9 AM to 5 PM` },
    { day: `Wednesday:`, hours: `9 AM to 5 PM` },
    { day: `Thursday:`, hours: `9 AM to 5 PM` },
    { day: `Friday:`, hours: `9 AM to 1 PM` },
    { day: `Saturday:`, hours: `Closed` },
    { day: `Sunday:`, hours: `Closed` },
  ];

  const scheduleMap = () => {
    return schedule.map((item, i) => (
      <li className="flex justify-between" key={i}>
        <span className="font-bold">{item.day}</span> <span>{item.hours}</span>
      </li>
    ));
  };

  return (
    <div>
      <ul className="px-4 py-2 mx-4 my-6 text-2xl text-center text-white bg-blue-400 border border-white rounded shadow-lg md:py-8">
        <li>Dr. Albert M. Boyce, DDS</li>
        <li>313 Park Ave</li>
        <li>Suite 101</li>
        <li>Falls Church, VA 22046</li>
        <li>(703) 534-3177</li>
      </ul>
      <ul className="px-4 py-2 mx-4 my-6 text-xl text-center text-white bg-blue-400 border border-white rounded shadow-lg md:py-8">
        <h2 className="border-b-2 border-white">Business Hours</h2>
        {scheduleMap()}
      </ul>
    </div>
  );
}
