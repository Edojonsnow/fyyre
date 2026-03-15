import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default function PodcastPostPage() {
  return (
    <div
      className="min-h-screen bg-white"
      style={{ fontFamily: "'General Sans', 'DM Sans', sans-serif" }}
    >
      <Header />

      <main className="w-full max-w-content mx-auto px-5 md:px-[80px]">
        {/* Breadcrumb */}
        <div
          className="flex items-center justify-between"
          style={{ paddingTop: '64px', paddingBottom: '32px' }}
        >
          <Link
            to="/podcast"
            className="inline-flex items-center uppercase hover:opacity-70 transition-opacity"
            style={{
              gap: '8px',
              fontSize: '16px',
              fontWeight: 600,
              lineHeight: '1.35',
              color: '#000',
              textDecoration: 'none',
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M19 12H5M5 12L11 6M5 12L11 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Go Back
          </Link>
          <span
            className="uppercase"
            style={{ fontSize: '32px', fontWeight: 600, lineHeight: '1.1', color: '#000' }}
          >
            Podcast
          </span>
        </div>

        {/* Two-column layout */}
        <div
          className="flex flex-col lg:flex-row"
          style={{ gap: '64px', paddingTop: '32px' }}
        >
          {/* Sidebar */}
          <aside className="shrink-0 flex flex-col" style={{ width: '320px', gap: '32px' }}>
            {/* Podcast cover */}
            <div
              className="relative overflow-hidden"
              style={{ width: '320px', height: '320px' }}
            >
              <img
                src="/images/podcast-ep5.png"
                alt="Episode 01"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0 flex flex-col justify-between"
                style={{ padding: '20px' }}
              >
                <div>
                  <span
                    className="block uppercase"
                    style={{ fontSize: '15px', fontWeight: 600, color: '#fff' }}
                  >
                    Podcast
                  </span>
                  <span
                    className="block uppercase"
                    style={{ fontSize: '30px', fontWeight: 600, color: '#fff' }}
                  >
                    Fyrre
                  </span>
                </div>
                <span
                  className="uppercase"
                  style={{ fontSize: '15px', fontWeight: 600, color: '#fff' }}
                >
                  Ep 05
                </span>
              </div>
              <div
                className="absolute flex items-center justify-center bg-white rounded-full"
                style={{ width: '30px', height: '30px', bottom: '14px', right: '14px' }}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 1L10 6L2 11V1Z" fill="#000" />
                </svg>
              </div>
            </div>

            {/* Listen On */}
            <div className="flex flex-col" style={{ gap: '16px' }}>
              <div className="flex items-center" style={{ gap: '16px' }}>
                <span style={{ fontSize: '16px', fontWeight: 600, lineHeight: '1.8' }}>
                  Listen On
                </span>
                <div className="flex items-center" style={{ gap: '12px' }}>
                  {/* Spotify */}
                  <a href="#" className="hover:opacity-70 transition-opacity" aria-label="Spotify">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                    </svg>
                  </a>
                  {/* Apple */}
                  <a href="#" className="hover:opacity-70 transition-opacity" aria-label="Apple">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                  </a>
                  {/* Soundcloud */}
                  <a href="#" className="hover:opacity-70 transition-opacity" aria-label="Soundcloud">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.05.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.27-2.154c-.009-.06-.05-.1-.1-.1m-.899.828c-.06 0-.091.037-.104.094L0 14.479l.172 1.282c.013.06.045.094.104.094.057 0 .09-.037.104-.094l.197-1.282-.197-1.332c-.014-.057-.047-.094-.104-.094m1.81-1.18c-.074 0-.12.057-.127.13l-.218 2.476.218 2.395c.007.075.053.13.126.13.075 0 .12-.055.129-.13l.244-2.395-.244-2.476c-.009-.073-.054-.13-.129-.13m.899-.478c-.088 0-.135.069-.142.149l-.2 2.955.2 2.848c.007.081.054.15.142.15.086 0 .134-.069.142-.15l.227-2.848-.227-2.955c-.008-.08-.056-.149-.142-.149m.886-.381c-.1 0-.154.081-.16.167l-.185 3.336.185 3.229c.006.091.06.168.16.168.098 0 .152-.077.16-.168l.21-3.229-.21-3.336c-.008-.086-.062-.167-.16-.167m.927-.218c-.115 0-.169.094-.175.186l-.17 3.554.17 3.395c.006.098.06.186.175.186.113 0 .168-.088.175-.186l.192-3.395-.192-3.554c-.007-.092-.062-.186-.175-.186m.966-.153c-.128 0-.184.107-.189.206l-.155 3.707.155 3.525c.005.105.061.206.189.206.126 0 .183-.101.189-.206l.176-3.525-.176-3.707c-.006-.099-.063-.206-.189-.206m.967-.084c-.14 0-.197.119-.203.222l-.14 3.791.14 3.621c.006.113.063.223.203.223.138 0 .196-.11.203-.223l.157-3.621-.157-3.791c-.007-.103-.065-.222-.203-.222m1.01-.065c-.153 0-.21.13-.216.241l-.125 3.856.125 3.67c.006.118.063.24.216.24.151 0 .21-.122.217-.24l.14-3.67-.14-3.856c-.007-.111-.066-.241-.217-.241m1.052-.063c-.165 0-.224.143-.229.257l-.112 3.919.112 3.699c.005.125.064.258.229.258.163 0 .223-.133.229-.258l.126-3.699-.126-3.919c-.006-.114-.066-.257-.229-.257m1.063-.033c-.178 0-.237.155-.242.274l-.098 3.952.098 3.733c.005.131.064.275.242.275.176 0 .236-.144.242-.275l.11-3.733-.11-3.952c-.006-.119-.066-.274-.242-.274m1.12.083c-.19 0-.25.167-.255.29l-.083 3.869.083 3.685c.005.137.065.29.255.29.188 0 .249-.153.255-.29l.094-3.685-.094-3.869c-.006-.123-.067-.29-.255-.29m1.152.201c-.201 0-.264.178-.268.306l-.069 3.668.069 3.499c.004.143.067.306.268.306.199 0 .262-.163.268-.306l.078-3.499-.078-3.668c-.006-.128-.069-.306-.268-.306m1.085-.146c-.214 0-.278.19-.281.322l-.055 3.814.055 3.46c.003.15.067.323.281.323.212 0 .276-.173.281-.323l.063-3.46-.063-3.814c-.005-.132-.069-.322-.281-.322m1.174-.087c-.226 0-.292.202-.295.337l-.04 3.901.04 3.399c.003.155.069.338.295.338.224 0 .29-.183.295-.338l.046-3.399-.046-3.901c-.005-.135-.071-.337-.295-.337m1.236-.003c-.239 0-.306.213-.308.352l-.025 3.904.025 3.355c.002.161.069.353.308.353.236 0 .304-.192.308-.353l.029-3.355-.029-3.904c-.004-.139-.072-.352-.308-.352m1.249-.041c-.251 0-.319.224-.321.367l-.012 3.945.012 3.311c.002.168.07.368.321.368.249 0 .318-.2.321-.368l.013-3.311-.013-3.945c-.003-.143-.072-.367-.321-.367m1.263.008c-.262 0-.332.236-.334.383l.001 3.904-.001 3.267c.002.174.072.383.334.383.261 0 .331-.209.334-.383l.005-3.267-.005-3.904c-.003-.147-.073-.383-.334-.383m3.685 2.833c-.437 0-.854.076-1.245.214-.249-2.81-2.626-5.014-5.527-5.014-.689 0-1.352.131-1.952.358-.224.085-.302.172-.304.34v9.865c.003.174.137.318.31.338l8.718.001c1.855 0 3.359-1.505 3.359-3.36s-1.504-3.342-3.359-3.342" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-black" />

              {/* Meta */}
              <div className="flex flex-col" style={{ gap: '12px' }}>
                <div className="flex items-center justify-between" style={{ gap: '12px' }}>
                  <span style={{ fontSize: '16px', fontWeight: 600, lineHeight: '1.8', width: '80px' }}>
                    Date
                  </span>
                  <span style={{ fontSize: '16px', fontWeight: 400, lineHeight: '1.8' }}>
                    16. March 2022
                  </span>
                </div>
                <div className="flex items-center justify-between" style={{ gap: '12px' }}>
                  <span style={{ fontSize: '16px', fontWeight: 600, lineHeight: '1.8', width: '80px' }}>
                    Duration
                  </span>
                  <span style={{ fontSize: '16px', fontWeight: 400, lineHeight: '1.8' }}>
                    45 Min
                  </span>
                </div>
                <div className="flex items-center justify-between" style={{ gap: '12px' }}>
                  <span style={{ fontSize: '16px', fontWeight: 600, lineHeight: '1.8', width: '80px' }}>
                    Share
                  </span>
                  <div className="flex items-center" style={{ gap: '12px' }}>
                    <a href="#" className="hover:opacity-70 transition-opacity" aria-label="Instagram">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/></svg>
                    </a>
                    <a href="#" className="hover:opacity-70 transition-opacity" aria-label="Twitter">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231z"/></svg>
                    </a>
                    <a href="#" className="hover:opacity-70 transition-opacity" aria-label="YouTube">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                    </a>
                    <a href="#" className="hover:opacity-70 transition-opacity" aria-label="RSS">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6.503 20.752c0 1.794-1.456 3.248-3.251 3.248-1.796 0-3.252-1.454-3.252-3.248 0-1.794 1.456-3.248 3.252-3.248 1.795.001 3.251 1.454 3.251 3.248zm-6.503-12.572v4.811c6.05.463 10.955 4.907 11.422 10.937h4.904c-.437-8.595-7.565-15.724-16.326-16.248zm0-3.18c10.186.479 18.479 8.772 18.958 18.958h-4.078c-.479-8.212-7.165-14.899-15.37-15.377V5z"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Content */}
          <div className="flex-1 flex flex-col" style={{ gap: '24px' }}>
            {/* Title area */}
            <div className="flex flex-col" style={{ gap: '16px' }}>
              <span
                className="uppercase"
                style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  lineHeight: '1.6',
                  color: '#000',
                }}
              >
                Episode 01
              </span>
              <h1
                style={{
                  fontSize: 'clamp(2.5rem, 5vw, 72px)',
                  fontWeight: 600,
                  lineHeight: '1.1',
                  color: '#000',
                }}
              >
                Save the world from ourselves!
              </h1>
            </div>

            {/* Intro */}
            <p
              style={{
                fontSize: '20px',
                fontWeight: 500,
                lineHeight: '1.8',
                color: '#000',
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
              dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu
              felis bibendum ut. Porttitor leo a diam.
            </p>

            {/* Body text */}
            <p
              style={{
                fontSize: '16px',
                fontWeight: 400,
                lineHeight: '1.8',
                color: '#000',
              }}
            >
              Porttitor rhoncus dolor purus non enim praesent elementum. Eget dolor
              morbi non arcu risus quis varius. Posuere ac ut consequat semper
              viverra nam libero. In ornare quam viverra orci sagittis eu. Tristique
              risus nec feugiat in fermentum posuere urna nec. Tempus quam
              pellentesque nec nam aliquam sem et. Convallis a cras semper auctor
              neque vitae tempus quam pellentesque. Sollicitudin ac orci phasellus
              egestas tellus rutrum tellus pellentesque. Sed egestas egestas
              fringilla phasellus faucibus scelerisque eleifend donec pretium.
            </p>
            <p
              style={{
                fontSize: '16px',
                fontWeight: 400,
                lineHeight: '1.8',
                color: '#000',
              }}
            >
              Tellus orci ac auctor augue mauris augue neque gravida. Tempus
              imperdiet nulla malesuada pellentesque elit eget gravida cum sociis.
              Id eu nisl nunc mi ipsum faucibus vitae aliquet. Duis convallis
              convallis tellus id interdum velit laoreet id. Vulputate mi sit amet
              mauris commodo quis. Semper viverra nam libero justo laoreet sit amet.
            </p>

            {/* Blockquote */}
            <div className="flex flex-col" style={{ gap: '48px', padding: '24px 0' }}>
              <div className="w-full h-px bg-black" />
              <div className="flex" style={{ gap: '24px' }}>
                <span
                  style={{
                    fontSize: '96px',
                    fontWeight: 600,
                    lineHeight: '1',
                    color: '#000',
                  }}
                >
                  &ldquo;
                </span>
                <div className="flex flex-col" style={{ gap: '24px' }}>
                  <blockquote
                    style={{
                      fontSize: '48px',
                      fontWeight: 600,
                      lineHeight: '1.2',
                      color: '#000',
                    }}
                  >
                    The greatest glory in living lies not in never falling, but in
                    rising every time we fall.
                  </blockquote>
                  <span
                    style={{ fontSize: '14px', fontWeight: 400, lineHeight: '1.6', color: '#000' }}
                  >
                    Nelson Mandela
                  </span>
                </div>
              </div>
              <div className="w-full h-px bg-black" />
            </div>

            {/* More body */}
            <p
              style={{
                fontSize: '16px',
                fontWeight: 400,
                lineHeight: '1.8',
                color: '#000',
              }}
            >
              Porttitor rhoncus dolor purus non enim praesent elementum. Eget dolor
              morbi non arcu risus quis varius. Posuere ac ut consequat semper
              viverra nam libero. In ornare quam viverra orci sagittis eu. Tristique
              risus nec feugiat in fermentum posuere urna nec. Tempus quam
              pellentesque nec nam aliquam sem et. Convallis a cras semper auctor
              neque vitae tempus quam pellentesque.
            </p>
            <p
              style={{
                fontSize: '16px',
                fontWeight: 400,
                lineHeight: '1.8',
                color: '#000',
              }}
            >
              Tellus orci ac auctor augue mauris augue neque gravida. Tempus
              imperdiet nulla malesuada pellentesque elit eget gravida cum sociis.
              Id eu nisl nunc mi ipsum faucibus vitae aliquet. Duis convallis
              convallis tellus id interdum velit laoreet id. Vulputate mi sit amet
              mauris commodo quis. Semper viverra nam libero justo laoreet sit amet.
              Eget nullam non nisi est sit. Nibh cras pulvinar mattis nunc sed
              blandit libero. Ac felis donec et odio pellentesque diam volutpat.
            </p>
          </div>
        </div>
      </main>

      <div style={{ paddingTop: '128px' }}>
        <Footer />
      </div>
    </div>
  )
}
