"use client";
import React, { useEffect, useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosStar, IoIosSearch } from "react-icons/io";

const BlogPage = () => {
    const [courses, setCourses] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => {
                const sortedData = [...data].sort((a, b) => b.rating - a.rating);
                setCourses(sortedData);
                setLoading(false);
            })
            .catch(err => {
                setLoading(false);
            });
    }, []);

    const filteredCourses = useMemo(() => {
        return courses.filter(course =>
            course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            course.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
            course.category.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [searchQuery, courses]);

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

    return (
        <div className="bg-white min-h-screen py-10">
            <div className="container mx-auto px-4">

                <h2 className="text-2xl font-black text-slate-900 mb-4 text-center uppercase tracking-tighter">
                    All <span className="text-blue-600">Courses</span>
                </h2>

                <div className="max-w-md mx-auto mb-12 relative">
                    <div className="relative flex items-center">
                        <IoIosSearch className="absolute left-4 text-slate-400 text-xl" />
                        <input
                            type="text"
                            placeholder="Search courses, instructors..."
                            className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                    {filteredCourses.length > 0 ? (
                        filteredCourses.map((course) => (
                            <Link
                                href={`/category/${course.id}`}
                                key={course.id}
                                className="group w-full block bg-white rounded-[32px] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
                            >
                                <div className="relative h-64 w-full rounded-t-[32px] overflow-hidden">
                                    <Image
                                        src={course.image}
                                        alt={course.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                <div className="p-8">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="bg-blue-50 text-blue-600 text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest">
                                            {course.category}
                                        </span>
                                        <div className="flex items-center text-yellow-500 font-bold">
                                            <IoIosStar />
                                            <span className="ml-1 text-slate-700 text-sm">{course.rating}</span>
                                        </div>
                                    </div>

                                    <h3 className="font-extrabold text-slate-900 text-2xl mb-3 leading-tight">
                                        {course.title}
                                    </h3>

                                    <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                                        {course.description}
                                    </p>

                                    <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                                        <div className="flex flex-col">
                                            <span className="text-[10px] text-slate-400 font-bold uppercase">Instructor</span>
                                            <span className="text-sm font-bold text-slate-700">{course.instructor}</span>
                                        </div>
                                        <button className="bg-slate-900 text-white px-6 py-2 rounded-full text-xs font-bold hover:bg-blue-600 transition-all uppercase tracking-widest">
                                            View Course
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-20">
                            <p className="text-slate-400 font-bold uppercase tracking-widest">No courses found matching your search.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BlogPage;