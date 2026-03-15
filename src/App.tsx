import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Frontpage from './components/Frontpage'
import MagazinePage from './components/MagazinePage'
import ArticleDetailPage from './components/ArticleDetailPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Frontpage />} />
        <Route path="/magazine" element={<MagazinePage />} />
        <Route path="/article/:slug" element={<ArticleDetailPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
