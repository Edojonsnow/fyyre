export default function ArticleBody() {
  return (
    <div
      style={{
        position: 'relative',
        paddingTop: '96px',
        fontFamily: "'General Sans', 'DM Sans', sans-serif",
      }}
    >
      {/* Sidebar — author info (positioned left) */}
      <aside
        className="hidden lg:flex flex-col"
        style={{ position: 'absolute', left: 0, top: '96px', width: '160px', gap: '16px' }}
      >
        {/* Author */}
        <div className="flex items-center" style={{ gap: '10px' }}>
          <img
            src="/authors/jakob.png"
            alt="Jakob Gronberg"
            className="object-cover rounded-full"
            style={{ width: '48px', height: '48px' }}
          />
          <span
            style={{
              fontSize: '18px',
              fontWeight: 600,
              lineHeight: '1.2',
              color: '#000',
            }}
          >
            Jakob Gronberg
          </span>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-black" />

        {/* Meta */}
        <div className="flex flex-col" style={{ gap: '12px' }}>
          <div className="flex flex-col" style={{ gap: '2px' }}>
            <span
              style={{
                fontSize: '12px',
                fontWeight: 600,
                lineHeight: '1.4',
                color: '#000',
              }}
            >
              Date
            </span>
            <span
              style={{
                fontSize: '14px',
                fontWeight: 400,
                lineHeight: '1.6',
                color: '#000',
              }}
            >
              16. March 2022
            </span>
          </div>
          <div className="flex flex-col" style={{ gap: '2px' }}>
            <span
              style={{
                fontSize: '12px',
                fontWeight: 600,
                lineHeight: '1.4',
                color: '#000',
              }}
            >
              Read
            </span>
            <span
              style={{
                fontSize: '14px',
                fontWeight: 400,
                lineHeight: '1.6',
                color: '#000',
              }}
            >
              2 Min
            </span>
          </div>
          <div className="flex flex-col" style={{ gap: '4px' }}>
            <span
              style={{
                fontSize: '12px',
                fontWeight: 600,
                lineHeight: '1.4',
                color: '#000',
              }}
            >
              Share
            </span>
            <div className="flex items-center" style={{ gap: '8px' }}>
              <a href="#" className="hover:opacity-70 transition-opacity" aria-label="Instagram">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/></svg>
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity" aria-label="Twitter">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231z"/></svg>
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity" aria-label="YouTube">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity" aria-label="RSS">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M6.503 20.752c0 1.794-1.456 3.248-3.251 3.248-1.796 0-3.252-1.454-3.252-3.248 0-1.794 1.456-3.248 3.252-3.248 1.795.001 3.251 1.454 3.251 3.248zm-6.503-12.572v4.811c6.05.463 10.955 4.907 11.422 10.937h4.904c-.437-8.595-7.565-15.724-16.326-16.248zm0-3.18c10.186.479 18.479 8.772 18.958 18.958h-4.078c-.479-8.212-7.165-14.899-15.37-15.377V5z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </aside>

      {/* Main article content — centered on screen */}
      <div className="flex flex-col" style={{ gap: '24px', maxWidth: '760px', margin: '0 auto' }}>
        {/* Intro bold paragraph */}
        <p
          style={{
            fontSize: '22px',
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
            fontSize: '18px',
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
          fringilla phasellus faucibus scelerisque eleifend donec pretium. Sit
          amet porttitor eget dolor morbi non arcu risus. Justo eget magna
          fermentum iaculis eu non diam phasellus. Sit amet luctus venenatis
          lectus magna fringilla. Neque vitae tempus quam pellentesque nec nam.
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
          Quis varius quam quisque id diam vel quam elementum. Felis bibendum
          ut tristique et egestas quis ipsum suspendisse ultrices. Id diam vel
          quam elementum pulvinar etiam non. Non consectetur a erat nam at
          lectus urna duis convallis.
        </p>

        {/* Blockquote */}
        <div
          className="flex flex-col"
          style={{
            gap: '48px',
            padding: '24px 0',
          }}
        >
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
                style={{
                  fontSize: '14px',
                  fontWeight: 400,
                  lineHeight: '1.6',
                  color: '#000',
                }}
              >
                Nelson Mandela
              </span>
            </div>
          </div>
          <div className="w-full h-px bg-black" />
        </div>

        {/* More body text */}
        <p
          style={{
            fontSize: '22px',
            fontWeight: 500,
            lineHeight: '1.8',
            color: '#000',
          }}
        >
          Est pellentesque elit ullamcorper dignissim. Consectetur a erat nam
          at. Blandit libero volutpat sed cras ornare arcu. Iaculis urna id
          volutpat lacus laoreet. Tincidunt ornare massa eget egestas purus
          viverra accumsan in. Viverra ipsum nunc aliquet bibendum enim
          facilisis gravida neque.
        </p>

        <p
          style={{
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: '1.8',
            color: '#000',
          }}
        >
          Vitae turpis massa sed elementum tempus egestas sed. Quam lacus
          suspendisse faucibus interdum posuere lorem ipsum. Viverra justo nec
          ultrices dui sapien eget. At risus viverra adipiscing at in tellus
          integer feugiat. Elementum eu facilisis sed odio morbi quis commodo.
          Arcu cursus vitae congue mauris rhoncus aenean. Auctor elit sed
          vulputate mi sit amet mauris commodo quis. Lectus sit amet est
          placerat in egestas erat imperdiet sed. Eu mi bibendum neque egestas
          congue quisque. Sit amet luctus venenatis lectus magna fringilla urna
          porttitor. Pretium vulputate sapien nec sagittis aliquam malesuada
          bibendum arcu. Sed ullamcorper morbi tincidunt ornare massa eget
          egestas purus. Pharetra vel turpis nunc eget lorem. Morbi blandit
          cursus risus at ultrices mi tempus imperdiet nulla. In metus vulputate
          eu scelerisque felis imperdiet. Elementum pulvinar etiam non quam
          lacus suspendisse. Sem fringilla ut morbi tincidunt augue. Id
          venenatis a condimentum vitae sapien. Varius quam quisque id diam vel.
        </p>
        <p
          style={{
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: '1.8',
            color: '#000',
          }}
        >
          Nec feugiat in fermentum posuere urna nec tincidunt praesent semper.
          Aliquam nulla facilisi cras fermentum. Quam elementum pulvinar etiam
          non quam lacus suspendisse faucibus interdum. Neque vitae tempus quam
          pellentesque nec. Interdum consectetur libero id faucibus nisl
          tincidunt eget nullam. Mattis enim ut tellus elementum sagittis. In
          fermentum et sollicitudin ac orci phasellus. Est sit amet facilisis
          magna etiam tempor orci. Lacinia at quis risus sed vulputate odio ut.
          Egestas egestas fringilla phasellus faucibus scelerisque eleifend.
          Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero.
          Aenean vel elit scelerisque mauris pellentesque. Gravida arcu ac
          tortor dignissim. Ac tortor dignissim convallis aenean.
        </p>
      </div>
    </div>
  )
}
