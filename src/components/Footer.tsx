export default function Footer() {
  return (
    <footer
      className="bg-black text-white w-full"
      style={{ fontFamily: "'General Sans', 'DM Sans', sans-serif" }}
    >
      {/* Newsletter ticker — padding 20px, gap 24px, overflow hidden */}
      <div className="overflow-hidden" style={{ padding: '20px 0 20px 20px' }}>
        <div className="flex items-center whitespace-nowrap" style={{ gap: '24px' }}>
          {[...Array(16)].map((_, i) => (
            <span
              key={i}
              className="uppercase"
              style={{
                fontSize: '22px',
                fontWeight: 600,
                lineHeight: '1.35',
              }}
            >
              Newsletter+++
            </span>
          ))}
        </div>
      </div>

      {/* Main content — column, center-aligned, gap 128px, padding-top 128px */}
      <div
        className="flex flex-col items-center w-full"
        style={{ gap: '128px', paddingTop: '128px' }}
      >
        {/* Newsletter CTA — heading left, input right */}
        <div className="w-full max-w-content mx-auto px-5 md:px-20">
          <div className="relative" style={{ minHeight: '176px' }}>
            {/* Heading — left side */}
            <h2
              className="uppercase"
              style={{
                fontSize: 'clamp(2.5rem, 5.5vw, 80px)',
                fontWeight: 600,
                lineHeight: '1.1',
                color: '#F9F9F9',
                maxWidth: '790px',
              }}
            >
              Design News to your inbox
            </h2>

            {/* Email input row — right-aligned, vertically centered */}
            <div
              className="flex items-center mt-6 lg:mt-0 lg:absolute lg:right-0 lg:bottom-0"
              style={{ gap: '12px' }}
            >
              <input
                type="email"
                placeholder="Email"
                className="bg-transparent border-b border-white/60 text-white placeholder:text-white/60 outline-none"
                style={{
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: '1.6',
                  padding: '0 15px 8px',
                  width: '309px',
                  maxWidth: '100%',
                }}
              />
              <button
                type="button"
                className="bg-white text-black uppercase shrink-0"
                style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  lineHeight: '1.35',
                  padding: '4px 24px',
                  height: '50px',
                }}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>

        {/* Footer bottom — column, gap 96px */}
        <div
          className="w-full max-w-content mx-auto px-5 md:px-20 flex flex-col pb-10"
          style={{ gap: '96px' }}
        >
          {/* Logo + Nav row */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-0 lg:justify-between">
            {/* Fyrre Magazine logo */}
            <img
              src="/images/logo-fyrre-footer.svg"
              alt="Fyrre Magazine"
              className="h-[18px] w-auto shrink-0 self-start"
            />

            {/* Nav columns — row, gap 64px */}
            <div className="flex flex-wrap gap-10 lg:gap-16" style={{ flex: 1, justifyContent: 'flex-end' }}>
              {/* Column 1 */}
              <div className="flex flex-col" style={{ gap: '24px' }}>
                <div className="w-full h-px bg-white/15" />
                <nav className="flex flex-col" style={{ gap: '12px' }}>
                  <a href="/art" className="text-white hover:opacity-80 transition-opacity" style={{ fontSize: '16px', fontWeight: 400, lineHeight: '1.6' }}>Art</a>
                  <a href="/design" className="text-white hover:opacity-80 transition-opacity" style={{ fontSize: '16px', fontWeight: 400, lineHeight: '1.6' }}>Design</a>
                  <a href="/architecture" className="text-white hover:opacity-80 transition-opacity" style={{ fontSize: '16px', fontWeight: 400, lineHeight: '1.6' }}>Architecture</a>
                </nav>
              </div>

              {/* Column 2 */}
              <div className="flex flex-col" style={{ gap: '24px' }}>
                <div className="w-full h-px bg-white/20" />
                <nav className="flex flex-col" style={{ gap: '12px' }}>
                  <a href="/magazine" className="text-white hover:opacity-80 transition-opacity" style={{ fontSize: '16px', fontWeight: 400, lineHeight: '1.6' }}>Magazine</a>
                  <a href="/podcast" className="text-white hover:opacity-80 transition-opacity" style={{ fontSize: '16px', fontWeight: 400, lineHeight: '1.6' }}>Podcast</a>
                  <a href="/authors" className="text-white hover:opacity-80 transition-opacity" style={{ fontSize: '16px', fontWeight: 400, lineHeight: '1.6' }}>Authors</a>
                </nav>
              </div>

              {/* Column 3 */}
              <div className="flex flex-col" style={{ gap: '24px' }}>
                <div className="w-full h-px bg-white/20" />
                <nav className="flex flex-col" style={{ gap: '12px' }}>
                  <a href="/styleguide" className="text-white hover:opacity-80 transition-opacity" style={{ fontSize: '16px', fontWeight: 400, lineHeight: '1.6' }}>Styleguide</a>
                  <a href="/licensing" className="text-white hover:opacity-80 transition-opacity" style={{ fontSize: '16px', fontWeight: 400, lineHeight: '1.6' }}>Licensing</a>
                  <a href="/changelog" className="text-white hover:opacity-80 transition-opacity" style={{ fontSize: '16px', fontWeight: 400, lineHeight: '1.6' }}>Changelog</a>
                </nav>
              </div>
            </div>
          </div>

          {/* Copyright + Social row — space-between */}
          <div className="flex flex-wrap items-center justify-between" style={{ gap: '24px' }}>
            <p style={{ fontSize: '14px', fontWeight: 400, lineHeight: '1.6', color: 'white' }}>
              © Made by Pawel Gola — Powered by Webflow
            </p>
            <div className="flex items-center" style={{ gap: '12px' }}>
              <a href="#" className="text-white hover:opacity-80 transition-opacity" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/></svg>
              </a>
              <a href="#" className="text-white hover:opacity-80 transition-opacity" aria-label="Twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231z"/></svg>
              </a>
              <a href="#" className="text-white hover:opacity-80 transition-opacity" aria-label="YouTube">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="#" className="text-white hover:opacity-80 transition-opacity" aria-label="RSS">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6.503 20.752c0 1.794-1.456 3.248-3.251 3.248-1.796 0-3.252-1.454-3.252-3.248 0-1.794 1.456-3.248 3.252-3.248 1.795.001 3.251 1.454 3.251 3.248zm-6.503-12.572v4.811c6.05.463 10.955 4.907 11.422 10.937h4.904c-.437-8.595-7.565-15.724-16.326-16.248zm0-3.18c10.186.479 18.479 8.772 18.958 18.958h-4.078c-.479-8.212-7.165-14.899-15.37-15.377V5z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
