import React from "react";
import { Search } from "lucide-react";

const SearchBar = ({ value, onChange, onSearch, placeholder = "Cari UMKM..." }) => {
  return (
    <div className="relative flex justify-center w-full">
      <input
        type="text"
        value={value}
        onChange={onChange}
        onKeyDown={(e) => e.key === "Enter" && onSearch()}
        placeholder={placeholder}
        className="w-full md:text-md text-sm px-4 py-4 pr-12 rounded-full bg-light/10 border border-light/20 focus:outline-none text-light placeholder:text-light/50"
      />
      <button
        onClick={onSearch}
        className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-accent text-white hover:scale-105 transition-transform duration-200"
      >
        <Search size={18} />
      </button>
    </div>
  );
};

export default SearchBar;
