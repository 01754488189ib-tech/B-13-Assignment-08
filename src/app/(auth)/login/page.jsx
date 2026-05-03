"use client";
import React from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

const LoginPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()
    const handleLogin = (data) => {
        console.log(data);
    };

    return (
        <div className="min-h-screen bg-white flex items-center justify-center px-6">
            <div className="w-full max-w-md">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase italic">
                        Login<span className="text-blue-600">.</span>
                    </h1>
                    <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mt-2">
                        Welcome back
                    </p>
                </div>

                <form
                    className="space-y-5"
                    onSubmit={handleSubmit(handleLogin)}>
                    <div>
                        <label
                            className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                        <input
                            type="email"
                            placeholder="Email Address"
                            {...register("email", { required: 'Email is required' })}
                            className="input w-full mt-2 px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl  text-sm font-medium"
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    </div>

                    <div>
                        <label
                            className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Password</label>
                        <input
                            type="password"
                            placeholder="Password"
                            {...register("password", { required: 'Password is required' })}
                            className="input w-full mt-2 px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl  text-sm font-medium"
                            />
                        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
                    </div>

                    <div
                        className="flex justify-end px-1">
                        <Link
                            href="#"
                            className="text-[10px] font-black text-blue-600 uppercase hover:underline">Forgot Password?</Link>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-blue-600 transition-all shadow-lg shadow-slate-100 active:scale-95">
                        Sign In
                    </button>
                </form>

                <p
                    className="text-center mt-8 text-sm text-slate-400 font-bold uppercase tracking-tight">
                    New here?
                    <Link
                        href="/register"
                        className="text-blue-600 ml-2 hover:underline">Join Now</Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;