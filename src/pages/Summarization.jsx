import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

export default function Summarization() {
  const location = useLocation();
  const transcription = location.state?.transcription || "No transcription available.";
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSummarization = (type) => {
    setLoading(true);
    setTimeout(() => {
      setSummary(`This is a ${type.toLowerCase()} summary of the transcribed text.`);
      setLoading(false);
    }, 2000);
  };

  const generateFlowchart = (summaryText) => {
    // Placeholder function: You can replace this with actual logic for flowchart generation
    alert("Flowchart generation logic will go here!");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-950 text-white text-center space-y-6 font-poppins">
      <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
        Summarization
      </h1>

      <div className="p-6 bg-white/10 backdrop-blur-md rounded-xl shadow-xl max-w-2xl border border-white/20">
        <h2 className="text-lg font-bold text-blue-400">Transcribed Text:</h2>
        <p className="text-gray-300 mt-2">{transcription}</p>
      </div>

      <div className="flex space-x-4">
        <motion.button
          onClick={() => handleSummarization("Extractive")}
          className="px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Extractive Summarization
        </motion.button>

        <motion.button
          onClick={() => handleSummarization("Abstractive")}
          className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Abstractive Summarization
        </motion.button>
      </div>

      {loading && <p className="text-gray-400">Generating summary...</p>}

      {summary && (
        <motion.div
          className="mt-6 p-6 bg-white/10 backdrop-blur-md rounded-xl shadow-xl max-w-2xl border border-white/20"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-lg font-bold text-blue-400">Summary:</h2>
          <p className="text-gray-300 mt-2">{summary}</p>

          <div className="flex justify-center items-center gap-4 mt-4">
            <motion.button
              onClick={() => navigate("/query", { state: { summary } })}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Query the Summary
            </motion.button>

            <motion.button
              onClick={() => generateFlowchart(summary)}
              className="px-6 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Flowchart
            </motion.button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
