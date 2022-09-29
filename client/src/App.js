import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Ideas from './pages/public/Ideas'
import NewIdea from './pages/public/NewIdea'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Ideas />} />
        <Route path="/new" element={<NewIdea />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
