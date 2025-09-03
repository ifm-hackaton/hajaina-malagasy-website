import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { prompt, imageUrl } = await req.json();

    const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer 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`,
        "Content-Type": "application/json",
        "HTTP-Referer": "http://localhost:3000", // Mets ton URL prod ici
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

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
