import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Hiragana from './pages/Hiragana'
import Test from './pages/Test'
import NoPage from './pages/NoPage'

export default function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='hiragana' element={<Hiragana />} />
          <Route path='test' element={<Test />} />
          <Route path='*' element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
