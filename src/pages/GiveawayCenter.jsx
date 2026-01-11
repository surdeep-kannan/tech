import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import CountdownTimer from '../components/sections/CountdownTimer';
import GiveawayEntryModal from '../components/sections/GiveawayEntryModal';

const GiveawayCenter = () => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const giveawayEndDate = new Date(Date.now() + 5 * 24 * 60 * 60 * 1000 + 8 * 60 * 60 * 1000 + 45 * 60 * 1000);

    const winners = [
        {
            name: 'Alex Rivera',
            prize: 'Sony PlayStation 5',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2-ybTMrgU52UuKk6k9_3OrewRYPSRA8A9D4wfvJSqbP-fS-mF8QC2vacux0mD_UQPdT2DSknnQD_ecezJZOWc7IPPQNKust58bOLkt2oOSX_LSoDGan9FalrAWXzLmJQqHmfMUNd6ltwCgcCE2qnn77mwT7YY_XrrMs3PA4P9aC-zBD24UsDW2TcHN7j40X0PJcwfu1O3cN4YAwhy3Dp_im0yuzlZwTYbYotYkVYs4SnMkbX60u3IkSe0Ce4w9B0EKF9QSu-Vap-K',
            timeAgo: '2 days ago',
        },
        {
            name: 'Sarah Jenkins',
            prize: 'iPhone 15 Pro Max',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDe4CTeOvBjuSRqTbYzQ2OrlCMPPJp-CF2f1w8BG1uOmq3CtgjLdSpB7z8cibhmPZPm9Ps37Zcn2zlnMPYismD_ACooBVZoIYCmVxwdM4GWpSZkpFQi7Xxr7FEsrSBSXo9qKJNqCULAGB4heV7V2ErQUegMsyqvIyoJ0e4y2EoJ5Gonrx8QHq3m1GIxmz8lXx93nN4CGPvQN4fTkmaNO6qH-tZ5fekEdX0KU9AjDNTf82f49qPk_pXr5fmUnbfvXukOlymfCCcSQAPR',
            timeAgo: '5 days ago',
        },
        {
            name: 'Marcus Thorne',
            prize: 'Keychron Q1 Pro',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAghcMUwX5o1ypFNMiHpn2mP9l6VXKHoNmR-Xz23zO-EjRl6obJfUzOe8JWvM9Zf2zFDH0JTAo_M2UHls4dObxnPiV81MjQBe4yKCtJ5OWeQZ3TT-Vdzk5MiAEUfBB4SLY4-KtB6JYcJwXbjG_EyZA56nbMco8Z6uZ4yLw5QsAsW3U0QcplYbWmj6ASXKAlvGT5xjsfY8n2ss5Zlv9gZGjdDaWylyFLFztG07Iv_IHtGCouCGGALM0yX-bXSR96jQheVWdG5EPP27ry',
            timeAgo: '1 week ago',
        },
    ];

    return (
        <Layout headerProps={{ title: 'Giveaway Center', showNotifications: false, showProfile: false }} showNav={true}>
            <div className="relative flex h-auto min-h-screen w-full flex-col bg-gradient-to-b from-background-dark via-background-dark to-black overflow-x-hidden">
                <main className="flex flex-col flex-1 px-4 pb-24">
                    {/* Active Giveaway Section Header */}
                    <div className="flex items-center justify-between pt-6 pb-4">
                        <div className="flex items-center gap-2">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary" />
                            </span>
                            <h2 className="text-white text-xl font-bold tracking-tight uppercase">
                                Active Giveaway
                            </h2>
                        </div>
                        <span className="text-primary text-sm font-semibold">12.4k Entered</span>
                    </div>

                    {/* Main Feature Card */}
                    <div className="relative group">
                        <div className="flex flex-col items-stretch justify-start rounded-xl shadow-[0_20px_50px_rgba(242,13,13,0.1)] bg-card-dark overflow-hidden border border-white/5">
                            <div
                                className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover relative"
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCmz4ZYnukr_pJtC7Dgdq3_Pwewpoxpl3MIWFkiTlLemQMyz1ZE18xnkjozCJCpElbN1e5FkKnyscxq_8WewgZFpnMc1cPkqVoRaYXPqkVymJOnGZMU2AiG8ycMq306DTONQ-QTP7QgzENLX5m6hhFo424YWpjB8NyofSI937MjQG1ajbmbztndlUpfP4Xr384V4Mb6_ZgOHFKLT-aYlsNdh9IXXaELJIaAhSFTCLGkwNlF6E7j1s8AtakDbbL2EsNm1fxgDEBPxbXe")' }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-card-dark via-transparent to-transparent" />
                                <div className="absolute top-4 right-4 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                                    Featured
                                </div>
                            </div>

                            <div className="flex w-full flex-col items-stretch justify-center gap-1 p-6 -mt-12 relative z-10">
                                <p className="text-primary text-xs font-bold leading-normal tracking-[0.2em] uppercase">
                                    Tech Setup 2024
                                </p>
                                <h3 className="text-white text-2xl font-bold leading-tight tracking-tight mb-2">
                                    Custom RTX 4090 Gaming Rig
                                </h3>

                                <div className="flex flex-col gap-4">
                                    <p className="text-[#ba9c9c] text-base font-normal leading-relaxed">
                                        The ultimate beast for gaming and 4K editing. Hand-built with premium liquid cooling and custom cable sleeves.
                                    </p>

                                    <CountdownTimer endDate={giveawayEndDate} />

                                    <div className="flex items-center justify-between pt-2">
                                        <div>
                                            <p className="text-[#ba9c9c] text-xs uppercase tracking-widest">Retail Value</p>
                                            <p className="text-white text-xl font-bold">$4,850.00</p>
                                        </div>
                                        <button
                                            onClick={() => setIsModalOpen(true)}
                                            className="flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-8 bg-primary text-white text-base font-bold leading-normal shadow-[0_10px_20px_rgba(242,13,13,0.3)] hover:scale-105 transition-transform"
                                        >
                                            <span className="truncate">ENTER NOW</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Past Winners Section */}
                    <div className="mt-10 px-4 lg:px-0">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-white text-xl font-bold tracking-tight">Recent Winners</h2>
                            <button className="text-primary text-sm font-medium">View All</button>
                        </div>

                        <div className="flex flex-col gap-3">
                            {winners.map((winner, index) => (
                                <div
                                    key={index}
                                    className={`flex items-center gap-4 bg-card-dark/40 border border-white/5 p-4 rounded-xl justify-between ${index === 2 ? 'opacity-80' : ''
                                        }`}
                                >
                                    <div className="flex items-center gap-4">
                                        <div
                                            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-14 ring-2 ring-primary/20"
                                            style={{ backgroundImage: `url("${winner.image}")` }}
                                        />
                                        <div className="flex flex-col justify-center">
                                            <p className="text-white text-base font-bold leading-normal line-clamp-1">
                                                {winner.name}
                                            </p>
                                            <p className="text-[#ba9c9c] text-sm font-normal leading-normal line-clamp-2">
                                                Won: {winner.prize}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="shrink-0 text-right">
                                        <p className="text-primary text-xs font-bold leading-normal">VERIFIED</p>
                                        <p className="text-[#ba9c9c] text-[10px] font-normal leading-normal">
                                            {winner.timeAgo}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Promotion Banner */}
                    <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-primary to-orange-600 flex items-center justify-between">
                        <div className="flex-1">
                            <h4 className="text-white font-bold text-lg">Daily Entry Points</h4>
                            <p className="text-white/80 text-sm">Log in daily to double your winning chances!</p>
                        </div>
                        <button className="bg-white text-primary rounded-full px-4 py-2 font-bold text-xs">
                            COLLECT
                        </button>
                    </div>
                </main>
            </div>
            <GiveawayEntryModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                giveawayTitle="Ultimate Gaming Setup 2024"
            />
        </Layout>
    );
};

export default GiveawayCenter;
