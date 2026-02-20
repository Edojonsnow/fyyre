import Header from './Header'
import HeroBanner from './HeroBanner'
import NewsTicker from './NewsTicker'
import LeadArticle from './LeadArticle'
import ArticlesSection from './ArticlesSection'
import PodcastsSection from './PodcastsSection'
import AuthorsSection from './AuthorsSection'
import Footer from './Footer'

export default function Frontpage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="flex flex-col gap-16 md:gap-12 pb-12">
        <HeroBanner />
        <NewsTicker />
        <LeadArticle />
        <ArticlesSection />
        <PodcastsSection />
        <AuthorsSection />
      </main>
      <Footer />
    </div>
  )
}
