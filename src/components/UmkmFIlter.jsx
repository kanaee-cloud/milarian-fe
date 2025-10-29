import React from "react";

export const UmkmFilter = ({ selectedCategory, onSelectCategory }) => {
  const categories = ["Semua", "Jasa", "Kuliner", "Lainnya"];

  return (
    <div className="flex flex-wrap justify-left gap-3 mb-10">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelectCategory(cat)}
          className={`px-5 py-2 rounded-full font-semibold border transition-all duration-200 ${
            selectedCategory === cat
              ? "bg-primary text-white border-primary"
              : "bg-white text-primary border-gray-300 hover:bg-primary/10"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};
