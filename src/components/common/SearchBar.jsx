const SearchBar = ({ placeholder = 'Search...', value = '', onChange, onClear }) => {
    return (
        <div className="px-4 pt-4 pb-3">
            <div className="relative max-w-md mx-auto lg:max-w-none">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-gray-500">
                    search
                </span>
                <input
                    type="text"
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => onChange?.(e.target.value)}
                    className="w-full bg-slate-100 dark:bg-surface-dark text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-gray-500 pl-12 pr-12 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
                {value && (
                    <button
                        onClick={onClear}
                        className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-gray-500 hover:text-primary transition-colors cursor-pointer"
                    >
                        close
                    </button>
                )}
            </div>
        </div>
    );
};

export default SearchBar;
