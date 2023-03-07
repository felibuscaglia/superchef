import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainScreen from "screens/Main";
import Results from "screens/Results";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </Router>
  );
};

export default App;
