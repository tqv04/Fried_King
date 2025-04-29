"use client";
import HeaderAdmin from "./component/headerAdmin";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderAdmin />
      <main>{children}</main>
    </>
  );
}
