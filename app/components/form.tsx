"use client";
import { useState, ChangeEvent, FormEvent } from "react";

export default function KontaktForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Wysłano:", form);
    alert("Dziękujemy za wiadomość!");
  };

  return (
    <div className="w-full h-full mx-auto bg-stone-900 rounded-3xl p-8 text-white shadow-lg">
      <h2 className="text-2xl font-semibold mb-2">
        Opowiedz nam o swoim pomyśle!
      </h2>
      <p className="text-gray-300 mb-8 leading-relaxed">
        Napisz kilka słów o projekcie, a my pomożemy Ci przekształcić koncepcję
        w działającą stronę lub aplikację, która wyróżni się w sieci.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div>
          <label className="block text-sm mb-2 tracking-wide">IMIĘ</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="IMIĘ"
            className="w-full bg-black border border-blue-400 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
          />
        </div>

        <div>
          <label className="block text-sm mb-2 tracking-wide">MAIL</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="EMAIL"
            className="w-full bg-black border border-blue-400 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
          />
        </div>

        <div>
          <label className="block text-sm mb-2 tracking-wide">WIADOMOŚĆ</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="TREŚĆ"
            rows={5}
            className="w-full bg-black border border-blue-400  rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400 resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="self-end bg-blue-500 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-all"
        >
          WYŚLIJ
        </button>
      </form>
    </div>
  );
}
