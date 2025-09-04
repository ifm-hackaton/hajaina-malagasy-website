import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { prompt, imageUrl } = await req.json();

    const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY!}`, // ✅ utilise une variable d’env
        "Content-Type": "application/json",
        "HTTP-Referer": "http://localhost:3000", // change en prod
        "X-Title": "MonAppNextJS",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash-image-preview:free",
        messages: [
          {
            role: "user",
            content: [
              { type: "text", text: prompt },
              ...(imageUrl
                ? [
                    {
                      type: "image_url",
                      image_url: { url: imageUrl },
                    },
                  ]
                : []),
            ],
          },
        ],
      }),
    });

    // ✅ Sécurité : si pas de JSON valide
    const text = await res.text();
    if (!res.ok) {
      throw new Error(`Erreur API OpenRouter (${res.status}): ${text}`);
    }

    let data;
    try {
      data = JSON.parse(text);
    } catch (e) {
      throw new Error("Réponse invalide de l'API OpenRouter: " + text);
    }

    return NextResponse.json(data);
  } catch (error: any) {
    console.error("Erreur backend:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
