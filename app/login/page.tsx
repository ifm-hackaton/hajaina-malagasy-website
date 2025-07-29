"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useRouter } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer" // Added import

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState("creator") // Default role
  const [error, setError] = useState("")
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!email || !password) {
      setError("Veuillez remplir tous les champs.")
      return
    }

    // Simulate authentication
    // In a real app, you would send these credentials to a backend API
    if (email === "test@example.com" && password === "password") {
      localStorage.setItem("isLoggedIn", "true")
      localStorage.setItem("userRole", "creator")
      localStorage.setItem("userEmail", email)
      router.push("/dashboard")
    } else {
      setError("Email ou mot de passe incorrect.")
    }
  }

  return (
    <div className="min-h-screen bg-white text-black pt-20">
      <Header />
      <section className="flex items-center justify-center py-24">
        <Card className="w-full max-w-md mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl font-extralight tracking-[0.1em] serif-font text-center">
              Connexion
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="font-light tracking-wide">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="votre@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="border-gray-300 focus:border-black font-light"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="font-light tracking-wide">
                  Mot de passe
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="border-gray-300 focus:border-black font-light"
                />
              </div>
              <div className="space-y-2">
                <Label className="font-light tracking-wide">Vous êtes :</Label>
                <RadioGroup value={role} onValueChange={setRole} className="flex space-x-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="creator" id="creator" />
                    <Label htmlFor="creator" className="font-light">
                      Créateur
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="amateur" id="amateur" />
                    <Label htmlFor="amateur" className="font-light">
                      Prestataire
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="amateur" id="amateur" />
                    <Label htmlFor="amateur" className="font-light">
                      Amateur de mode
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              {error && <p className="text-red-500 text-sm text-center">{error}</p>}
              <Button
                type="submit"
                className="w-full bg-black text-white hover:bg-gray-800 font-light tracking-[0.1em] uppercase py-3"
              >
                Se connecter
              </Button>
            </form>
            <p className="text-center text-sm text-gray-500 mt-6 font-light">
              Pour tester : Email: <span className="font-semibold">test@example.com</span>, Mot de passe:{" "}
              <span className="font-semibold">password</span>
            </p>
          </CardContent>
        </Card>
      </section>
      <Footer /> {/* Added Footer */}
    </div>
  )
}
