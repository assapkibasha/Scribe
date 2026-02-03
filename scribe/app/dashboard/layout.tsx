"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { useEffect, useMemo, useState } from "react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const navSections: Array<{
    title: string;
    items: Array<{ label: string; href: string }>;
  }> = [
    {
      title: "Dashboard",
      items: [{ label: "Home", href: "/dashboard" }],
    },
    {
      title: "Students",
      items: [
        { label: "Student List", href: "/dashboard/students" },
        { label: "Add Student", href: "/dashboard/students/add" },
        { label: "Import Students (Excel)", href: "/dashboard/students/import" },
      ],
    },
    {
      title: "Payments",
      items: [
        { label: "Record Payment", href: "/dashboard/payments/record" },
        { label: "Payment History / Ledger", href: "/dashboard/payments/history" },
        { label: "Adjustments / Corrections", href: "/dashboard/payments/adjustments" },
      ],
    },
    {
      title: "Term & Fees Setup",
      items: [
        { label: "Academic Structure", href: "/dashboard/setup/academic-structure" },
        { label: "Term Fee Amount", href: "/dashboard/setup/term-fee" },
      ],
    },
    {
      title: "Reports",
      items: [
        { label: "Paid Students", href: "/dashboard/reports/paid" },
        { label: "Partially Paid Students", href: "/dashboard/reports/partial" },
        { label: "Unpaid Students", href: "/dashboard/reports/unpaid" },
        { label: "Class Report", href: "/dashboard/reports/class" },
        { label: "Collections Summary", href: "/dashboard/reports/collections" },
      ],
    },
    {
      title: "Promotions",
      items: [
        { label: "Promote Students", href: "/dashboard/promotions/promote" },
        { label: "Repeat Students", href: "/dashboard/promotions/repeat" },
        { label: "Promotion History", href: "/dashboard/promotions/history" },
      ],
    },
    {
      title: "SMS Center",
      items: [
        { label: "Send Reminders", href: "/dashboard/sms/reminders" },
        { label: "SMS History", href: "/dashboard/sms/history" },
        { label: "SMS Templates", href: "/dashboard/sms/templates" },
      ],
    },
    {
      title: "Users & Security",
      items: [
        { label: "Users", href: "/dashboard/admin/users" },
        { label: "Roles & Permissions", href: "/dashboard/admin/roles" },
        { label: "Audit Log", href: "/dashboard/admin/audit" },
      ],
    },
    {
      title: "Settings",
      items: [
        { label: "School Profile", href: "/dashboard/settings/school-profile" },
        { label: "Data Backup/Export", href: "/dashboard/settings/backup-export" },
      ],
    },
  ];

  const pathname = usePathname();

  const initialOpenTitle = useMemo(() => {
    const match = navSections.find((section) =>
      section.items.some(
        (item) => item.href !== "/dashboard" && pathname.startsWith(item.href)
      )
    );
    return match?.title ?? null;
  }, [pathname, navSections]);

  const [openTitle, setOpenTitle] = useState<string | null>(initialOpenTitle);

  useEffect(() => {
    setOpenTitle(initialOpenTitle);
  }, [initialOpenTitle]);

  const activeHref = useMemo(() => {
    const allItems = navSections.flatMap((s) => s.items);

    const candidates = allItems.filter((item) => {
      if (item.href === "/dashboard") return pathname === "/dashboard";
      return pathname === item.href || pathname.startsWith(`${item.href}/`);
    });

    candidates.sort((a, b) => b.href.length - a.href.length);
    return candidates[0]?.href ?? null;
  }, [pathname, navSections]);

  const isActiveHref = (href: string) => {
    return activeHref === href;
  };

  const isActiveSection = (title: string) => {
    const section = navSections.find((s) => s.title === title);
    if (!section) return false;
    return section.items.some((i) => isActiveHref(i.href));
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-10 border-b border-zinc-100 bg-white/80 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-screen-2xl items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <img
              src="/higurascribe.jpg"
              alt="Higura Scribe"
              className="h-7 w-auto"
            />
          </div>

          <div className="flex items-center gap-4 text-sm text-zinc-700">
            <button type="button" className="hover:text-zinc-900">
              Language
            </button>
            <div className="h-8 w-8 rounded-full bg-zinc-100" />
            <button type="button" className="hover:text-zinc-900">
              Account
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-screen-2xl grid-cols-1 md:grid-cols-[260px_1fr]">
        <aside className="border-r border-zinc-100 bg-white px-3 py-4">
          <nav className="space-y-5">
            {navSections.map((section) => (
              <div key={section.title} className="space-y-2">
                {section.items.length <= 1 ? (
                  <>
                    <div className="px-3 text-xs font-semibold uppercase tracking-wide text-zinc-500">
                      {section.title}
                    </div>
                    {section.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors ${
                          isActiveHref(item.href)
                            ? "bg-green-50 text-green-700"
                            : "text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900"
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </>
                ) : (
                  <div className="space-y-2">
                    <button
                      type="button"
                      onClick={() =>
                        setOpenTitle((current) =>
                          current === section.title ? null : section.title
                        )
                      }
                      className="flex w-full items-center justify-between px-3 text-left text-xs font-semibold uppercase tracking-wide text-zinc-500 transition-colors hover:text-zinc-700"
                      aria-expanded={openTitle === section.title}
                    >
                      <span>{section.title}</span>
                      <span
                        className={`text-zinc-400 transition-transform ${
                          openTitle === section.title ? "rotate-180" : ""
                        }`}
                      >
                        ▾
                      </span>
                    </button>

                    {openTitle === section.title ? (
                      <div className="space-y-1">
                        {section.items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors ${
                              isActiveHref(item.href)
                                ? "bg-blue-50 text-blue-700"
                                : "text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900"
                            }`}
                          >
                            <span className="pl-4">{item.label}</span>
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </aside>

        <main className="min-h-[calc(100vh-56px)] px-4 py-8">{children}</main>
      </div>
    </div>
  );
}
