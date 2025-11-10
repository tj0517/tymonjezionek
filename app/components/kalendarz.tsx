"use client";
import { useState } from "react";
import dayjs from "dayjs";

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedHour, setSelectedHour] = useState<number | null>(null);
  const [email, setEmail] = useState("");
  const [reservations, setReservations] = useState<
    { date: string; hour: number; email: string }[]
  >([]);

  const startOfMonth = currentDate.startOf("month");
  const endOfMonth = currentDate.endOf("month");
  const startDay = startOfMonth.day();
  const daysInMonth = endOfMonth.date();
  const today = dayjs();

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const hours = Array.from({ length: 4 }, (_, i) => 8 + i); // 8–15

  const prevMonth = () => setCurrentDate(currentDate.subtract(1, "month"));
  const nextMonth = () => setCurrentDate(currentDate.add(1, "month"));

  // --- przejścia ---
  const handleDaySelect = (day: number) => {
    setSelectedDay(day);
    setStep(2);
  };

  const handleHourSelect = (hour: number) => {
    setSelectedHour(hour);
    setStep(3);
  };

  const handleConfirm = () => {
    if (!email || !selectedHour || !selectedDay) return;
    const newRes = {
      date: `${selectedDay} ${currentDate.format("MMMM YYYY")}`,
      hour: selectedHour,
      email,
    };
    setReservations([...reservations, newRes]);
    setStep(4);
  };

  const resetCalendar = () => {
    setStep(1);
    setSelectedDay(null);
    setSelectedHour(null);
    setEmail("");
  };

  return (
    <div className="w-full rounded-3xl bg-stone-900 text-white p-6 shadow-lg">
      {/* --- 1️⃣ Wybór dnia --- */}
      {step === 1 && (
        <div>
          <div className="flex justify-between items-center mb-6">
            <button
              onClick={prevMonth}
              className="px-2 text-gray-400 hover:text-white"
            >
              &lt;
            </button>
            <h2 className="text-lg font-semibold">
              {currentDate.format("MMMM YYYY")}
            </h2>
            <button
              onClick={nextMonth}
              className="px-2 text-gray-400 hover:text-white"
            >
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
                  onClick={() => handleDaySelect(day)}
                  className={`w-10 h-10 flex items-center justify-center rounded-full mx-auto cursor-pointer
                    ${
                      isToday
                        ? "bg-blue-500 text-white"
                        : "text-gray-200 hover:bg-gray-800"
                    }`}
                >
                  {day}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* --- 2️⃣ Wybór godziny (TWÓJ STYL) --- */}
      {step === 2 && (
        <div
          onClick={() => {}}
          className="flex flex-col justify-between h-full"
        >
          <div className="w-3/4 mb-4">
            <h2 className="text-2xl font-semibold mb-2">
              Wybierz godzinę spotkania
            </h2>
            <p className="text-gray-300">
              Wybrana data:{" "}
              <span className="text-blue-400 font-semibold">
                {selectedDay} {currentDate.format("MMMM")}
              </span>
            </p>
          </div>

          <div className="w-[40%] ml-[55%] justify-end mx-auto text-stone-900 text-xl flex flex-col gap-4">
            {hours.map((d) => (
              <button
                key={d}
                onClick={() => handleHourSelect(d)}
                className="w-full justify-end bg-white border-2 border-blue-400 py-2 text-center rounded-xl hover:bg-blue-50 transition"
              >
                {d}:00
              </button>
            ))}
          </div>

          <button
            onClick={resetCalendar}
            className=" w-fit self-start text-gray-400 hover:text-white underline"
          >
            ← Wróć do kalendarza
          </button>
        </div>
      )}

      {/* --- 3️⃣ Podanie e-maila --- */}
      {step === 3 && (
        <div className="flex flex-col justify-center items-center text-center py-8">
          <h2 className="text-2xl font-semibold mb-4">
            Potwierdź swoją rezerwację
          </h2>
          <p className="text-gray-300 mb-6">
            {`Termin: ${selectedDay} ${currentDate.format(
              "MMMM YYYY"
            )}, godzina ${selectedHour}:00`}
          </p>

          <input
            type="email"
            placeholder="Twój adres e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-black border border-blue-400 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-500 w-2/3"
          />

          <div className="flex gap-4 mt-8">
            <button
              onClick={handleConfirm}
              className="bg-blue-500 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition"
            >
              Potwierdź
            </button>
            <button
              onClick={() => setStep(2)}
              className="border border-gray-500 text-gray-300 hover:bg-gray-800 rounded-xl px-6 py-3 transition"
            >
              Wróć
            </button>
          </div>
        </div>
      )}

      {/* --- 4️⃣ Potwierdzenie --- */}
      {step === 4 && (
        <div className="flex flex-col items-center justify-center text-center py-10">
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">
            Spotkanie zarezerwowane! 🎉
          </h2>
          <p className="text-gray-300 mb-6">
            {`Termin: ${selectedDay} ${currentDate.format(
              "MMMM YYYY"
            )}, godzina ${selectedHour}:00`}
            <br />
            {`E-mail: ${email}`}
          </p>
          <button
            onClick={resetCalendar}
            className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition"
          >
            Wróć do kalendarza
          </button>
        </div>
      )}
    </div>
  );
}
