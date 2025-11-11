import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Brak wymaganych pól" },
        { status: 400 }
      );
    }

    // 👉 Tu konfigurujesz adres docelowy (np. swój)
    const data = await resend.emails.send({
      from: "Formularz kontaktowy <onboarding@resend.dev>", // lub domena po weryfikacji
      to: ["tjezionek2000@gmail.com"], // Twój e-mail do odbioru wiadomości
      subject: `Nowa wiadomość od ${name}`,
      html: `
        <h2>Nowa wiadomość z formularza</h2>
        <p><strong>Imię:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Treść:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Błąd API:", error);
    return NextResponse.json({ error: "Błąd serwera" }, { status: 500 });
  }
}
