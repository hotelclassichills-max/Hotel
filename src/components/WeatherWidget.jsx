import { useState } from 'react'
import Icon from './Icon'

/**
 * Elegant floating weather toggle. Positioned above the WhatsApp button
 * (bottom-24) so the two floating controls never overlap.
 *
 * Note: this ships with placeholder data. Wire up a weather API of your
 * choice (e.g. Open-Meteo) and replace the static `weather` object below.
 */
const weather = {
  location: 'McLeod Ganj',
  tempC: 18,
  condition: 'Partly Cloudy',
  high: 21,
  low: 12,
}

export default function WeatherWidget() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-24 right-6 z-40 flex flex-col items-end gap-3">
      {open && (
        <div className="bg-ivory-soft shadow-soft border border-forest-100 w-56 p-5">
          <p className="text-[11px] uppercase tracking-widest2 text-stone-dark">{weather.location}</p>
          <div className="flex items-center justify-between mt-2">
            <span className="font-display text-3xl text-forest-800">{weather.tempC}&deg;C</span>
            <Icon name="weather" className="w-8 h-8 text-saffron" />
          </div>
          <p className="text-sm text-charcoal-light mt-1">{weather.condition}</p>
          <p className="text-xs text-stone-dark mt-2">
            H: {weather.high}&deg; &nbsp;L: {weather.low}&deg;
          </p>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Toggle weather panel"
        aria-expanded={open}
        className="w-12 h-12 rounded-full bg-forest-700 text-ivory-soft flex items-center justify-center shadow-soft hover:bg-forest-800 transition-colors"
      >
        <Icon name="weather" className="w-6 h-6" />
      </button>
    </div>
  )
}
