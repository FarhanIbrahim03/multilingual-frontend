import { useState } from "react";
import { motion } from "framer-motion";
import { UploadCloud } from "lucide-react";

export default function Upload({ onTranscription }) {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (!file) {
      alert("Please select an audio file first.");
      return;
    }

    // Simulating transcription (Replace with actual backend integration)
    setTimeout(() => {
      const dummyText = "This is a transcribed text from the uploaded audio.";
      onTranscription(dummyText);
    }, 2000);
  };

  return (
    <motion.div
      className="flex flex-col items-center space-y-6 p-8 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-white/20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Upload Area */}
      <label className="flex items-center justify-center w-72 h-40 border-2 border-dashed border-black rounded-xl cursor-pointer hover:bg-white/10 transition">
        <input type="file" accept="audio/*" onChange={handleFileChange} hidden />
        <div className="flex flex-col items-center">
          <UploadCloud size={48} className="text-black mb-2" />
          <p className="text-black font-semibold">Click to upload an audio file</p>
        </div>
      </label>

      {/* Display selected file name */}
      {file && (
        <p className="text-gray-300 text-sm italic">Selected: {file.name}</p>
      )}

      {/* Upload Button */}
      <motion.button
        onClick={handleUpload}
        className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Upload & Transcribe
      </motion.button>
    </motion.div>
  );
}
