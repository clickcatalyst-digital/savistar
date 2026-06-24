// src/components/portfolio/Lightbox.jsx
'use client'

import { useEffect, useCallback, useState } from 'react'
import { CldImage } from 'next-cloudinary'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

// images: array of Cloudinary public_ids. index: number|null. setIndex: state setter.
export default function Lightbox({ images = [], index, setIndex, captions = [], alt = '' }) {
  const open = index !== null && index !== undefined && index >= 0
  const close = useCallback(() => setIndex(null), [setIndex])
  const prev = useCallback(() => setIndex((i) => (i - 1 + images.length) % images.length), [images.length, setIndex])
  const next = useCallback(() => setIndex((i) => (i + 1) % images.length), [images.length, setIndex])
  const [touchX, setTouchX] = useState(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      else if (e.key === 'ArrowLeft') prev()
      else if (e.key === 'ArrowRight') next()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, close, prev, next])

  if (!open) return null

  const onTouchStart = (e) => setTouchX(e.touches[0].clientX)
  const onTouchEnd = (e) => {
    if (touchX === null) return
    const dx = e.changedTouches[0].clientX - touchX
    if (dx > 50) prev()
    else if (dx < -50) next()
    setTouchX(null)
  }

  return (
    <div
      className="fixed inset-0 z-[80] bg-black/90 flex items-center justify-center p-4"
      onClick={close}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      role="dialog"
      aria-modal="true"
    >
      <button aria-label="Close" onClick={close} className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors">
        <X className="w-5 h-5" />
      </button>
      {images.length > 1 && (
        <>
          <button aria-label="Previous" onClick={(e) => { e.stopPropagation(); prev() }} className="absolute left-3 sm:left-6 z-10 w-11 h-11 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button aria-label="Next" onClick={(e) => { e.stopPropagation(); next() }} className="absolute right-3 sm:right-6 z-10 w-11 h-11 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors">
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}
      <div className="relative w-full max-w-5xl h-[78vh]" onClick={(e) => e.stopPropagation()}>
        <CldImage
          src={images[index]}
          alt={captions[index] || `${alt} — ${index + 1}`}
          fill
          crop="fit"
          className="object-contain"
          sizes="100vw"
        />
      </div>
      {captions[index] && (
        <p className="absolute bottom-5 left-0 right-0 text-center text-white/80 text-sm px-4">{captions[index]}</p>
      )}
    </div>
  )
}
