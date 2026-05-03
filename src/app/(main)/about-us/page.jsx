import React from "react";
import {  Code, Layout, Smartphone, Database, ArrowRight } from "lucide-react";

const PremiumPage = () => {
  return (
    <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-700">
      <section className="relative pt-24 pb-16 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-50 rounded-full">
            The Future of Learning
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-8">
            Master Skills. <br />
            <span className="text-blue-600">Build Real Products.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-500 text-lg md:text-xl leading-relaxed mb-12">
            Experience high-quality curriculum designed by industry experts. Simple, effective, and results-driven education.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <button className="w-full sm:w-auto px-10 py-4 bg-gray-900 text-white font-bold rounded-full hover:bg-blue-600 transition-all shadow-xl shadow-blue-900/10 active:scale-95">
              Explore All Courses
            </button>
            <button className="w-full sm:w-auto px-10 py-4 border-2 border-gray-100 text-gray-900 font-bold rounded-full hover:bg-gray-50 transition-all">
              Watch Preview
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto py-20 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <Code />, title: "Web Dev", color: "bg-blue-50 text-blue-600" },
            { icon: <Layout />, title: "UI/UX Design", color: "bg-purple-50 text-purple-600" },
            { icon: <Smartphone />, title: "App Dev", color: "bg-orange-50 text-orange-600" },
            { icon: <Database />, title: "Data Science", color: "bg-green-50 text-green-600" },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="group p-8 border border-gray-100 rounded-[32px] hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 cursor-pointer"
            >
              <div className={`w-12 h-12 ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                Expert-led training in the most demanded technologies.
              </p>
              <div className="flex items-center hover:gap-2 text-blue-600 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                Learn More <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gray-950 rounded-[40px] p-12 md:p-20 relative overflow-hidden text-center md:text-left">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[120px] opacity-20 -mr-32 -mt-32"></div>

          <div className="md:flex items-center justify-between relative z-10">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to transform your career?
              </h2>
              <p className="text-gray-400">
                Join thousands of students and start building your future today. Get 20% off on your first enrollment.
              </p>
            </div>
            <button className="mt-8 md:mt-0 px-10 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-all shadow-lg active:scale-95">
              Enroll Now
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PremiumPage;