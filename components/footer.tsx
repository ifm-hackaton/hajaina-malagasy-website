import Link from "next/link"
import { Instagram, Facebook, Twitter, PinIcon as Pinterest } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand Info */}
        <div className="space-y-4">
          <h3 className="text-3xl font-extralight tracking-[0.1em] serif-font">Haj'Aina</h3>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Mode éthique et durable de Madagascar. Valoriser l'artisanat local et préserver l'environnement.
          </p>
          <div className="flex space-x-4 pt-2">
            <Link href="#" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors">
              <Instagram className="h-6 w-6" />
            </Link>
            <Link href="#" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors">
              <Facebook className="h-6 w-6" />
            </Link>
            <Link href="#" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="h-6 w-6" />
            </Link>
            <Link href="#" aria-label="Pinterest" className="text-gray-400 hover:text-white transition-colors">
              <Pinterest className="h-6 w-6" />
            </Link>
          </div>
        </div>

        {/* Navigation */}
        <div className="space-y-4">
          <h4 className="text-lg font-light tracking-wide mb-4">Navigation</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-gray-400 hover:text-white transition-colors font-light">
                Accueil
              </Link>
            </li>
            <li>
              <Link href="/collections" className="text-gray-400 hover:text-white transition-colors font-light">
                Collections
              </Link>
            </li>
            <li>
              <Link href="/stylistes" className="text-gray-400 hover:text-white transition-colors font-light">
                Stylistes
              </Link>
            </li>
            <li>
              <Link href="/magazine" className="text-gray-400 hover:text-white transition-colors font-light">
                Magazine
              </Link>
            </li>
            <li>
              <Link href="/ethique" className="text-gray-400 hover:text-white transition-colors font-light">
                Mode Éthique
              </Link>
            </li>
            <li>
              <Link href="/recyclage" className="text-gray-400 hover:text-white transition-colors font-light">
                Recyclage
              </Link>
            </li>
          </ul>
        </div>

        {/* Quick Links / Support */}
        <div className="space-y-4">
          <h4 className="text-lg font-light tracking-wide mb-4">Aide & Contact</h4>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors font-light">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors font-light">
                Conditions Générales
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors font-light">
                Politique de Confidentialité
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors font-light">
                Contactez-nous
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="space-y-4">
          <h4 className="text-lg font-light tracking-wide mb-4">Newsletter</h4>
          <p className="text-gray-400 text-sm font-light leading-relaxed mb-4">
            Abonnez-vous pour recevoir nos dernières actualités et offres exclusives.
          </p>
          <div className="flex gap-2">
            <Input
              type="email"
              placeholder="Votre email"
              className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-white font-light"
            />
            <Button className="bg-white text-black hover:bg-gray-200 font-light tracking-[0.1em] uppercase">
              S'abonner
            </Button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm font-light">
        &copy; {new Date().getFullYear()} Haj'Aina. Tous droits réservés.
      </div>
    </footer>
  )
}
