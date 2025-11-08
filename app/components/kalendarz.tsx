"use client";
import { useState } from "react";
import dayjs from "dayjs";

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const startOfMonth = currentDate.startOf("month");
  const endOfMonth = currentDate.endOf("month");
  const startDay = startOfMonth.day(); // 0 = Sunday
  const daysInMonth = endOfMonth.date();

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const prevMonth = () => setCurrentDate(currentDate.subtract(1, "month"));
  const nextMonth = () => setCurrentDate(currentDate.add(1, "month"));

  const today = dayjs();

  return (
    <div className="w-full rounded-3xl bg-stone-900 text-white p-6 shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <button onClick={prevMonth} className="px-2 text-gray-400 hover:text-white">
          &lt;
        </button>
        <h2 className="text-lg font-semibold">
          {currentDate.format("MMMM YYYY")}
        </h2>
        <button onClick={nextMonth} className="px-2 text-gray-400 hover:text-white">
          &gt;
        </button>
      </div>

      <div className="grid grid-cols-7 gap-3 text-center text-gray-400 text-sm mb-2">
        {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-3 text-center text-lg font-medium">
        {Array.from({ length: (startDay + 6) % 7 }).map((_, i) => (
          <div key={`empty-${i}`} />
        ))}
        {days.map((day) => {
          const isToday =
            currentDate.year() === today.year() &&
            currentDate.month() === today.month() &&
            day === today.date();

          return (
            <div
              key={day}
              className={`w-10 h-10 flex items-center justify-center rounded-full mx-auto
                ${isToday ? "bg-blue-500 text-white" : "text-gray-200 hover:bg-gray-800"}`}
            >
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
}
