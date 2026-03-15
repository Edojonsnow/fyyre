import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const authors = [
  { name: 'Jakob Grønberg', job: 'Artist', city: 'Berlin', image: '/authors/jakob.png', slug: 'jakob-gronberg' },
  { name: 'Louise Jensen', job: 'Artist', city: 'Stockholm', image: '/authors/louise.png', slug: 'louise-jensen' },
  { name: 'Anne Henry', job: 'Photograph', city: 'New York', image: '/authors/anne.png', slug: 'anne-henry' },
  { name: 'Anna Nielsen', job: 'Columnists', city: 'Copenhagen', image: '/authors/anna.png', slug: 'anna-nielsen' },
  { name: 'Jane Cooper', job: 'Artist', city: 'Berlin', image: '/authors/jane.png', slug: 'jane-cooper' },
  { name: 'Cristofer Vaccaro', job: 'Artist', city: 'Lisbon', image: '/authors/cristofer.png', slug: 'cristofer-vaccaro' },
]

export default function AuthorsPage() {
  return (
    <div
      className="min-h-screen bg-white"
      style={{ fontFamily: "'General Sans', 'DM Sans', sans-serif" }}
    >
      <Header />

      <main className="w-full max-w-content mx-auto px-5 md:px-[80px]">
        {/* Page title */}
        <h1
          className="uppercase"
          style={{
            fontSize: 'clamp(4rem, 10vw, 160px)',
            fontWeight: 600,
            lineHeight: '1.1',
            color: '#000',
            paddingBottom: '64px',
          }}
        >
          Authors
        </h1>

        {/* Authors grid — 2 columns */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-black"
          style={{ marginTop: '-1px' }}
        >
          {authors.map((author, i) => (
            <Link
              key={i}
              to={`/author/${author.slug}`}
              className="flex flex-col sm:flex-row items-center border-b border-r border-black p-8 xl:p-10 gap-6 md:gap-8 min-w-0 hover:bg-neutral-50 transition-colors"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              {/* Circle image */}
              <div className="shrink-0 rounded-full overflow-hidden bg-neutral-200 w-32 h-32 sm:w-[120px] sm:h-[120px] lg:w-[150px] lg:h-[150px]">
                <img
                  src={author.image}
                  alt={author.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 min-w-0 w-full" style={{ gap: '16px' }}>
                <h3
                  className="font-semibold text-black text-2xl md:text-[32px] break-words"
                  style={{ lineHeight: '1.2' }}
                >
                  {author.name}
                </h3>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-black text-sm leading-[1.6]">Job</span>
                    <span className="text-black text-sm leading-[1.6] font-normal">{author.job}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-black text-sm leading-[1.6]">City</span>
                    <span className="text-black text-sm leading-[1.6] font-normal">{author.city}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <div style={{ paddingTop: '128px' }}>
        <Footer />
      </div>
    </div>
  )
}
