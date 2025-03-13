import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/login';
import Home from './components/home';
import Detail from './components/detail';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/detail" element={<Detail />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;

//<Route path="/" element={<Login />} />
//<Route path="/activity_list" element={<ActivityList />} />
