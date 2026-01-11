const CategoryChips = ({ categories, activeCategory = 'All', onCategoryChange }) => {
    return (
        <div className="px-4 pb-4">
            <div className="flex gap-2 overflow-x-auto hide-scrollbar">
                {categories.map((category, index) => {
                    const isActive = category === activeCategory;
                    return (
                        <button
                            key={index}
                            onClick={() => onCategoryChange?.(category)}
                            className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${isActive
                                    ? 'bg-primary text-white'
                                    : 'bg-slate-100 dark:bg-surface-dark text-slate-700 dark:text-gray-300 hover:bg-slate-200 dark:hover:bg-surface-dark-light'
                                }`}
                        >
                            {category}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default CategoryChips;
