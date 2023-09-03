import Main from './components/Main'
import {Route,Routes,BrowserRouter} from 'react-router-dom'
function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
