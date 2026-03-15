interface MagazineArticleCardProps {
  title: string
  excerpt: string
  author: string
  date: string
  duration: string
  label: string
  image: string
}

export default function MagazineArticleCard({
  title,
  excerpt,
  author,
  date,
  duration,
  label,
  image,
}: MagazineArticleCardProps) {
  return (
    <article
      className="flex flex-col border border-black bg-white"
      style={{
        padding: '48px',
        gap: '32px',
        fontFamily: "'General Sans', 'DM Sans', sans-serif",
        marginRight: '-1px',
        marginBottom: '-1px',
      }}
    >
      {/* Meta row — date + category label */}
      <div className="flex items-center justify-between" style={{ gap: '32px' }}>
        <span
          style={{
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: '1.6',
          }}
        >
          {date}
        </span>
        <span
          className="uppercase"
          style={{
            fontSize: '12px',
            fontWeight: 400,
            lineHeight: '1.35',
            border: '1px solid #000',
            borderRadius: '100px',
            padding: '8px 12px',
          }}
        >
          {label}
        </span>
      </div>

      {/* Article image */}
      <div
        className="w-full overflow-hidden bg-neutral-100"
        style={{ aspectRatio: '1 / 1' }}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col" style={{ gap: '48px' }}>
        {/* Title + description */}
        <div className="flex flex-col" style={{ gap: '12px' }}>
          <h3
            style={{
              fontSize: '32px',
              fontWeight: 600,
              lineHeight: '1.2',
            }}
          >
            {title}
          </h3>
          <p
            style={{
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: '1.6',
              color: '#000',
            }}
          >
            {excerpt}
          </p>
        </div>

        {/* Author + Duration meta */}
        <div className="flex items-center" style={{ gap: '16px' }}>
          <div className="flex items-center" style={{ gap: '8px' }}>
            <span
              style={{
                fontSize: '14px',
                fontWeight: 600,
                lineHeight: '1.6',
              }}
            >
              Text
            </span>
            <span
              style={{
                fontSize: '14px',
                fontWeight: 400,
                lineHeight: '1.6',
              }}
            >
              {author}
            </span>
          </div>
          <div className="flex items-center" style={{ gap: '8px' }}>
            <span
              style={{
                fontSize: '14px',
                fontWeight: 600,
                lineHeight: '1.6',
              }}
            >
              Duration
            </span>
            <span
              style={{
                fontSize: '14px',
                fontWeight: 400,
                lineHeight: '1.6',
              }}
            >
              {duration}
            </span>
          </div>
        </div>
      </div>
    </article>
  )
}
