"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavLink = ({ href, exact, children, ...props }) => {
  const pathname = usePathname();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  return (
    <Link
      href={href}
      {...props}
      className={`${props.className || ""} ${isActive ? "active" : ""}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
