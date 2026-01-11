import { useState, useEffect } from 'react';

const Header = ({ title = 'Tech Superstar', showCart = false, showNotifications = true, showProfile = true, showSearch = false }) => {
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        // Check initial theme
        const checkTheme = () => {
            const darkMode = document.documentElement.classList.contains('dark');
            setIsDark(darkMode);
        };
        checkTheme();

        // Listen for theme changes
        const observer = new MutationObserver(checkTheme);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class']
        });

        return () => observer.disconnect();
    }, []);

    const toggleTheme = () => {
        const newIsDark = !isDark;
        if (newIsDark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
        setIsDark(newIsDark);
    };

    return (
        <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-black/5 dark:border-white/5">
            <div className="flex items-center px-4 py-3 justify-between max-w-7xl mx-auto lg:px-8">
                <div className="flex items-center gap-3">
                    <h2 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-tight font-display uppercase italic">
                        {title}
                    </h2>
                </div>

                {/* Desktop Navigation - Hidden on mobile */}
                <nav className="hidden lg:flex items-center gap-6">
                    <a href="/" className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors font-medium">
                        Home
                    </a>
                    <a href="/blog" className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors font-medium">
                        Blog
                    </a>
                    <a href="/store" className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors font-medium">
                        Store
                    </a>
                    <a href="/compare" className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors font-medium">
                        Compare
                    </a>
                    <a href="/giveaways" className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors font-medium">
                        Giveaways
                    </a>
                </nav>

                <div className="flex gap-2 items-center">
                    {showSearch && (
                        <button className="flex size-10 cursor-pointer items-center justify-center rounded-full bg-slate-100 dark:bg-surface-dark text-slate-900 dark:text-white transition-colors active:scale-95 hover:bg-slate-200 dark:hover:bg-surface-dark-light">
                            <span className="material-symbols-outlined">search</span>
                        </button>
                    )}

                    {showNotifications && (
                        <button className="flex size-10 cursor-pointer items-center justify-center rounded-full bg-slate-100 dark:bg-surface-dark text-slate-900 dark:text-white transition-colors active:scale-95 hover:bg-slate-200 dark:hover:bg-surface-dark-light">
                            <span className="material-symbols-outlined">notifications</span>
                        </button>
                    )}

                    {showCart && (
                        <button className="relative flex size-10 cursor-pointer items-center justify-center rounded-full bg-slate-100 dark:bg-surface-dark text-slate-900 dark:text-white transition-colors active:scale-95 hover:bg-slate-200 dark:hover:bg-surface-dark-light">
                            <span className="material-symbols-outlined">shopping_cart</span>
                            <span className="absolute top-1 right-1 w-4 h-4 bg-primary text-[10px] flex items-center justify-center rounded-full text-white font-bold">3</span>
                        </button>
                    )}

                    {/* Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        className="flex size-10 cursor-pointer items-center justify-center rounded-full bg-slate-100 dark:bg-surface-dark text-slate-900 dark:text-white transition-colors active:scale-95 hover:bg-slate-200 dark:hover:bg-surface-dark-light"
                        aria-label="Toggle theme"
                    >
                        {isDark ? (
                            <span className="material-symbols-outlined">light_mode</span>
                        ) : (
                            <span className="material-symbols-outlined">dark_mode</span>
                        )}
                    </button>

                    {showProfile && (
                        <div className="size-10 rounded-full bg-cover bg-center border-2 border-primary cursor-pointer hover:border-primary/70 transition-colors"
                            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC4lS-4Bsyt1J8kZXH3QttSHa46YkVrejb8J-d7PtwXxN9StQtKkDYO-EiOXSHaICwJBQODmR8rRBrW1ztqIe48Ioc29cRtzz-NePCqJ0uadX4BK0c-adZ2WAQTMySA-YWiyB11hetBnE7zTgeTNwmdq9Mnmt51GISFEgqKW9yTuJfINJjDhUQOghsHGRs6Nz8HGRSkwlYyyHePO6hRpHs1vFmmbsPLoh-quL-0fXAXm1odGLbRcZjAjHo0z0OENVdd12jY8oDtaH_V")' }}
                        />
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
