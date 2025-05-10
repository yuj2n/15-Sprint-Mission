// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home'; // Home 컴포넌트 import
import Login from './pages/Login/Login'; // 필요시 Login도 import
import Items from './pages/Item/Items'; // Items 페이지 import
import SignUp from './pages/Signup/SignUp'; // SignUp 페이지 import
import Privacy from './pages/Privacy/Privacy';
import Faq from './pages/Faq/Faq';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* / 경로에 Home을 첫 화면으로 설정 */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} /> 
        <Route path="/items" element={<Items />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/privacy" element={<Privacy />} /> 
      </Routes>
    </Router>
  );
}

export default App;