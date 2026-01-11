const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative bg-slate-50 dark:bg-surface-dark-light rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto border border-black/10 dark:border-primary/20 shadow-2xl">
                {/* Header */}
                <div className="sticky top-0 bg-slate-50 dark:bg-surface-dark-light border-b border-black/10 dark:border-white/10 px-6 py-4 flex items-center justify-between">
                    <h2 className="text-slate-900 dark:text-white text-xl font-bold font-display">
                        {title}
                    </h2>
                    <button
                        onClick={onClose}
                        className="size-10 flex items-center justify-center rounded-full bg-slate-200 dark:bg-surface-dark text-slate-700 dark:text-gray-300 hover:bg-slate-300 dark:hover:bg-surface-dark-light transition-colors"
                    >
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>

                {/* Body */}
                <div className="p-6">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;
