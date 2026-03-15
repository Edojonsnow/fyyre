import Header from './Header'
import ArticleBreadcrumb from './ArticleBreadcrumb'
import ArticleHero from './ArticleHero'
import ArticleBody from './ArticleBody'
import LatestPosts from './LatestPosts'
import Footer from './Footer'

export default function ArticleDetailPage() {
  return (
    <div
      className="min-h-screen bg-white"
      style={{ fontFamily: "'General Sans', 'DM Sans', sans-serif" }}
    >
      <Header />
      <main className="w-full max-w-content mx-auto px-5 md:px-[80px]">
        <ArticleBreadcrumb />
        <ArticleHero />
      </main>

      {/* Full-width article image */}
      <div className="w-full max-w-content mx-auto px-5 md:px-[80px]">
        <div
          className="w-full overflow-hidden"
          style={{ height: '880px' }}
        >
          <img
            src="/images/magazine/mag-article-1.png"
            alt="Hope dies last"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="w-full max-w-content mx-auto px-5 md:px-[80px]">
        <ArticleBody />
      </div>

      <div
        className="w-full max-w-content mx-auto px-5 md:px-[80px]"
        style={{ paddingTop: '96px', paddingBottom: '96px' }}
      >
        <LatestPosts />
      </div>

      <Footer />
    </div>
  )
}
