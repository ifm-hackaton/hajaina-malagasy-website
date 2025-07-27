"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Recycle, Heart, Star, ChevronLeft, ChevronRight, Handshake } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CustomCursor from '@/components/custom-cursor'

export default function HajAinaFashion() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const featuredDesigners = [
    {
      name: "Miora Rasoanaivo",
      specialty: "Couture Traditionnelle",
      image: "/img/Miora.jpg",
      description: "Fusion entre tradition malgache et modernité",
      id: "1", // Added ID for linking
    },
    {
      name: "Hery Andriantsoa",
      specialty: "Mode Durable",
      image: "/img/Hery.jpg",
      description: "Pionnier de la mode éco-responsable à Madagascar",
      id: "2", // Added ID for linking
    },
    {
      name: "Lalaina Rakoto",
      specialty: "Prêt-à-Porter",
      image: "/img/Lalaina.jpg",
      description: "Créations contemporaines aux influences malgaches",
      id: "3", // Added ID for linking
    },
  ]

  const collections = [
    {
      id: "1", // Added ID for linking
      title: "Collection Automne 2024",
      designer: "Miora Rasoanaivo",
      image: "/img/Collection1.jpg",
      category: "Couture",
    },
    {
      id: "2", // Added ID for linking
      title: "Eco-Luxe Series",
      designer: "Hery Andriantsoa",
      image: "/img/Collection1.jpg",
      category: "Durable",
    },
    {
      id: "3", // Added ID for linking
      title: "Urban Malagasy",
      designer: "Lalaina Rakoto",
      image: "/img/Collection2.jpg",
      category: "Streetwear",
    },
    {
      id: "4", // Added ID for linking
      title: "Heritage Moderne",
      designer: "Miora Rasoanaivo",
      image: "/img/Collection1.jpg",
      category: "Fusion",
    },
  ]

  const collaborationAnnouncements = [
    {
      id: "ann1",
      title: "Recherche Styliste pour Projet Zéro Déchet",
      company: "Mode Circulaire",
      description:
        "Nous recherchons un styliste engagé pour notre prochaine collection capsule zéro déchet, avec une expertise en upcycling et design minimaliste.",
      image: "/img/Collab1.jpg",
      link: "/collaborations",
    },
    {
      id: "ann2",
      title: "Appel à Designers pour Tissus Innovants",
      company: "Future Fibres Lab",
      description:
        "Opportunité de collaborer sur le développement de textiles biodégradables et smart-fabrics. Idéal pour les designers passionnés par la recherche et l'innovation.",
      image: "/img/Collab2.jpg",
      link: "/collaborations",
    },
    {
      id: "ann3",
      title: "Partenariat pour Campagne Marketing Mode Éthique",
      company: "Conscience & Style",
      description:
        "Agence de communication spécialisée dans le développement durable, cherche influenceurs ou stylistes pour promouvoir une nouvelle ligne de vêtements éthiques.",
      image: "/img/Collab3.jpg",
      link: "/collaborations",
    },
  ]

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <Header />

      {/* Custom Cursor */}
      <CustomCursor />

      {/* Hero Section */}
      <section className="relative min-h-[115vh] py-10 flex items-center justify-center overflow-hidden bg-[#0b0b0b]">
        {/* Hero Image Left */}
        <div className="absolute inset-0 md:inset-y-0 md:left-0 md:w-[45%] h-full z-10 overflow-hidden">
          <div className="hero-image gsap-element relative w-full h-full">
            <Image
              src="/img/hero-image.jpg"
              alt="Hero Fashion"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute right-0 inset-0 bg-gradient-to-r from-white/30 via-black/20 to-[#0b0b0b] z-10" />
          </div>
        </div>

        {/* Hero Text Content */}
        <div className="relative z-20 text-white px-6 md:px-12 lg:px-20 max-w-3xl md:ml-[45%] text-center md:text-left">
          <h1 className="hero-title gsap-element text-4xl sm:text-5xl md:text-8xl font-extralight tracking-[0.2em] mb-10 serif-font">
            HAJ'AINA
          </h1>
          <div className="hero-subtext gsap-element flex items-center mb-10 gap-3">
            <p className="text-lg md:text-lg font-light tracking-[0.05em] opacity-90">
              Mihaja, Manaja Aina... Manaja Tantara
            </p> 
            <Image src="/img/madagascar.png" alt="" width="20" height="0" className="mt-1"/>
          </div>
          <p className="hero-description gsap-element text-base md:text-lg mb-10 leading-relaxed font-light opacity-80">
            Découvrez les créateurs visionnaires qui façonnent l'avenir de la mode éthique à Madagascar, où tradition et
            innovation se rencontrent dans une harmonie parfaite.
          </p>
          <Link href="/collections">
            <Button
              size="lg"
              className="hero-button gsap-element bg-green-600 text-black hover:bg-green-100 text-xs tracking-[0.15em] px-8 py-4 font-normal uppercase"
            >
              Explorer les Collections
              <ArrowRight className="ml-3 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Marquee section*/}
      <section className="marquee-section relative w-full py-28 h-full bg-gray-50 overflow-visible z-20">
        {/* Grand ruban */}
        <div className="absolute overlay top-2 -left-full w-[202%] h-full rotate-[-4deg] z-1 bg-gray-50" />

        <div className="absolute -top-1 -left-full w-[202%] rotate-[-4deg] z-9 bg-gray-400">
          <div className="flex animate-marquee whitespace-nowrap text-2xl md:text-4xl font-light serif-font text-white uppercase gap-12 py-5">
            {Array(20)
              .fill("Haj'Aina")
              .map((text, i) => (
                <span key={i}>{text}</span>
              ))}
          </div>
        </div>

        {/* Petit ruban */}
        <div className="absolute top-[50%] -left-full w-[202%] rotate-[4deg] z-3 bg-black/95 py-2">
          <div className="flex animate-marquee-slow whitespace-nowrap text-2xl md:text-4xl font-light serif-font text-white uppercase gap-12 py-2">
            {Array(30)
              .fill("Vos vêtements, votre histoire")
              .map((text, i) => (
                <span key={i}>{text}</span>
              ))}
          </div>
        </div>
      </section>

      {/* Featured Collections Carousel */}
      <section className="collections-section py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-extralight tracking-[0.2em] mb-6 serif-font">Collections Phares</h2>
            <div className="w-32 h-px bg-black mx-auto mb-8 separator" />
            <p className="text-lg text-gray-600 font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
              Chaque collection raconte une histoire unique, mêlant l'héritage culturel malgache aux tendances
              contemporaines les plus raffinées
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-lg">
              <div
                className="flex transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {collections.map((collection, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                      <div className="relative h-[500px] md:h-[700px] overflow-hidden rounded-lg">
                        <Image
                          src={collection.image || "/placeholder.svg"}
                          alt={collection.title}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                      </div>
                      <div className="space-y-8 px-4">
                        <Badge
                          variant="outline"
                          className="text-xs tracking-[0.15em] font-light uppercase border-gray-300"
                        >
                          {collection.category}
                        </Badge>
                        <h3 className="text-4xl font-extralight tracking-[0.1em] serif-font leading-tight">
                          {collection.title}
                        </h3>
                        <p className="text-gray-600 text-lg font-light tracking-wide">Par {collection.designer}</p>
                        <p className="text-gray-700 leading-relaxed font-light text-lg">
                          Une exploration unique de l'identité malgache à travers des créations contemporaines qui
                          célèbrent notre héritage tout en embrassant l'innovation et la durabilité.
                        </p>
                        <Link href={`/collections/${collection.id}`}>
                          <Button
                            variant="outline"
                            className="tracking-[0.1em] bg-transparent font-light uppercase text-sm px-8 py-3 mt-10"
                          >
                            Découvrir
                            <ArrowRight className="ml-3 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + collections.length) % collections.length)}
              className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-xl transition-all backdrop-blur-sm"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % collections.length)}
              className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-xl transition-all backdrop-blur-sm"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Featured Designers */}
      <section className="designers-section py-24">
        <div className="container relative mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-extralight tracking-[0.2em] mb-6 serif-font">Stylistes Malagasy</h2>
            <div className="w-32 h-px bg-black mx-auto mb-8" />
            <p className="text-gray-600 max-w-3xl mx-auto font-light leading-relaxed text-lg">
              Rencontrez les visionnaires qui redéfinissent la mode malgache avec créativité, passion et conscience
              environnementale
            </p>
            
            <div className="absolute top-[-8rem] md:top-0 right-10">
              <div className="rotating-star min-w-[60px] min-h-[60px] md:min-w-[100px] md:min-h-[100px]"/>
              <div className="absolute inset-0 flex justify-center items-center text-lg md:text-2xl serif-font text-white">
                <p>
                  100<span className="text-lg">%</span><br/>
                  <span>Gasy</span>
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {featuredDesigners.map((designer, index) => (
              <Link key={index} href={`/stylistes/${designer.id}`}>
                <Card className="group cursor-pointer border-0 shadow-none hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative h-[500px] overflow-hidden">
                      <Image
                        src={designer.image || "/placeholder.svg"}
                        alt={designer.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute bottom-8 left-8 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                        <Badge className="mb-3 bg-white/20 text-white border-white/30 backdrop-blur-sm font-light tracking-wide">
                          {designer.specialty}
                        </Badge>
                        <p className="text-sm font-light leading-relaxed max-w-xs">{designer.description}</p>
                      </div>
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-light mb-3 serif-font tracking-wide">{designer.name}</h3>
                      <p className="text-gray-600 text-sm mb-4 tracking-wide font-light uppercase">
                        {designer.specialty}
                      </p>
                      <p className="text-gray-700 text-sm leading-relaxed font-light">{designer.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Ethical Fashion Section */}
      <section className="ethique-section py-24 bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-extralight tracking-[0.2em] mb-8 serif-font">Mode Éthique</h2>
              <div className="w-32 h-px bg-white mb-10" />
              <p className="text-xl leading-relaxed mb-10 text-gray-300 font-light">
                Nous croyons en une mode qui respecte les artisans, l'environnement et les traditions. Chaque pièce
                raconte une histoire de durabilité, d'authenticité et de respect mutuel.
              </p>
              <div className="space-y-6 mb-12">
                <div className="flex items-center space-x-4">
                  <Heart className="h-6 w-6 text-white flex-shrink-0" />
                  <span className="font-light tracking-wide">Commerce équitable avec les artisans locaux</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Recycle className="h-6 w-6 text-white flex-shrink-0" />
                  <span className="font-light tracking-wide">Matériaux durables et recyclés</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Star className="h-6 w-6 text-white flex-shrink-0" />
                  <span className="font-light tracking-wide">Préservation des techniques traditionnelles</span>
                </div>
              </div>
              <Link href="/ethique">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black bg-transparent font-light tracking-[0.1em] uppercase px-8 py-3"
                >
                  En Savoir Plus
                </Button>
              </Link>
            </div>
            <div className="relative h-[600px] overflow-hidden rounded-lg">
              <Image
                src="/img/Ethique.jpg"
                alt="Mode Éthique"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Recycling Section */}
      <section className="recyclage-section py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-extralight tracking-[0.2em] mb-6 serif-font">Espace Recyclage</h2>
            <div className="w-32 h-px bg-black mx-auto mb-8" />
            <p className="text-gray-600 max-w-3xl mx-auto font-light leading-relaxed text-lg">
              Donnez une seconde vie à vos vêtements. Notre programme de recyclage transforme vos anciennes pièces en
              nouvelles créations uniques, dans une démarche circulaire et responsable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] overflow-hidden rounded-lg">
              <Image
                src="/img/Recyclage.jpg"
                alt="Recyclage Mode"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
            </div>
            <div className="space-y-8">
              <h3 className="text-3xl font-extralight tracking-[0.1em] serif-font">Comment ça marche ?</h3>
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-sm font-light flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-light mb-2 text-lg tracking-wide">Déposez vos vêtements</h4>
                    <p className="text-gray-600 font-light leading-relaxed">
                      Apportez vos pièces usagées dans nos points de collecte partenaires
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-sm font-light flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-light mb-2 text-lg tracking-wide">Transformation créative</h4>
                    <p className="text-gray-600 font-light leading-relaxed">
                      Nos stylistes reimaginent vos vêtements en nouvelles créations uniques
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-sm font-light flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-light mb-2 text-lg tracking-wide">Nouvelle vie</h4>
                    <p className="text-gray-600 font-light leading-relaxed">
                      Récupérez vos pièces transformées ou découvrez notre collection recyclée
                    </p>
                  </div>
                </div>
              </div>
              <Link href="/recyclage">
                <Button className="bg-black text-white hover:bg-gray-800 font-light tracking-[0.1em] uppercase px-8 py-3 mt-8">
                  Participer au Programme
                  <Recycle className="ml-3 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Announcements Section */}
      <section className="collaborations-section py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extralight tracking-[0.2em] mb-6 serif-font">Opportunités de Collaboration</h2>
            <div className="w-32 h-px bg-black mx-auto mb-8" />
            <p className="text-gray-600 max-w-3xl mx-auto font-light leading-relaxed text-lg">
              Découvrez les dernières annonces de collaboration et connectez-vous avec des partenaires partageant les
              mêmes valeurs dans l'industrie de la mode éthique.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {collaborationAnnouncements.map((announcement) => (
              <Card
                key={announcement.id}
                className="group cursor-pointer border-0 shadow-none hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={announcement.image || "/placeholder.svg"}
                      alt={announcement.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="p-8">
                    <Badge variant="outline" className="mb-4 text-xs tracking-[0.15em] font-light uppercase">
                      {announcement.company}
                    </Badge>
                    <h3 className="text-xl font-light mb-3 serif-font tracking-wide leading-tight">
                      {announcement.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">{announcement.description}</p>
                    <Link href={announcement.link}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="tracking-[0.1em] font-light uppercase text-xs bg-transparent"
                      >
                        Voir l'annonce
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link href="/collaborations">
              <Button className="bg-black text-white hover:bg-gray-800 font-light tracking-[0.1em] uppercase px-8 py-3">
                Voir toutes les annonces
                <Handshake className="ml-3 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter-section py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-extralight tracking-[0.2em] mb-6 serif-font">Restez Connecté</h2>
            <div className="w-32 h-px bg-black mx-auto mb-8" />
            <p className="text-gray-600 mb-12 font-light leading-relaxed text-lg">
              Recevez les dernières actualités de la mode malgache, nos collections exclusives et les histoires
              inspirantes de nos créateurs
            </p>
            <div className="flex gap-4 max-w-lg mx-auto">
              <Input
                type="email"
                placeholder="Votre adresse email"
                className="border-gray-300 focus:border-black font-light tracking-wide"
              />
              <Button className="bg-black text-white hover:bg-gray-800 px-10 font-light tracking-[0.1em] uppercase">
                S'abonner
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
