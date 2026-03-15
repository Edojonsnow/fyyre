import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Frontpage from './components/Frontpage'
import MagazinePage from './components/MagazinePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Frontpage />} />
        <Route path="/magazine" element={<MagazinePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
