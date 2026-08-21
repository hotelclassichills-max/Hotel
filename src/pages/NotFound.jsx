import { Link } from 'react-router-dom'
import Seo from '../components/Seo'

export default function NotFound() {
  return (
    <>
      <Seo title="Page Not Found" description="The page you're looking for could not be found." path="/404" />
      <section className="min-h-[70vh] flex items-center justify-center text-center px-6">
        <div>
          <p className="eyebrow mb-4">404</p>
          <h1 className="font-display text-4xl md:text-5xl text-forest-800">Page Not Found</h1>
          <p className="mt-5 text-charcoal-light max-w-md mx-auto">
            The page you're looking for may have moved. Let's get you back to comfortable ground.
          </p>
          <Link to="/" className="btn-primary mt-8">
            Return Home
          </Link>
        </div>
      </section>
    </>
  )
}
