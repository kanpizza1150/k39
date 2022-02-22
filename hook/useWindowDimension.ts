import { useState, useEffect, useCallback } from 'react'

export default function useWindowDimensions() {
  const hasWindow = typeof window !== 'undefined'

  const getWindowDimensions = useCallback((): Record<string, number | null> => {
    const width = hasWindow ? window.innerWidth : null
    const height = hasWindow ? window.innerHeight : null
    return {
      width,
      height,
    }
  }, [hasWindow])

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  )
  const handleResize = useCallback((): void => {
    setWindowDimensions(getWindowDimensions())
  }, [getWindowDimensions])

  useEffect(() => {
    if (hasWindow) {
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [hasWindow, handleResize])

  return windowDimensions
}
