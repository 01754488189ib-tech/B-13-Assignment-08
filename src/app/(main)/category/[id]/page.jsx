"use client";
import React, { useEffect, useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";
import { IoIosStar, IoMdArrowRoundBack } from "react-icons/io";
import { HiOutlineClock, HiOutlineAcademicCap } from "react-icons/hi2";
import { MdOutlineCategory } from "react-icons/md";

const CourseDetailPage = ({ params }) => {
  const resolvedParams = use(params);
  const courseId = resolvedParams.id;

  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetch('/data.json');
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        const foundCourse = data.find(c => c.id.toString() === courseId.toString());
        setCourse(foundCourse);
      } catch (error) {
        console.error("Error loading course:", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [courseId]);

  if (loading) return (
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

  if (!course) return (
    <div className="flex flex-col justify-center items-center h-screen gap-4 bg-white">
      <h2 className="text-lg font-medium text-slate-900">Course not found</h2>
      <Link href="/" className="text-slate-500 hover:text-slate-900 transition-colors text-sm underline underline-offset-4">
        Back to Home
      </Link>
    </div>
  );

  const handleEnroll = () => {
    toast.success(`Enrolled in ${course.title} successfully!`);
  };

  return (
    <div className="bg-white min-h-screen text-slate-900">
      <nav className="border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors">
            <IoMdArrowRoundBack size={20} />
            <span className="text-sm font-medium">Back to courses</span>
          </Link>
          <div className="text-xs font-semibold text-slate-400 tracking-widest uppercase">Details</div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8">
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-6 tracking-tight">
                {course.title}
              </h1>
              <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </header>

            <section className="mb-12">
              <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Description</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                {course.description}
              </p>
            </section>
            <div className="grid grid-cols-3 gap-6 border-t border-slate-100 pt-8">
              <div>
                <div className="flex items-center gap-2 text-slate-400 mb-1">
                  <HiOutlineClock size={18} />
                  <span className="text-xs font-bold uppercase tracking-wide">Duration</span>
                </div>
                <p className="text-slate-900 font-medium">{course.duration}</p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-slate-400 mb-1">
                  <HiOutlineAcademicCap size={18} />
                  <span className="text-xs font-bold uppercase tracking-wide">Level</span>
                </div>
                <p className="text-slate-900 font-medium">{course.level}</p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-slate-400 mb-1">
                  <MdOutlineCategory size={18} />
                  <span className="text-xs font-bold uppercase tracking-wide">Category</span>
                </div>
                <p className="text-slate-900 font-medium">{course.category}</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4">
            <aside className="border border-slate-100 bg-slate-50/50 rounded-2xl p-8 lg:sticky lg:top-8">
              <div className="flex items-start justify-between mb-8">
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Tuition</span>
                  <span className="text-3xl font-bold text-slate-900 tracking-tight">Free</span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 bg-white border border-slate-200 rounded-lg shadow-sm">
                  <IoIosStar className="text-amber-400" size={16} />
                  <span className="font-bold text-sm text-slate-700">{course.rating}</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center py-2 text-sm">
                  <span className="text-slate-500">Instructor</span>
                  <span className="font-semibold text-slate-900">{course.instructor}</span>
                </div>
                <div className="flex justify-between items-center py-2 text-sm">
                  <span className="text-slate-500">Access</span>
                  <span className="font-semibold text-slate-900">Lifetime</span>
                </div>
              </div>

              <button
                onClick={handleEnroll}
                className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-slate-800 transition-all active:scale-[0.98] shadow-lg shadow-slate-200"
              >
                Enroll Now
              </button>

              <p className="text-center text-slate-400 text-[10px] mt-6 font-medium uppercase tracking-tighter">
                Secure 100% digital learning access
              </p>
            </aside>
          </div>

        </div>
      </main>
    </div>
  );
};

export default CourseDetailPage;