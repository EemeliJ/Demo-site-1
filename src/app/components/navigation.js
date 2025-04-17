"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navigation = () => {
  const pathname = usePathname(); // using pathname, you can assign a style to the referred link

  const getLinkStyle = (path) => ({ // a simple css inline styling
    marginRight: "1rem",
    textDecoration: "none",
    color: pathname === path ? "red" : "white",
    fontWeight: "bold",
    transition: "color 0.3s ease",
  });

  return (
    <nav>
      <Link href="/" style={getLinkStyle("/")}>
        Home
      </Link>
      <Link href="/about" style={getLinkStyle("/about")}>
        About
      </Link>
      <Link href="/products/1" style={getLinkStyle("/products/1")}>
        Product 1
      </Link>
    </nav>
  );
};

// navigation in the site
