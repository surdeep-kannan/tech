import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import SearchBar from '../components/common/SearchBar';
import CategoryChips from '../components/common/CategoryChips';
import BlogCard from '../components/common/BlogCard';

const BlogFeed = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ['All', 'PC Builds', 'Mobile', 'Giveaways', 'Reviews'];

    const featuredArticle = {
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB5txMb0iAqhI6WCGCdIplKGXNS8cv8NZ212KtG5Hj4TNyTsXtz7_mKmVDMtVYBTvx5cwC5WtjpqjalV0PiB6O7KcTmNdnFdbkwsDwFLZsd0NxPqyankDYBlsYqZQX1emyt1C3D3CrOrCMikpry2IDR25FP_5n8aDa_YkqcGC1_zjVVCKMw3zvUtthse2Qs3YJomZa6tmIBTmu6QgQUtclN-a902Kr7_3la_DOtoBxiqicfZt3tq7khWvNz6qoJ9Evq_1sHiAoQ1tBK',
        title: 'The Best GPUs of 2024: Power Meets Performance',
        badge: 'ULTIMATE GUIDE',
        readTime: '8 min read',
        timeAgo: 'Jan 24, 2024',
    };

    const popularArticles = [
        {
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKplABPoLKO-VytwjoGeF0ARePvpxwr1AP322RtWh_Cpg6-4ATJAeqNK-MHvj5c34BhE1OJRXjtqUwt-ZfzWRYbfvhvSukU2uCGp83QYqN9nRsKBjxdk4kzowmqDK96YO95MG7JyvY5rip4MT3NDxxHyggy_8tcN4ut8C4tafy7klNvTXM4SUdZI6ojVl-MWDo5mTpcMvPGh3iGTWMXNgVyCRjKMwN1b7ljrr9Xp9w20oecOXQR9JnyCYmmR5qstU58BS-W3bo0fxl',
            title: 'iPhone 16 Pro Max: 3 Months Later',
            category: 'Reviews',
        },
        {
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBzUvjgCPOApid6V0llWsrcdDVacyRacRRN08nMCEh_Pp3DNDSR8a55Wl8Cb1S9gXv6hT45jQFCRxbY7aWDUleglCzkx3RA8TSYpi9qyYy4zaAs4o65DZMf2t-nDwrLTR4DoPx3i_PrJX65lq7bTyfSnd-QNr11bG12JlqmRhlDZnEx4dOvdFTld9-YgpRf0UD1VOPYfnAj65qzpIgMlHZTOOeJW7mYFiz-Ohla5Qcke_6Te6Ge4DpZDK63ScFX428TIRTh2A7HEPSa',
            title: 'HUGE RTX 4090 Giveaway! Enter Now',
            category: 'Giveaways',
        },
        {
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvhJ5ewoMIinxzs3L4R5Yf4-zYdogJQIAsEn2y6M7uijTcwaKiEXfoqRcwLQraHc36Jx2z72z0L67Jyi2OSgXlvZok8tz_Hi6LtNsrnFFj12SOtA18OR3DFDGdMQ0bC9JEAHRRNui0wsGM4fGJUxQjCVeqHIk0iVNgif-32yY2QsXhkbDeCJqKUtODAWtO4r2EaG2Fr3BQkqsS6O5BJfAIi7Kj6e8K4CFct-sMl2AkuZljtGhlf9JGTi--0iL20th3sPfXVVudLxNP',
            title: 'Mechanical Keyboards: The Silent Thock',
            category: 'Hardware',
        },
    ];

    const latestArticles = [
        {
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUvsK7AOWyNbiA9_WkoB5qQUYg9WMwanSvLqm3ERTxlhIcu6PNNvTtECiMi2fnuij04qtjPoiUJdI3NR1qqphCZwc7eAClGSV179aoi5VZ252DLzlwSMOVCGFBbH4S1nWZbN1iAwOBE7CQWDRlW0aWGCTY4WAJl2aMN1htT5uDe6EWKNUVRepHe_5ZQZsvAZWcmQlkRxHyGH55rH_XGr66u-aML5NMJYPYZrXUp5Orzv_M8JL35cbKDdP7TWNswF-rA_Nuw-wClFIF',
            title: 'Zero-Wire Setup: How to achieve the perfect cable management.',
            category: 'SETUP TOUR',
            timeAgo: '12 mins ago',
            excerpt: 'We spent 48 hours hiding every single cable in our studio. Here is the step-by-step guide to a clean desk.',
            views: '4.2k reads',
        },
        {
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQ0xRuCV_ihvM6U3GGO5dlQ4mnZsSrxbyVIut4xZXlaxWnewqpEoi5rJSVkBA8oB4WQd8fopKATZ7AFUE9wA2h6vhSsMoWSt89DVpS2Fo3m1rRUsQBfBONEwUwQuOxdhMq3Ad6pZr5Dsq16R_yRphkVA8Q4vT2pOrXn9xhhzaYkBhLXl6I2m-VJm83ucCHX7oLj1DU2larraHg5quIuyPqTyJc2NHcYZ_Fz5X3QCOd1TysQ9_R0FPI6UXu6u_rHapdmgvBp0BCmICr',
            title: 'Snapdragon 8 Gen 4: Benchmarks that will shock you.',
            category: 'MOBILE',
            timeAgo: '2 hours ago',
            excerpt: 'Early testing shows performance numbers that rival desktop CPUs. Is mobile gaming finally evolving?',
            views: '8.1k reads',
        },
    ];

    // Filter articles based on search and category
    const filteredPopularArticles = useMemo(() => {
        return popularArticles.filter(article => {
            const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                article.category.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = activeCategory === 'All' || article.category === activeCategory;
            return matchesSearch && matchesCategory;
        });
    }, [searchQuery, activeCategory]);

    const filteredLatestArticles = useMemo(() => {
        return latestArticles.filter(article => {
            const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                article.category.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = activeCategory === 'All' || article.category === activeCategory;
            return matchesSearch && matchesCategory;
        });
    }, [searchQuery, activeCategory]);

    return (
        <Layout headerProps={{ title: 'Tech Insights' }}>
            <div className="lg:max-w-none">
                <SearchBar
                    placeholder="Search tech blogs, builds..."
                    value={searchQuery}
                    onChange={setSearchQuery}
                    onClear={() => setSearchQuery('')}
                />
                <CategoryChips
                    categories={categories}
                    activeCategory={activeCategory}
                    onCategoryChange={setActiveCategory}
                />

                {/* Featured Section */}
                <div className="flex items-center justify-between px-4 pt-4 pb-2 lg:px-0">
                    <h2 className="text-slate-900 dark:text-white text-2xl font-bold font-display">
                        Featured
                    </h2>
                    <button
                        onClick={() => navigate('/blog')}
                        className="text-primary text-sm font-bold uppercase tracking-widest cursor-pointer hover:underline"
                    >
                        See All
                    </button>
                </div>

                <BlogCard article={featuredArticle} variant="hero" id="1" />

                {/* Most Popular */}
                <div className="mb-8">
                    <h2 className="text-slate-900 dark:text-white text-xl font-bold font-display px-4 mb-4 flex items-center gap-2 lg:px-0">
                        <span className="material-symbols-outlined text-primary">trending_up</span>
                        Most Popular
                    </h2>
                    <div className="flex gap-4 px-4 overflow-x-auto hide-scrollbar lg:px-0">
                        {filteredPopularArticles.length > 0 ? (
                            filteredPopularArticles.map((article, index) => (
                                <BlogCard key={index} article={article} variant="mini" id={String(index + 2)} />
                            ))
                        ) : (
                            <p className="text-slate-500 dark:text-gray-500 text-sm py-4">No articles found</p>
                        )}
                    </div>
                </div>

                {/* Latest Insights */}
                <div className="px-4 lg:px-0">
                    <h2 className="text-slate-900 dark:text-white text-xl font-bold font-display flex items-center gap-2 mb-6">
                        <span className="material-symbols-outlined text-primary">article</span>
                        Latest Insights
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                        {filteredLatestArticles.length > 0 ? (
                            filteredLatestArticles.map((article, index) => (
                                <BlogCard key={index} article={article} variant="feed" id="3" />
                            ))
                        ) : (
                            <p className="text-slate-500 dark:text-gray-500 text-sm">No articles found</p>
                        )}
                    </div>
                </div>
            </div>

            {/* Floating Action Button */}
            <button className="fixed right-6 bottom-28 lg:bottom-8 size-14 bg-surface-dark-light border border-primary/20 rounded-full flex items-center justify-center shadow-2xl text-primary transition-transform active:scale-90">
                <span className="material-symbols-outlined">mail</span>
            </button>
        </Layout>
    );
};

export default BlogFeed;
