import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { siteConfig } from '../data/siteConfig'
import Icon from './Icon'

/**
 * Reusable booking/enquiry strip. If siteConfig.bookingEngineUrl is set,
 * "Check Availability" opens the live booking engine in a new tab; until
 * then it routes guests to the Contact page enquiry form pre-filled with
 * their selection so no booking request is lost.
 */
export default function BookingWidget({ floating = false }) {
  const navigate = useNavigate()
  const [form, setForm] = useState({ checkIn: '', checkOut: '', guests: '2', rooms: '1' })

  function update(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (siteConfig.bookingEngineUrl) {
      window.open(siteConfig.bookingEngineUrl, '_blank', 'noopener')
      return
    }
    const params = new URLSearchParams(form).toString()
    navigate(`/contact?${params}`)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`bg-ivory-soft ${
        floating ? 'shadow-soft' : 'shadow-card'
      } border border-forest-100 grid grid-cols-2 md:grid-cols-5 gap-px bg-forest-100`}
    >
      <label className="bg-ivory-soft px-5 py-4 flex flex-col gap-1">
        <span className="text-[11px] uppercase tracking-widest2 text-stone-dark">Check-in</span>
        <input
          type="date"
          value={form.checkIn}
          onChange={(e) => update('checkIn', e.target.value)}
          className="bg-transparent text-sm text-charcoal outline-none"
        />
      </label>
      <label className="bg-ivory-soft px-5 py-4 flex flex-col gap-1">
        <span className="text-[11px] uppercase tracking-widest2 text-stone-dark">Check-out</span>
        <input
          type="date"
          value={form.checkOut}
          onChange={(e) => update('checkOut', e.target.value)}
          className="bg-transparent text-sm text-charcoal outline-none"
        />
      </label>
      <label className="bg-ivory-soft px-5 py-4 flex flex-col gap-1">
        <span className="text-[11px] uppercase tracking-widest2 text-stone-dark">Guests</span>
        <select
          value={form.guests}
          onChange={(e) => update('guests', e.target.value)}
          className="bg-transparent text-sm text-charcoal outline-none"
        >
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <option key={n} value={n}>
              {n} Guest{n > 1 ? 's' : ''}
            </option>
          ))}
        </select>
      </label>
      <label className="bg-ivory-soft px-5 py-4 flex flex-col gap-1">
        <span className="text-[11px] uppercase tracking-widest2 text-stone-dark">Rooms</span>
        <select
          value={form.rooms}
          onChange={(e) => update('rooms', e.target.value)}
          className="bg-transparent text-sm text-charcoal outline-none"
        >
          {[1, 2, 3, 4].map((n) => (
            <option key={n} value={n}>
              {n} Room{n > 1 ? 's' : ''}
            </option>
          ))}
        </select>
      </label>
      <button type="submit" className="bg-forest-700 text-ivory-soft flex items-center justify-center gap-2 px-5 py-4 text-sm uppercase tracking-wide font-semibold hover:bg-forest-800 transition-colors">
        Check Availability
        <Icon name="arrowRight" className="w-4 h-4" />
      </button>
    </form>
  )
}
