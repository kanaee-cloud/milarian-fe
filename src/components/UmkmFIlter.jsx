import React from "react";

export const UmkmFilter = ({ selectedCategory, onSelectCategory }) => {
  const categories = ["Semua", "Jasa", "Kuliner", "Lainnya"];

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-10">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelectCategory(cat)}
          className={`px-5 py-2 rounded-full font-semibold transition-all duration-200 ${
            selectedCategory === cat
              ? "bg-white text-primary border-primary"
              : "bg-primary text-light  hover:bg-accent/10"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};
