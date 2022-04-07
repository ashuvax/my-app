import { Routes, Route, Link } from "react-router-dom";
import Main from "./pages/main";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Link to="/main">Home</Link>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="*" element={<div>הופס... 404</div>} />
      </Routes>
    </div>
  );
}

export default App;
