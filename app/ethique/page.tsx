"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Leaf, Users, Globe, Sparkles, Award } from "lucide-react" // Added Sparkles and Award icons
import Image from "next/image"
import Header from "@/components/header"
import { Badge } from "@/components/ui/badge" // Import Badge
import Footer from "@/components/footer" // Added import

export default function EthiquePage() {
  const values = [
    {
      icon: Sparkles, // Changed icon
      title: "Innovation & Tendance", // Changed title
      description:
        "Nous sommes à la pointe des tendances, intégrant des designs audacieux et des techniques novatrices pour une mode avant-gardiste.", // Changed description
    },
    {
      icon: Leaf,
      title: "Durabilité Environnementale",
      description:
        "Utilisation exclusive de matériaux durables, processus de production respectueux de l'environnement.",
    },
    {
      icon: Users,
      title: "Inclusion Sociale",
      description: "Nous soutenons les communautés locales et favorisons l'emploi des femmes dans nos ateliers.",
    },
    {
      icon: Globe,
      title: "Impact Global",
      description: "Notre mission dépasse les frontières : promouvoir une mode éthique à l'échelle internationale.",
    },
  ]

  const certifications = [
    {
      name: "Fair Trade Certified",
      description: "Certification commerce équitable internationale",
      image: "/placeholder.svg?height=100&width=100&text=Fair+Trade+Logo",
    },
    {
      name: "GOTS Organic",
      description: "Global Organic Textile Standard",
      image: "/placeholder.svg?height=100&width=100&text=GOTS+Organic+Logo",
    },
    {
      name: "B-Corp Certified",
      description: "Entreprise à impact social et environnemental",
      image: "/placeholder.svg?height=100&width=100&text=B+Corp+Logo",
    },
  ]

  const impacts = [
    {
      number: "500+",
      label: "Artisans Soutenus",
      description: "Artisans locaux bénéficiant de conditions de travail équitables",
    },
    {
      number: "15",
      label: "Communautés Partenaires",
      description: "Villages et coopératives avec lesquels nous collaborons",
    },
    {
      number: "80%",
      label: "Matériaux Durables",
      description: "De nos créations utilisent des matériaux éco-responsables",
    },
    {
      number: "0",
      label: "Déchet Textile",
      description: "Objectif zéro déchet atteint dans nos ateliers principaux",
    },
  ]

  const ethicalBlogs = [
    {
      id: 1,
      title: "Les Secrets de la Soie Sauvage Malgache",
      excerpt: "Découvrez le processus de production de notre soie sauvage, de la chenille au tissu luxueux.",
      image: "/placeholder.svg?height=400&width=600&text=Wild+silk+production+Madagascar",
      author: "Miora Rasoanaivo",
      date: "10 Mai 2024",
      badges: ["Artisanat", "Naturel", "Local"],
    },
    {
      id: 2,
      title: "L'Upcycling : Quand la Mode Devient Art",
      excerpt: "Comment nos stylistes transforment des vêtements usagés en pièces uniques et tendance.",
      image: "/placeholder.svg?height=400&width=600&text=Upcycling+fashion+art+workshop",
      author: "Hery Andriantsoa",
      date: "22 Avril 2024",
      badges: ["Recyclage", "Créativité", "Zéro Déchet"],
    },
    {
      id: 3,
      title: "Madagascar Urbain : L'Inspiration Streetwear",
      excerpt: "Plongez dans l'énergie des rues d'Antananarivo qui nourrit nos collections streetwear éthiques.",
      image: "/placeholder.svg?height=400&width=600&text=Urban+Madagascar+streetwear+inspiration",
      author: "Lalaina Rakoto",
      date: "05 Mars 2024",
      badges: ["Urbain", "Jeunesse", "Culture"],
    },
  ]

  return (
    <div className="min-h-screen bg-white text-black pt-20">
      {/* Header */}
      <Header />
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-10" />
        <Image
          src="/img/Ethique.jpg"
          alt="Mode Éthique"
          fill
          className="object-cover"
        />
        <div className="relative z-20 container mx-auto px-6 text-white">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-7xl font-extralight tracking-[0.2em] mb-8 serif-font">Mode Éthique</h1>
            <div className="w-32 h-px bg-white mb-10" />
            <p className="text-xl md:text-2xl font-light leading-relaxed mb-12 max-w-3xl">
              Notre engagement pour une mode responsable qui respecte les artisans, préserve l'environnement et valorise
              les traditions malgaches.
            </p>
            <Button className="bg-white text-black hover:bg-gray-100 font-light tracking-[0.1em] uppercase px-10 py-4">
              Découvrir Nos Actions
            </Button>
          </div>
        </div>
      </section>
      {/* Values Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-extralight tracking-[0.2em] mb-6 serif-font">Nos Valeurs</h2>
            <div className="w-32 h-px bg-black mx-auto mb-8" />
            <p className="text-gray-600 max-w-3xl mx-auto font-light leading-relaxed text-lg mb-8">
              Chaque décision que nous prenons est guidée par nos valeurs fondamentales qui placent l'humain et
              l'environnement au cœur de notre démarche.
            </p>
            <p className="text-gray-700 max-w-3xl mx-auto font-light leading-relaxed text-base flex items-center justify-center gap-2">
              <Award className="h-5 w-5 text-black" />
              Nous récompensons les comptes par des badges en suivant constamment leur blog éthique et leurs
              collections.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-none hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-black" />
                  </div>
                  <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-light mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-light mb-4 serif-font tracking-wide">{value.title}</h3>
                  <p className="text-gray-600 font-light leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Impact Numbers */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-extralight tracking-[0.2em] mb-6 serif-font">Notre Impact</h2>
            <div className="w-32 h-px bg-white mx-auto mb-8" />
            <p className="text-gray-300 max-w-3xl mx-auto font-light leading-relaxed text-lg">
              Des chiffres qui témoignent de notre engagement concret pour une mode plus juste et durable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {impacts.map((impact, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-extralight mb-4 serif-font">{impact.number}</div>
                <h3 className="text-xl font-light mb-3 tracking-wide">{impact.label}</h3>
                <p className="text-gray-400 font-light leading-relaxed text-sm">{impact.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Certifications */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-extralight tracking-[0.2em] mb-6 serif-font">Certifications</h2>
            <div className="w-32 h-px bg-black mx-auto mb-8" />
            <p className="text-gray-600 max-w-3xl mx-auto font-light leading-relaxed text-lg">
              Nos engagements sont reconnus par des organismes internationaux indépendants.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-none hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                    <Image
                      src={cert.image || "/placeholder.svg"}
                      alt={cert.name}
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-light mb-3 serif-font tracking-wide">{cert.name}</h3>
                  <p className="text-gray-600 font-light leading-relaxed">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Ethical Blogs Section (replaces Process Section) */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-extralight tracking-[0.2em] mb-6 serif-font">Blogs Éthiques</h2>
            <div className="w-32 h-px bg-black mx-auto mb-8" />
            <p className="text-gray-600 max-w-3xl mx-auto font-light leading-relaxed text-lg">
              Découvrez les histoires inspirantes et les réflexions de nos créateurs sur la mode éthique et durable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {ethicalBlogs.map((blog) => (
              <Card
                key={blog.id}
                className="group cursor-pointer border-0 shadow-none hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={blog.image || "/placeholder.svg"}
                      alt={blog.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="p-8">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {blog.badges.map((badge, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs tracking-[0.15em] font-light uppercase">
                          {badge}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="text-xl font-light mb-3 serif-font tracking-wide leading-tight">{blog.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">{blog.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span className="font-light">{blog.author}</span>
                      <span className="font-light">{blog.date}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-24 bg-gray-50 text-black">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-extralight tracking-[0.2em] mb-6 serif-font">Rejoignez le Mouvement</h2>
          <div className="w-32 h-px bg-black mx-auto mb-8" />
          <p className="text-gray-800 max-w-2xl mx-auto font-light leading-relaxed text-lg mb-12">
            Ensemble, construisons un avenir où la mode rime avec respect, durabilité et authenticité.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-black text-white hover:bg-gray-800 font-light tracking-[0.1em] uppercase px-8 py-3">
              Découvrir Nos Collections
            </Button>
            <Button
              variant="outline"
              className="border-black text-black hover:bg-black hover:text-white bg-transparent font-light tracking-[0.1em] uppercase px-8 py-3"
            >
              Devenir Partenaire
            </Button>
          </div>
        </div>
      </section>
      <Footer /> {/* Added Footer */}
    </div>
  )
}
