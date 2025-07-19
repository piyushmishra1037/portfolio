"use client"

import { useState, useEffect } from "react"

interface TypingEffectProps {
  phrases: string[]
  typingSpeed?: number
  deletingSpeed?: number
  delay?: number
}

export function TypingEffect({ phrases, typingSpeed = 100, deletingSpeed = 50, delay = 1500 }: TypingEffectProps) {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    let timer: NodeJS.Timeout
    const currentFullPhrase = phrases[currentPhraseIndex]

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing
        setCurrentText((prev) => currentFullPhrase.substring(0, prev.length + 1))
        if (currentText.length === currentFullPhrase.length) {
          setIsDeleting(true)
          timer = setTimeout(handleTyping, delay)
        } else {
          timer = setTimeout(handleTyping, typingSpeed)
        }
      } else {
        // Deleting
        setCurrentText((prev) => currentFullPhrase.substring(0, prev.length - 1))
        if (currentText.length === 0) {
          setIsDeleting(false)
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length)
          timer = setTimeout(handleTyping, 500) // Short delay before typing next phrase
        } else {
          timer = setTimeout(handleTyping, deletingSpeed)
        }
      }
    }

    timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed)

    return () => clearTimeout(timer)
  }, [currentText, isDeleting, currentPhraseIndex, phrases, typingSpeed, deletingSpeed, delay])

  return <span className="font-mono">{currentText}</span>
}
