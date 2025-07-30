"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Handshake } from "lucide-react"

export const ManajaButton = () => {
  const [clicked, setClicked] = useState(false)
  const className = `font-light tracking-[0.1em] uppercase px-8 py-3 border-gray-300 hover:border-black bg-transparent
        ${clicked && "bg-green-600 text-gray-200 border-gray-400 hover:bg-gray-400 hover:text-gray-200 hover:border-gray-400"}`

  return (
    <Button
      variant="outline"
      onClick={() => setClicked(!clicked)}
      className={className}
    >
      {!clicked ? <Handshake className="mr-2 h-4 w-4" /> :""}
      {clicked ? "Hajaina":"Manaja"}
    </Button>
  )
}