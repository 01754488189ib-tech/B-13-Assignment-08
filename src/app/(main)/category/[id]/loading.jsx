import React from "react";

const LoadingPage = () => {
  return (
    <div className="flex flex-col h-[85vh] w-full items-center justify-center bg-white/50 backdrop-blur-sm">
      <div className="relative flex flex-col items-center">
        <span className="loading loading-dots w-24 text-blue-600"></span>

        <div className="mt-4 flex flex-col items-center gap-2">
          <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter animate-bounce">
            Skill<span className="text-blue-600">Sphere</span>
          </h2>

          <div className="flex items-center gap-2">
            <div className="h-1 w-1 bg-blue-600 rounded-full animate-ping"></div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.4em] translate-x-1">
              System Initializing
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;