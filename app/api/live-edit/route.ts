// This API route handles image and text generation using the Gemini API.
// It is designed to be used with a POST request.

import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenAI, Modality } from "@google/genai";
import * as fs from "node:fs";

// Define the POST handler for the API route.
export async function POST(req: Request) {
  try {
    const { text, imageData } = await req.json();
    const ai = new GoogleGenAI({});

    const base64Image = imageData.toString("base64");

    const prompt = [
        { text: text },
        {
            inlineData: {
                mimeType: "image/png",
                data: base64Image,
            },
        },
    ];

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-image-preview",
        contents: prompt,
    });
    if (
        response.candidates &&
        response.candidates[0] &&
        response.candidates[0].content &&
        response.candidates[0].content.parts
    ) {
        let data = []
        for (const part of response.candidates[0].content.parts) {
            if (part.text) {
                data.push(part.text)
            } else if (part.inlineData) {
                data.push(part.inlineData.data)
            }
        }
        return NextResponse.json({
            text: data[0],
            image64: data[1]
        });
    } else {
        console.error("Response does not contain expected candidates or content.");
    }
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'An internal server error occurred.' },
      { status: 500 }
    );
  }
}
