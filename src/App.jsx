import { useState } from "react";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Upload from "./components/Upload";
import Summarization from "./pages/Summarization";
import Query from "./pages/Query";
import "./styles/global.css"; // Ensure global styles include the new font

function Home() {
  const [transcription, setTranscription] = useState("");
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-950 text-white text-center space-y-12 font-poppins">
      <Parallax speed={-10}>
        <motion.h1
          className="text-7xl md:text-9xl font-extrabold relative"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          style={{
            fontFamily: 'Poppins, sans-serif',
            background: "linear-gradient(180deg, #ffb6c1, #ff0080)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: `
              0 0 5px #ff80c0, 
              0 0 15px #ff00ff, 
              0 0 30px #ff0080, 
              0 0 50px #ff0080
            `,
          }}
        >
          ZETA
        </motion.h1>
        <motion.h2
          className="text-3xl md:text-5xl font-semibold text-purple-300 drop-shadow-md mt-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Multilingual Summarization Tool 🌍📜
        </motion.h2>
      </Parallax>

      <p className="text-gray-300 max-w-lg text-lg mt-4">
        Convert speech to text, translate, summarize, and query your summaries
        in multiple languages—all in one powerful tool.
      </p>

      <Upload onTranscription={setTranscription} />

      {transcription && (
        <motion.div
          className="mt-6 p-6 bg-white/10 backdrop-blur-md rounded-xl shadow-xl max-w-2xl border border-white/20"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-bold text-blue-400">Transcribed Text:</h2>
          <p className="text-gray-300 mt-2">{transcription}</p>
        </motion.div>
      )}

      {transcription && (
        <motion.button
          onClick={() => navigate("/summarization")}
          className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Summarization
        </motion.button>
      )}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/summarization" element={<Summarization />} />
        <Route path="/query" element={<Query />} />
      </Routes>
    </Router>
  );
}
