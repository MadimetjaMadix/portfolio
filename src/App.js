import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './Components/NavBar'

function App () {
  return (
    <div className='App'>
      <link
        rel='stylesheet'
        href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css'
        integrity='sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC'
        crossOrigin='anonymous'
      />
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<NavBar />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
