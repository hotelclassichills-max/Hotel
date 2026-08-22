import { useEffect, useRef } from 'react'
import Icon from './Icon'

export default function GalleryLightbox({ images, activeIndex, onClose, onNavigate }) {
  const touchStartX = useRef(null)
  const active = images[activeIndex]

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNavigate(1)
      if (e.key === 'ArrowLeft') onNavigate(-1)
    }
    window.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose, onNavigate])

  if (!active) return null

  function handleTouchStart(e) {
    touchStartX.current = e.touches[0].clientX
  }

  function handleTouchEnd(e) {
    if (touchStartX.current === null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(delta) > 50) {
      onNavigate(delta < 0 ? 1 : -1)
    }
    touchStartX.current = null
  }

  return (
    <div
      className="fixed inset-0 z-[60] bg-charcoal/97 flex items-center justify-center"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery viewer"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close gallery"
        className="absolute top-6 right-6 text-ivory/80 hover:text-saffron transition-colors z-10"
      >
        <Icon name="close" className="w-8 h-8" />
      </button>

      <button
        type="button"
        onClick={() => onNavigate(-1)}
        aria-label="Previous image"
        className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 text-ivory/70 hover:text-saffron transition-colors z-10"
      >
        <Icon name="chevronRight" className="w-9 h-9 rotate-180" />
      </button>

      <figure key={active.id} className="max-w-5xl max-h-[85vh] px-16 animate-fadeUp">
        <img
          src={active.src}
          alt={active.alt}
          className="max-w-full max-h-[75vh] object-contain mx-auto"
        />
        <figcaption className="text-center text-ivory/70 text-sm mt-4 tracking-wide">
          {active.alt} &middot; {activeIndex + 1} / {images.length}
        </figcaption>
      </figure>

      <button
        type="button"
        onClick={() => onNavigate(1)}
        aria-label="Next image"
        className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 text-ivory/70 hover:text-saffron transition-colors z-10"
      >
        <Icon name="chevronRight" className="w-9 h-9" />
      </button>
    </div>
  )
}
