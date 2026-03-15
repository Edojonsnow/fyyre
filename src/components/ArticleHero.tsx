export default function ArticleHero() {
  return (
    <div
      style={{
        fontFamily: "'General Sans', 'DM Sans', sans-serif",
      }}
    >
      {/* Title + Intro row */}
      <div
        className="flex flex-col lg:flex-row"
        style={{ gap: '103px', paddingBottom: '48px' }}
      >
        {/* Large title */}
        <h1
          className="uppercase shrink-0"
          style={{
            fontSize: 'clamp(3rem, 6.5vw, 104px)',
            fontWeight: 600,
            lineHeight: '1.1',
            color: '#000',
            maxWidth: '680px',
          }}
        >
          Hope{'\n'}dies last
        </h1>

        {/* Intro paragraph — right side */}
        <p
          className="flex-1"
          style={{
            fontSize: '20px',
            fontWeight: 500,
            lineHeight: '1.8',
            color: '#000',
            alignSelf: 'flex-start',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
          dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu
          felis bibendum ut. Porttitor leo a diam.
        </p>
      </div>

      {/* Meta row — author, date, read, label */}
      <div
        className="flex items-center justify-between"
        style={{
          paddingBottom: '48px',
        }}
      >
        <div className="flex items-center" style={{ gap: '32px' }}>
          <div className="flex items-center" style={{ gap: '8px' }}>
            <span style={{ fontSize: '14px', fontWeight: 600, lineHeight: '1.6' }}>
              Text
            </span>
            <span style={{ fontSize: '14px', fontWeight: 400, lineHeight: '1.6' }}>
              Jakob Gronberg
            </span>
          </div>
          <div className="flex items-center" style={{ gap: '8px' }}>
            <span style={{ fontSize: '14px', fontWeight: 600, lineHeight: '1.6' }}>
              Date
            </span>
            <span style={{ fontSize: '14px', fontWeight: 400, lineHeight: '1.6' }}>
              16. March 2022
            </span>
          </div>
          <div className="flex items-center" style={{ gap: '8px' }}>
            <span style={{ fontSize: '14px', fontWeight: 600, lineHeight: '1.6' }}>
              Read
            </span>
            <span style={{ fontSize: '14px', fontWeight: 400, lineHeight: '1.6' }}>
              2 Min
            </span>
          </div>
        </div>

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
          Label
        </span>
      </div>
    </div>
  )
}
