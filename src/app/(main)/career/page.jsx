import React from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

const NormalDesign = () => {
  return (
    <div className="bg-white min-h-screen font-sans text-gray-900">
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
          Advance Your Career with <span className="text-blue-600">SkillSphere</span>
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Master the most in-demand skills with our expert-led courses. Get real-world experience and professional certification.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-gray-900 text-white px-8 py-3.5 rounded-full font-bold hover:bg-blue-600 transition-all shadow-lg active:scale-95">
            Get Started
          </button>
          <button className="border border-gray-200 text-gray-700 px-8 py-3.5 rounded-full font-bold hover:bg-gray-50 transition-all">
            View Courses
          </button>
        </div>
      </section>
      <section className="bg-gray-50 border-y border-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="space-y-2">
            <h3 className="text-3xl font-bold text-gray-900">50+</h3>
            <p className="text-gray-500 text-sm font-semibold uppercase tracking-widest">Premium Courses</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-3xl font-bold text-gray-900">10k+</h3>
            <p className="text-gray-500 text-sm font-semibold uppercase tracking-widest">Enrolled Students</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-3xl font-bold text-gray-900">4.9/5</h3>
            <p className="text-gray-500 text-sm font-semibold uppercase tracking-widest">Student Rating</p>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold leading-tight">
              Why choose our platform for your learning journey?
            </h2>
            <div className="space-y-4">
              {[
                "Lifetime access to all materials",
                "Hands-on projects and assignments",
                "Industry-recognized certificates",
                "24/7 dedicated mentor support"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-blue-600 w-5 h-5" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
            <button className="flex items-center gap-2 text-blue-600 font-bold hover:gap-4 transition-all">
              Learn more about our method <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="relative w-full max-w-2xl mx-auto">
            <div className="absolute -inset-2 md:-inset-4 bg-blue-100 rounded-3xl -z-10 blur-2xl opacity-50"></div>
            <div className="h-64 sm:h-80 md:h-96 rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden">
              <span className="text-gray-400 font-bold italic tracking-tighter opacity-20 text-3xl sm:text-4xl md:text-5xl -rotate-12 select-none px-4 text-center">
                SkillSphere Dashboard
              </span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default NormalDesign;