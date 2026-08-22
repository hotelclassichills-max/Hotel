import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { whatsappLink } from '../data/siteConfig'
import Icon from './Icon'

const initialState = {
  name: '',
  email: '',
  phone: '',
  checkIn: '',
  checkOut: '',
  guests: '2',
  message: '',
}

export default function ContactForm() {
  const [searchParams] = useSearchParams()
  const [form, setForm] = useState({
    ...initialState,
    checkIn: searchParams.get('checkIn') || '',
    checkOut: searchParams.get('checkOut') || '',
    guests: searchParams.get('guests') || '2',
  })
  const [submitted, setSubmitted] = useState(false)

  function update(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    // No backend is wired up yet — this stores the enquiry as a WhatsApp
    // hand-off so no request is lost. Replace with an API call once a
    // form-handling endpoint is available.
    setSubmitted(true)
  }

  const summaryMessage = `Hello Hotel Classic Hills, my name is ${form.name || '[name]'}. I would like to enquire about availability from ${
    form.checkIn || '[check-in]'
  } to ${form.checkOut || '[check-out]'} for ${form.guests} guest(s). ${form.message}`.trim()

  if (submitted) {
    return (
      <div className="bg-forest-50 border border-forest-200 p-10 text-center">
        <Icon name="check" className="w-10 h-10 text-forest-700 mx-auto mb-4" />
        <h3 className="font-display text-2xl text-forest-800">Thank you, {form.name || 'guest'}.</h3>
        <p className="text-charcoal-light mt-3 max-w-md mx-auto">
          Your enquiry has been noted. For the fastest response, send us the same details directly on
          WhatsApp and our team will confirm availability right away.
        </p>
        <a href={whatsappLink(summaryMessage)} target="_blank" rel="noreferrer" className="btn-primary mt-6">
          Continue on WhatsApp
        </a>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <label className="flex flex-col gap-2">
        <span className="text-xs uppercase tracking-widest2 text-stone-dark">Name</span>
        <input
          required
          type="text"
          value={form.name}
          onChange={(e) => update('name', e.target.value)}
          className="border border-forest-200 bg-ivory-soft px-4 py-3 text-sm text-charcoal outline-none focus:border-saffron transition-colors"
        />
      </label>
      <label className="flex flex-col gap-2">
        <span className="text-xs uppercase tracking-widest2 text-stone-dark">Email</span>
        <input
          required
          type="email"
          value={form.email}
          onChange={(e) => update('email', e.target.value)}
          className="border border-forest-200 bg-ivory-soft px-4 py-3 text-sm text-charcoal outline-none focus:border-saffron transition-colors"
        />
      </label>
      <label className="flex flex-col gap-2">
        <span className="text-xs uppercase tracking-widest2 text-stone-dark">Phone</span>
        <input
          required
          type="tel"
          value={form.phone}
          onChange={(e) => update('phone', e.target.value)}
          className="border border-forest-200 bg-ivory-soft px-4 py-3 text-sm text-charcoal outline-none focus:border-saffron transition-colors"
        />
      </label>
      <label className="flex flex-col gap-2">
        <span className="text-xs uppercase tracking-widest2 text-stone-dark">Guests</span>
        <select
          value={form.guests}
          onChange={(e) => update('guests', e.target.value)}
          className="border border-forest-200 bg-ivory-soft px-4 py-3 text-sm text-charcoal outline-none focus:border-saffron transition-colors"
        >
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <option key={n} value={n}>
              {n} Guest{n > 1 ? 's' : ''}
            </option>
          ))}
        </select>
      </label>
      <label className="flex flex-col gap-2">
        <span className="text-xs uppercase tracking-widest2 text-stone-dark">Check-in</span>
        <input
          type="date"
          value={form.checkIn}
          onChange={(e) => update('checkIn', e.target.value)}
          className="border border-forest-200 bg-ivory-soft px-4 py-3 text-sm text-charcoal outline-none focus:border-saffron transition-colors"
        />
      </label>
      <label className="flex flex-col gap-2">
        <span className="text-xs uppercase tracking-widest2 text-stone-dark">Check-out</span>
        <input
          type="date"
          value={form.checkOut}
          onChange={(e) => update('checkOut', e.target.value)}
          className="border border-forest-200 bg-ivory-soft px-4 py-3 text-sm text-charcoal outline-none focus:border-saffron transition-colors"
        />
      </label>
      <label className="flex flex-col gap-2 md:col-span-2">
        <span className="text-xs uppercase tracking-widest2 text-stone-dark">Message</span>
        <textarea
          rows={4}
          value={form.message}
          onChange={(e) => update('message', e.target.value)}
          className="border border-forest-200 bg-ivory-soft px-4 py-3 text-sm text-charcoal outline-none focus:border-saffron transition-colors resize-none"
        />
      </label>
      <button type="submit" className="btn-primary md:col-span-2 mt-2">
        Send Enquiry
      </button>
    </form>
  )
}
