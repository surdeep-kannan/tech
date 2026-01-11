const ProductCard = ({ product }) => {
    const { image, title, price, category, isNew = false } = product;

    return (
        <div className="group flex flex-col bg-white dark:bg-card-dark rounded-2xl overflow-hidden border border-slate-100 dark:border-white/5 p-2">
            <div className="relative w-full aspect-square bg-slate-100 dark:bg-black rounded-xl overflow-hidden mb-2">
                <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundImage: `url("${image}")` }}
                />
                <button className="absolute top-2 right-2 p-1.5 rounded-full bg-white/10 backdrop-blur-md text-white/50 hover:text-primary transition-colors">
                    <span className="material-symbols-outlined !text-sm">compare_arrows</span>
                </button>
                {isNew && (
                    <div className="absolute bottom-2 left-2 px-1.5 py-0.5 bg-primary rounded text-[8px] font-bold text-white uppercase">
                        New
                    </div>
                )}
            </div>
            <p className="text-xs font-medium text-slate-500 dark:text-white/40 mb-0.5">
                {category}
            </p>
            <h4 className="text-sm font-bold leading-tight line-clamp-1 mb-2">
                {title}
            </h4>
            <div className="mt-auto">
                <p className="text-primary text-base font-black mb-2">${price}</p>
                <button className="w-full bg-primary hover:bg-red-700 text-white text-[10px] font-black uppercase py-2 rounded-lg transition-colors flex items-center justify-center gap-1">
                    Buy Now
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
