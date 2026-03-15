import { Link } from 'react-router-dom'

export default function ArticleBreadcrumb() {
  return (
    <div
      className="flex items-center justify-between"
      style={{
        paddingTop: '64px',
        paddingBottom: '32px',
        fontFamily: "'General Sans', 'DM Sans', sans-serif",
      }}
    >
      {/* Go Back button */}
      <Link
        to="/magazine"
        className="inline-flex items-center uppercase hover:opacity-70 transition-opacity"
        style={{
          gap: '8px',
          fontSize: '16px',
          fontWeight: 600,
          lineHeight: '1.35',
          color: '#000',
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 12H5M5 12L11 6M5 12L11 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Go Back
      </Link>

      {/* Magazine label */}
      <span
        className="uppercase"
        style={{
          fontSize: '32px',
          fontWeight: 600,
          lineHeight: '1.1',
          color: '#000',
        }}
      >
        Magazine
      </span>
    </div>
  )
}
