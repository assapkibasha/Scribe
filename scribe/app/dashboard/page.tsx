import Link from "next/link";

export default function DashboardHomePage() {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-zinc-100 bg-white p-4">
            <div className="text-xs font-medium text-zinc-500">Students</div>
            <div className="mt-2 text-2xl font-semibold text-zinc-900">—</div>
            <div className="mt-1 text-xs text-zinc-500">Total enrolled</div>
          </div>
          <div className="rounded-xl border border-zinc-100 bg-white p-4">
            <div className="text-xs font-medium text-zinc-500">Paid</div>
            <div className="mt-2 text-2xl font-semibold text-zinc-900">—</div>
            <div className="mt-1 text-xs text-zinc-500">Current term</div>
          </div>
          <div className="rounded-xl border border-zinc-100 bg-white p-4">
            <div className="text-xs font-medium text-zinc-500">Partial</div>
            <div className="mt-2 text-2xl font-semibold text-zinc-900">—</div>
            <div className="mt-1 text-xs text-zinc-500">Current term</div>
          </div>
          <div className="rounded-xl border border-zinc-100 bg-white p-4">
            <div className="text-xs font-medium text-zinc-500">Unpaid</div>
            <div className="mt-2 text-2xl font-semibold text-zinc-900">—</div>
            <div className="mt-1 text-xs text-zinc-500">Current term</div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <Link
            href="/dashboard/students/add"
            className="inline-flex h-10 items-center justify-center rounded-md bg-zinc-900 px-4 text-sm font-medium text-white hover:bg-zinc-800"
          >
            Add student
          </Link>
          <Link
            href="/dashboard/payments/record"
            className="inline-flex h-10 items-center justify-center rounded-md border border-zinc-200 bg-white px-4 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
          >
            Record payment
          </Link>
          <Link
            href="/dashboard/reports/collections"
            className="inline-flex h-10 items-center justify-center rounded-md border border-zinc-200 bg-white px-4 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
          >
            Collections summary
          </Link>
        </div>
      </section>

      <section className="mx-auto flex max-w-3xl flex-col items-center justify-center py-10 text-center">
        <div className="h-28 w-28 rounded-full bg-zinc-100" />

        <h2 className="mt-6 text-lg font-semibold text-zinc-900">Welcome</h2>
        <p className="mt-2 max-w-md text-sm text-zinc-600">
          Use the menu on the left to manage students, record payments, and
          generate reports.
        </p>

        <Link
          href="/dashboard/students"
          className="mt-6 inline-flex h-11 w-full max-w-xs items-center justify-center rounded-md bg-zinc-900 px-4 text-sm font-medium text-white hover:bg-zinc-800 focus:outline-none focus:ring-4 focus:ring-zinc-900/20"
        >
          Open students
        </Link>
      </section>
    </div>
  );
}
