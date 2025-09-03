"use client";

import { useState } from "react";

export default function ImageGenerator() {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    setImage(null);

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });

    const data = await res.json();
    if (data.imageUrl) {
      setImage(data.imageUrl);
    } else {
      console.error(data.error);
    }
    setLoading(false);
  };

  return (
    <div className="p-6 space-y-4">
      <textarea
        className="w-full border p-2 rounded"
        placeholder="Décris ton image..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button
        onClick={handleGenerate}
        disabled={loading}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        {loading ? "Génération..." : "Générer"}
      </button>

      {image && (
        <img src={image} alt="Generated" className="mt-4 rounded shadow-md" />
      )}
    </div>
  );
}
