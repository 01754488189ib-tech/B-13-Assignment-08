"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { authClient } from '@/lib/auth-client';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { IoIosArrowRoundBack } from 'react-icons/io';

const LoginPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm();

    const [isShowPassword, setIsShowPassword] = useState(false);

    const handleLogin = async (data) => {
        const { data: res, error } = await authClient.signIn.email({
            email: data.email,
            password: data.password,
            rememberMe: true,
            callbackURL: "/",
        });

        if (error) {
            toast.error(error.message || "Login failed. Please try again.");
        }
        if (res) {
            toast.success("Welcome to Skill Sphere");
        }
    };

    const handleGoogleSignin = async () => {
        try {
            await authClient.signIn.social({
                provider: "google",
                callbackURL: "/",
            });
        } catch (err) {
            toast.error("Google sign-in failed.");
        }
    };

    return (
        <div className="min-h-screen bg-white flex items-center justify-center px-6 py-12">
            <div className="w-full max-w-md">
                <div className="text-center mb-10">
                    <Link
                        href="/"
                        className="group flex items-center gap-1 text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-blue-600 transition-all mb-4 w-fit">
                        <IoIosArrowRoundBack
                            size={22}
                            className="group-hover:-translate-x-1 transition-transform"/>
                        Go back to home
                    </Link>
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
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
                            Email Address
                        </label>
                        <input
                            type="email"
                            placeholder="Email Address"
                            {...register("email", {
                                required: 'Email is required',
                                pattern: {
                                    message: "Invalid email address"
                                }
                            })}
                            className={`input w-full mt-2 px-6 py-4 bg-slate-50 border ${errors.email ? 'border-red-500' : 'border-slate-100'} rounded-2xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-600/20`}
                        />
                        {errors.email && <p className="text-red-500 text-[10px] font-bold mt-1 ml-1">{errors.email.message}</p>}
                    </div>

                    <div className="relative">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type={isShowPassword ? "text" : "password"}
                                placeholder="Password"
                                {...register("password", { required: 'Password is required' })}
                                className={`input w-full mt-2 px-6 py-4 bg-slate-50 border ${errors.password ? 'border-red-500' : 'border-slate-100'} rounded-2xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-600/20`}
                            />
                            <button
                                type="button"
                                onClick={() => setIsShowPassword(!isShowPassword)}
                                className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 hover:text-blue-600 transition-colors mt-1"
                            >
                                {isShowPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
                            </button>
                        </div>
                        {errors.password && <p className="text-red-500 text-[10px] font-bold mt-1 ml-1">{errors.password.message}</p>}
                    </div>

                    <div className="flex justify-end px-1">
                        <Link href="#" className="text-[10px] font-black text-blue-600 uppercase hover:underline">
                            Forgot Password?
                        </Link>
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-blue-600 transition-all shadow-lg shadow-slate-100 active:scale-95 disabled:opacity-70">
                        {isSubmitting ? "Signing In..." : "Sign In"}
                    </button>
                </form>

                <div className="relative my-8">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-slate-100"></span>
                    </div>
                    <div className="relative flex justify-center text-[10px] uppercase font-black">
                        <span className="bg-white px-4 text-slate-400 tracking-widest">Or continue with</span>
                    </div>
                </div>

                <button
                    onClick={handleGoogleSignin}
                    className="w-full flex items-center justify-center gap-3 bg-white border border-slate-100 text-slate-900 py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-slate-50 transition-all active:scale-95 shadow-sm">
                    <FaGoogle className="text-blue-600" size={14} />
                    Google
                </button>

                <p className="text-center mt-8 text-sm text-slate-400 font-bold uppercase tracking-tight">
                    New here?
                    <Link href="/register" className="text-blue-600 ml-2 hover:underline">
                        Join Now
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;