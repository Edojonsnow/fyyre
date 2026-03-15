import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const episodes = [
  {
    slug: 'the-problem-of-todays-cultural-development',
    number: '05',
    title: "The Problem of today's cultural development",
    date: '16. March 2022',
    duration: '1hr 20min',
    image: '/images/podcast-ep5.png',
  },
  {
    slug: 'the-hidden-messages-of-jack-nielson',
    number: '04',
    title: 'The hidden messages of Jack Nielson',
    date: '16. March 2022',
    duration: '1hr 20min',
    image: '/images/podcast-ep4.png',
  },
  {
    slug: 'behind-the-scenes-of-street-art',
    number: '03',
    title: 'Behind the scenes of the street art culture',
    date: '16. March 2022',
    duration: '1hr 20min',
    image: '/images/podcast-ep3.png',
  },
  {
    slug: 'the-art-of-movement',
    number: '02',
    title: 'The art of movement',
    date: '16. March 2022',
    duration: '1hr 20min',
    image: '/images/podcast-ep4.png',
  },
  {
    slug: '10-artists-you-should-know',
    number: '01',
    title: '10 artists your should definitely know',
    date: '16. March 2022',
    duration: '1hr 20min',
    image: '/images/podcast-ep5.png',
  },
]

export default function PodcastPage() {
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
          Podcast
        </h1>

        {/* Episodes list */}
        <div className="flex flex-col" style={{ gap: '48px' }}>
          {episodes.map((ep, i) => (
            <div key={i}>
              {/* Episode row */}
              <Link
                to={`/podcast/${ep.slug}`}
                className="flex flex-col lg:flex-row items-start lg:items-center justify-between"
                style={{
                  gap: '32px',
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                {/* Left: number + cover + title */}
                <div
                  className="flex items-center"
                  style={{ gap: '64px' }}
                >
                  <span
                    style={{
                      fontSize: '24px',
                      fontWeight: 600,
                      lineHeight: '1.2',
                      width: '30px',
                    }}
                  >
                    {ep.number}
                  </span>

                  {/* Podcast cover */}
                  <div
                    className="shrink-0 relative overflow-hidden"
                    style={{ width: '240px', height: '240px' }}
                  >
                    <img
                      src={ep.image}
                      alt={ep.title}
                      className="w-full h-full object-cover"
                    />
                    <div
                      className="absolute inset-0 flex flex-col justify-between"
                      style={{ padding: '20px' }}
                    >
                      <div>
                        <span
                          className="block uppercase"
                          style={{
                            fontSize: '15px',
                            fontWeight: 600,
                            lineHeight: '1.35',
                            color: '#fff',
                          }}
                        >
                          Podcast
                        </span>
                        <span
                          className="block uppercase"
                          style={{
                            fontSize: '30px',
                            fontWeight: 600,
                            lineHeight: '1.35',
                            color: '#fff',
                          }}
                        >
                          Fyrre
                        </span>
                      </div>
                      <span
                        className="uppercase"
                        style={{
                          fontSize: '15px',
                          fontWeight: 600,
                          lineHeight: '1.35',
                          color: '#fff',
                        }}
                      >
                        Ep {ep.number}
                      </span>
                    </div>
                    {/* Play arrow button */}
                    <div
                      className="absolute flex items-center justify-center bg-white rounded-full"
                      style={{
                        width: '30px',
                        height: '30px',
                        bottom: '14px',
                        right: '14px',
                      }}
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2 1L10 6L2 11V1Z" fill="#000" />
                      </svg>
                    </div>
                  </div>

                  <h2
                    style={{
                      fontSize: '32px',
                      fontWeight: 600,
                      lineHeight: '1.2',
                      color: '#000',
                      maxWidth: '518px',
                    }}
                  >
                    {ep.title}
                  </h2>
                </div>

                {/* Right: meta + listen */}
                <div
                  className="flex items-center"
                  style={{ gap: '64px' }}
                >
                  <div className="flex items-center" style={{ gap: '8px' }}>
                    <span style={{ fontSize: '14px', fontWeight: 600, lineHeight: '1.6' }}>
                      Date
                    </span>
                    <span style={{ fontSize: '14px', fontWeight: 400, lineHeight: '1.6' }}>
                      {ep.date}
                    </span>
                  </div>
                  <div className="flex items-center" style={{ gap: '8px' }}>
                    <span style={{ fontSize: '14px', fontWeight: 600, lineHeight: '1.6' }}>
                      Duration
                    </span>
                    <span style={{ fontSize: '14px', fontWeight: 400, lineHeight: '1.6' }}>
                      {ep.duration}
                    </span>
                  </div>
                  <span
                    className="inline-flex items-center uppercase hover:opacity-70 transition-opacity"
                    style={{
                      gap: '8px',
                      fontSize: '16px',
                      fontWeight: 600,
                      lineHeight: '1.35',
                      color: '#000',
                    }}
                  >
                    Listen
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M5 12H19M19 12L13 6M19 12L13 18"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </Link>

              {/* Divider */}
              {i < episodes.length - 1 && (
                <div
                  className="w-full bg-black"
                  style={{ height: '1px', marginTop: '48px' }}
                />
              )}
            </div>
          ))}
        </div>
      </main>

      <div style={{ paddingTop: '128px' }}>
        <Footer />
      </div>
    </div>
  )
}
