import { Link } from 'react-router-dom'
import { whatsappLink } from '../data/siteConfig'
import Icon from './Icon'

export default function RoomCard({ room }) {
  return (
    <div className="group bg-ivory-soft border border-forest-100 flex flex-col h-full">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={room.heroImage}
          alt={room.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-refined group-hover:scale-105"
        />
        <span className="absolute top-4 left-4 bg-forest-800/85 text-ivory text-[11px] uppercase tracking-widest2 px-3 py-1.5">
          {room.unitCount} Rooms
        </span>
      </div>
      <div className="p-6 md:p-7 flex flex-col flex-1">
        <h3 className="font-display text-2xl text-forest-800 leading-tight">{room.shortName}</h3>
        <p className="text-sm text-charcoal-light mt-3 leading-relaxed flex-1">{room.intro}</p>

        <ul className="flex flex-wrap gap-x-4 gap-y-2 mt-5 text-xs text-stone-dark uppercase tracking-wide">
          {room.amenities.slice(0, 4).map((a) => (
            <li key={a} className="flex items-center gap-1.5">
              <Icon name="check" className="w-3.5 h-3.5 text-saffron" />
              {a}
            </li>
          ))}
        </ul>

        <div className="flex gap-3 mt-6 pt-5 border-t border-forest-100">
          <Link to={`/rooms/${room.slug}`} className="btn-outline flex-1 !py-3 text-xs">
            View Details
          </Link>
          <a
            href={whatsappLink(`Hello, I would like to book the ${room.shortName} at Hotel Classic Hills.`)}
            target="_blank"
            rel="noreferrer"
            className="btn-primary flex-1 !py-3 text-xs"
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  )
}
