import React, { useState, useEffect } from 'react';

const SurprisePage = () => {
  const [stage, setStage] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStage(1);
      setTimeout(() => {
        setShowMessage(true);
      }, 1000);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-purple-600 to-blue-800 overflow-hidden">

      <div className="absolute inset-0 opacity-50">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${1 + Math.random() * 3}s`
            }}
          >
            <span className="text-yellow-200 text-xl">✨</span>
          </div>
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
        {stage === 0 ? (
          <div className="animate-bounce">
            <span className="text-6xl">🎁</span>
          </div>
        ) : (
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <span className="text-6xl animate-pulse">🎆</span>
            </div>
            {showMessage && (
              <div className="space-y-4">
                <h1 className="text-4xl font-bold text-white animate-fade-in">
                  Welcome!
                </h1>
                <p className="text-xl text-pink-200 animate-fade-in">
                  Thank you for visiting my website!
                </p>
                <p className="text-lg text-pink-100 animate-fade-in mt-2">
                  Hope you enjoy your stay here!
                </p>
                <div className="mt-8">
                  <button 
                    className="px-6 py-3 text-lg font-semibold text-purple-700 bg-white rounded-full hover:bg-pink-100 transform hover:scale-105 transition-all duration-300"
                    onClick={() => setStage(0)}
                  >
                    Play Again
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* 装饰元素 */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-purple-900 to-transparent" />
    </div>
  );
};

export default SurprisePage;