import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Sakib Ahammed Shahon",
  description: "Projects and work by Sakib Ahammed Shahon.",
};

export default function ProjectsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
