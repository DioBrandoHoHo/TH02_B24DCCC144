import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import WeatherApp from "./components/WeatherApp";
import StudentList from "./components/StudentList";
import NewsApp from "./components/NewsApp";
import "./components/style.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <div className="nav-links center-nav">
            <Link to="/">Bài 1 - Thời tiết</Link>
            <Link to="/students">Bài 2 - Sinh viên</Link>
            <Link to="/news">Bài 3 - Tin tức</Link>
          </div>
        </nav>

        <div className="content">
          <Routes>
            <Route path="/" element={<WeatherApp />} />
            <Route path="/students/*" element={<StudentList />} />
            <Route path="/news" element={<NewsApp />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
