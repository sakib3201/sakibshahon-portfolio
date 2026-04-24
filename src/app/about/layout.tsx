import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Sakib Ahammed Shahon",
  description:
    "The journey of Sakib Ahammed Shahon into software engineering and AI architecture.",
};

export default function AboutLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
