import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeComponent from './components/Home';
import { Chat } from './pages/Chat'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;