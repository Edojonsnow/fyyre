import MagazineArticleCard from './MagazineArticleCard'

const articles = [
  // Row 1
  {
    slug: 'hope-dies-last',
    title: 'Hope dies last',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.',
    author: 'Jakob Gronberg',
    date: '16. March 2022',
    duration: '1 Min',
    label: 'art',
    image: '/images/magazine/mag-article-1.png',
  },
  {
    slug: 'dont-close-your-eyes',
    title: "Don't close your eyes",
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.',
    author: 'Jakob Gronberg',
    date: '16. March 2022',
    duration: '1 Min',
    label: 'art',
    image: '/images/magazine/mag-article-2.png',
  },
  {
    slug: 'the-best-art-museums',
    title: 'The best art museums',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.',
    author: 'Jakob Gronberg',
    date: '16. March 2022',
    duration: '1 Min',
    label: 'Sculptures',
    image: '/images/magazine/mag-article-3.png',
  },
  // Row 2
  {
    slug: 'the-devil-is-the-details',
    title: 'The devil is the details',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.',
    author: 'Jakob Gronberg',
    date: '16. March 2022',
    duration: '1 Min',
    label: 'art',
    image: '/images/magazine/mag-article-4.png',
  },
  {
    slug: 'an-indestructible-hope',
    title: 'An indestructible hope',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.',
    author: 'Jakob Gronberg',
    date: '16. March 2022',
    duration: '1 Min',
    label: 'art',
    image: '/images/magazine/mag-article-5.png',
  },
  {
    slug: 'street-art-festival',
    title: 'Street art festival',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.',
    author: 'Jakob Gronberg',
    date: '16. March 2022',
    duration: '1 Min',
    label: 'street art',
    image: '/images/magazine/mag-article-6.png',
  },
  // Row 3
  {
    slug: 'the-chains-of-our-lives',
    title: 'The chains of our lives',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.',
    author: 'Jakob Gronberg',
    date: '16. March 2022',
    duration: '1 Min',
    label: 'Sculptures',
    image: '/images/magazine/mag-article-7.png',
  },
  {
    slug: 'through-the-eyes-of-street-artists',
    title: 'Through the eyes of street artists',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.',
    author: 'Jakob Gronberg',
    date: '16. March 2022',
    duration: '1 Min',
    label: 'art',
    image: '/images/magazine/mag-article-8.png',
  },
  {
    slug: 'artists-who-want-to-rise-above',
    title: 'Artists who want to rise above',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.',
    author: 'Jakob Gronberg',
    date: '16. March 2022',
    duration: '1 Min',
    label: 'street art',
    image: '/images/magazine/mag-article-9.png',
  },
  // Row 4
  {
    slug: 'secret-garden',
    title: 'Secret garden',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.',
    author: 'Jakob Gronberg',
    date: '16. March 2022',
    duration: '1 Min',
    label: 'art',
    image: '/images/magazine/mag-article-10.png',
  },
  {
    slug: 'getting-real',
    title: 'Getting real',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.',
    author: 'Jakob Gronberg',
    date: '16. March 2022',
    duration: '1 Min',
    label: 'art',
    image: '/images/magazine/mag-article-11.png',
  },
  {
    slug: 'most-colorful-places',
    title: 'Most coloful places',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.',
    author: 'Jakob Gronberg',
    date: '16. March 2022',
    duration: '1 Min',
    label: 'street art',
    image: '/images/magazine/mag-article-12.png',
  },
  // Row 5
  {
    slug: 'keep-on-smiling',
    title: 'Keep on Smiling',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.',
    author: 'Jakob Gronberg',
    date: '16. March 2022',
    duration: '1 Min',
    label: 'street art',
    image: '/images/magazine/mag-article-13.png',
  },
  {
    slug: 'history-of-paper',
    title: 'History of Paper',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.',
    author: 'Jakob Gronberg',
    date: '16. March 2022',
    duration: '1 Min',
    label: 'art',
    image: '/images/magazine/mag-article-14.png',
  },
  {
    slug: 'how-are-you-really',
    title: 'How are you, really?',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.',
    author: 'Jakob Gronberg',
    date: '16. March 2022',
    duration: '1 Min',
    label: 'Sculptures',
    image: '/images/magazine/mag-article-15.png',
  },
  // Row 6
  {
    slug: 'beauty-of-colors',
    title: 'Beauty of Colors',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.',
    author: 'Jakob Gronberg',
    date: '16. March 2022',
    duration: '1 Min',
    label: 'art',
    image: '/images/magazine/mag-article-16.png',
  },
  {
    slug: 'colorful-future',
    title: 'Colorful Future',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.',
    author: 'Jakob Gronberg',
    date: '16. March 2022',
    duration: '1 Min',
    label: 'art',
    image: '/images/magazine/mag-article-17.png',
  },
  {
    slug: 'only-in-your-heart',
    title: 'Only in Your Heart',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.',
    author: 'Jakob Gronberg',
    date: '16. March 2022',
    duration: '1 Min',
    label: 'Sculptures',
    image: '/images/magazine/mag-article-18.png',
  },
]

export default function MagazineArticlesGrid({ activeCategory }: { activeCategory: string }) {
  
  const filteredArticles = activeCategory === "All" ? articles : articles.filter((article)=> article.label.toLowerCase() === activeCategory.toLowerCase())
  return (
    <section
      className="flex flex-col items-end"
      style={{
        gap: '96px',
        fontFamily: "'General Sans', 'DM Sans', sans-serif",
      }}
    >
      {/* Articles grid — 3 columns, collapsed borders */}
      <div
        className="w-full grid"
        style={{
          gridTemplateColumns: 'repeat(3, 1fr)',
          maxWidth: '1520px',
        }}
      >
        {filteredArticles.map((article, i) => (
          <MagazineArticleCard key={i} {...article} />
        ))}
      </div>

      {/* Next button */}
      <a
        href="#"
        className="inline-flex items-center uppercase hover:opacity-70 transition-opacity"
        style={{
          gap: '8px',
          fontSize: '16px',
          fontWeight: 600,
          lineHeight: '1.35',
          color: '#000',
        }}
      >
        Next
        <img
          src="/images/magazine/arrow-right.svg"
          alt=""
          width="24"
          height="24"
        />
      </a>
    </section>
  )
}
