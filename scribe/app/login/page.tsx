"use client";

import { useState } from "react";

type LoginMode = "phone" | "name";

export default function LoginPage() {
  const [mode, setMode] = useState<LoginMode>("phone");
  const [showPassword, setShowPassword] = useState(false);

  const primaryLabel = mode === "phone" ? "Number" : "Name";
  const primaryPlaceholder =
    mode === "phone" ? "Enter your phone number" : "Enter your name";

  return (
    <div className="min-h-screen bg-white px-6">
      <div className="mx-auto flex min-h-screen w-full max-w-md flex-col items-center justify-center py-14">
        <img
          src="/hsAccount.png"
          alt="Higura Scribe"
          className="h-auto w-[min(520px,80vw)]"
        />

        
        <p className="mt-2 text-center text-sm text-zinc-600">
          Provide your credentials to continue
        </p>

        <div className="mt-8 flex w-full rounded-lg bg-zinc-100 p-1">
          <button
            type="button"
            onClick={() => setMode("phone")}
            className={`flex-1 rounded-md px-3 py-2 text-sm transition-colors ${
              mode === "phone"
                ? "bg-white text-zinc-900 shadow-sm"
                : "text-zinc-600 hover:text-zinc-900"
            }`}
          >
            Phone
          </button>
          <button
            type="button"
            onClick={() => setMode("name")}
            className={`flex-1 rounded-md px-3 py-2 text-sm transition-colors ${
              mode === "name"
                ? "bg-white text-zinc-900 shadow-sm"
                : "text-zinc-600 hover:text-zinc-900"
            }`}
          >
            Name
          </button>
        </div>

        <form className="mt-6 w-full space-y-4">
          <div className="space-y-2">
            <label
              htmlFor="primary"
              className="text-xs font-medium text-zinc-700"
            >
              {primaryLabel}
            </label>
            <input
              id="primary"
              name="primary"
              type={mode === "phone" ? "tel" : "text"}
              autoComplete={mode === "phone" ? "tel" : "name"}
              placeholder={primaryPlaceholder}
              className="h-11 w-full rounded-lg border border-blue-500 bg-white px-3 text-sm text-zinc-900 outline-none focus:ring-4 focus:ring-blue-500/20"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="password"
              className="text-xs font-medium text-zinc-700"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                placeholder="Enter your password"
                className="h-11 w-full rounded-lg border border-blue-500 bg-white px-3 pr-10 text-sm text-zinc-900 outline-none focus:ring-4 focus:ring-blue-500/20"
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute inset-y-0 right-0 inline-flex items-center justify-center px-3 text-zinc-500 hover:text-blue-500"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <span className="text-lg leading-none">×</span>
                ) : (
                  <span className="text-lg leading-none">◦</span>
                )}
              </button>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              className="text-xs font-medium text-zinc-900 hover:text-blue-500"
            >
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            className="mt-2 inline-flex h-11 w-full items-center justify-center rounded-md bg-zinc-900 px-4 text-sm font-medium text-white hover:bg-zinc-800 focus:outline-none focus:ring-4 focus:ring-zinc-900/20"
          >
            Login
          </button>

          <p className="pt-4 text-center text-xs text-zinc-500">
            By continuing, you agree to our policies.
          </p>
          <p className="text-center text-xs text-zinc-500">
            Don’t have an account?{" "}
            <button
              type="button"
              className="font-medium text-blue-500 hover:text-blue-600"
            >
              Create account
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}
