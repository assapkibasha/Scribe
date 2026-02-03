export default async function StudentProfilePage({
  params,
}: {
  params: Promise<{ studentId: string }>;
}) {
  const { studentId } = await params;

  return (
    <div className="space-y-2">
      <h1 className="text-xl font-semibold text-zinc-900">Student Profile</h1>
      <p className="text-sm text-zinc-600">Student ID: {studentId}</p>
      <p className="text-sm text-zinc-600">
        Payment history + current term status + credit will appear here.
      </p>
    </div>
  );
}
