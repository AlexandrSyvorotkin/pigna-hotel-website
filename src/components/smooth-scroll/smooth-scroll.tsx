import { useEffect } from 'react'

export const SmoothScroll = () => {
  // useEffect(() => {
  //   let target = 0
  //   let current = 0
  //   const ease = 0.2 // Увеличьте это значение для более быстрого скролла

  //   const smoothScroll = (e: WheelEvent) => {
  //     e.preventDefault()
  //     target += e.deltaY * 1.5 // Увеличьте множитель для более быстрого скролла
  //   }

  //   const lerp = (start: number, end: number, factor: number) => {
  //     return start + (end - start) * factor
  //   }

  //   const animate = () => {
  //     current = lerp(current, target, ease)
      
  //     window.scrollTo(0, current)
  //     requestAnimationFrame(animate)
  //   }

  //   window.addEventListener('wheel', smoothScroll, { passive: false })
  //   requestAnimationFrame(animate)

  //   return () => {
  //     window.removeEventListener('wheel', smoothScroll)
  //   }
  // }, [])

  return null
}