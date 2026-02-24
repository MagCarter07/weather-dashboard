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
    <form
      onSubmit={handleSubmit}
      className="relative w-full sm:w-[320px] md:w-95"
    >
      <input
        type="text"
        placeholder="Search city..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full bg-white/20 backdrop-blur-xl rounded-full py-3 pl-6 pr-12 text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-white/40 transition"
      />

      <button
        type="submit"
        className="absolute right-4 top-1/3 -translate-y-1/2 flex items-center justify-center"
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
