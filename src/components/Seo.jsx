import { useEffect } from 'react'
import { siteConfig } from '../data/siteConfig'

function setMeta(name, content, attr = 'name') {
  if (!content) return
  let el = document.head.querySelector(`meta[${attr}="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setCanonical(path) {
  let el = document.head.querySelector('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', `https://www.hotelclassichills.com${path}`)
}

function setJsonLd(id, data) {
  let el = document.getElementById(id)
  if (!el) {
    el = document.createElement('script')
    el.id = id
    el.type = 'application/ld+json'
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(data)
}

/**
 * Lightweight, dependency-free per-page SEO manager: sets title, meta
 * description, canonical URL, Open Graph / Twitter tags, and optional
 * structured data — without pulling in react-helmet.
 */
export default function Seo({ title, description, path = '/', image, structuredData }) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${siteConfig.hotelName}` : siteConfig.hotelName
    document.title = fullTitle

    setMeta('description', description)
    setCanonical(path)

    setMeta('og:title', fullTitle, 'property')
    setMeta('og:description', description, 'property')
    setMeta('og:type', 'website', 'property')
    setMeta('og:url', `https://www.hotelclassichills.com${path}`, 'property')
    if (image) setMeta('og:image', image, 'property')

    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', fullTitle)
    setMeta('twitter:description', description)
    if (image) setMeta('twitter:image', image)

    if (structuredData) {
      setJsonLd('page-structured-data', structuredData)
    }
  }, [title, description, path, image, structuredData])

  return null
}
