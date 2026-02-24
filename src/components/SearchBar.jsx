import { useState } from "react";
import { useNavigate } from "react-router-dom";
import searchIcon from "../assets/icons/search.png";

function SearchBar() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    navigate(`/city/${input}`);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <input
        type="text"
        placeholder="Search city..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="bg-white/20 backdrop-blur-md rounded-full px-6 py-3 w-64 sm:w-80 text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-white/50 transition"
      />

      <button
        type="submit"
        className="absolute right-3 top-1/2 -translate-y-1/2"
      >
        <img
          src={searchIcon}
          alt="search"
          className="w-5 h-5 opacity-80 hover:opacity-100 transition"
        />
      </button>
    </form>
  );
}

export default SearchBar;
