const articles = [
  {
    title: 'Hope dies last',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.',
    author: 'Jakob Gronberg',
    date: '16. March 2022',
    read: '1 Min',
    label: 'Art',
  },
  {
    title: 'The best art museums',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.',
    author: 'Jakob Gronberg',
    date: '16. March 2022',
    read: '1 Min',
    label: 'Sculptures',
  },
  {
    title: 'The devil is the details',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.',
    author: 'Jakob Gronberg',
    date: '16. March 2022',
    read: '1 Min',
    label: 'Art',
  },
  {
    title: 'An indestructible hope',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.',
    author: 'Jakob Gronberg',
    date: '16. March 2022',
    read: '1 Min',
    label: 'Art',
  },
  {
    title: 'Street art festival',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.',
    author: 'Jakob Gronberg',
    date: '16. March 2022',
    read: '1 Min',
    label: 'street Art',
  },
  {
    title: 'Through the eyes of street artists',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.',
    author: 'Jakob Gronberg',
    date: '16. March 2022',
    read: '1 Min',
    label: 'street art',
  },
]

const popular = [
  { num: '01', title: 'Street art festival', author: 'Cristofer Vaccaro' },
  { num: '02', title: 'Hope dies last', author: 'Anne Henry' },
  { num: '03', title: 'Artists who want to rise above', author: 'Anna Nielsen' },
]

export default function ArticlesSection() {
  return (
    <section className="w-full max-w-content mx-auto px-5 md:px-20">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        {/* Main articles list */}
        <div className="flex-1 flex flex-col gap-0">
          {articles.map((article, i) => (
            <article key={i} className="flex flex-col sm:flex-row gap-6 py-6 border-b border-black">
              <div className="sm:w-48 shrink-0 aspect-[4/5] bg-neutral-200 rounded overflow-hidden">
                <img
                  src={`/images/article-${Math.min(i + 1, 6)}.png`}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 flex flex-col gap-3">
                <h2 className="text-xl font-semibold text-black">{article.title}</h2>
                <p className="text-base text-black/90 line-clamp-2">{article.excerpt}</p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <span className="font-semibold text-black">Text</span>
                  <span className="text-black">{article.author}</span>
                  <span className="font-semibold text-black">Date</span>
                  <span className="text-black">{article.date}</span>
                  <span className="font-semibold text-black">Read</span>
                  <span className="text-black">{article.read}</span>
                </div>
                <span className="inline-flex w-fit px-4 py-1.5 text-xs font-medium border border-black rounded-full mt-1">
                  {article.label}
                </span>
              </div>
            </article>
          ))}
          <a
            href="/articles"
            className="inline-flex items-center gap-2 text-base font-semibold text-black mt-6 hover:opacity-70"
          >
            All articles
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Sidebar */}
        <aside className="lg:w-80 shrink-0 flex flex-col gap-16">
          {/* Print magazine */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <span className="text-base font-semibold uppercase text-black">Printmagazine</span>
              <span className="text-4xl font-semibold text-black">03/2022</span>
            </div>
            <div className="relative aspect-[369/461] bg-neutral-300 rounded overflow-hidden">
              <img
                src="/images/magazine-cover.png"
                alt="Fyrre Magazine 03/2022"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-between p-4 text-white">
                <div>
                  <span className="text-sm font-semibold uppercase">Magazin</span>
                  <span className="block text-4xl font-semibold uppercase">Fyrre</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold uppercase">03/2022</span>
                  <span className="w-10 h-10 border border-white rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <button className="w-full h-12 px-6 bg-primary text-white text-sm font-medium uppercase hover:bg-black/90">
              Subscribe
            </button>
          </div>

          {/* Most Popular */}
          <div className="flex flex-col gap-8">
            <h3 className="text-base font-semibold uppercase text-black">Most Popular</h3>
            <div className="flex flex-col gap-6">
              {popular.map((item, i) => (
                <div key={i}>
                  <a href="#" className="flex gap-4 group">
                    <span className="text-2xl font-semibold text-black w-12 shrink-0">{item.num}</span>
                    <div className="flex flex-col gap-1">
                      <span className="text-xl font-semibold text-black group-hover:underline">{item.title}</span>
                      <span className="text-sm text-black">
                        <span className="font-semibold">Text</span> {item.author}
                      </span>
                    </div>
                  </a>
                  {i < popular.length - 1 && <div className="h-px bg-primary mt-6" />}
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter sidebar */}
          <div className="bg-[#F8F8F8] p-6 flex flex-col gap-4">
            <h3 className="text-base font-semibold text-black">NewsLetter</h3>
            <p className="text-2xl font-semibold text-black leading-snug">Design News to your inbox</p>
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Email"
                className="w-full h-12 px-4 bg-white text-black placeholder:text-black/60 border border-black/10"
              />
              <button className="w-full h-12 px-6 bg-primary text-white text-sm font-medium uppercase hover:bg-black/90">
                Sign up
              </button>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}
