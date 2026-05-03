import React from "react";
import { ArrowRight } from "lucide-react";

const DefaultFreshDesign = () => {
    return (
        <div className="bg-white min-h-screen font-sans text-slate-900">
            <section className="max-w-7xl mx-auto px-6 py-20 md:py-32 grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-[11px] font-bold uppercase tracking-wider mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
                        New Platform is Live
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-8">
                        Upgrade your <span className="text-blue-600">potential</span> with ease.
                    </h1>
                    <p className="text-slate-500 text-lg mb-10 leading-relaxed max-w-md">
                        Access high-quality resources and professional guidance to shape your future career path. Simple, direct, and effective.
                    </p>
                    <div className="flex items-center gap-6">
                        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2 shadow-sm">
                            Explore Now <ArrowRight size={18} />
                        </button>
                        <button className="text-slate-900 font-bold border-b-2 border-slate-900 pb-1 hover:text-blue-600 hover:border-blue-600 transition-all">
                            Learn More
                        </button>
                    </div>
                </div>

                <div className="relative mx-auto">
                    <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
                        <div className="flex items-center justify-between mb-8 pb-3 border-b border-slate-100">
                            <div className="flex gap-2">
                                <div className="w-2 h-2 rounded-full bg-slate-200"></div>
                                <div className="w-2 h-2 rounded-full bg-slate-200"></div>
                            </div>
                            <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">
                                SkillSphere Panel
                            </span>
                        </div>

                        <div>
                            <div className="bg-slate-900 rounded-2xl p-5 text-white">
                                <p className="text-[10px] font-bold uppercase opacity-60 mb-1">Course Progress</p>
                                <h4 className="text-xl font-bold italic">85% Complete</h4>
                                <div className="mt-4 h-1 w-full bg-slate-700 rounded-full">
                                    <div className="h-full w-[85%] bg-blue-500 rounded-full"></div>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-slate-50">
                                <p className="text-slate-400 text-[11px] italic leading-normal">
                                    The best way to predict the future is to create it.
                                </p>
                            </div>
                        </div>
                        <div className="mt-6 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-[9px] font-black text-white">
                                    IK
                                </div>
                                <span className="text-xs font-bold text-slate-700 underline underline-offset-4 decoration-slate-200">
                                    Ibrahim Khalilullah
                                </span>
                            </div>
                            <span className="text-[9px] font-bold text-slate-300 uppercase">2026 Edition</span>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-5xl mx-auto px-6 py-32 text-center">
                <h2 className="text-4xl font-bold mb-6 tracking-tight">Ready to start your next chapter?</h2>
                <p className="text-slate-500 mb-10 max-w-xl mx-auto">No hidden fees, no complex setup. Just you and your goal.</p>
                <button className="bg-slate-900 text-white px-10 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all">
                    Get Started for Free
                </button>
            </section>

        </div>
    );
};

export default DefaultFreshDesign;