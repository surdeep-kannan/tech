import { useState } from 'react';
import Modal from '../common/Modal';

const GiveawayEntryModal = ({ isOpen, onClose, giveawayTitle }) => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate entry submission
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setEmail('');
            onClose();
        }, 2000);
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Enter Giveaway">
            {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <h3 className="text-slate-900 dark:text-white text-lg font-bold mb-2">
                            {giveawayTitle}
                        </h3>
                        <p className="text-slate-600 dark:text-gray-400 text-sm">
                            Enter your email to participate in this exclusive giveaway. Winners will be notified via email.
                        </p>
                    </div>

                    <div>
                        <label className="block text-slate-700 dark:text-gray-300 text-sm font-medium mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="your@email.com"
                            className="w-full px-4 py-3 rounded-lg bg-slate-100 dark:bg-surface-dark text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-primary/50"
                        />
                    </div>

                    <div className="flex gap-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 px-6 py-3 rounded-full bg-slate-200 dark:bg-surface-dark text-slate-700 dark:text-gray-300 font-bold transition-colors hover:bg-slate-300 dark:hover:bg-surface-dark-light"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="flex-1 px-6 py-3 rounded-full bg-primary text-white font-bold transition-transform active:scale-95 hover:shadow-lg hover:shadow-primary/30"
                        >
                            Enter Now
                        </button>
                    </div>
                </form>
            ) : (
                <div className="text-center py-8">
                    <div className="size-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary text-4xl">check_circle</span>
                    </div>
                    <h3 className="text-slate-900 dark:text-white text-xl font-bold mb-2">
                        Entry Submitted!
                    </h3>
                    <p className="text-slate-600 dark:text-gray-400">
                        Good luck! We'll notify you if you win.
                    </p>
                </div>
            )}
        </Modal>
    );
};

export default GiveawayEntryModal;
