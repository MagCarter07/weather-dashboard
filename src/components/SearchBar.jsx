import { useState } from "react";

function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSearch(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <input
        type="text"
        placeholder="Search city..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="bg-white/20 backdrop-blur-md rounded-full px-6 py-3 w-72 text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-white/50 transition"
      />

      <button
        type="submit"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/40 text-white px-4 py-1.5 rounded-full transition"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
