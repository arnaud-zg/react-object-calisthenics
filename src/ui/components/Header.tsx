import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Link } from "@tanstack/react-router";

const navLinkClassName =
  "rounded-sm px-1 py-1 text-[#282c34] outline-none transition-colors duration-200 hover:text-gray-600 focus-visible:ring-2 focus-visible:ring-[#282c34] focus-visible:ring-offset-2";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center justify-between gap-4 border-b bg-white/95 px-4 shadow-sm backdrop-blur-sm sm:px-10">
      <nav
        aria-label="Main navigation"
        className="flex flex-row gap-4 font-semibold sm:gap-6"
      >
        <Link
          to="/"
          className={navLinkClassName}
          activeProps={{
            "aria-current": "page",
            className: "underline underline-offset-4",
          }}
          activeOptions={{ exact: true }}
          data-umami-event="header.home"
        >
          Home
        </Link>
        <Link
          to="/shopping-cart"
          className={navLinkClassName}
          activeProps={{
            "aria-current": "page",
            className: "underline underline-offset-4",
          }}
          data-umami-event="header.shopping-cart"
        >
          Shopping Cart
        </Link>
      </nav>

      <a
        href="https://github.com/arnaud-zg/react-object-calisthenics"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View source on GitHub (opens in a new tab)"
        className="flex h-11 w-11 items-center justify-center rounded-full text-[#282c34] outline-none transition-colors duration-200 hover:bg-gray-100 hover:text-gray-700 focus-visible:ring-2 focus-visible:ring-[#282c34] focus-visible:ring-offset-2"
        data-umami-event="header.github"
      >
        <GitHubLogoIcon className="h-6 w-6" aria-hidden="true" />
      </a>
    </header>
  );
}
