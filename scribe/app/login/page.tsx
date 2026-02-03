export default function LoginPage() {
  return (
    <div className="grid min-h-screen place-items-center bg-white px-6">
      <main className="w-full max-w-sm">
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-900">
          Login
        </h1>
        <p className="mt-2 text-sm text-zinc-600">
          Sign in to continue to Scribe.
        </p>

        <form className="mt-8 space-y-4">
          <div className="space-y-1">
            <label
              htmlFor="name"
              className="text-sm font-medium text-zinc-900"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              className="h-11 w-full rounded-md border border-blue-500 bg-white px-3 text-sm text-zinc-900 outline-none focus:ring-4 focus:ring-blue-500/20"
            />
          </div>

          <div className="space-y-1">
            <label
              htmlFor="password"
              className="text-sm font-medium text-zinc-900"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              className="h-11 w-full rounded-md border border-blue-500 bg-white px-3 text-sm text-zinc-900 outline-none focus:ring-4 focus:ring-blue-500/20"
            />
          </div>

          <button
            type="submit"
            className="mt-2 inline-flex h-11 w-full items-center justify-center rounded-md bg-green-500 px-4 text-sm font-medium text-white hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-500/25"
          >
            Sign in
          </button>
        </form>
      </main>
    </div>
  );
}
