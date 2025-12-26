import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Works",
  description: "Selected work and projects by BIRAT.",
  alternates: { canonical: "/works" },
}

export default function WorksLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
