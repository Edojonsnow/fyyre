import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Frontpage from './components/Frontpage'
import MagazinePage from './components/MagazinePage'
import ArticleDetailPage from './components/ArticleDetailPage'
import PodcastPage from './components/PodcastPage'
import PodcastPostPage from './components/PodcastPostPage'
import AuthorsPage from './components/AuthorsPage'
import AuthorDetailPage from './components/AuthorDetailPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Frontpage />} />
        <Route path="/magazine" element={<MagazinePage />} />
        <Route path="/article/:slug" element={<ArticleDetailPage />} />
        <Route path="/podcast" element={<PodcastPage />} />
        <Route path="/podcast/:slug" element={<PodcastPostPage />} />
        <Route path="/authors" element={<AuthorsPage />} />
        <Route path="/author/:slug" element={<AuthorDetailPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
