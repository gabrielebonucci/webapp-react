import { Routes, Route } from 'react-router-dom'

import DefaultLayout from './layouts/DefaultLayout' 
import HomePage from './pages/HomePage'
import DetailPage from './pages/DetailPage'

function App() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        
        <Route index element={<HomePage />} />
        <Route path="/film/:id" element={<DetailPage />} />

      </Route>
    </Routes>
  )
}

export default App
