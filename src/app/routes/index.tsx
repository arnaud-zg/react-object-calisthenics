import logo from "@/assets/logo.svg";
import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Github, ShoppingCart } from "lucide-react";

export const Route = createFileRoute("/")({
  component: App,
});

const linkClassName =
  "inline-flex items-center gap-2 font-semibold text-[#61dafb] transition-colors duration-200 hover:text-white hover:underline underline-offset-4 rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-[#61dafb] focus-visible:ring-offset-2 focus-visible:ring-offset-[#282c34]";

function App() {
  return (
    <main
      id="main-content"
      className="flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center gap-8 bg-[#282c34] px-6 py-16 text-base text-white sm:text-lg md:text-xl lg:text-[1.375rem]"
    >
      <img
        src={logo}
        className="h-[20vmin] pointer-events-none"
        alt=""
        aria-hidden="true"
      />

      <div className="flex flex-col items-center gap-6">
        <h1 className="max-w-3xl text-center text-4xl font-extrabold leading-tight">
          Maintainable Frontend Architecture with React
        </h1>
        <p className="max-w-3xl text-center leading-relaxed text-gray-300">
          This site is a hands-on demo showing how to apply{" "}
          <strong className="text-white">Object Calisthenics</strong> in a
          front-end app. You'll see how keeping objects small, simple, and
          focused makes your React code easier to understand and maintain.
        </p>
        <p className="max-w-3xl text-center leading-relaxed text-gray-300">
          Take a few moments to explore the interactive experience, then dive
          into the code to see these principles in action.
        </p>
      </div>

      <div className="flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
        <Link
          to="/shopping-cart"
          className="inline-flex items-center gap-2 rounded-md bg-[#61dafb] px-5 py-3 font-semibold text-[#282c34] transition-colors duration-200 hover:bg-white outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#282c34]"
          data-umami-event="home.shopping-cart"
        >
          <ShoppingCart className="h-5 w-5" aria-hidden="true" />
          Try the Shopping Cart Experience
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>

        <a
          href="https://open.substack.com/pub/arnaudzg/p/applying-object-calisthenics-principles?r=iih51&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true"
          target="_blank"
          rel="noreferrer"
          className={linkClassName}
          data-umami-event="home.article"
        >
          <BookOpen className="h-4 w-4 shrink-0" aria-hidden="true" />
          Read my article about object calisthenics
        </a>

        <a
          href="https://github.com/arnaud-zg/react-object-calisthenics"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClassName}
          data-umami-event="home.github"
        >
          <Github className="h-4 w-4 shrink-0" aria-hidden="true" />
          View the GitHub project
        </a>
      </div>
    </main>
  );
}
