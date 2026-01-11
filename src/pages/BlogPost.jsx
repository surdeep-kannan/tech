import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';

const BlogPost = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Sample blog posts data
    const blogPosts = {
        '1': {
            title: 'The Best GPUs of 2024: Power Meets Performance',
            category: 'ULTIMATE GUIDE',
            date: 'Jan 24, 2024',
            readTime: '8 min read',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB5txMb0iAqhI6WCGCdIplKGXNS8cv8NZ212KtG5Hj4TNyTsXtz7_mKmVDMtVYBTvx5cwC5WtjpqjalV0PiB6O7KcTmNdnFdbkwsDwFLZsd0NxPqyankDYBlsYqZQX1emyt1C3D3CrOrCMikpry2IDR25FP_5n8aDa_YkqcGC1_zjVVCKMw3zvUtthse2Qs3YJomZa6tmIBTmu6QgQUtclN-a902Kr7_3la_DOtoBxiqicfZt3tq7khWvNz6qoJ9Evq_1sHiAoQ1tBK',
            content: `
                <h2>Introduction</h2>
                <p>The GPU market in 2024 has been nothing short of revolutionary. With NVIDIA's RTX 40 series and AMD's RX 7000 series pushing the boundaries of what's possible, gamers and creators have more options than ever before.</p>
                
                <h2>Top Picks for 2024</h2>
                <h3>1. NVIDIA RTX 4090 - The Absolute Beast</h3>
                <p>The RTX 4090 remains the undisputed king of graphics cards. With 24GB of GDDR6X memory and support for DLSS 3.0, this card delivers unparalleled performance in 4K gaming and content creation.</p>
                <ul>
                    <li>24GB GDDR6X Memory</li>
                    <li>16,384 CUDA Cores</li>
                    <li>DLSS 3.0 Support</li>
                    <li>Ray Tracing Performance: Exceptional</li>
                </ul>
                
                <h3>2. AMD RX 7900 XTX - The Value Champion</h3>
                <p>AMD's flagship offers incredible value for money. While it doesn't quite match the 4090 in raw performance, it comes close at a significantly lower price point.</p>
                
                <h2>Performance Benchmarks</h2>
                <p>In our extensive testing, the RTX 4090 achieved an average of 120 FPS in 4K gaming across popular titles like Cyberpunk 2077, Starfield, and Alan Wake 2 with all settings maxed out.</p>
                
                <h2>Conclusion</h2>
                <p>Whether you're a competitive gamer, content creator, or enthusiast, 2024's GPU lineup has something for everyone. The key is finding the right balance between performance and budget for your specific needs.</p>
            `
        },
        '2': {
            title: 'iPhone 16 Pro Max: 3 Months Later',
            category: 'Reviews',
            date: 'Jan 20, 2024',
            readTime: '6 min read',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKplABPoLKO-VytwjoGeF0ARePvpxwr1AP322RtWh_Cpg6-4ATJAeqNK-MHvj5c34BhE1OJRXjtqUwt-ZfzWRYbfvhvSukU2uCGp83QYqN9nRsKBjxdk4kzowmqDK96YO95MG7JyvY5rip4MT3NDxxHyggy_8tcN4ut8C4tafy7klNvTXM4SUdZI6ojVl-MWDo5mTpcMvPGh3iGTWMXNgVyCRjKMwN1b7ljrr9Xp9w20oecOXQR9JnyCYmmR5qstU58BS-W3bo0fxl',
            content: `
                <h2>Three Months with the iPhone 16 Pro Max</h2>
                <p>After three months of daily use, the iPhone 16 Pro Max has proven to be Apple's most impressive smartphone yet. Here's what we've learned.</p>
                
                <h2>The Good</h2>
                <h3>Camera System</h3>
                <p>The new 48MP main sensor with improved low-light performance is simply outstanding. Night mode photos are clearer than ever, and the 5x telephoto lens captures incredible detail.</p>
                
                <h3>Battery Life</h3>
                <p>Easily lasting a full day of heavy use, the battery optimization in iOS 18 combined with the A18 Pro chip's efficiency is remarkable.</p>
                
                <h2>The Not-So-Good</h2>
                <p>The titanium frame, while premium, is prone to micro-scratches. We recommend using a case despite the beautiful design.</p>
                
                <h2>Final Verdict</h2>
                <p>The iPhone 16 Pro Max is the best iPhone ever made, but that comes at a premium price. If you're upgrading from an iPhone 14 or older, it's absolutely worth it.</p>
            `
        },
        '3': {
            title: 'Zero-Wire Setup: Perfect Cable Management',
            category: 'SETUP TOUR',
            date: 'Today',
            readTime: '10 min read',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUvsK7AOWyNbiA9_WkoB5qQUYg9WMwanSvLqm3ERTxlhIcu6PNNvTtECiMi2fnuij04qtjPoiUJdI3NR1qqphCZwc7eAClGSV179aoi5VZ252DLzlwSMOVCGFBbH4S1nWZbN1iAwOBE7CQWDRlW0aWGCTY4WAJl2aMN1htT5uDe6EWKNUVRepHe_5ZQZsvAZWcmQlkRxHyGH55rH_XGr66u-aML5NMJYPYZrXUp5Orzv_M8JL35cbKDdP7TWNswF-rA_Nuw-wClFIF',
            content: `
                <h2>The Quest for the Perfect Desk</h2>
                <p>We spent 48 hours transforming our studio into a cable-free paradise. Here's everything you need to know about achieving the perfect cable management.</p>
                
                <h2>Essential Tools</h2>
                <ul>
                    <li>Cable raceways and channels</li>
                    <li>Velcro cable ties</li>
                    <li>Under-desk cable tray</li>
                    <li>Wireless charging pad</li>
                    <li>Cable sleeves</li>
                </ul>
                
                <h2>Step-by-Step Guide</h2>
                <h3>1. Plan Your Layout</h3>
                <p>Before touching a single cable, map out where each device will sit and how cables will route. This saves hours of rework.</p>
                
                <h3>2. Install Cable Management</h3>
                <p>Mount your cable trays and raceways first. We used a combination of adhesive-backed channels along the desk edge and a large tray underneath.</p>
                
                <h3>3. Route Power Cables</h3>
                <p>Group power cables together and route them through the main raceway. Use a power strip mounted under the desk to minimize visible cables.</p>
                
                <h3>4. Manage Peripheral Cables</h3>
                <p>For keyboard, mouse, and other peripherals, consider wireless options. If wired, use cable sleeves to bundle them neatly.</p>
                
                <h2>The Results</h2>
                <p>The transformation is incredible. Not a single cable is visible from any angle, and the desk looks like it belongs in a tech magazine.</p>
                
                <h2>Pro Tips</h2>
                <ul>
                    <li>Label everything before you start</li>
                    <li>Leave some slack for adjustments</li>
                    <li>Use different colored cables for different purposes</li>
                    <li>Invest in quality cable management products</li>
                </ul>
            `
        }
    };

    const post = blogPosts[id] || blogPosts['1'];

    return (
        <Layout headerProps={{ title: 'Blog' }}>
            <div className="max-w-4xl mx-auto px-4 py-8">
                {/* Back Button */}
                <button
                    onClick={() => navigate('/blog')}
                    className="flex items-center gap-2 text-slate-600 dark:text-gray-400 hover:text-primary transition-colors mb-6"
                >
                    <span className="material-symbols-outlined text-lg">arrow_back_ios</span>
                    <span className="text-sm font-semibold">Back to Blog</span>
                </button>

                {/* Category Badge */}
                <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full">
                        {post.category}
                    </span>
                </div>

                {/* Title */}
                <h1 className="text-slate-900 dark:text-white text-4xl md:text-5xl font-bold mb-4 leading-tight">
                    {post.title}
                </h1>

                {/* Meta Info */}
                <div className="flex items-center gap-4 text-slate-600 dark:text-gray-400 text-sm mb-8">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                </div>

                {/* Featured Image */}
                <div className="w-full h-96 rounded-2xl overflow-hidden mb-8">
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Content */}
                <div
                    className="prose prose-slate dark:prose-invert max-w-none
                        prose-headings:text-slate-900 dark:prose-headings:text-white
                        prose-h2:text-3xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-4
                        prose-h3:text-2xl prose-h3:font-bold prose-h3:mt-8 prose-h3:mb-3
                        prose-p:text-slate-700 dark:prose-p:text-gray-300 prose-p:text-lg prose-p:leading-relaxed prose-p:mb-6
                        prose-ul:text-slate-700 dark:prose-ul:text-gray-300 prose-ul:text-lg
                        prose-li:mb-2"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Share Section */}
                <div className="mt-12 pt-8 border-t border-slate-200 dark:border-white/10">
                    <h3 className="text-slate-900 dark:text-white text-xl font-bold mb-4">Share this article</h3>
                    <div className="flex gap-3">
                        <button className="px-6 py-3 bg-slate-100 dark:bg-surface-dark text-slate-900 dark:text-white rounded-full font-semibold hover:bg-slate-200 dark:hover:bg-surface-dark-light transition-colors">
                            Twitter
                        </button>
                        <button className="px-6 py-3 bg-slate-100 dark:bg-surface-dark text-slate-900 dark:text-white rounded-full font-semibold hover:bg-slate-200 dark:hover:bg-surface-dark-light transition-colors">
                            Facebook
                        </button>
                        <button className="px-6 py-3 bg-slate-100 dark:bg-surface-dark text-slate-900 dark:text-white rounded-full font-semibold hover:bg-slate-200 dark:hover:bg-surface-dark-light transition-colors">
                            LinkedIn
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default BlogPost;
