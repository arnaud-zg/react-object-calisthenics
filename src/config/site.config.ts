/**
 * App-wide identity and wiring: everything a build step, a static HTML file, or the
 * running app needs to agree on. Framework-free so it can be imported from vite.config.ts
 * (Node, build time) and from browser code (runtime) alike.
 */
export const SITE_CONFIG = {
  name: "Azeroth's Finest Wares",
  description:
    "Interactive React demo showing how to apply Object Calisthenics rules for maintainable, well-structured front-end code.",
  /** Must match public/404.html's repoBase and the GitHub Pages project name. */
  basePath: "/react-object-calisthenics/",
  origin: "https://arnaud-zg.github.io",
  repositoryUrl: "https://github.com/arnaud-zg/react-object-calisthenics",
  author: {
    name: "Arnaud Zheng",
    githubUrl: "https://github.com/arnaud-zg",
    linkedinUrl: "https://www.linkedin.com/in/arnaudzheng/",
  },
  articleUrl:
    "https://open.substack.com/pub/arnaudzg/p/applying-object-calisthenics-principles?r=iih51&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true",
} as const;
