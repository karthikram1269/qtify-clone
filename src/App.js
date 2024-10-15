import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Main from './Components/Main';
import ErrorPage from './Pages/ErrorPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='*' element={<ErrorPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
