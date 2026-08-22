import { whatsappLink } from '../data/siteConfig'

/**
 * The ONLY floating WhatsApp button in the application. Rendered once from
 * App.jsx. Do not add a second instance anywhere else in the project.
 */
export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Hotel Classic Hills on WhatsApp"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-soft hover:scale-105 transition-transform duration-300 ease-refined"
    >
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor" aria-hidden="true">
        <path d="M20 4A10 10 0 0 0 4.6 17.3L3 21l3.8-1.6A10 10 0 1 0 20 4Zm-8 15.4a8.3 8.3 0 0 1-4.2-1.1l-.3-.2-2.5 1 .9-2.5-.2-.3A8.4 8.4 0 1 1 12 19.4Zm4.5-6.3c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1s-.6.7-.7.9-.3.2-.5.1a6.9 6.9 0 0 1-3.4-3 .5.5 0 0 1 .1-.6c.1-.1.2-.3.4-.4a1.6 1.6 0 0 0 .3-.4.5.5 0 0 0 0-.5c-.1-.1-.5-1.2-.7-1.7s-.4-.4-.5-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 12 12 0 0 0 4.6 4.1c.6.3 1.1.4 1.5.5a3.6 3.6 0 0 0 1.6.1 2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .1-1.3c-.1-.1-.2-.2-.4-.3Z" />
      </svg>
      <span className="sr-only">Enquire on WhatsApp</span>
    </a>
  )
}
