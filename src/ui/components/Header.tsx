import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Link } from "@tanstack/react-router";

export default function Header() {
  return (
    <header className="px-10 py-2 flex gap-4 bg-white text-black justify-between h-10 shadow-sm items-center">
      <nav className="flex flex-row gap-4 font-semibold">
        <Link to="/" className="text-[#282c34]" data-umami-event="header.home">
          Home
        </Link>
        <Link
          to="/shopping-cart"
          className="text-[#282c34]"
          data-umami-event="header.shopping-cart"
        >
          Shopping Cart
        </Link>
      </nav>

      <a
        href="https://github.com/arnaud-zg/react-object-calisthenics"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#282c34] hover:text-gray-700"
        data-umami-event="header.github"
      >
        <GitHubLogoIcon className="w-6 h-6" />
      </a>
    </header>
  );
}
