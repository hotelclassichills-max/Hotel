import { useEffect, useState } from 'react'
import Reveal from './Reveal'

/**
 * Reusable hero banner. `full` renders a full-viewport homepage hero with
 * scroll indicator; otherwise renders a shorter interior-page hero.
 *
 * Pass a single `image` for a static hero (used on every interior page —
 * unchanged). Pass an `images` array instead to get an automatic,
 * cross-fading slideshow (used on the homepage).
 */
export default function Hero({
  image,
  images,
  eyebrow,
  title,
  subtitle,
  children,
  full = false,
  overlay = 'from-charcoal/70 via-charcoal/45 to-charcoal/55',
  zoom = false,
  slideInterval = 6000,
}) {
  const slides = images && images.length > 0 ? images : image ? [image] : []
  const isSlider = slides.length > 1
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (!isSlider) return
    const id = setInterval(() => {
      setActive((i) => (i + 1) % slides.length)
    }, slideInterval)
    return () => clearInterval(id)
  }, [isSlider, slides.length, slideInterval])

  return (
    <section
      className={`relative w-full flex items-end md:items-center overflow-hidden ${
        full ? 'h-[92vh] min-h-[560px]' : 'h-[52vh] min-h-[380px]'
      }`}
    >
      {slides.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ease-in-out ${
            i === active ? 'opacity-100' : 'opacity-0'
          } ${zoom && i === active ? 'animate-heroZoom' : ''}`}
          fetchpriority={full && i === 0 ? 'high' : undefined}
          loading={full && i === 0 ? 'eager' : 'lazy'}
          aria-hidden={i === active ? undefined : true}
        />
      ))}
      <div className={`absolute inset-0 bg-gradient-to-t ${overlay}`} />
      {zoom && <div className="absolute inset-0 bg-gradient-to-r from-charcoal/25 via-transparent to-transparent" />}
      <div className="relative container-hotel pb-16 md:pb-0 text-ivory">
        <Reveal>
          {eyebrow && (
            <p className="eyebrow text-saffron-light mb-4 [text-shadow:0_1px_8px_rgb(0_0_0_/_55%)]">{eyebrow}</p>
          )}
          <h1
            className={`font-display font-semibold text-ivory [text-shadow:0_2px_16px_rgb(0_0_0_/_45%)] ${full ? 'text-4xl md:text-6xl lg:text-7xl max-w-4xl' : 'text-3xl md:text-5xl max-w-3xl'} leading-[1.08]`}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className={`mt-5 text-ivory/85 font-sans [text-shadow:0_1px_10px_rgb(0_0_0_/_50%)] ${full ? 'text-lg md:text-xl max-w-xl' : 'text-base md:text-lg max-w-xl'}`}
            >
              {subtitle}
            </p>
          )}
          {children && <div className="mt-8 flex flex-wrap gap-4">{children}</div>}
        </Reveal>
      </div>

      {isSlider && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show slide ${i + 1}`}
              aria-current={i === active}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === active ? 'w-6 bg-ivory' : 'w-1.5 bg-ivory/50'
              }`}
            />
          ))}
        </div>
      )}

      {full && !isSlider && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-ivory/70 animate-pulse">
          <span className="text-[10px] uppercase tracking-widest2">Scroll</span>
          <span className="w-px h-10 bg-ivory/50" />
        </div>
      )}
    </section>
  )
}
