"use client"

import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { PlusCircle, Send, Search, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/footer" // Added import

export default function CollaborationsPage() {
  const currentCollaborations = [
    {
      id: "1",
      title: "Collection Printemps 2024",
      partner: "ÉcoTextile Innovations",
      status: "En cours",
      dueDate: "30/08/2024",
      description: "Développement de tissus innovants à partir de fibres recyclées pour la nouvelle collection.",
      image: "/placeholder.jpg?height=200&width=300&query=eco%20textile%20innovation",
    },
    {
      id: "2",
      title: "Campagne Marketing Digitale",
      partner: "Influence Verte Agence",
      status: "En cours",
      dueDate: "15/09/2024",
      description: "Création de contenu pour les réseaux sociaux axé sur la mode durable.",
      image: "/placeholder.jpg?height=200&width=300&query=digital%20marketing%20campaign",
    },
  ]

  const collaborationRequests = [
    {
      id: "req1",
      sender: "Atelier Couture Durable",
      message: "Proposition de collaboration pour une ligne de vêtements upcyclés.",
      date: "20/07/2024",
      senderImage: "/placeholder-user.jpg?height=50&width=50&query=designer%20profile",
    },
    {
      id: "req2",
      sender: "Photographe Éthique",
      message: "Demande de partenariat pour un shooting photo sur le thème de la nature.",
      date: "18/07/2024",
      senderImage: "/placeholder-user.jpg?height=50&width=50&query=photographer%20profile",
    },
  ]

  const globalAnnouncements = [
    {
      id: "ann1",
      title: "Recherche Styliste pour Projet Zéro Déchet",
      company: "Mode Circulaire",
      description:
        "Nous recherchons un styliste engagé pour notre prochaine collection capsule zéro déchet, avec une expertise en upcycling et design minimaliste.",
      contactEmail: "contact@modecirculaire.com",
      location: "Paris, France",
      type: "Création",
      companyLogo: "/placeholder.svg?height=80&width=80",
    },
    {
      id: "ann2",
      title: "Appel à Designers pour Tissus Innovants",
      company: "Future Fibres Lab",
      description:
        "Opportunité de collaborer sur le développement de textiles biodégradables et smart-fabrics. Idéal pour les designers passionnés par la recherche et l'innovation.",
      contactEmail: "info@futurefibreslab.org",
      location: "Lyon, France",
      type: "Recherche & Développement",
      companyLogo: "/placeholder-logo.png?height=80&width=80&query=future%20fibres%20logo",
    },
    {
      id: "ann3",
      title: "Partenariat pour Campagne Marketing Mode Éthique",
      company: "Conscience & Style",
      description:
        "Agence de communication spécialisée dans le développement durable, cherche influenceurs ou stylistes pour promouvoir une nouvelle ligne de vêtements éthiques.",
      contactEmail: "collab@conscienceetstyle.fr",
      location: "En ligne / Europe",
      type: "Marketing & Influence",
      companyLogo: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <div className="min-h-screen bg-white text-black pt-16">
      <Header />
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-extralight tracking-[0.2em] mb-6 serif-font animate-fade-in">
              Mes Collaborations
            </h1>
            <div className="w-32 h-px bg-black mx-auto mb-8" />
            <p className="text-lg text-gray-700 max-w-3xl mx-auto font-light leading-relaxed">
              Gérez toutes vos collaborations, des projets en cours aux nouvelles opportunités. Connectez-vous et
              développez votre réseau.
            </p>
            <Button className="mt-8 bg-black text-white hover:bg-gray-800 px-8 py-3 rounded-full text-lg font-light tracking-[0.1em] uppercase">
              <PlusCircle className="mr-2 h-5 w-5" />
              Envoyer une demande de collaboration
            </Button>
          </div>

          <div className="space-y-16">
            {/* Collaborations en cours */}
            <div>
              <h2 className="text-4xl font-extralight tracking-[0.15em] mb-10 serif-font text-center">
                Collaborations en cours
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentCollaborations.map((collab) => (
                  <Card
                    key={collab.id}
                    className="border-0 shadow-none hover:shadow-lg transition-shadow duration-300 card-hover"
                  >
                    <CardHeader className="p-0">
                      {collab.image && (
                        <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
                          <Image
                            src={collab.image || "/placeholder.svg"}
                            alt={collab.title}
                            fill
                            style={{ objectFit: "cover" }}
                            className="transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                      )}
                    </CardHeader>
                    <CardContent className="p-6">
                      <CardTitle className="text-2xl font-light tracking-wide mb-2 serif-font">
                        {collab.title}
                      </CardTitle>
                      <p className="mb-1 text-sm text-gray-600">
                        <span className="font-medium text-black">Partenaire:</span> {collab.partner}
                      </p>
                      <p className="mb-1 text-sm text-gray-600">
                        <span className="font-medium text-black">Statut:</span> {collab.status}
                      </p>
                      <p className="mb-4 text-sm text-gray-600">
                        <span className="font-medium text-black">Date limite:</span> {collab.dueDate}
                      </p>
                      <p className="text-gray-700 leading-relaxed text-sm mb-4">{collab.description}</p>
                      <Button
                        variant="outline"
                        className="w-full border-black text-black hover:bg-black hover:text-white transition-colors duration-300 bg-transparent"
                      >
                        Voir les détails
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Separator className="my-16 bg-gray-200" />

            {/* Demandes de collaboration */}
            <div>
              <h2 className="text-4xl font-extralight tracking-[0.15em] mb-10 serif-font text-center">
                Demandes de collaboration
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {collaborationRequests.map((request) => (
                  <Card
                    key={request.id}
                    className="border-0 shadow-none hover:shadow-lg transition-shadow duration-300 card-hover"
                  >
                    <CardContent className="p-6 flex items-start space-x-4">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0">
                        <Image
                          src={request.senderImage || "/placeholder.svg"}
                          alt={request.sender}
                          fill
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <div className="flex-grow">
                        <CardTitle className="text-xl font-light tracking-wide mb-1 serif-font">
                          De: {request.sender}
                        </CardTitle>
                        <p className="mb-2 text-xs text-gray-500">Date: {request.date}</p>
                        <p className="text-gray-700 leading-relaxed text-sm mb-4">{request.message}</p>
                        <div className="flex flex-wrap gap-2 justify-end">
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-green-600 text-green-600 hover:bg-green-50 hover:text-green-700 bg-transparent"
                          >
                            Accepter
                          </Button>
                          <Button variant="destructive" size="sm" className="bg-red-500 text-white hover:bg-red-600">
                            Refuser
                          </Button>
                          <Button size="sm" className="bg-black text-white hover:bg-gray-800">
                            <Send className="mr-2 h-4 w-4" /> Répondre
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Separator className="my-16 bg-gray-200" />

            {/* Annonces de collaboration (globales) */}
            <div>
              <h2 className="text-4xl font-extralight tracking-[0.15em] mb-10 serif-font text-center">
                Annonces de collaboration
              </h2>
              <div className="relative max-w-2xl mx-auto mb-8">
                <Input
                  type="text"
                  placeholder="Rechercher une annonce par titre, entreprise, type..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {globalAnnouncements.map((announcement) => (
                  <Card
                    key={announcement.id}
                    className="border-0 shadow-none hover:shadow-lg transition-shadow duration-300 card-hover"
                  >
                    <CardHeader className="p-6 pb-0 flex flex-row items-center space-x-4">
                      {announcement.companyLogo && (
                        <div className="relative w-20 h-20 overflow-hidden rounded-full border border-gray-200 flex-shrink-0">
                          <Image
                            src={announcement.companyLogo || "/placeholder.svg"}
                            alt={`${announcement.company} logo`}
                            fill
                            style={{ objectFit: "contain" }}
                          />
                        </div>
                      )}
                      <div>
                        <CardTitle className="text-xl font-light tracking-wide serif-font mb-1">
                          {announcement.title}
                        </CardTitle>
                        <p className="text-sm text-gray-600 font-medium">{announcement.company}</p>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 pt-4">
                      <p className="text-gray-700 leading-relaxed text-sm mb-4">{announcement.description}</p>
                      <p className="text-xs text-gray-500 mb-2">
                        <span className="font-medium text-black">Type:</span> {announcement.type}
                      </p>
                      <p className="text-xs text-gray-500 mb-4">
                        <span className="font-medium text-black">Localisation:</span> {announcement.location}
                      </p>
                      <Link href={`mailto:${announcement.contactEmail}`} passHref>
                        <Button
                          variant="outline"
                          className="w-full border-black text-black hover:bg-black hover:text-white transition-colors duration-300 bg-transparent"
                        >
                          <Mail className="mr-2 h-4 w-4" /> Contacter
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer /> {/* Added Footer */}
    </div>
  )
}
