import { useNavigate } from 'react-router-dom';

const BlogCard = ({ article, variant = 'feed', id = '1' }) => {
    const navigate = useNavigate();
    const { image, title, category, readTime, timeAgo, excerpt, views, badge } = article;

    const handleClick = () => {
        navigate(`/blog/${id}`);
    };

    // Hero variant - large featured card
    if (variant === 'hero') {
        return (
            <div className="px-4 mb-8">
                <div
                    onClick={handleClick}
                    className="relative group overflow-hidden rounded-xl bg-surface-dark cursor-pointer hover:scale-[1.02] transition-transform"
                >
                    <div
                        className="aspect-[16/10] bg-center bg-cover transition-transform duration-500 group-hover:scale-105"
                        style={{ backgroundImage: `url("${image}")` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 p-5 w-full">
                        {badge && (
                            <span className="inline-block px-3 py-1 bg-primary text-white text-[10px] font-black uppercase tracking-widest rounded-full mb-3">
                                {badge}
                            </span>
                        )}
                        <h3 className="text-white text-2xl font-bold font-display leading-tight mb-2">
                            {title}
                        </h3>
                        <div className="flex items-center gap-3 text-slate-300 text-xs">
                            <span>{readTime}</span>
                            <span>•</span>
                            <span>{timeAgo}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Mini variant - small card for horizontal scroll
    if (variant === 'mini') {
        return (
            <div
                onClick={handleClick}
                className="min-w-[200px] bg-slate-100 dark:bg-surface-dark rounded-xl p-3 flex flex-col gap-3 cursor-pointer hover:scale-105 transition-transform"
            >
                <div
                    className="w-full aspect-square bg-cover bg-center rounded-lg"
                    style={{ backgroundImage: `url("${image}")` }}
                />
                <p className="text-slate-900 dark:text-white font-bold leading-tight line-clamp-2">
                    {title}
                </p>
                <p className="text-primary text-[10px] font-bold uppercase">{category}</p>
            </div>
        );
    }

    // Feed variant - default card with full details
    return (
        <div className="flex flex-col bg-slate-50 dark:bg-surface-dark rounded-xl overflow-hidden border border-slate-200 dark:border-white/5 cursor-pointer hover:scale-[1.02] transition-transform">
            <div
                onClick={handleClick}
                className="aspect-video bg-center bg-cover"
                style={{ backgroundImage: `url("${image}")` }}
            />
            <div className="p-4 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                    <span className="text-primary text-[10px] font-black tracking-widest uppercase">
                        {category}
                    </span>
                    <span className="text-slate-400 text-[10px] font-medium uppercase">
                        {timeAgo}
                    </span>
                </div>
                <h3
                    onClick={handleClick}
                    className="text-slate-900 dark:text-white text-xl font-bold leading-tight"
                >
                    {title}
                </h3>
                {excerpt && (
                    <p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-2">
                        {excerpt}
                    </p>
                )}
                <div className="flex items-center justify-between mt-2">
                    {views && (
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-slate-400 text-sm">visibility</span>
                            <span className="text-slate-400 text-xs">{views}</span>
                        </div>
                    )}
                    <button
                        onClick={handleClick}
                        className="bg-primary hover:bg-red-700 text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-colors"
                    >
                        Read Full
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
