import Link from "next/link";

export default function Home() {
  const logoVersion = "1";

  return (
    <div className="grid min-h-screen place-items-center bg-white px-6">
      <main className="select-none">
        <Link href="/login" aria-label="Go to login">
          <img
            src={`/higurascribe.jpg?v=${logoVersion}`}
            alt="Higura Scribe"
            className="h-auto w-[min(400px,90vw)]"
          />
        </Link>
      </main>
    </div>
  );
}
