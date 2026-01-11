import { useState, useEffect } from 'react';

const CountdownTimer = ({ endDate }) => {
    const calculateTimeLeft = () => {
        const difference = new Date(endDate) - new Date();

        if (difference > 0) {
            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
            };
        }

        return { days: 0, hours: 0, minutes: 0 };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 60000); // Update every minute

        return () => clearInterval(timer);
    }, [endDate]);

    return (
        <div className="flex gap-3 py-2">
            <div className="flex grow basis-0 flex-col items-center gap-2">
                <div className="flex h-14 w-full items-center justify-center rounded-xl bg-white/5 border border-white/10">
                    <p className="text-white text-xl font-bold leading-tight">
                        {String(timeLeft.days).padStart(2, '0')}
                    </p>
                </div>
                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">
                    Days
                </p>
            </div>

            <div className="flex grow basis-0 flex-col items-center gap-2">
                <div className="flex h-14 w-full items-center justify-center rounded-xl bg-white/5 border border-white/10">
                    <p className="text-white text-xl font-bold leading-tight">
                        {String(timeLeft.hours).padStart(2, '0')}
                    </p>
                </div>
                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">
                    Hours
                </p>
            </div>

            <div className="flex grow basis-0 flex-col items-center gap-2">
                <div className="flex h-14 w-full items-center justify-center rounded-xl bg-white/5 border border-white/10">
                    <p className="text-white text-xl font-bold leading-tight">
                        {String(timeLeft.minutes).padStart(2, '0')}
                    </p>
                </div>
                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">
                    Mins
                </p>
            </div>
        </div>
    );
};

export default CountdownTimer;
