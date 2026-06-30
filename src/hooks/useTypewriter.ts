import { useEffect, useState } from 'react'

interface UseTypewriterOptions {
  words: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseTime?: number
}

/**
 * Cycles through an array of words with a typing / deleting animation,
 * used for the Hero section role display.
 */
export function useTypewriter({
  words,
  typingSpeed = 90,
  deletingSpeed = 45,
  pauseTime = 1600,
}: UseTypewriterOptions) {
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[wordIndex % words.length]
    let timeout: number

    if (!isDeleting && text === currentWord) {
      timeout = window.setTimeout(() => setIsDeleting(true), pauseTime)
    } else if (isDeleting && text === '') {
      setIsDeleting(false)
      setWordIndex((prev) => (prev + 1) % words.length)
    } else {
      timeout = window.setTimeout(
        () => {
          setText((prev) =>
            isDeleting ? currentWord.slice(0, prev.length - 1) : currentWord.slice(0, prev.length + 1)
          )
        },
        isDeleting ? deletingSpeed : typingSpeed
      )
    }

    return () => window.clearTimeout(timeout)
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime])

  return text
}
