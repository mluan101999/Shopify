import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './page/Home'

function App() {

  return (
    <>
    <Routes>
      <Route path="" element={<Home />}>
        <Route path='/' element={<h1>Trang chu</h1>}></Route>
        <Route path='/product' element={<h1>San pham</h1>}></Route>
      </Route>
    </Routes>
    </>
  )
}

export default App
