import MagazineArticleCard from './MagazineArticleCard'

const latestArticles = [
  {
    slug: 'hope-dies-last',
    title: 'Hope dies last',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.',
    author: 'Jakob Gronberg',
    date: '16. March 2022',
    duration: '1 Min',
    label: 'art',
    image: '/images/magazine/mag-article-1.png',
  },
  {
    slug: 'dont-close-your-eyes',
    title: "Don't close your eyes",
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.',
    author: 'Jakob Gronberg',
    date: '16. March 2022',
    duration: '1 Min',
    label: 'art',
    image: '/images/magazine/mag-article-2.png',
  },
  {
    slug: 'the-best-art-museums',
    title: 'The best art museums',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.',
    author: 'Jakob Gronberg',
    date: '16. March 2022',
    duration: '1 Min',
    label: 'Sculptures',
    image: '/images/magazine/mag-article-3.png',
  },
]

export default function LatestPosts() {
  return (
    <section
      className="flex flex-col"
      style={{
        gap: '96px',
        fontFamily: "'General Sans', 'DM Sans', sans-serif",
      }}
    >
      {/* Header row */}
      <div className="flex flex-col" style={{ gap: '48px' }}>
        <div className="w-full h-px bg-black" />
        <div className="flex items-center justify-between">
          <h2
            className="uppercase"
            style={{
              fontSize: 'clamp(3rem, 6.5vw, 104px)',
              fontWeight: 600,
              lineHeight: '1.1',
              color: '#000',
            }}
          >
            Latest Posts
          </h2>
          <a
            href="/magazine"
            className="inline-flex items-center uppercase hover:opacity-70 transition-opacity"
            style={{
              gap: '8px',
              fontSize: '16px',
              fontWeight: 600,
              lineHeight: '1.35',
              color: '#000',
            }}
          >
            See all
            <img
              src="/images/magazine/arrow-right.svg"
              alt=""
              width="24"
              height="24"
            />
          </a>
        </div>
      </div>

      {/* 3-column cards grid */}
      <div
        className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        style={{
          gap: '-1px',
        }}
      >
        {latestArticles.map((article, i) => (
          <MagazineArticleCard key={i} {...article} />
        ))}
      </div>
    </section>
  )
}
