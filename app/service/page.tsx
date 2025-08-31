"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Edit, Trash, ArrowLeft } from "lucide-react";
import Header from "@/components/header";
import { useRouter } from "next/navigation";
import Footer from "@/components/footer";

export default function MyServicesPage() {
  const router = useRouter();

  // Exemple de services existants
  const services = [
    {
      id: 1,
      title: "Conseil en stylisme éthique",
      description:
        "Accompagnement personnalisé pour créer une garde-robe responsable et stylée avec des pièces durables.",
    },
    {
      id: 2,
      title: "Upcycling & Personnalisation",
      description:
        "Transformez vos anciens vêtements en pièces uniques grâce à des techniques d’upcycling et de customisation.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black pt-20">
      <Header />
      <section className="py-16">
        <div className="container mx-auto px-6">
          {/* Retour au dashboard */}
          <Button
            variant="ghost"
            onClick={() => router.back()}
            className="mb-8 text-sm font-light tracking-wide flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour au tableau de bord
          </Button>

          {/* Titre + intro */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-extralight tracking-[0.2em] mb-6 serif-font">
              Mes Services
            </h1>
            <div className="w-32 h-px bg-black mx-auto mb-8" />
            <p className="text-gray-600 max-w-3xl mx-auto font-light leading-relaxed text-lg">
              Gérez les services que vous proposez (stylisme, conseil, ateliers,
              etc.) dans le domaine de la mode éthique et durable.
            </p>
          </div>

          {/* Bouton ajout rapide */}
          <div className="flex justify-end mb-8">
            <Button className="bg-black text-white hover:bg-gray-800 font-light tracking-[0.1em] uppercase">
              <Plus className="mr-2 h-4 w-4" />
              Nouveau Service
            </Button>
          </div>

          {/* Liste des services */}
          <div className="space-y-8">
            {services.map((service) => (
              <Card
                key={service.id}
                className="border-0 shadow-none hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h2 className="text-2xl font-light mb-2 serif-font tracking-wide">
                        {service.title}
                      </h2>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 bg-transparent"
                      >
                        <Edit className="h-4 w-4" />
                        <span className="sr-only">Modifier</span>
                      </Button>
                      <Button
                        variant="destructive"
                        size="icon"
                        className="h-8 w-8"
                      >
                        <Trash className="h-4 w-4" />
                        <span className="sr-only">Supprimer</span>
                      </Button>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed font-light line-clamp-3">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Formulaire pour ajouter un nouveau service */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-extralight tracking-[0.1em] mb-6 serif-font">
              Créer un nouveau service
            </h2>
            <div className="w-24 h-px bg-black mx-auto mb-8" />

            <form className="space-y-6 max-w-2xl mx-auto">
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-light mb-2 tracking-wide text-left"
                >
                  Titre du service
                </label>
                <Input
                  id="title"
                  placeholder="Ex : Conseil en stylisme éthique"
                  className="font-light"
                />
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-light mb-2 tracking-wide text-left"
                >
                  Description
                </label>
                <Textarea
                  id="description"
                  placeholder="Décrivez votre service..."
                  rows={6}
                  className="font-light"
                />
              </div>
              <Button
                type="submit"
                className="bg-black text-white hover:bg-gray-800 font-light tracking-[0.1em] uppercase px-8 py-3"
              >
                Publier le service
                <Plus className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
