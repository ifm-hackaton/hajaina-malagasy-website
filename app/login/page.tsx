"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useRouter } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"

// Login Component
const LoginForm = ({ onError, users }: any) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()


  const handleLogin = (e: any) => {
    e.preventDefault()
    onError("")

    if (!email || !password) {
      onError("Veuillez remplir tous les champs.")
      return
    }

    const user = users.find(
      (u: any) => u.email === email && u.password === password
    )

    if (user) {
      localStorage.setItem("isLoggedIn", "true")
      localStorage.setItem("userRole", 'creator')
      localStorage.setItem("userEmail", email)
      router.push("/dashboard")
    } else {
      onError("Email ou mot de passe incorrect.")
    }
  }


  return (
    <form onSubmit={handleLogin} className="space-y-6 mt-6">
      <div className="space-y-2">
        <Label htmlFor="loginEmail" className="font-light tracking-wide">
          Email
        </Label>
        <Input
          id="loginEmail"
          type="email"
          placeholder="votre@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border-gray-300 focus:border-black font-light"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="loginPassword" className="font-light tracking-wide">
          Mot de passe
        </Label>
        <Input
          id="loginPassword"
          type="password"
          placeholder="********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="border-gray-300 focus:border-black font-light"
        />
      </div>
      <Button
        type="submit"
        className="w-full bg-black text-white hover:bg-gray-800 font-light tracking-[0.1em] uppercase py-3"
      >
        Se connecter
      </Button>
      <p className="text-center text-sm text-gray-500 mt-6 font-light">
        Test : <span className="font-semibold">test@example.com</span> / <span className="font-semibold">password123</span>
      </p>
    </form>
  )
}

// Step 1: Role Selection
const RoleSelectionStep = ({ role, setRole, onNext }: any) => {
  const handleNext = () => {
    if (!role) return
    onNext()
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-lg font-light tracking-wide mb-2">Étape 1/3</h3>
        <p className="text-sm text-gray-600">Quel est votre profil ?</p>
      </div>
      
      <div className="space-y-2">
        <Label className="font-light tracking-wide">Vous êtes : *</Label>
        <Select value={role} onValueChange={setRole}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Sélectionnez votre profil" />
          </SelectTrigger>
          <SelectContent className="z-10 bg-white">
            <SelectItem value="createur">Créateur de mode</SelectItem>
            <SelectItem value="prestataire">Artisant / Prestataire</SelectItem>
            <SelectItem value="organisme">Organisme</SelectItem>
            <SelectItem value="amateur">Amateur de mode</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button
        onClick={handleNext}
        disabled={!role}
        className="w-full bg-black text-white hover:bg-gray-800 font-light tracking-[0.1em] uppercase py-3 disabled:bg-gray-300"
      >
        Suivant <ChevronRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  )
}

// Step 2: Personal & Professional Info
const PersonalInfoStep = ({ 
  role, 
  firstName, setFirstName,
  lastName, setLastName,
  companyName, setCompanyName,
  brandName, setBrandName,
  organizationType, setOrganizationType,
  speciality, setSpeciality,
  onNext, onPrev 
}: any) => {
  const handleNext = () => {
    // Basic validation
    if (!firstName || !lastName) return
    
    // Role-specific validation
    if (role === "createur" && !brandName) return
    if ((role === "prestataire" || role === "industrie") && !companyName) return
    if (role === "organisme" && !organizationType) return
    
    onNext()
  }

  const renderRoleFields = () => {
    switch (role) {
      case "createur":
        return (
          <>
            <div className="space-y-2">
              <Label htmlFor="brandName" className="font-light tracking-wide">
                Nom de marque *
              </Label>
              <Input
                id="brandName"
                placeholder="Votre marque"
                value={brandName}
                onChange={(e) => setBrandName(e.target.value)}
                className="border-gray-300 focus:border-black font-light"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="speciality" className="font-light tracking-wide">
                Spécialité
              </Label>
              <Select value={speciality} onValueChange={setSpeciality}>
                <SelectTrigger>
                  <SelectValue placeholder="Votre spécialité" />
                </SelectTrigger>
                <SelectContent className="z-10 bg-white">
                  <SelectItem value="pret-a-porter">Prêt-à-porter</SelectItem>
                  <SelectItem value="haute-couture">Haute couture</SelectItem>
                  <SelectItem value="accessoires">Accessoires</SelectItem>
                  <SelectItem value="chaussures">Chaussures</SelectItem>
                  <SelectItem value="lingerie">Lingerie</SelectItem>
                  <SelectItem value="sport">Vêtements de sport</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </>
        )
      
      case "prestataire":
        return (
          <>
            <div className="space-y-2">
              <Label htmlFor="companyName" className="font-light tracking-wide">
                Nom de l'entreprise *
              </Label>
              <Input
                id="companyName"
                placeholder="Votre entreprise"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="border-gray-300 focus:border-black font-light"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="speciality" className="font-light tracking-wide">
                Type de prestation
              </Label>
              <Select value={speciality} onValueChange={setSpeciality}>
                <SelectTrigger>
                  <SelectValue placeholder="Votre spécialité" />
                </SelectTrigger>
                <SelectContent className="z-10 bg-white">
                  <SelectItem value="artisanat">Artisanat</SelectItem>
                  <SelectItem value="textile">Matières textiles</SelectItem>
                  <SelectItem value="mannequinat">Mannequinat</SelectItem>
                  <SelectItem value="photographie">Photographie</SelectItem>
                  <SelectItem value="technologie">Technologie mode</SelectItem>
                  <SelectItem value="other">Autres</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </>
        )
      
      case "organisme":
        return (
          <div className="space-y-2">
            <Label htmlFor="organizationType" className="font-light tracking-wide">
              Type d'organisme *
            </Label>
            <Select value={organizationType} onValueChange={setOrganizationType}>
              <SelectTrigger>
                <SelectValue placeholder="Type d'organisme" />
              </SelectTrigger>
              <SelectContent className="z-10 bg-white">
                <SelectItem value="agence">Agence</SelectItem>
                <SelectItem value="association">Association</SelectItem>
                <SelectItem value="syndicat">Syndicat</SelectItem>
                <SelectItem value="federation">Fédération</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )
      
      case "amateur":
        return (
          <div className="space-y-2">
            <Label htmlFor="speciality" className="font-light tracking-wide">
              Centres d'intérêt
            </Label>
            <Select value={speciality} onValueChange={setSpeciality}>
              <SelectTrigger>
                <SelectValue placeholder="Vos intérêts mode" />
              </SelectTrigger>
              <SelectContent className="z-10 bg-white">
                <SelectItem value="tendances">Tendances mode</SelectItem>
                <SelectItem value="vintage">Mode vintage</SelectItem>
                <SelectItem value="luxe">Mode de luxe</SelectItem>
                <SelectItem value="streetwear">Streetwear</SelectItem>
                <SelectItem value="durable">Mode durable</SelectItem>
                <SelectItem value="defiles">Défilés</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )
      
      default:
        return null
    }
  }

  const isValid = () => {
    if (!firstName || !lastName) return false
    if (role === "createur" && !brandName) return false
    if ((role === "prestataire" || role === "industrie") && !companyName) return false
    if (role === "organisme" && !organizationType) return false
    return true
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-lg font-light tracking-wide mb-2">Étape 2/3</h3>
        <p className="text-sm text-gray-600">Informations personnelles</p>
        <Badge variant="outline" className="mt-2 font-light">
          {role === "createur" && "Créateur de mode"}
          {role === "prestataire" && "Prestataire"}
          {role === "industrie" && "Industrie"}
          {role === "organisme" && "Organisme"}
          {role === "amateur" && "Amateur de mode"}
        </Badge>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName" className="font-light tracking-wide">
            Prénom *
          </Label>
          <Input
            id="firstName"
            placeholder="Prénom"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="border-gray-300 focus:border-black font-light"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName" className="font-light tracking-wide">
            Nom *
          </Label>
          <Input
            id="lastName"
            placeholder="Nom"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="border-gray-300 focus:border-black font-light"
          />
        </div>
      </div>

      {renderRoleFields()}

      <div className="flex gap-3">
        <Button
          type="button"
          onClick={onPrev}
          variant="outline"
          className="flex-1 font-light tracking-[0.1em] uppercase py-3"
        >
          <ChevronLeft className="mr-2 h-4 w-4" /> Précédent
        </Button>
        <Button
          onClick={handleNext}
          disabled={!isValid()}
          className="flex-1 bg-black text-white hover:bg-gray-800 font-light tracking-[0.1em] uppercase py-3 disabled:bg-gray-300"
        >
          Suivant <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

// Step 3: Account Creation
const AccountCreationStep = ({ 
  email, setEmail,
  password, setPassword,
  confirmPassword, setConfirmPassword,
  onSubmit, onPrev, isLoading 
}: any) => {
  const handleSubmit = (e: any) => {
    e.preventDefault()
    onSubmit(e)
  }

  const isValid = () => {
    return email && password && confirmPassword && password === confirmPassword
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-lg font-light tracking-wide mb-2">Étape 3/3</h3>
        <p className="text-sm text-gray-600">Création de votre compte</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="signupEmail" className="font-light tracking-wide">
            Email *
          </Label>
          <Input
            id="signupEmail"
            type="email"
            placeholder="votre@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-gray-300 focus:border-black font-light"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="signupPassword" className="font-light tracking-wide">
            Mot de passe *
          </Label>
          <Input
            id="signupPassword"
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-gray-300 focus:border-black font-light"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="confirmPassword" className="font-light tracking-wide">
            Confirmer le mot de passe *
          </Label>
          <Input
            id="confirmPassword"
            type="password"
            placeholder="********"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="border-gray-300 focus:border-black font-light"
          />
        </div>

        <div className="flex gap-3 pt-4">
          <Button
            type="button"
            onClick={onPrev}
            variant="outline"
            className="flex-1 font-light tracking-[0.1em] uppercase py-3"
          >
            <ChevronLeft className="mr-2 h-4 w-4" /> Précédent
          </Button>
          <Button
            type="submit"
            disabled={!isValid() || isLoading}
            className="flex-1 bg-black text-white hover:bg-gray-800 font-light tracking-[0.1em] uppercase py-3 disabled:bg-gray-300"
          >
            {isLoading ? "Création..." : "Créer le compte"}
          </Button>
        </div>
      </form>
    </div>
  )
}

// Multi-step Signup Component
const SignupForm = ({ onError, onSignup }: any) => {
  const [currentStep, setCurrentStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  
  // Form state
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [role, setRole] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [companyName, setCompanyName] = useState("")
  const [brandName, setBrandName] = useState("")
  const [organizationType, setOrganizationType] = useState("")
  const [speciality, setSpeciality] = useState("")

  const handleSubmit = (e: any) => {
    e.preventDefault()
    onError("")
    setIsLoading(true)

    if (password !== confirmPassword) {
      onError("Les mots de passe ne correspondent pas.")
      setIsLoading(false)
      return
    }

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      onSignup({
        email,
        password,
        role,
      })
      alert("Inscription réussie ! Vous pouvez maintenant vous connecter.")
      // Reset form or redirect
    }, 2000)
  }

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 3))
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1))

  return (
    <div className="mt-6">
      {currentStep === 1 && (
        <RoleSelectionStep
          role={role}
          setRole={setRole}
          onNext={nextStep}
        />
      )}

      {currentStep === 2 && (
        <PersonalInfoStep
          role={role}
          firstName={firstName}
          setFirstName={setFirstName}
          lastName={lastName}
          setLastName={setLastName}
          companyName={companyName}
          setCompanyName={setCompanyName}
          brandName={brandName}
          setBrandName={setBrandName}
          organizationType={organizationType}
          setOrganizationType={setOrganizationType}
          speciality={speciality}
          setSpeciality={setSpeciality}
          onNext={nextStep}
          onPrev={prevStep}
        />
      )}

      {currentStep === 3 && (
        <AccountCreationStep
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          confirmPassword={confirmPassword}
          setConfirmPassword={setConfirmPassword}
          onSubmit={handleSubmit}
          onPrev={prevStep}
          isLoading={isLoading}
        />
      )}
    </div>
  )
}

// Main Authentication Component
export default function Authentication() {
  const [error, setError] = useState("")

  // State pour les users
  const [users, setUsers] = useState([
    {
      email: "test@example.com",
      password: "password123",
      role: "creator", // ou "createur" selon ta logique
    },
  ])

  // Ajout d'un nouvel utilisateur
  const handleSignup = (newUser: any) => {
    // Vérifie si l'email existe déjà
    if (users.some((u) => u.email === newUser.email)) {
      setError("Cet email est déjà utilisé.")
      return
    }
    setUsers((prev) => [...prev, newUser])
    setError("")
  }

  return (
    <div className="min-h-screen bg-white text-black pt-20">
      <Header />
      <section className="flex items-center justify-center py-24">
        <Card className="w-full max-w-md mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl font-extralight tracking-[0.1em] serif-font text-center">
              Identification
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger className="font-thin" value="login">Connexion</TabsTrigger>
                <TabsTrigger className="font-thin" value="signup">Inscription</TabsTrigger>
              </TabsList>
              
              <TabsContent value="login">
                <LoginForm onError={setError} users={users} />
              </TabsContent>
              
              <TabsContent value="signup">
                <SignupForm onError={setError} onSignup={handleSignup} />
              </TabsContent>
            </Tabs>
            
            {error && <p className="text-red-500 text-sm text-center mt-4">{error}</p>}
          </CardContent>
        </Card>
      </section>
      <Footer />
    </div>
  )
}