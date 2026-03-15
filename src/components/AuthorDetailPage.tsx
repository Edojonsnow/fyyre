import { Link, useParams } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import MagazineArticleCard from './MagazineArticleCard'

const authorsData: Record<string, {
  name: string
  job: string
  city: string
  image: string
  bio: string
  articles: Array<{
    slug: string
    title: string
    excerpt: string
    author: string
    date: string
    duration: string
    label: string
    image: string
  }>
}> = {
  'jakob-gronberg': {
    name: 'Jakob Grønberg',
    job: 'Artist',
    city: 'Berlin',
    image: '/authors/jakob.png',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.',
    articles: [
      {
        slug: 'hope-dies-last',
        title: 'Hope dies last',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        author: 'Jakob Gronberg',
        date: '16. March 2022',
        duration: '1 Min',
        label: 'Art',
        image: '/images/magazine/mag-article-1.png',
      },
      {
        slug: 'dont-close-your-eyes',
        title: "Don't close your eyes",
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        author: 'Jakob Gronberg',
        date: '16. March 2022',
        duration: '1 Min',
        label: 'Art',
        image: '/images/magazine/mag-article-2.png',
      },
      {
        slug: 'the-best-art-museums',
        title: 'The best art museums',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        author: 'Jakob Gronberg',
        date: '16. March 2022',
        duration: '1 Min',
        label: 'Sculptures',
        image: '/images/magazine/mag-article-3.png',
      },
    ],
  },
  'louise-jensen': {
    name: 'Louise Jensen',
    job: 'Artist',
    city: 'Stockholm',
    image: '/authors/louise.png',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem.',
    articles: [
      {
        slug: 'the-devil-is-the-details',
        title: 'The devil is the details',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        author: 'Louise Jensen',
        date: '16. March 2022',
        duration: '1 Min',
        label: 'Art',
        image: '/images/magazine/mag-article-4.png',
      },
      {
        slug: 'an-indestructible-hope',
        title: 'An indestructible hope',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        author: 'Louise Jensen',
        date: '16. March 2022',
        duration: '1 Min',
        label: 'Art',
        image: '/images/magazine/mag-article-5.png',
      },
      {
        slug: 'street-art-festival',
        title: 'Street art festival',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        author: 'Louise Jensen',
        date: '16. March 2022',
        duration: '1 Min',
        label: 'Art',
        image: '/images/magazine/mag-article-6.png',
      },
    ],
  },
}

// Fallback for authors without dedicated data
const defaultAuthor = {
  name: 'Author',
  job: 'Artist',
  city: 'Unknown',
  image: '/authors/jakob.png',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  articles: [] as Array<{ slug: string; title: string; excerpt: string; author: string; date: string; duration: string; label: string; image: string }>,
}

export default function AuthorDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const author = authorsData[slug || ''] || defaultAuthor

  return (
    <div
      className="min-h-screen bg-white"
      style={{ fontFamily: "'General Sans', 'DM Sans', sans-serif" }}
    >
      <Header />

      <main className="w-full max-w-content mx-auto px-5 md:px-[80px]">
        {/* Breadcrumb */}
        <div
          className="flex items-center justify-between"
          style={{ paddingTop: '64px', paddingBottom: '32px' }}
        >
          <Link
            to="/authors"
            className="inline-flex items-center uppercase hover:opacity-70 transition-opacity"
            style={{
              gap: '8px',
              fontSize: '16px',
              fontWeight: 600,
              lineHeight: '1.35',
              color: '#000',
              textDecoration: 'none',
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M19 12H5M5 12L11 6M5 12L11 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Go Back
          </Link>
          <span
            className="uppercase"
            style={{ fontSize: '32px', fontWeight: 600, lineHeight: '1.1', color: '#000' }}
          >
            Authors
          </span>
        </div>

        {/* Author Hero — two columns */}
        <div
          className="flex flex-col lg:flex-row items-start lg:items-center justify-between"
          style={{ gap: '64px', paddingTop: '48px', paddingBottom: '96px' }}
        >
          {/* Left: name, bio, meta */}
          <div className="flex flex-col flex-1" style={{ gap: '32px', maxWidth: '680px' }}>
            <h1
              className="uppercase"
              style={{
                fontSize: 'clamp(3rem, 6.5vw, 104px)',
                fontWeight: 600,
                lineHeight: '1.1',
                color: '#000',
              }}
            >
              {author.name}
            </h1>
            <p
              style={{
                fontSize: '20px',
                fontWeight: 500,
                lineHeight: '1.8',
                color: '#000',
              }}
            >
              {author.bio}
            </p>
            <div className="flex flex-wrap items-center" style={{ gap: '32px' }}>
              <div className="flex items-center" style={{ gap: '8px' }}>
                <span style={{ fontSize: '14px', fontWeight: 600, lineHeight: '1.6' }}>Job</span>
                <span style={{ fontSize: '14px', fontWeight: 400, lineHeight: '1.6' }}>{author.job}</span>
              </div>
              <div className="flex items-center" style={{ gap: '8px' }}>
                <span style={{ fontSize: '14px', fontWeight: 600, lineHeight: '1.6' }}>City</span>
                <span style={{ fontSize: '14px', fontWeight: 400, lineHeight: '1.6' }}>{author.city}</span>
              </div>
            </div>
            {/* Social icons */}
            <div className="flex items-center" style={{ gap: '12px' }}>
              <a href="#" className="hover:opacity-70 transition-opacity" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/></svg>
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity" aria-label="Twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231z"/></svg>
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity" aria-label="YouTube">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity" aria-label="RSS">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6.503 20.752c0 1.794-1.456 3.248-3.251 3.248-1.796 0-3.252-1.454-3.252-3.248 0-1.794 1.456-3.248 3.252-3.248 1.795.001 3.251 1.454 3.251 3.248zm-6.503-12.572v4.811c6.05.463 10.955 4.907 11.422 10.937h4.904c-.437-8.595-7.565-15.724-16.326-16.248zm0-3.18c10.186.479 18.479 8.772 18.958 18.958h-4.078c-.479-8.212-7.165-14.899-15.37-15.377V5z"/></svg>
              </a>
            </div>
          </div>

          {/* Right: large circular author photo */}
          <div
            className="shrink-0 rounded-full overflow-hidden bg-neutral-200"
            style={{ width: '420px', height: '420px' }}
          >
            <img
              src={author.image}
              alt={author.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Author's articles */}
        {author.articles.length > 0 && (
          <div className="flex flex-col" style={{ gap: '48px' }}>
            <div className="w-full h-px bg-black" />
            <h2
              className="uppercase"
              style={{
                fontSize: 'clamp(2rem, 4vw, 48px)',
                fontWeight: 600,
                lineHeight: '1.2',
                color: '#000',
              }}
            >
              Articles
            </h2>
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              style={{ gap: '-1px' }}
            >
              {author.articles.map((article, i) => (
                <MagazineArticleCard key={i} {...article} />
              ))}
            </div>
          </div>
        )}
      </main>

      <div style={{ paddingTop: '128px' }}>
        <Footer />
      </div>
    </div>
  )
}
