'use client';

import React, { useState } from 'react';
import { FaQrcode } from 'react-icons/fa';

const QRCodeButton = () => {
    const [showQR, setShowQR] = useState(false);

    return (
        <>
            <button
                onClick={() => setShowQR(true)}
                className="inline-flex items-center justify-center px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
                <FaQrcode className="mr-2" />
                Show QR Code
            </button>

            {showQR && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={() => setShowQR(false)}>
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl max-w-sm w-full mx-4" onClick={e => e.stopPropagation()}>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Scan QR Code</h3>
                        <div className="bg-white p-4 rounded-lg flex items-center justify-center">
                            {/* Replace this URL with your actual YouTube channel URL */}
                            <img
                                src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://www.youtube.com/@content123`}
                                alt="Channel QR Code"
                                className="w-48 h-48"
                            />
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mt-4 text-center">Scan to visit my YouTube channel</p>
                        <button
                            onClick={() => setShowQR(false)}
                            className="mt-6 w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default QRCodeButton; 