import Icon from './Icon'

export default function AmenityCard({ icon, title, description }) {
  return (
    <div className="group flex flex-col items-start gap-4 p-7 bg-ivory-soft border border-forest-100 transition-colors duration-300 hover:border-saffron">
      <div className="w-12 h-12 flex items-center justify-center border border-forest-200 text-forest-700 transition-colors duration-300 group-hover:border-saffron group-hover:text-saffron">
        <Icon name={icon} className="w-6 h-6" />
      </div>
      <div>
        <h3 className="font-display text-lg text-forest-800">{title}</h3>
        {description && <p className="text-sm text-charcoal-light mt-2 leading-relaxed">{description}</p>}
      </div>
    </div>
  )
}
