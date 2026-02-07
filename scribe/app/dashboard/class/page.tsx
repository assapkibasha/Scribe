import Link from "next/link";

export default function ClassPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold text-zinc-900">Class</h1>
        <p className="mt-1 text-sm text-zinc-600">
          Manage classes and students.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Link
          href="#"
          className="rounded-xl border border-zinc-100 bg-white p-5 transition-colors hover:bg-zinc-50"
        >
          <div className="text-sm font-semibold text-zinc-900">Classes</div>
          <div className="mt-1 text-sm text-zinc-600">
            Create and manage class lists.
          </div>
        </Link>

        <Link
          href="/dashboard/students/add"
          className="rounded-xl border border-zinc-100 bg-white p-5 transition-colors hover:bg-zinc-50"
        >
          <div className="text-sm font-semibold text-zinc-900">Add Student</div>
          <div className="mt-1 text-sm text-zinc-600">
            Register a new student in a class.
          </div>
        </Link>

        <Link
          href="/dashboard/students"
          className="rounded-xl border border-zinc-100 bg-white p-5 transition-colors hover:bg-zinc-50"
        >
          <div className="text-sm font-semibold text-zinc-900">
            View Students in Class
          </div>
          <div className="mt-1 text-sm text-zinc-600">
            Browse students and filter by class.
          </div>
        </Link>
      </div>
    </div>
  );
}
