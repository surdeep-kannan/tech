import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Modal from '../components/common/Modal';

const TechCompare = () => {
    const navigate = useNavigate();
    const [selectedDevice, setSelectedDevice] = useState('iphone');
    const [isAddDeviceModalOpen, setIsAddDeviceModalOpen] = useState(false);
    const [comparedDevices, setComparedDevices] = useState([]);

    const allDevices = [
        {
            id: 'iphone',
            name: 'iPhone 15 Pro',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKplABPoLKO-VytwjoGeF0ARePvpxwr1AP322RtWh_Cpg6-4ATJAeqNK-MHvj5c34BhE1OJRXjtqUwt-ZfzWRYbfvhvSukU2uCGp83QYqN9nRsKBjxdk4kzowmqDK96YO95MG7JyvY5rip4MT3NDxxHyggy_8tcN4ut8C4tafy7klNvTXM4SUdZI6ojVl-MWDo5mTpcMvPGh3iGTWMXNgVyCRjKMwN1b7ljrr9Xp9w20oecOXQR9JnyCYmmR5qstU58BS-W3bo0fxl',
        },
        {
            id: 'pixel',
            name: 'Pixel 8 Pro',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9iAI5O121HoCh_ZoOmFLhg2ofejbwudoZWPQ6GYU1XwoEZaQWajg5cFig-rbV1Wd5D2thXiXx8Ojta7ArWaMDbZthDk_nSTCTbt9Ip7DAvB8SunU9KV6h9LzLAA1eMbIkINVH-GXvJKbLnW5LTKeEBt_AXTSg_vGKc_5607l2IcBPXo5HSVpbNyz5ydaoS0k3lXDYthEv2d8Iql8dq9g_E_25nJ7JGo0efn9SoIa1zfRIPxqSBC7e1Trsu3DB99CddM7kXjQGnpqV',
        },
        {
            id: 's24',
            name: 'Galaxy S24 Ultra',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUJRkwfnQB7_Sz6WOjics0eZo_sl9dQKy66EZJCXPsI1H5NgFxrTsKRqs-j0wGgS_m1wc9ZgVn7WsBI9M9oCODu6hywg8hpYDDsdo9m5GVi1kbB89bTJXEdaL5yYYbUudPU99MkyXz8fUGLKz-gpvrvPnUh1u9UFhHM6Fz0ZMgr5GRx7HmNg_3v6LeSwXpN_xZJLii7UnjvjrXdpbytKXxGWHgIlh0xmL5386vD_HjYOBj79v6q1YyaWxsg587GAVGSJKFs1M95eqE',
        },
    ];

    const devices = allDevices.filter(d => comparedDevices.includes(d.id));
    const availableDevices = allDevices.filter(d => !comparedDevices.includes(d.id));

    const handleDeleteDevice = (deviceId) => {
        const newDevices = comparedDevices.filter(id => id !== deviceId);
        setComparedDevices(newDevices);
        if (selectedDevice === deviceId && newDevices.length > 0) {
            setSelectedDevice(newDevices[0]);
        }
    };

    const handleAddDevice = (deviceId) => {
        if (!comparedDevices.includes(deviceId)) {
            const newDevices = [...comparedDevices, deviceId];
            setComparedDevices(newDevices);
            if (comparedDevices.length === 0) {
                setSelectedDevice(deviceId);
            }
            setIsAddDeviceModalOpen(false);
        }
    };

    const currentDevice = devices.find(d => d.id === selectedDevice);

    return (
        <Layout headerProps={{ title: 'COMPARE' }} showNav={false}>
            <div className="lg:max-w-none pb-24">
                {/* Back Button */}
                <div className="px-4 pt-4 lg:px-0">
                    <button
                        onClick={() => navigate('/')}
                        className="flex items-center gap-2 text-slate-600 dark:text-gray-400 hover:text-primary transition-colors"
                    >
                        <span className="material-symbols-outlined text-lg">arrow_back_ios</span>
                        <span className="text-sm font-semibold">Back</span>
                    </button>
                </div>

                {/* Superstar Verdict */}
                <div className="p-4 lg:px-0">
                    <div className="relative overflow-hidden rounded-xl border-2 border-primary bg-card-dark p-1">
                        <div className="absolute -top-10 -right-10 h-32 w-32 bg-primary/20 blur-3xl rounded-full" />
                        <div className="relative flex p-4 items-center gap-4">
                            <div
                                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-20 w-20 ring-2 ring-primary ring-offset-2 ring-offset-card-dark"
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDlO4zEHlUrpK-pPR2BR16c111EQE0Qtmlf1eLwWJk7Bk_jGH0j72DZEui08cA-82JkWLHUhyR8Lj0tFI-LaRQZ7qnH_erQqiIjVjRlvhRrcf2us3Pc04yKg4XPdqO0YSq7lK3LhihwgsFIKRAUwiQBwIF2XvnQVJ2oLoyX8uLHNlEMtmsxV3H9tckdhWmSN0ai3zH1qM3JTx98AI1gTk4mU3kg0Op2ZFhMIjoGGM5orV3u5OobUtuy_ln6sy0HyDR9d_nxtuyBv9O7")' }}
                            />
                            <div className="flex flex-col flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="material-symbols-outlined text-primary text-sm fill-1">verified</span>
                                    <p className="text-primary text-xs font-bold uppercase tracking-widest">Superstar Verdict</p>
                                </div>
                                <p className="text-white text-lg font-bold leading-tight italic">
                                    "The Pro Max wins for creators! The video quality is unmatched."
                                </p>
                                <p className="text-primary/70 text-sm font-normal mt-1">— Tech Pro Selection</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section Header */}
                <div className="px-4 pt-4 pb-2 flex justify-between items-end lg:px-0">
                    <h3 className="text-slate-900 dark:text-white text-2xl font-bold tracking-tight">Compare Devices</h3>
                    <span className="text-primary text-xs font-bold uppercase">{devices.length} Active Items</span>
                </div>

                {/* Device Tabs */}
                <div className="p-4 lg:px-0">
                    <div className="flex gap-3 flex-wrap">
                        {devices.map((device) => (
                            <div key={device.id} className="relative flex-1 min-w-[200px]">
                                <button
                                    onClick={() => setSelectedDevice(device.id)}
                                    className={`w-full p-4 rounded-xl border-2 transition-all ${selectedDevice === device.id
                                            ? 'border-primary bg-primary/10'
                                            : 'border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-surface-dark hover:border-primary/50'
                                        }`}
                                >
                                    <div
                                        className="w-full h-32 bg-cover bg-center rounded-lg mb-3"
                                        style={{ backgroundImage: `url("${device.image}")` }}
                                    />
                                    <p className={`text-sm font-bold text-center ${selectedDevice === device.id ? 'text-primary' : 'text-slate-900 dark:text-white'
                                        }`}>
                                        {device.name}
                                    </p>
                                </button>
                                <button
                                    onClick={() => handleDeleteDevice(device.id)}
                                    className="absolute -top-2 -right-2 size-8 rounded-full bg-red-500 text-white flex items-center justify-center hover:bg-red-600 transition-colors shadow-lg"
                                >
                                    <span className="material-symbols-outlined text-sm">close</span>
                                </button>
                            </div>
                        ))}

                        {/* Add New Device Button */}
                        {availableDevices.length > 0 && (
                            <button
                                onClick={() => setIsAddDeviceModalOpen(true)}
                                className="flex-1 min-w-[200px] p-4 rounded-xl border-2 border-dashed border-slate-300 dark:border-white/20 bg-slate-100 dark:bg-surface-dark/50 hover:border-primary hover:bg-slate-200 dark:hover:bg-surface-dark transition-all"
                            >
                                <div className="w-full h-32 flex items-center justify-center mb-3">
                                    <span className="material-symbols-outlined text-6xl text-slate-400 dark:text-gray-600">add_circle</span>
                                </div>
                                <p className="text-sm font-bold text-center text-slate-600 dark:text-gray-400">Add Device</p>
                            </button>
                        )}
                    </div>
                </div>

                {/* Empty State or Comparison Grid */}
                {devices.length === 0 ? (
                    <div className="p-4 lg:px-0">
                        <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
                            <div className="size-24 rounded-full bg-slate-100 dark:bg-surface-dark flex items-center justify-center mb-6">
                                <span className="material-symbols-outlined text-6xl text-slate-400 dark:text-gray-600">devices</span>
                            </div>
                            <h3 className="text-slate-900 dark:text-white text-2xl font-bold mb-2">No Devices Selected</h3>
                            <p className="text-slate-600 dark:text-gray-400 text-base mb-6 max-w-md">
                                Start comparing by adding devices from the options above. You can add up to 3 devices to compare side by side.
                            </p>
                            <button
                                onClick={() => setIsAddDeviceModalOpen(true)}
                                className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-primary/90 transition-colors"
                            >
                                Add Your First Device
                            </button>
                        </div>
                    </div>
                ) : (
                    <>
                        {/* Comparison Grid */}
                        <div className="p-4 space-y-2 lg:px-0">
                            {/* CPU Row */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex flex-col gap-1 border-t border-white/5 py-4">
                                    <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">Processor</p>
                                    <p className="text-white text-base font-semibold">A17 Pro (3nm)</p>
                                    <div className="flex items-center gap-1 mt-1">
                                        <span className="material-symbols-outlined text-primary text-xs fill-1">bolt</span>
                                        <span className="text-primary text-[10px] font-black uppercase">Winner: Speed</span>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1 border-t border-white/5 py-4 pl-4 border-l border-white/5">
                                    <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">GPU Performance</p>
                                    <p className="text-white text-base font-semibold">6-core Pro Class</p>
                                    <div className="w-full bg-white/10 h-1.5 rounded-full mt-2">
                                        <div className="bg-primary h-full w-[95%] rounded-full shadow-[0_0_8px_rgba(242,13,13,0.5)]" />
                                    </div>
                                </div>
                            </div>

                            {/* Battery Row */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex flex-col gap-1 border-t border-white/5 py-4">
                                    <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">Battery Life</p>
                                    <p className="text-white text-base font-semibold">4422 mAh</p>
                                    <p className="text-gray-400 text-xs italic">Optimized iOS usage</p>
                                </div>
                                <div className="flex flex-col gap-1 border-t border-white/5 py-4 pl-4 border-l border-white/5">
                                    <p className="text-primary text-xs font-bold uppercase tracking-wider">Efficiency Winner</p>
                                    <p className="text-white text-base font-semibold">29h Video Playback</p>
                                    <div className="mt-2 inline-flex items-center px-2 py-0.5 rounded-full bg-primary/20 text-primary text-[10px] font-bold">
                                        OUTLASTS S24U
                                    </div>
                                </div>
                            </div>

                            {/* Camera Row */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex flex-col gap-1 border-t border-white/5 py-4">
                                    <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">Primary Sensor</p>
                                    <p className="text-white text-base font-semibold">48MP Main f/1.78</p>
                                    <p className="text-gray-400 text-xs italic">Photonic Engine</p>
                                </div>
                                <div className="flex flex-col gap-1 border-t border-white/5 py-4 pl-4 border-l border-white/5">
                                    <p className="text-primary text-xs font-bold uppercase tracking-wider">Video Excellence</p>
                                    <p className="text-white text-base font-semibold">ProRes 4K 60fps</p>
                                    <div className="flex gap-1 mt-1">
                                        {[...Array(5)].map((_, i) => (
                                            <span key={i} className="material-symbols-outlined text-primary text-[16px] fill-1">star</span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Display Row */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex flex-col gap-1 border-t border-white/5 py-4">
                                    <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">Display Type</p>
                                    <p className="text-white text-base font-semibold">Super Retina XDR</p>
                                </div>
                                <div className="flex flex-col gap-1 border-t border-white/5 py-4 pl-4 border-l border-white/5">
                                    <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">Brightness</p>
                                    <p className="text-white text-base font-semibold">2000 nits Peak</p>
                                    <p className="text-primary text-[10px] font-bold mt-1">S24U WINNER: 2600 NITS</p>
                                </div>
                            </div>
                        </div>

                        {/* Call to Action */}
                        <div className="px-4 mt-6 lg:px-0">
                            <div className="bg-gradient-to-r from-primary/20 to-transparent p-6 rounded-xl border border-primary/20 flex items-center justify-between">
                                <div>
                                    <h4 className="text-white font-bold text-lg">Found your match?</h4>
                                    <p className="text-gray-400 text-sm">Get the best price via our affiliate link.</p>
                                </div>
                                <button className="bg-primary text-white px-6 py-3 rounded-full font-bold shadow-[0_4px_20px_rgba(242,13,13,0.3)] hover:scale-105 transition-transform">
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>

            {/* Floating Action Bar */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background-dark via-background-dark/95 to-transparent pt-10 lg:hidden">
                <div className="max-w-2xl mx-auto flex gap-4">
                    <button
                        onClick={() => setComparedDevices([])}
                        className="flex-1 bg-white/5 border border-white/10 text-white h-14 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-white/10"
                    >
                        <span className="material-symbols-outlined">delete</span>
                        Clear All
                    </button>
                    <button className="flex-[2] bg-primary text-white h-14 rounded-full font-bold flex items-center justify-center gap-2 shadow-2xl">
                        <span className="material-symbols-outlined">analytics</span>
                        Deep Dive Spec Analysis
                    </button>
                </div>
            </div>

            {/* Add Device Modal */}
            <Modal isOpen={isAddDeviceModalOpen} onClose={() => setIsAddDeviceModalOpen(false)} title="Add Device to Compare">
                <div className="space-y-4">
                    <p className="text-slate-600 dark:text-gray-400 text-sm">
                        Select a device to add to your comparison
                    </p>
                    <div className="grid grid-cols-1 gap-3">
                        {availableDevices.map((device) => (
                            <button
                                key={device.id}
                                onClick={() => handleAddDevice(device.id)}
                                className="flex items-center gap-4 p-4 rounded-xl border-2 border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-surface-dark hover:border-primary transition-all"
                            >
                                <div
                                    className="size-16 bg-cover bg-center rounded-lg"
                                    style={{ backgroundImage: `url("${device.image}")` }}
                                />
                                <p className="text-slate-900 dark:text-white font-bold">{device.name}</p>
                            </button>
                        ))}
                    </div>
                </div>
            </Modal>
        </Layout>
    );
};

export default TechCompare;
