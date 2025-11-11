import { NextResponse } from "next/server";
import { Resend } from "resend";
import fs from "fs";
import path from "path";

const resend = new Resend(process.env.RESEND_API_KEY);
const FILE_PATH = path.join(process.cwd(), "reservations.json");

export async function POST(req: Request) {
  const body = await req.json();

  if (!body.email || !body.date || !body.hour) {
    return NextResponse.json({ error: "Invalid data" }, { status: 400 });
  }

  // odczyt i zapis rezerwacji do pliku
  let reservations: any[] = [];
  try {
    const data = fs.readFileSync(FILE_PATH, "utf-8");
    reservations = JSON.parse(data);
  } catch {
    reservations = [];
  }

  const newRes = {
    email: body.email,
    date: body.date,
    hour: body.hour,
    createdAt: new Date().toISOString(),
  };

  reservations.push(newRes);
  fs.writeFileSync(FILE_PATH, JSON.stringify(reservations, null, 2));

console.log("BODY:", body);

  // wysyłanie maila potwierdzającego
 try {
  const emailResult = await resend.emails.send({
    from: "Rezerwacje <onboarding@resend.dev>",
    to: body.email,
    subject: "Potwierdzenie rezerwacji",
    html: `<p>Twoja rezerwacja: ${body.date} o ${body.hour}:00</p>`,
  });
  console.log("EMAIL RESULT:", emailResult);
} catch (err) {
  console.error("Błąd przy wysyłce maila:", err);
}


  return NextResponse.json({ success: true, reservation: newRes });
}
