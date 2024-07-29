import './App.css'
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SideBar from './components/SideBar';
import EditLink from './components/EditLink';
import CreateLink from './components/CreateLink';
function App() {

  return (
    <>
      <BrowserRouter>
      <SideBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CreateLink" element={<CreateLink />} />
        <Route path="/EditLink" element={<EditLink />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App