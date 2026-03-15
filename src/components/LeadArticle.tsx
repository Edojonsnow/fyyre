import { Link } from 'react-router-dom'

export default function LeadArticle() {
  return (
    <section
      className="w-full max-w-content mx-auto px-5 md:px-20"
      style={{ fontFamily: "'General Sans', 'DM Sans', sans-serif" }}
    >
      {/* Lead article container — column, gap 48px */}
      <Link to="/article/dont-close-your-eyes" style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="flex flex-col" style={{ gap: '48px' }}>
        {/* Top row: title (left) + text/meta (right) — row, gap 48px, stretch */}
        <div className="flex flex-col lg:flex-row items-stretch" style={{ gap: '48px' }}>
          {/* Title — left side */}
          <h1
            className="uppercase font-semibold text-black leading-none shrink-0"
            style={{
              fontFamily: "'General Sans', sans-serif",
              fontSize: 'clamp(3rem, 7vw, 104px)',
              fontWeight: 600,
              lineHeight: '1.1',
              letterSpacing: '-0.01em',
            }}
          >
            Don't close<br className="hidden lg:inline" /> your eyes
          </h1>

          {/* Right column — justify-end, gap 64px, padding-top 10px */}
          <div
            className="flex flex-col justify-end flex-1"
            style={{ gap: '64px', paddingTop: '10px' }}
          >
            {/* Body text — 18px, weight 400, lineHeight 1.8 */}
            <p
              className="text-black"
              style={{
                fontFamily: "'General Sans', sans-serif",
                fontSize: '18px',
                fontWeight: 400,
                lineHeight: '1.8',
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem.
              Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.
            </p>

            {/* Metadata row — space-between, gap 16px */}
            <div className="flex flex-wrap items-center justify-between" style={{ gap: '16px' }}>
              {/* Meta group — row, gap 24px */}
              <div className="flex flex-wrap items-center" style={{ gap: '24px' }}>
                <div className="flex items-center" style={{ gap: '8px' }}>
                  <span style={{ fontFamily: "'General Sans', sans-serif", fontSize: '14px', fontWeight: 600, lineHeight: '1.6' }}>
                    Text
                  </span>
                  <span style={{ fontFamily: "'General Sans', sans-serif", fontSize: '14px', fontWeight: 400, lineHeight: '1.6' }}>
                    Jakob Gronberg
                  </span>
                </div>
                <div className="flex items-center" style={{ gap: '8px' }}>
                  <span style={{ fontFamily: "'General Sans', sans-serif", fontSize: '14px', fontWeight: 600, lineHeight: '1.6' }}>
                    Date
                  </span>
                  <span style={{ fontFamily: "'General Sans', sans-serif", fontSize: '14px', fontWeight: 400, lineHeight: '1.6' }}>
                    16. March 2022
                  </span>
                </div>
                <div className="flex items-center" style={{ gap: '8px' }}>
                  <span style={{ fontFamily: "'General Sans', sans-serif", fontSize: '14px', fontWeight: 600, lineHeight: '1.6' }}>
                    Duration
                  </span>
                  <span style={{ fontFamily: "'General Sans', sans-serif", fontSize: '14px', fontWeight: 400, lineHeight: '1.6' }}>
                    1 Min
                  </span>
                </div>
              </div>

              {/* Label pill — padding 8px 12px, border, rounded 100px, 12px uppercase */}
              <span
                className="border border-black uppercase"
                style={{
                  padding: '8px 12px',
                  borderRadius: '100px',
                  fontFamily: "'General Sans', sans-serif",
                  fontSize: '12px',
                  fontWeight: 400,
                  lineHeight: '1.35',
                }}
              >
                Label
              </span>
            </div>
          </div>
        </div>

        {/* Full-width image — fixed aspect ratio 1520×800 */}
        <div className="w-full overflow-hidden" style={{ aspectRatio: '1520 / 800' }}>
          <img
            src="/images/lead-article.png"
            alt="Don't close your eyes"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      </Link>
    </section>
  )
}
