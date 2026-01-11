import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import SearchBar from '../components/common/SearchBar';
import CategoryChips from '../components/common/CategoryChips';
import ProductCard from '../components/common/ProductCard';

const TechStore = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState('All Gear');

    const categories = ['All Gear', 'Peripherals', 'Components', 'Merch'];

    const products = [
        {
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCu0EoHlyaVhIpAidaktpHjSwrxsJ5CyEJRbHIbOdS6GhB-Op8OsSLbA7Y2tykjCeV3A6svpogs-wsM6L0Sk5EvcE-rVgHUH5Oe0MAfuERfHwYN5sd49dzyqGIeFHkIahc4DjXFPTwWxSkpaVnYPVMLmUhZkJ_wA_i-iZz3STLg4oKZV3hAvq9sz48Jcqvcqv15tBLx5QaJ2RVVcPUjTRD68roW3wmHR5EdggIHNIn9lhGztgohINMngyvVQ7tCjf3l4FzeIP4hJMzj',
            title: 'Pro TKL Keyboard',
            price: '189.00',
            category: 'Peripherals',
        },
        {
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_f54eyO_B0t1d7mQ04hRrLjmUZd-b19pFO4QBO8NZB4XzIwIoE6UQihreRumfr0Zbm9Sdubkh93DxgxvbopOAUYnElWewte0T6Q5W0ETeoseElfVFaWaGKghfga7UGrM1l5g5OsCQoPTyK8K7bNvlOxhj6dlMX94hYOnZjQPpHsbLj276M9S7exFCxa0Z-iVRUyz6MvdXT0qJhoJV_EPaFSLCD_HG9KBLhKvfdeXmP5vY2miFqA9HJHbf-cfYEQ9SCWSntAH-ZKt9',
            title: 'Ultralight Mouse',
            price: '79.00',
            category: 'Peripherals',
            isNew: true,
        },
        {
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBy8gAoKis7cxyEhVepK0wPL67Kyr6EwPx0vibDAXcbYkSNN7HW32AgcrMlm6iwiHeUjf4hAPlo5Qv3sWt2WGFtLE7Y51j4X_ttWY_QO6dgKD8Qk0HhjAqBRfq8Gm0T-p-Wmz-p1PPvddjGaxDCGoGDhLPScmXfrUdQFBTJZiWAs2jYONT5cB6831WNB3ySC1mtrR2fw__qeb7LLMJNBbgLFApl1bU4JXb63Ssh2sRqGir-G_CHC_YgBhMQ1XO-mM2RewR51SwmBlrV',
            title: 'Stealth Hoodie',
            price: '55.00',
            category: 'Merch',
        },
        {
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBpzzUqFbWLPhz82lvMGgknmSAWpw1W05WaZk8yth2LlmvXOvXHHh60uHdaM1ITBI-jz0aWTXzhgEozEzHS4EZ5A6RCZFK18c7Xh5zxTjy_ckX1vBZHFrW9_cl0KvcBjSxnzLk12QVZtlfJBxrZitHSdJZ3TeFHlXHdKOmli_X5P3RBgoxmuzH3CB6kLgW1TN3GWnvKG57cyfbxbm0n65KDQ6gdTEXboE7Tv-bNRYA43-sgC-8DtdfZFB63Yl4MV2c0I_FFlTGfIEZM',
            title: 'Liquid Cooler X',
            price: '145.00',
            category: 'Components',
        },
        {
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAR4WBGTJZzR8mi2xMGaf2_cwgfKi5GxgNGEz8mAteNQv1MNSuQ1bPoqE6Qj09MtS4DhP1HXoAoujtVkLtZ_sFncFeJllUeOQzE49MlgH8XSfeDNc61L3Iwimm5hXdqIUQs2TfgIGeeS4QW7DX12-FO-XrY1oh-4KEt0drzStw3TCOAnN4UyU32b66_PmygwxtE7ZxqocEBwgm_JNCz470HDeBjkjZOGhAMd4PZrGTXSnBhk6Gb9aLU1AMvHizswLDf5lbnVGLZTiJw',
            title: 'Studio Mic V2',
            price: '299.00',
            category: 'Audio',
        },
        {
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHPoxGK-2aGOAOe6-t7AmWDTMkF0wkb7ldQzSC7cL80p6DOIcEi8Ipmatk4x1DAUWhw2-wFQNQPvL7lZtpfBga6_eYKpvdxTQLSy7ETsIF4CyjmGIV4Q4b0x3us3cZ3eJMr1WonEKJTVsf3izvRXxc-2JMVi0Ntwe2bU3FaJQ0Y4Yeltm37PhP4osj-BIIvEZ1tbv4Fe6Q6JP7zNYqoZKjCFqP_t8TTx0pnuWhY5LEgxNbxf_9Q6r7UX8Mc4Xc6epWel5lzukw8SIm',
            title: 'DDR5 64GB Kit',
            price: '210.00',
            category: 'Components',
        },
        {
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBlJSfm5fICDNydqBP3i7Dbe_WwSFxuHSXO2r4F89tysyZtf7qDWuNzL0PDysoPdhSfNmBW07hOx5z5YyzSMym_JBxDWTnYVry7blj1hWPX8m6i1cjRUytZL3tvyftIsRqDSygd10IUVVeWKRPwvZG0o8FKpcE_m2rwRcAsVhQl9qiPzQw4e2hZx-geA38B_nSO_XURqvayhe6YG8IueMNDW-tLL64DVwbhAPoSldbpsc_FifMyUlql5tgeFwAdeNd1VpO2uX2l0esI',
            title: 'ANC Headset Pro',
            price: '129.00',
            category: 'Audio',
        },
        {
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpzP_CZF1v2ofMLfDKecmRy1JH7hLrUFvcSxcK3bQbuUyz1xPhUvs6VoBLsreL0rm-ED1TnUvCvLxJ3oKqmaDDOQdkGbcmjlI0HtUmOXKK-0CE1G2uINX-tuey49L6a8hGEh_J6N1eQimNNFm866R2foyGy8JG0CZojAazzO7ORWbf4Urhwz-xld3IVAikKVS9tSI__1NcUhmfPHaf58_ZYZBTWbmjNiWWgkRVZQo3pvljvNKAbySqtLVhFr183xNjv6TTXxKenig0',
            title: 'Topography Mat',
            price: '35.00',
            category: 'Merch',
        },
    ];

    // Filter products based on search and category
    const filteredProducts = useMemo(() => {
        return products.filter(product => {
            const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.category.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = activeCategory === 'All Gear' || product.category === activeCategory;
            return matchesSearch && matchesCategory;
        });
    }, [searchQuery, activeCategory]);

    return (
        <Layout headerProps={{ title: 'TECHGEAR', showCart: true }}>
            <div className="lg:max-w-none">
                <SearchBar
                    placeholder="Search exclusive gear..."
                    value={searchQuery}
                    onChange={setSearchQuery}
                    onClear={() => setSearchQuery('')}
                />
                <CategoryChips
                    categories={categories}
                    activeCategory={activeCategory}
                    onCategoryChange={setActiveCategory}
                />

                {/* Featured Giveaway Banner */}
                <div className="px-4 mb-6 lg:px-0">
                    <div className="relative w-full h-32 rounded-2xl overflow-hidden bg-gradient-to-r from-red-600 to-black p-6 flex flex-col justify-center">
                        <div className="absolute right-[-20px] top-[-20px] opacity-20">
                            <span className="material-symbols-outlined !text-9xl">redeem</span>
                        </div>
                        <p className="text-white/80 text-xs font-bold uppercase tracking-widest mb-1">
                            Active Giveaway
                        </p>
                        <h3 className="text-white text-xl font-bold leading-tight">
                            RTX 4090 Limited <br />Edition Giveaway
                        </h3>
                        <div className="mt-2 text-white text-xs font-medium flex items-center gap-1">
                            <span className="material-symbols-outlined text-sm">timer</span> 04d : 12h : 30m
                        </div>
                    </div>
                </div>


                {/* Section Header */}
                <div className="flex items-center justify-between px-4 mb-4 lg:px-0">
                    <h2 className="text-lg font-bold tracking-tight uppercase">Exclusive Drops</h2>
                    <button className="text-primary text-sm font-bold">View All</button>
                </div>


                {/* Product Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 px-4 mb-8 lg:px-0">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product, index) => (
                            <ProductCard key={index} product={product} />
                        ))
                    ) : (
                        <div className="col-span-full text-center py-12">
                            <p className="text-slate-500 dark:text-gray-500 text-lg">No products found</p>
                            <p className="text-slate-400 dark:text-gray-600 text-sm mt-2">Try adjusting your search or category filter</p>
                        </div>
                    )}
                </div>

                {/* Latest Insights Section */}
                <div className="px-4 mt-8 mb-4">
                    <h2 className="text-lg font-bold tracking-tight uppercase mb-4">Latest Insights</h2>
                    <div className="flex gap-4 overflow-x-auto hide-scrollbar">
                        <div className="flex-none w-64 bg-white dark:bg-card-dark rounded-2xl overflow-hidden border border-slate-100 dark:border-white/5">
                            <div
                                className="h-32 bg-cover bg-center"
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCE04UoNQRUUy_8BGpbmNYl5mBfzT3qu9cWtLuROLeQJTK7CAb487Rxlde_jG1ZRqlVEswq3JauRh6uQHtDrJO20cVLE105qiVpnITyScb6tsQtsLuuTE6e68KjO9xhRENkdOSkCBM2YoPX7O6Be497bRrQs6Aig3NDQ4t6zy2cy6e3yhYrwdaRLHOrGvQQ1bMLQkpLjLb0tvUjOokENZMdeabgF9xQd853ThF5p6CE1-WGshl_OYkm5sIeE_CegFKX5b9njM_qNyHU")' }}
                            />
                            <div className="p-3">
                                <h4 className="text-sm font-bold leading-snug">
                                    Why DDR5 is a game changer for content creators...
                                </h4>
                                <p className="text-[10px] text-slate-400 mt-2">5 MIN READ • SEP 24</p>
                            </div>
                        </div>

                        <div className="flex-none w-64 bg-white dark:bg-card-dark rounded-2xl overflow-hidden border border-slate-100 dark:border-white/5">
                            <div
                                className="h-32 bg-cover bg-center"
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBpOU9YCqJZthsPca1pWXfwg4Jbu-M87Gpp2vU5YmMmRvPw3zGpca2KM5WuWgYD6RLyUTw80FmCVuSTenK5QECQyVVGDst6fWUvHqxdwbubX47efJIqdeQlWRGpQd-QAiz44QoqwAbz3YEEgpyhZBeoJ2anBZpLQeZe31nDPvUk4OUpeX1672Z3NBrvSjkCZlooEgU76nvoijP3zW38myszz1OL1LBZzs_D0f4Xt_dPbyqstZf4pQauRnfeKtX9MbNMPJr6bGOu6CH8")' }}
                            />
                            <div className="p-3">
                                <h4 className="text-sm font-bold leading-snug">
                                    Wired vs Wireless: The ultimate latency test 2024
                                </h4>
                                <p className="text-[10px] text-slate-400 mt-2">8 MIN READ • SEP 21</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default TechStore;
