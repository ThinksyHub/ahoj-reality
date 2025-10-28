import { useEffect, useState } from "react";

const CookiesPopup = () => {
    const [visible, setVisible] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [options, setOptions] = useState({
        essential: true,
        analytics: false,
        marketing: false,
    });

    useEffect(() => {
        // Check if user has already accepted cookies in this session
        const accepted = sessionStorage.getItem("cookiesAccepted");
        if (!accepted) {
            setVisible(true);
        }
    }, []);

    const handleAccept = (type) => {
        // You can log or store type if needed ("all" or "necessary")
        sessionStorage.setItem("cookiesAccepted", "true");
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white shadow-lg border border-gray-200 rounded-2xl p-4 max-w-md w-[90%] z-50">
            <h4 className="text-lg font-semibold mb-2 text-primary">
                Používanie cookies
            </h4>

            <p className="text-sm text-muted-foreground mb-4">
                Táto webová stránka používa cookies na zlepšenie vášho zážitku.
                Niektoré sú nevyhnutné, iné nám pomáhajú pochopiť, ako používate stránku.
            </p>

            {/* Settings section */}
            {showSettings && (
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-3 mb-4">
                    <p className="text-sm text-gray-700 mb-2 font-medium">Nastavenia cookies</p>
                    <div className="flex flex-col gap-2 text-sm text-gray-700">
                        <label className="flex items-center gap-2">
                            <input type="checkbox" checked disabled className="accent-primary" />
                            Nevyhnutné (vždy povolené)
                        </label>
                        <label className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                checked={options.analytics}
                                onChange={() =>
                                    setOptions({ ...options, analytics: !options.analytics })
                                }
                                className="accent-primary"
                            />
                            Analytické cookies
                        </label>
                        <label className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                checked={options.marketing}
                                onChange={() =>
                                    setOptions({ ...options, marketing: !options.marketing })
                                }
                                className="accent-primary"
                            />
                            Marketingové cookies
                        </label>
                    </div>
                </div>
            )}

            {/* Buttons */}
            <div className="flex flex-wrap justify-end gap-2">
                {showSettings ? (
                    <>
                        <button
                            onClick={() => handleAccept("custom")}
                            className="px-4 py-2 text-sm rounded-lg bg-primary text-white hover:opacity-90 transition"
                        >
                            Uložiť nastavenia
                        </button>
                        <button
                            onClick={() => setShowSettings(false)}
                            className="px-4 py-2 text-sm rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100 transition"
                        >
                            Späť
                        </button>
                    </>
                ) : (
                    <>
                        <button
                            onClick={() => handleAccept("all")}
                            className="px-4 py-2 text-sm rounded-lg bg-primary text-white hover:opacity-90 transition"
                        >
                            Prijať všetky
                        </button>
                        <button
                            onClick={() => handleAccept("necessary")}
                            className="px-4 py-2 text-sm rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100 transition"
                        >
                            Prijať nevyhnutné
                        </button>
                        <button
                            onClick={() => setShowSettings(true)}
                            className="px-4 py-2 text-sm rounded-lg text-primary border border-primary hover:bg-primary/10 transition"
                        >
                            Upraviť nastavenia
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default CookiesPopup;
