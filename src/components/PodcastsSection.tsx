const episodes = [
  {
    episode: '05',
    title: "The Problem of today's cultural development",
    date: '16.06.2022',
    duration: '1h 20 Min',
    image: '/images/podcast-ep5.png',
  },
  {
    episode: '04',
    title: 'The hidden messages of Jack Nielson',
    date: '16.06.2022',
    duration: '60 Min',
    image: '/images/podcast-ep4.png',
  },
  {
    episode: '03',
    title: 'Behind the scenes of the street art culture',
    date: '16.06.2022',
    duration: '45 Min',
    image: '/images/podcast-ep3.png',
  },
]

export default function PodcastsSection() {
  return (
    <section className="w-full max-w-content mx-auto px-5 md:px-20 flex flex-col gap-12">
      <div className="flex flex-col gap-12">
        <div className="w-full h-px bg-black" />
        <div className="flex flex-wrap items-center justify-between gap-6">
          <h2 className="text-4xl md:text-5xl font-semibold uppercase text-black">Podcast</h2>
          <a
            href="/podcast"
            className="inline-flex items-center gap-2 text-base font-semibold text-black hover:opacity-70"
          >
            All Episodes
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {episodes.map((ep, i) => (
          <article
            key={i}
            className="bg-white border border-black overflow-hidden flex flex-col"
          >
            <div className="relative aspect-[4/5] bg-neutral-300 overflow-hidden">
              <img
                src={ep.image}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-between p-4 text-white">
                <div>
                  <span className="text-xs font-semibold uppercase">Podcast</span>
                  <span className="block text-2xl font-semibold uppercase">Fyrre</span>
                </div>
                <span className="text-sm font-semibold uppercase">Ep {ep.episode}</span>
              </div>
              <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white flex items-center justify-center">
                <svg className="w-5 h-5 text-black ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            <div className="p-6 flex flex-col gap-3">
              <h3 className="text-xl font-semibold text-black">{ep.title}</h3>
              <div className="flex gap-6 text-sm">
                <div className="flex gap-2">
                  <span className="font-semibold text-black">Date</span>
                  <span className="text-black">{ep.date}</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-semibold text-black">Duration</span>
                  <span className="text-black">{ep.duration}</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
