"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { LogOut, Menu, X, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAnimation } from "@/animations"

function useHeaderState() {
  const pathname = usePathname()
  const router = useRouter()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [atTop, setAtTop] = useState(true)

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true")

    const onScroll = () => {
      setAtTop(window.scrollY < window.innerHeight)
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [pathname])

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn")
    localStorage.removeItem("userRole")
    localStorage.removeItem("userEmail")
    setIsLoggedIn(false)
    router.push("/")
  }

  const shouldInvert = pathname === "/" && atTop

  return { isLoggedIn, isActive, handleLogout, shouldInvert }
}

export function HeaderDesktop() {
  const { isLoggedIn, isActive, handleLogout, shouldInvert } = useHeaderState()

  return (
    <header
      className={`header gsap-element hidden md:block fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100 ${
        shouldInvert ? "invert" : ""
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-light tracking-[0.2em] serif-font">
            <img src="/logo-transparent.png" alt="Haj'Aina" className="w-auto h-[40px]" />
          </Link>

          <nav className="flex space-x-8">
            {[
              ["/", "Couverture"],
              ["/collections", "Collections"],
              ["/stylistes", "Stylistes"],
              ["/ethique", "Éthique"],
              ["/recyclage", "Recyclage"],
              ["/magazine", "Magazine"],
            ].map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className={`text-xs font-light tracking-[0.15em] transition-colors uppercase ${
                  isActive(href) ? "text-black" : "hover:text-gray-600"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <>
                <Link href="/dashboard">
                  <Button variant="ghost" size="sm" className="text-xs tracking-[0.1em] font-light uppercase">
                    Mon Compte
                  </Button>
                </Link>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleLogout}
                  className="text-xs tracking-[0.1em] font-light uppercase"
                >
                  Déconnexion
                  <LogOut className="ml-2 h-4 w-4" />
                </Button>
              </>
            ) : (
              <Link href="/login">
                <Button variant="ghost" size="sm" className="text-xs tracking-[0.1em] font-light uppercase">
                  Connexion
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export function HeaderMobile() {
  const { isLoggedIn, isActive, handleLogout, shouldInvert } = useHeaderState()
  const [open, setOpen] = useState(false)

  return (
    <header
      className={`header gsap-element block md:hidden fixed top-0 w-full z-50 border-b border-gray-100 ${
        shouldInvert ? "invert bg-white backdrop-blur-sm" : "bg-white backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center justify-between px-4 py-4">
        <Link href="/" className="text-xl font-light tracking-[0.2em] serif-font">
          <img src="/logo-transparent.png" alt="Haj'Aina" className="h-[36px]" />
        </Link>
        <button onClick={() => setOpen(!open)} aria-label="Toggle Menu">
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <>
          <div className="fixed inset-0 z-40 h-screen w-screen bg-gray-50/50 backdrop-blur-xl" onClick={() => setOpen(false)} />
          <div className="fixed top-0 right-0 w-3/4 h-screen z-50 bg-white p-6 flex flex-col gap-6 transition-transform duration-300">
            <nav className="flex flex-col space-y-5 text-sm uppercase font-light tracking-[0.15em]">
              {[
                ["/", "Couverture"],
                ["/collections", "Collections"],
                ["/stylistes", "Stylistes"],
                ["/ethique", "Éthique"],
                ["/recyclage", "Recyclage"],
                ["/magazine", "Magazine"],
              ].map(([href, label]) => (
                <Link
                  key={href}
                  href={href}
                  className={`${isActive(href) ? "text-black font-semibold" : "text-gray-600"} transition-colors`}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </nav>
            <div className="mt-auto pt-6 border-t border-gray-200">
              {isLoggedIn ? (
                <>
                  <Link href="/dashboard" onClick={() => setOpen(false)}>
                    <Button variant="ghost" className="w-full text-xs uppercase font-light tracking-widest">
                      Mon Compte
                      <User className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Button
                    variant="ghost"
                    onClick={() => {
                      handleLogout()
                      setOpen(false)
                    }}
                    className="w-full text-xs uppercase font-light tracking-widest"
                  >
                    Déconnexion
                    <LogOut className="ml-2 h-4 w-4" />
                  </Button>
                </>
              ) : (
                <Link href="/login" onClick={() => setOpen(false)}>
                  <Button variant="ghost" className="w-full text-xs uppercase font-light tracking-widest">
                    Connexion
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </>
      )}
    </header>
  )
}

export default function Header() {
  return (
    <>
      <HeaderDesktop />
      <HeaderMobile />
    </>
  )
}
