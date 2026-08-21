export default function AttractionCard({ attraction }) {
  return (
    <div className="group relative overflow-hidden aspect-[3/4] bg-forest-800">
      <img
        src={attraction.image}
        alt={attraction.name}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 ease-refined group-hover:scale-105 opacity-90"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6">
        <h3 className="font-display text-xl text-ivory leading-snug">{attraction.name}</h3>
        <p className="text-ivory/75 text-sm mt-2 leading-relaxed opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-24 transition-all duration-500 ease-refined overflow-hidden">
          {attraction.description}
        </p>
      </div>
    </div>
  )
}
