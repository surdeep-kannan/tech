import { Link, useLocation } from 'react-router-dom';

const BottomNav = () => {
    const location = useLocation();

    const navItems = [
        { path: '/', icon: 'home', label: 'HOME', id: 'home' },
        { path: '/blog', icon: 'feed', label: 'BLOG', id: 'blog' },
        { path: '/compare', icon: 'compare_arrows', label: 'COMPARE', id: 'compare' },
        { path: '/store', icon: 'shopping_cart', label: 'SHOP', id: 'shop' },
        { path: '/giveaways', icon: 'redeem', label: 'WIN', id: 'giveaways' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-xl border-t border-black/5 dark:border-white/5 px-6 pb-6 pt-3 lg:hidden">
            <div className="max-w-md mx-auto flex items-center justify-between">
                {navItems.map((item, index) => {
                    const active = isActive(item.path);

                    // Center button (index 2) gets special styling
                    if (index === 2) {
                        return (
                            <Link
                                key={item.id}
                                to={item.path}
                                className="relative -top-6"
                            >
                                <div className="size-14 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/40 text-white">
                                    <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                                </div>
                            </Link>
                        );
                    }

                    return (
                        <Link
                            key={item.id}
                            to={item.path}
                            className={`flex flex-col items-center gap-1 ${active ? 'text-primary' : 'text-slate-400'
                                }`}
                        >
                            <span className={`material-symbols-outlined ${active ? 'font-bold fill-1' : ''}`}>
                                {item.icon}
                            </span>
                            <span className="text-[10px] font-bold">{item.label}</span>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
};

export default BottomNav;
