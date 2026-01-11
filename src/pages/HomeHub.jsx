import Layout from '../components/layout/Layout';
import BlogCard from '../components/common/BlogCard';
import ProductCard from '../components/common/ProductCard';
import CountdownTimer from '../components/sections/CountdownTimer';

const HomeHub = () => {
    const blogArticles = [
        {
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXU-ic8AkQROi0wfccegmrK-HpMLmZBWJ80vZ1U-6wk1_eGVHlb_cgf22IYUNwpQ94jkIPQguUhSXYmFD-dN-XyMxkntOul7W1uTPweIbMYm3PgZw6_s1uTpO01goLg4bzughQ3gNmbtPHbODJKG0q7DtLPMC6SbMNgKmZPTLnBo6PIhQkoQD7uenbqA_ajiZ1wwBWD6y779-X48iHRbKgA94Zzep369nbNvWv6pqp2CkpzrNL4R33CT-aUZIA9cOxfsDuVfhB8xn4',
            title: 'Why Custom Keyboards are Worth the Hype',
            category: 'Hardware',
            readTime: '5 min read',
            timeAgo: '2 hours ago',
        },
        {
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCLcfn9ctHz6oWqkUl9EsnHPu74F26zzNpPc4rGgbfnPS0_DXsEfYTy6qwNHR-OKafjRY0DNI_l_qtSL_CKZzw7PT-uKAFB78csepSO0HclztsCfcP5rNjq9095OuYWc28OQZmDqqEaEp37whBjOMpH-js9MQ0J-toqGFYMSVN31_tW3ScQOD6HlErdGnXdGRDrPLxukSJgEoDS0q6ewx2yxsGnHM50_W38xs6eN1KeiadhI8cAfKQ_QwVSahOh4TNhleHE4Zi7eREx',
            title: 'Flagship Phone Camera Shootout: The Final Verdict',
            category: 'Reviews',
            readTime: '12 min read',
            timeAgo: '5 hours ago',
        },
    ];

    const products = [
        {
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFe5n5uYiNUncpUBCNn1xDisAoNN-rEcuog7dbNp5hBp1ODjODW_ns5f_nq8U1sn7RLKxOdu4ScVXNpQsvcGiMtlAgqkw2LwJLQLOkKdOpaGM152gdrgSlbh8lZPEtRkrj1m1MeyN42ahYih5afZvu46GA6PIgkVf2DOlXKKQzHUlDIKe2RgPEUUouYnoT-Zq56icGtWd3NISFd0AgMKzSN087IHlkWHc1LxBkP6WFGH_WS5_n_PAPvHtX5Eid4k1DELR9Pe9xbn5w',
            title: 'Aero Glide Pro',
            price: '129.00',
            category: 'Peripherals',
        },
        {
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDiBZAfgyRlKj8SxvaAe07ju0nUxpV5ow-6_pQZGL164WmsI__6OAFQrHvwg9qeoRxqUykhKdcfgzD2nFbJEugyOxWXTymUBw9Ezc7JX0YSpF_cJWTqXW7cTuGOeddrs-VdiNmegohSUYkQItcJikL0o6lDxQ__C8zEI9oNftHOk1d6_8uwHmQcSMf295GMnYuXlgaF6RJYMcRNVm0FV_Q24rcisLh-Rll2m1OdOsy1qZ8H7B1GDG-lIZZ_CEqEAmNiaJA4w_FAXkvf',
            title: 'Sonic Boom H1',
            price: '349.00',
            category: 'Audio',
        },
        {
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCknTII4D0bh-vaPuh2vSaCvjHObR0JTyZ8pK-UC0FpZAsN-qP1HK1E-1Pp08-7d6ciFsexjuWQhL0UqO9RgCCagnzqXgRHmZ8It3BDSkkrBmZ-6MhE7fm4DJkPJAq3usz-qg_w2o4CvnBb-9jSE9s8SNTweRUUoLFfoiqC_6-zEWQechA5kTNDPnF14mCPAK49eiaRmFVl1Op24e-jc9x_kXnAQU_k6hMjMWHkXRkxWP3HQgASg1YlL2EtgqTWzV5xghEgrmenFVBH',
            title: 'Titan View 32"',
            price: '599.00',
            category: 'Monitors',
        },
    ];

    const giveawayEndDate = new Date(Date.now() + 2 * 24 * 60 * 60 * 1000 + 14 * 60 * 60 * 1000 + 55 * 60 * 1000);

    return (
        <Layout headerProps={{ title: 'HUB01' }}>
            <div className="lg:max-w-none">
                {/* Live Video Section */}
                <div className="px-4 pt-4 pb-6 lg:px-0">
                    <div className="flex items-center justify-between mb-3">
                        <span className="bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest">
                            Live Now
                        </span>
                        <span className="text-xs text-slate-500 dark:text-gray-500 font-medium uppercase">12.4k Watching</span>
                    </div>

                    <div className="relative group rounded-xl overflow-hidden aspect-video border border-white/5">
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBklHzYVdhenVoXW82caEIhC8d5k9QuCH-LdCn4x6oIhL9hUWcFHw-0UC9p0gwUlw4TIckebyeE2yr9XW_T-QctXa7yw7cH61QxYinb3uK_uXuBabyg_J2oMgm5quD-UxoM1tPWy3FPH35i8zFGh0qQCMtWUptY5SOXv0eYwrGg4GnFc2eRIVusDfEhc9NuPDS9MJiKf7-ytcJ0fn0NsxkGREERz8YeINv3_Q8MNNYR_3GqsYzLV-oP4wN3rXqyUAQPEedAOM-5e2")' }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                        {/* Play Button */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <button className="size-16 flex items-center justify-center rounded-full bg-primary text-white shadow-2xl transform active:scale-95 transition-transform">
                                <span className="material-symbols-outlined text-4xl fill-1">play_arrow</span>
                            </button>
                        </div>

                        {/* Progress Bar */}
                        <div className="absolute bottom-0 inset-x-0 p-4">
                            <div className="flex h-1 items-center justify-center mb-3">
                                <div className="h-1 flex-1 rounded-full bg-primary" />
                                <div className="relative">
                                    <div className="absolute -left-1 -top-1.5 size-3 rounded-full bg-white shadow-lg" />
                                </div>
                                <div className="h-1 flex-[3] rounded-full bg-white/20" />
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-white text-xs font-bold font-display">08:42</p>
                                <p className="text-white text-xs font-bold font-display">24:15</p>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-slate-900 dark:text-white text-2xl font-bold leading-tight mt-4 tracking-tight">
                        The $5,000 Zero-RGB Stealth Build: Is No Light Better?
                    </h2>
                </div>

                {/* Giveaway Countdown */}
                <div className="mx-4 p-5 rounded-xl bg-gradient-to-br from-primary/20 to-transparent border border-primary/30 relative overflow-hidden lg:mx-0">
                    <div className="absolute top-0 right-0 p-2 opacity-10">
                        <span className="material-symbols-outlined text-6xl">card_giftcard</span>
                    </div>
                    <h3 className="text-primary text-sm font-bold uppercase tracking-[0.2em] mb-1">
                        Active Giveaway
                    </h3>
                    <h2 className="text-slate-900 dark:text-white text-xl font-bold mb-4">
                        Ultimate Gaming Setup 2024
                    </h2>
                    <CountdownTimer endDate={giveawayEndDate} />
                    <button className="w-full bg-primary text-white py-3 rounded-full font-bold uppercase tracking-widest text-sm active:scale-[0.98] transition-all mt-4">
                        Enter Contest Now
                    </button>
                </div>

                {/* The Feed */}
                <div className="mt-8 px-4 lg:px-0">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-slate-900 dark:text-white text-xl font-bold flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">dynamic_feed</span>
                            The Feed
                        </h2>
                        <button className="text-primary text-xs font-bold uppercase tracking-widest">
                            See All
                        </button>
                    </div>

                    <div className="flex flex-col gap-4">
                        {blogArticles.map((article, index) => (
                            <div key={index} className="flex gap-4 bg-white/5 dark:bg-white/5 p-3 rounded-xl border border-black/5 dark:border-white/5">
                                <div
                                    className="w-24 h-24 shrink-0 rounded-lg overflow-hidden bg-cover bg-center"
                                    style={{ backgroundImage: `url("${article.image}")` }}
                                />
                                <div className="flex flex-col justify-between py-1">
                                    <div>
                                        <span className="text-primary text-[10px] font-bold uppercase tracking-widest">
                                            {article.category}
                                        </span>
                                        <h3 className="text-slate-900 dark:text-white font-bold leading-snug mt-1 line-clamp-2">
                                            {article.title}
                                        </h3>
                                    </div>
                                    <div className="flex items-center gap-2 text-[10px] text-gray-500 font-medium">
                                        <span>{article.readTime}</span>
                                        <span>•</span>
                                        <span>{article.timeAgo}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pro Gear Section */}
                <div className="px-4 mb-8 mt-8 lg:px-0">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-slate-900 dark:text-white text-xl font-bold font-display flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">shopping_bag</span>
                            Pro Gear
                        </h2>
                        <button className="text-primary text-sm font-bold">View All</button>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
                        {products.map((product, index) => (
                            <ProductCard key={index} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default HomeHub;
