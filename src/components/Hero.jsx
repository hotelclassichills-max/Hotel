import Reveal from './Reveal'

/**
 * Reusable hero banner. `full` renders a full-viewport homepage hero with
 * scroll indicator; otherwise renders a shorter interior-page hero.
 *
 * `fit` controls how the image is displayed:
 *  - 'cover' (default): fills the section edge-to-edge, cropping as needed.
 *    Used by every page except the homepage — unchanged from before.
 *  - 'contain': the complete, uncropped image is shown letterboxed on a
 *    solid brand-colour backdrop. Used only for the homepage hero, where
 *    the source photo must be displayed in full with no cropping.
 */
export default function Hero({
  image,
  eyebrow,
  title,
  subtitle,
  children,
  full = false,
  overlay = 'from-charcoal/70 via-charcoal/35 to-charcoal/55',
  zoom = false,
  fit = 'cover',
}) {
  return (
    <section
      className={`relative w-full flex items-end md:items-center overflow-hidden ${
        fit === 'contain' ? 'bg-charcoal' : ''
      } ${full ? 'h-[92vh] min-h-[560px]' : 'h-[52vh] min-h-[380px]'}`}
    >
      <img
        src={image}
        alt=""
        className={`absolute inset-0 w-full h-full ${
          fit === 'contain' ? 'object-contain' : 'object-cover'
        } ${zoom ? 'animate-heroZoom' : ''}`}
        fetchpriority={full ? 'high' : undefined}
        loading={full ? 'eager' : 'lazy'}
      />
      <div className={`absolute inset-0 bg-gradient-to-t ${overlay}`} />
      {zoom && <div className="absolute inset-0 bg-gradient-to-r from-charcoal/25 via-transparent to-transparent" />}
      <div className="relative container-hotel pb-16 md:pb-0 text-ivory">
        <Reveal>
          {eyebrow && (
            <p
              className={`eyebrow text-saffron-light mb-4 ${fit === 'contain' ? '[text-shadow:0_2px_10px_rgba(0,0,0,0.65)]' : ''}`}
            >
              {eyebrow}
            </p>
          )}
          <h1
            className={`font-display font-semibold text-ivory ${full ? 'text-4xl md:text-6xl lg:text-7xl max-w-4xl' : 'text-3xl md:text-5xl max-w-3xl'} leading-[1.08] ${
              fit === 'contain' ? '[text-shadow:0_2px_16px_rgba(0,0,0,0.7)]' : ''
            }`}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className={`mt-5 text-ivory/85 font-sans ${full ? 'text-lg md:text-xl max-w-xl' : 'text-base md:text-lg max-w-xl'} ${
                fit === 'contain' ? '[text-shadow:0_2px_10px_rgba(0,0,0,0.65)]' : ''
              }`}
            >
              {subtitle}
            </p>
          )}
          {children && <div className="mt-8 flex flex-wrap gap-4">{children}</div>}
        </Reveal>
      </div>

      {full && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-ivory/70 animate-pulse">
          <span className="text-[10px] uppercase tracking-widest2">Scroll</span>
          <span className="w-px h-10 bg-ivory/50" />
        </div>
      )}
    </section>
  )
}
