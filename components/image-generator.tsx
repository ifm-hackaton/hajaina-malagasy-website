"use client";

import { useState } from "react";

export default function ImageGenerator() {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    setImage(null);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();
      console.log("Response:", data);

      // Récupérer le contenu
      const content = data?.choices?.[0]?.message?.content;

      // Chercher l'image
      const imageUrl = data?.choices?.[0]?.message?.images?.[0]?.image_url;

      if (imageUrl) {
        setImage(imageUrl);
      } else {
        console.warn("Aucune image trouvée dans la réponse.");
      }
    } catch (error) {
      console.error("Erreur lors de la génération :", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <textarea
        className="border p-2 w-full rounded"
        placeholder="Décris ton image..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button
        onClick={handleGenerate}
        className="bg-green-600 text-white px-4 py-2 mt-2 rounded"
        disabled={loading || !prompt.trim()}
      >
        {loading ? "Génération..." : "Envoyer"}
      </button>

      {image && (
        <div className="mt-4">
          <img
            src={image}
            alt="Image générée"
            className="max-w-full rounded shadow"
          />
        </div>
      )}
    </div>
  );
}
