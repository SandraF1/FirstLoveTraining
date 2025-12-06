// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MPReading from "./pages/MPReading";
import MPVocab from "./pages/MPVocab";
import MPVocabOdd from "./pages/MPVocabOdd";
import MPGrammar from "./pages/MPGrammar";
import MPGrammarExplanation from "./pages/MPGrammarExplanation";
import MPGrammarPredict from "./pages/MPGrammarPredict";
import GWReading from "./pages/GWReading";
import GWComprehension from "./pages/GWComprehension";
import GWGrammarPredict from "./pages/GWGrammarPredict";
import PetraReading from "./pages/PetraReading";
import PetraComprehension from "./pages/PetraComprehension";
import PetraGrammarPredict from "./pages/PetraGrammarPredict";
import PetraMemory from "./pages/PetraMemory";
import Compare1 from "./pages/Compare1";
import Compare2 from "./pages/Compare2";
import Segue from "./pages/Segue";
import Flashcards from "./pages/MPFlashcards";
import Story01 from "./pages/Story01";
import Story02 from "./pages/Story02";
import Story03 from "./pages/Story03";
import Story04 from "./pages/Story04";
import Story05 from "./pages/Story05";
import Story06 from "./pages/Story06";
import Project01 from "./pages/Project01";
import Project02 from "./pages/Project02";
import Project03 from "./pages/Project03";
import Project04 from "./pages/Project04";
import Project05 from "./pages/Project05";
import LearningOutcomes from "./pages/LearningOutcomes";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MPReading" element={<MPReading />} />
        <Route path="/MPVocab" element={<MPVocab />} />
        <Route path="/MPVocabOdd" element={<MPVocabOdd />} />
        <Route path="/MPGrammar" element={<MPGrammar />} />
        <Route
          path="/MPGrammarExplanation"
          element={<MPGrammarExplanation />}
        />
        <Route path="/GWReading" element={<GWReading />} />
        <Route path="/GWComprehension" element={<GWComprehension />} />
        <Route path="/PetraReading" element={<PetraReading />} />
        <Route path="/PetraComprehension" element={<PetraComprehension />} />
        <Route path="/PetraMemory" element={<PetraMemory />} />
        <Route path="/Compare1" element={<Compare1 />} />
        <Route path="/Compare2" element={<Compare2 />} />
        <Route path="/Segue" element={<Segue />} />
        <Route path="/MPFlashcards" element={<Flashcards />} />
        <Route path="/Story01" element={<Story01 />} />
        <Route path="/Story02" element={<Story02 />} />
        <Route path="/Story03" element={<Story03 />} />
        <Route path="/Story04" element={<Story04 />} />
        <Route path="/Story05" element={<Story05 />} />
        <Route path="/Story06" element={<Story06 />} />
        <Route path="/Project01" element={<Project01 />} />
        <Route path="/Project02" element={<Project02 />} />
        <Route path="/Project03" element={<Project03 />} />
        <Route path="/Project04" element={<Project04 />} />
        <Route path="/Project05" element={<Project05 />} />
        <Route path="/LearningOutcomes" element={<LearningOutcomes />} />
        <Route path="/MPGrammarPredict" element={<MPGrammarPredict />} />
        <Route path="/GWGrammarPredict" element={<GWGrammarPredict />} />
        <Route path="/PetraGrammarPredict" element={<PetraGrammarPredict />} />
      </Routes>
    </Router>
  );
}

export default App;
