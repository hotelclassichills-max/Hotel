import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { siteConfig, telLink, mailLink } from '../data/siteConfig'
import Icon from './Icon'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileRoomsOpen, setMobileRoomsOpen] = useState(false)
  const location = useLocation()

  const isHome = location.pathname === '/'
  const solid = scrolled || !isHome || mobileOpen

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setMobileRoomsOpen(false)
  }, [location.pathname])

  useEffect(() => {
    // Plain `overflow: hidden` on the body does not reliably stop background
    // scrolling on iOS Safari, which is what made the mobile menu feel
    // broken on iPhone (the page behind it would scroll/bounce and touches
    // could miss the menu). Locking with `position: fixed` + restoring the
    // scroll offset afterwards is the reliable cross-browser fix.
    if (mobileOpen) {
      const scrollY = window.scrollY
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.left = '0'
      document.body.style.right = '0'
      document.body.style.width = '100%'
      return () => {
        document.body.style.position = ''
        document.body.style.top = ''
        document.body.style.left = ''
        document.body.style.right = ''
        document.body.style.width = ''
        window.scrollTo(0, scrollY)
      }
    }
  }, [mobileOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-refined ${
        solid ? 'bg-ivory-soft/95 backdrop-blur shadow-soft' : 'bg-transparent'
      }`}
    >
      {/* Top info bar */}
      <div
        className={`hidden min-[980px]:block border-b transition-all duration-500 ease-refined overflow-hidden ${
          solid ? 'border-forest-100 max-h-10 opacity-100' : 'border-ivory/20 max-h-10 opacity-100'
        }`}
      >
        <div className="container-hotel flex items-center justify-between py-2 text-xs tracking-wide">
          <div className={`flex items-center gap-6 ${solid ? 'text-charcoal-light' : 'text-ivory/90'}`}>
            <a href={telLink()} className="flex items-center gap-1.5 hover:text-saffron transition-colors">
              <Icon name="phone" className="w-3.5 h-3.5" />
              {siteConfig.contact.phoneDisplay}
            </a>
            <a href={mailLink()} className="flex items-center gap-1.5 hover:text-saffron transition-colors">
              <Icon name="mail" className="w-3.5 h-3.5" />
              {siteConfig.contact.email}
            </a>
          </div>
          <div className={`flex items-center gap-1.5 ${solid ? 'text-charcoal-light' : 'text-ivory/90'}`}>
            <Icon name="location" className="w-3.5 h-3.5" />
            {siteConfig.location.area}, {siteConfig.location.city}
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container-hotel">
        <div
          className={`flex items-center justify-between transition-all duration-500 ease-refined ${
            solid ? 'py-3.5' : 'py-6'
          }`}
        >
          <Link to="/" className="flex flex-col leading-none group">
            <span
              className={`font-display font-semibold tracking-wide transition-all duration-500 ${
                solid ? 'text-2xl text-forest-800' : 'text-3xl text-ivory'
              }`}
            >
              Hotel Classic Hills
            </span>
            <span
              className={`text-[10px] tracking-widest2 uppercase mt-1 ${
                solid ? 'text-saffron-dark' : 'text-saffron-light'
              }`}
            >
              Bhagsunag &middot; McLeod Ganj
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className={`hidden min-[980px]:flex items-center gap-8 font-sans text-sm tracking-wide ${solid ? 'text-charcoal' : 'text-ivory'}`}>
            {siteConfig.nav.map((item) =>
              item.children ? (
                <div key={item.path} className="relative group py-2">
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `flex items-center gap-1 uppercase tracking-wide transition-colors hover:text-saffron ${
                        isActive ? 'text-saffron' : ''
                      }`
                    }
                  >
                    {item.label}
                    <Icon name="chevronDown" className="w-3.5 h-3.5" />
                  </NavLink>
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-refined">
                    <div className="bg-ivory-soft shadow-soft min-w-[240px] py-2 border-t-2 border-saffron">
                      {item.children.map((child) => (
                        <NavLink
                          key={child.path}
                          to={child.path}
                          className={({ isActive }) =>
                            `block px-5 py-3 text-charcoal text-[13px] tracking-wide uppercase hover:bg-forest-50 hover:text-forest-700 transition-colors ${
                              isActive ? 'text-forest-700 bg-forest-50' : ''
                            }`
                          }
                        >
                          {child.label}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `uppercase tracking-wide transition-colors hover:text-saffron ${isActive ? 'text-saffron' : ''}`
                  }
                >
                  {item.label}
                </NavLink>
              ),
            )}
          </nav>

          <div className="hidden min-[980px]:block">
            <Link to="/contact" className={solid ? 'btn-primary' : 'btn-ghost-light'}>
              Book Now
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className={`min-[980px]:hidden p-2 -mr-2 ${solid ? 'text-forest-800' : 'text-ivory'}`}
          >
            <Icon name={mobileOpen ? 'close' : 'menu'} className="w-7 h-7" />
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`min-[980px]:hidden fixed inset-x-0 top-0 bottom-0 bg-ivory-soft z-40 transition-transform duration-500 ease-refined ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="pt-24 px-6 h-full overflow-y-auto pb-10">
          <nav className="flex flex-col gap-1 font-sans text-base">
            {siteConfig.nav.map((item) =>
              item.children ? (
                <div key={item.path} className="border-b border-forest-100">
                  <button
                    type="button"
                    onClick={() => setMobileRoomsOpen((v) => !v)}
                    className="w-full flex items-center justify-between py-4 uppercase tracking-wide text-charcoal"
                  >
                    {item.label}
                    <Icon
                      name="chevronDown"
                      className={`w-4 h-4 transition-transform ${mobileRoomsOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${mobileRoomsOpen ? 'max-h-64 pb-3' : 'max-h-0'}`}>
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className="block py-2.5 pl-4 text-[15px] text-charcoal-light uppercase tracking-wide"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className="py-4 border-b border-forest-100 uppercase tracking-wide text-charcoal"
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>
          <Link to="/contact" className="btn-primary mt-8 w-full">
            Book Now
          </Link>
          <div className="mt-10 flex flex-col gap-3 text-sm text-charcoal-light">
            <a href={telLink()} className="flex items-center gap-2">
              <Icon name="phone" className="w-4 h-4" /> {siteConfig.contact.phoneDisplay}
            </a>
            <a href={mailLink()} className="flex items-center gap-2">
              <Icon name="mail" className="w-4 h-4" /> {siteConfig.contact.email}
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
