import Header from './Header'
import MagazineHero from './MagazineHero'
import CategoriesFilter from './CategoriesFilter'
import MagazineArticlesGrid from './MagazineArticlesGrid'
import Footer from './Footer'
import { useState } from 'react'

export default function MagazinePage() {

  const [activeCategory, setActiveCategory] = useState('All')


  return (
    <div
      className="min-h-screen bg-white"
      style={{ fontFamily: "'General Sans', 'DM Sans', sans-serif" }}
    >
      <Header />
      <main
        className="w-full max-w-content mx-auto px-5 md:px-[80px] flex flex-col"
        style={{ gap: '96px', paddingBottom: '96px' }}
      >
        <MagazineHero />
        <CategoriesFilter activeCategory={activeCategory} onActiveCategoryChange={setActiveCategory} />
        <MagazineArticlesGrid activeCategory={activeCategory} />
      </main>
      <Footer />
    </div>
  )
}
