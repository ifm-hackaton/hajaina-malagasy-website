"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Globe, BookOpen, DollarSign, Award, Target, Calendar } from 'lucide-react'
import Image from "next/image"
import Header from "@/components/header"
import { Badge } from "@/components/ui/badge"
import Footer from "@/components/footer"
import { Progress } from "@/components/ui/progress"

export default function EthiquePage() {
  //  Replaced ethics content with Haj'Aina Foundation presentation
  const foundationValues = [
    {
      icon: Heart,
      title: "Préservation Culturelle",
      description: "Sauvegarder et valoriser les traditions artisanales malgaches pour les générations futures.",
    },
    {
      icon: Users,
      title: "Autonomisation Communautaire",
      description: "Créer des opportunités économiques durables pour les artisans et leurs familles.",
    },
    {
      icon: Globe,
      title: "Impact Environnemental",
      description: "Promouvoir des pratiques de mode respectueuses de l'environnement et de la biodiversité.",
    },
    {
      icon: BookOpen,
      title: "Éducation & Formation",
      description: "Transmettre les savoir-faire traditionnels et former aux nouvelles techniques durables.",
    },
  ]

  const foundationImpacts = [
    {
      number: "1,200+",
      label: "Artisans Formés",
      description: "Artisans bénéficiant de nos programmes de formation et d'accompagnement",
    },
    {
      number: "25",
      label: "Villages Partenaires",
      description: "Communautés rurales intégrées dans nos programmes de développement",
    },
    {
      number: "€150K",
      label: "Fonds Collectés",
      description: "Montant total des dons collectés pour nos projets en 2024",
    },
    {
      number: "8",
      label: "Projets Actifs",
      description: "Initiatives en cours de développement à travers Madagascar",
    },
  ]

  const foundationBlogs = [
    {
      id: 1,
      title: "Combat pour la Préservation du Lambas Traditionnel",
      excerpt: "Notre lutte pour sauvegarder l'art ancestral du tissage du lambas face à l'industrialisation moderne.",
      author: "Fondation Haj'Aina",
      date: "15 Décembre 2024",
      badges: ["Tradition", "Artisanat", "Patrimoine"],
      category: "Combat",
      image: '/img/Ethique.jpg'
    },
    {
      id: 2,
      title: "L'Autonomisation des Femmes Rurales par la Mode",
      excerpt: "Comment nos programmes permettent aux femmes des villages de devenir entrepreneures dans la mode éthique.",
      author: "Miora Razafy",
      date: "28 Novembre 2024",
      badges: ["Femmes", "Entrepreneuriat", "Rural"],
      category: "Combat",
      image: '/img/ethique-image.jpg'
    },
    {
      id: 3,
      title: "Les Origines de Haj'Aina : Une Vision Née à Antananarivo",
      excerpt: "Retour sur la création de notre fondation et les valeurs qui nous animent depuis le premier jour.",
      author: "Équipe Fondatrice",
      date: "10 Octobre 2024",
      badges: ["Histoire", "Vision", "Origines"],
      category: "Origines",
      image: '/img/hero-image.jpg'
    },
    {
      id: 4,
      title: "De la Tradition à l'Innovation : Notre Parcours",
      excerpt: "Comment nous avons évolué d'une petite initiative locale à une fondation reconnue internationalement.",
      author: "Hery Randriamampionona",
      date: "22 Septembre 2024",
      badges: ["Innovation", "Évolution", "International"],
      category: "Origines",
      image: '/img/Collab3.jpg'
    },
  ]

  const currentCampaigns = [
    {
      title: "Atelier de Tissage Communautaire",
      description: "Construction d'un centre de formation pour 50 artisanes dans la région d'Antsirabe",
      target: 25000,
      raised: 18750,
      donors: 127,
      daysLeft: 23,
    },
    {
      title: "Préservation des Techniques Ancestrales",
      description: "Documentation et transmission des savoir-faire traditionnels malgaches",
      target: 15000,
      raised: 8200,
      donors: 89,
      daysLeft: 45,
    },
    {
      title: "Équipement pour Coopératives Rurales",
      description: "Fourniture d'outils modernes respectueux des traditions artisanales",
      target: 12000,
      raised: 11400,
      donors: 156,
      daysLeft: 8,
    },
  ]

  return (
    <div className="min-h-screen bg-white text-black pt-20">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10" />
        <Image
          src="/img/ethique-image.jpg"
          alt="Fondation Haj'Aina"
          fill
          className="object-cover"
        />
        <div className="relative z-20 container mx-auto px-6 text-white">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-7xl font-extralight tracking-[0.2em] mb-8 serif-font">
              Fondation Haj'Aina
            </h1>
            <div className="w-32 h-px bg-white mb-10" />
            <p className="text-xl md:text-2xl font-light leading-relaxed mb-12 max-w-3xl">
              Préserver les traditions artisanales malgaches, autonomiser les communautés locales et construire un avenir durable pour la mode éthique à Madagascar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-black hover:bg-green-500 font-light tracking-[0.1em] uppercase px-10 py-4">
                Faire un Don
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-black bg-transparent font-light tracking-[0.1em] uppercase px-10 py-4"
              >
                Nos Combats
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-extralight tracking-[0.2em] mb-6 serif-font">Notre Mission</h2>
            <div className="w-32 h-px bg-black mx-auto mb-8" />
            <p className="text-gray-600 max-w-3xl mx-auto font-light leading-relaxed text-lg">
              La Fondation Haj'Aina œuvre pour la préservation du patrimoine culturel malgache tout en créant des opportunités économiques durables pour les artisans locaux.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {foundationValues.map((value, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-none hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-black" />
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
            <p className="text-white max-w-3xl mx-auto font-light leading-relaxed text-lg">
              Des résultats concrets qui témoignent de notre engagement pour les communautés malgaches.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {foundationImpacts.map((impact, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-extralight mb-4 serif-font">{impact.number}</div>
                <h3 className="text-xl font-light mb-3 tracking-wide">{impact.label}</h3>
                <p className="text-white font-light leading-relaxed text-sm">{impact.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fundraising Campaigns */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-extralight tracking-[0.2em] mb-6 serif-font">Cagnotte en Ligne</h2>
            <div className="w-32 h-px bg-black mx-auto mb-8" />
            <p className="text-gray-600 max-w-3xl mx-auto font-light leading-relaxed text-lg">
              Soutenez nos projets en cours et participez à la transformation des communautés artisanales malgaches.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {currentCampaigns.map((campaign, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Target className="h-5 w-5 text-black" />
                    <Badge variant="outline" className="text-xs">
                      {campaign.daysLeft} jours restants
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-light mb-3 serif-font tracking-wide">{campaign.title}</h3>
                  <p className="text-gray-600 font-light leading-relaxed text-sm mb-6">{campaign.description}</p>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Collecté</span>
                      <span className="font-medium">€{campaign.raised.toLocaleString()} / €{campaign.target.toLocaleString()}</span>
                    </div>
                    
                    <Progress 
                      value={(campaign.raised / campaign.target) * 100} 
                      className="h-2"
                    />
                    
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>{campaign.donors} donateurs</span>
                      <span>{Math.round((campaign.raised / campaign.target) * 100)}% atteint</span>
                    </div>
                    
                    <Button className="w-full bg-black hover:bg-black text-white font-light tracking-[0.1em] uppercase">
                      Contribuer
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Foundation Blog */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-extralight tracking-[0.2em] mb-6 serif-font">Blog Haj'Aina</h2>
            <div className="w-32 h-px bg-black mx-auto mb-8" />
            <p className="text-gray-600 max-w-3xl mx-auto font-light leading-relaxed text-lg">
              Découvrez nos combats, nos origines et les histoires inspirantes de nos artisans partenaires.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {foundationBlogs.map((blog) => (
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
                    <div className="absolute top-4 left-4">
                      <Badge 
                        className={`${blog.category === 'Combat' ? 'bg-black' : 'bg-green-500'} text-white`}
                      >
                        {blog.category}
                      </Badge>
                    </div>
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
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span className="font-light">{blog.date}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              className="border-black text-black hover:bg-black hover:text-white font-light tracking-[0.1em] uppercase px-8 py-3"
            >
              Voir Tous les Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-extralight tracking-[0.2em] mb-6 serif-font">Rejoignez Notre Mission</h2>
          <div className="w-32 h-px bg-white mx-auto mb-8" />
          <p className="text-gray-300 max-w-2xl mx-auto font-light leading-relaxed text-lg mb-12">
            Ensemble, préservons le patrimoine culturel malgache et construisons un avenir durable pour nos artisans.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-black text-white font-light tracking-[0.1em] uppercase px-8 py-3">
              <DollarSign className="h-4 w-4 mr-2" />
              Faire un Don
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black bg-transparent font-light tracking-[0.1em] uppercase px-8 py-3"
            >
              Devenir Bénévole
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
