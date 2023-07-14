import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AskQuestion from "./pages/AskQuestions";
import SubmittedQuestions from "./pages/SubmittedQuestions";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AskQuestion />} />
        <Route path="/submittedquestions" element={<SubmittedQuestions />} />
      </Routes>
    </Router>
  );
}

export default App;

