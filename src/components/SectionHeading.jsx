import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, subtitle, align = 'center', dark = false }) {
  const alignment = align === 'center' ? 'text-center items-center mx-auto' : 'text-left items-start'
  return (
    <Reveal as="div" className={`flex flex-col ${alignment} max-w-2xl`}>
      {eyebrow && <p className={`eyebrow mb-4 ${dark ? 'text-saffron-light' : 'text-saffron-dark'}`}>{eyebrow}</p>}
      <h2 className={`font-display text-3xl md:text-[2.75rem] leading-[1.1] ${dark ? 'text-ivory' : 'text-forest-800'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-5 text-base leading-relaxed ${dark ? 'text-ivory/75' : 'text-charcoal-light'}`}>{subtitle}</p>
      )}
    </Reveal>
  )
}
