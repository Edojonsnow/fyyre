const authors = [
  { name: 'Jakob Grønberg', job: 'Artist', city: 'Berlin', image: '/authors/jakob.png' },
  { name: 'Louise Jensen', job: 'Artist', city: 'Stockholm', image: '/authors/louise.png' },
  { name: 'Anne Henry', job: 'Photograph', city: 'New York', image: '/authors/anne.png' },
  { name: 'Anna Nielsen', job: 'Columnists', city: 'Copenhagen', image: '/authors/anna.png' },
  { name: 'Jane Cooper', job: 'Artist', city: 'Berlin', image: '/authors/jane.png' },
  { name: 'Cristofer Vaccaro', job: 'Artist', city: 'Lisbon', image: '/authors/cristofer.png' },
]

export default function AuthorsSection() {
  return (
    <section
      className="w-full max-w-content mx-auto px-5 md:px-20"
      style={{ fontFamily: "'General Sans', 'DM Sans', sans-serif" }}
    >
      {/* Header row */}
      <div className="flex flex-col gap-12 mb-16 md:mb-24">
        <div className="w-full h-px bg-black" />
        <div className="flex items-center justify-between">
          <h2
            className="uppercase font-semibold leading-none"
            style={{ fontSize: 'clamp(3rem, 7vw, 104px)', letterSpacing: '-0.02em' }}
          >
            Authors
          </h2>
          <a
            href="/authors"
            className="group hidden sm:inline-flex items-center gap-2 uppercase font-semibold text-black hover:opacity-70 transition-opacity"
            style={{ fontSize: '16px', letterSpacing: '0.02em' }}
          >
            All Authors
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Authors grid — bleeds to edges on small screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 border-t border-l border-black w-full" style={{ marginTop: '-1px' }}>
        {authors.map((author, i) => (
          <AuthorCard key={i} author={author} />
        ))}
      </div>
    </section>
  )
}

function AuthorCard({
  author,
}: {
  author: { name: string; job: string; city: string; image: string }
}) {
  return (
    <div
      className="flex flex-col sm:flex-row items-center border-b border-r border-black p-8 xl:p-10 gap-6 md:gap-8 min-w-0"
    >
      {/* Circle image */}
      <div
        className="shrink-0 rounded-full overflow-hidden bg-neutral-200 w-32 h-32 sm:w-[120px] sm:h-[120px] lg:w-[150px] lg:h-[150px]"
      >
        <img
          src={author.image}
          alt={author.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 min-w-0 w-full" style={{ gap: '16px' }}>
        {/* Name */}
        <h3
          className="font-semibold text-black text-2xl md:text-[32px] break-words"
          style={{ lineHeight: '1.2', fontFamily: "'General Sans', 'DM Sans', sans-serif" }}
        >
          {author.name}
        </h3>

        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {/* Job */}
          <div className="flex items-center gap-2">
            <span className="font-semibold text-black text-sm md:text-[14px] leading-[1.6]">
              Job
            </span>
            <span className="text-black text-sm md:text-[14px] leading-[1.6] font-normal break-words">
              {author.job}
            </span>
          </div>
          {/* City */}
          <div className="flex items-center gap-2">
            <span className="font-semibold text-black text-sm md:text-[14px] leading-[1.6]">
              City
            </span>
            <span className="text-black text-sm md:text-[14px] leading-[1.6] font-normal break-words">
              {author.city}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
