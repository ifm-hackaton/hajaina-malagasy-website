import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import mime from "mime";

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    const ai = new GoogleGenAI({
      apiKey: "AIzaSyA4Sz1MEMkayiRnWQx8rhxfi9l76Xf-qVQ",
    });

    const model = "gemini-2.5-flash-image-preview";
    const config = {
      responseModalities: ["IMAGE", "TEXT"],
    };

    const contents = [
      {
        role: "user",
        parts: [{ text: prompt }],
      },
    ];

    const response = await ai.models.generateContentStream({
      model,
      config,
      contents,
    });

    let imageBase64: string | null = null;
    let mimeType: string = "image/png";

    for await (const chunk of response) {
      const inlineData =
        chunk?.candidates?.[0]?.content?.parts?.[0]?.inlineData;
      if (inlineData) {
        mimeType = inlineData.mimeType || "image/png";
        imageBase64 = inlineData.data || null;
        break; // première image trouvée
      }
    }

    if (!imageBase64) {
      return NextResponse.json(
        { error: "Aucune image générée." },
        { status: 500 }
      );
    }

    const imageUrl = `data:${mimeType};base64,${imageBase64}`;
    return NextResponse.json({ imageUrl });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
