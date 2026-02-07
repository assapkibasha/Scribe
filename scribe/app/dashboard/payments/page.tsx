import Link from "next/link";

export default function PaymentsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold text-zinc-900">Payments</h1>
        <p className="mt-1 text-sm text-zinc-600">
          Record payments and review payment status.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Link
          href="/dashboard/reports/paid"
          className="rounded-xl border border-zinc-100 bg-white p-5 transition-colors hover:bg-zinc-50"
        >
          <div className="text-sm font-semibold text-zinc-900">Paid Students</div>
          <div className="mt-1 text-sm text-zinc-600">
            View students who have fully paid.
          </div>
        </Link>

        <Link
          href="/dashboard/reports/unpaid"
          className="rounded-xl border border-zinc-100 bg-white p-5 transition-colors hover:bg-zinc-50"
        >
          <div className="text-sm font-semibold text-zinc-900">Unpaid Students</div>
          <div className="mt-1 text-sm text-zinc-600">
            View students with no payment recorded.
          </div>
        </Link>

        <Link
          href="/dashboard/payments/record"
          className="rounded-xl border border-zinc-100 bg-white p-5 transition-colors hover:bg-zinc-50"
        >
          <div className="text-sm font-semibold text-zinc-900">Record Payment</div>
          <div className="mt-1 text-sm text-zinc-600">
            Record a payment for a student.
          </div>
        </Link>
      </div>
    </div>
  );
}
