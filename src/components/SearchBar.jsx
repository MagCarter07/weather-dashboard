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
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
      <input
        type="text"
        placeholder="Enter city name..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 p-3 rounded-md text-black"
      />

      <button
        type="submit"
        className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
