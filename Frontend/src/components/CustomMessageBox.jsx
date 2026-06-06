import React from 'react';

const CustomMessageBox = ({ message, type, onClose }) => {
    if (!message) return null;

    const baseClasses = "fixed top-4 right-4 z-[100] px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 shadow-2xl flex items-center space-x-3 max-w-xs sm:max-w-md";
    let typeClasses = "";

    switch (type) {
        case 'error':
            typeClasses = "bg-red-700 text-white";
            break;
        case 'success':
            typeClasses = "bg-green-600 text-white";
            break;
        case 'info':
        default:
            typeClasses = "bg-blue-600 text-white";
            break;
    }

    return (
        <div className={`${baseClasses} ${typeClasses}`}>
            <p className="grow">{message}</p>
            <button onClick={onClose} className="font-bold text-lg leading-none opacity-80 hover:opacity-100 transition-opacity ml-4" aria-label="Close message">
                &times;
            </button>
        </div>
    );
};

export default CustomMessageBox;