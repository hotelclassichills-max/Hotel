import { Link } from 'react-router-dom'
import Icon from './Icon'

export default function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="bg-forest-50 border-b border-forest-100">
      <ol className="container-hotel flex items-center flex-wrap gap-2 py-3 text-xs uppercase tracking-wide text-charcoal-light">
        <li>
          <Link to="/" className="hover:text-saffron-dark transition-colors">
            Home
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={item.path || item.label} className="flex items-center gap-2">
            <Icon name="chevronRight" className="w-3 h-3 text-stone" />
            {item.path && i !== items.length - 1 ? (
              <Link to={item.path} className="hover:text-saffron-dark transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-forest-800">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
