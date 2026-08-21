import { Link } from 'react-router-dom'
import { siteConfig, telLink, mailLink } from '../data/siteConfig'
import Icon from './Icon'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-forest-800 text-ivory/85">
      <div className="container-hotel pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="font-display text-2xl text-ivory">Hotel Classic Hills</h3>
            <p className="mt-4 text-sm leading-relaxed text-ivory/70 max-w-xs">
              A comfortable, mountain-view hotel in Bhagsunag, McLeod Ganj — your relaxed base for
              exploring Dharamshala and the wider Kangra region.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Hotel Classic Hills on Instagram"
                className="w-9 h-9 flex items-center justify-center border border-ivory/25 hover:border-saffron hover:text-saffron transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                  <path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 2.05.25 2.5.42.6.24 1 .52 1.45.97.44.44.72.85.96 1.45.18.45.37 1.3.42 2.5.07 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.05 1.2-.24 2.05-.42 2.5-.24.6-.52 1-.96 1.45-.45.44-.85.72-1.45.96-.45.18-1.3.37-2.5.42-1.3.07-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.2-.05-2.05-.24-2.5-.42-.6-.24-1-.52-1.45-.96-.44-.45-.72-.85-.97-1.45-.17-.45-.36-1.3-.42-2.5C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.06-1.2.25-2.05.42-2.5.25-.6.53-1 .97-1.45.45-.45.85-.73 1.45-.97.45-.17 1.3-.36 2.5-.42C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.15 0-3.52 0-4.76.07-1.02.05-1.58.22-1.95.36-.49.19-.84.42-1.2.79-.38.37-.6.71-.8 1.2-.13.37-.3.93-.36 1.95C2.8 8.48 2.8 8.85 2.8 12s0 3.52.13 4.63c.06 1.02.23 1.58.37 1.95.2.49.42.84.8 1.2.36.38.7.6 1.2.8.36.13.92.3 1.94.36 1.24.06 1.6.07 4.76.07s3.52 0 4.76-.07c1.02-.06 1.58-.23 1.95-.36.49-.2.84-.42 1.2-.8.37-.36.6-.71.8-1.2.13-.37.3-.93.36-1.95.06-1.11.07-1.48.07-4.63s0-3.52-.07-4.63c-.06-1.02-.23-1.58-.37-1.95a3.2 3.2 0 0 0-.8-1.2 3.2 3.2 0 0 0-1.2-.8c-.36-.13-.92-.3-1.94-.36-1.24-.06-1.6-.07-4.76-.07ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.8a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4Zm5.2-2a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z" />
                </svg>
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Hotel Classic Hills on Facebook"
                className="w-9 h-9 flex items-center justify-center border border-ivory/25 hover:border-saffron hover:text-saffron transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                  <path d="M13.5 21v-7.6h2.55l.38-2.96h-2.93V8.55c0-.86.24-1.44 1.47-1.44h1.57V4.46c-.27-.04-1.2-.12-2.28-.12-2.26 0-3.8 1.38-3.8 3.9v2.19H7.99v2.96h2.47V21h3.04Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-ivory text-sm uppercase tracking-widest2 mb-5">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {siteConfig.footerLinks.quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-ivory/70 hover:text-saffron transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-ivory text-sm uppercase tracking-widest2 mb-5">Rooms</h4>
            <ul className="space-y-3 text-sm">
              {siteConfig.nav
                .find((item) => item.path === '/rooms')
                .children.map((room) => (
                  <li key={room.path}>
                    <Link to={room.path} className="text-ivory/70 hover:text-saffron transition-colors">
                      {room.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="text-ivory text-sm uppercase tracking-widest2 mb-5">Contact</h4>
            <ul className="space-y-3 text-sm text-ivory/70">
              <li className="flex items-start gap-2.5">
                <Icon name="phone" className="w-4 h-4 mt-0.5 flex-shrink-0 text-saffron" />
                <a href={telLink()} className="hover:text-saffron transition-colors">
                  {siteConfig.contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Icon name="mail" className="w-4 h-4 mt-0.5 flex-shrink-0 text-saffron" />
                <a href={mailLink()} className="hover:text-saffron transition-colors break-all">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Icon name="location" className="w-4 h-4 mt-0.5 flex-shrink-0 text-saffron" />
                <span>{siteConfig.location.addressLine}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="divider-contour my-10 opacity-40" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-ivory/55">
          <p>&copy; {year} Hotel Classic Hills. All rights reserved.</p>
          <div className="flex items-center gap-6">
            {siteConfig.footerLinks.legal.map((link) => (
              <Link key={link.path} to={link.path} className="hover:text-saffron transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
