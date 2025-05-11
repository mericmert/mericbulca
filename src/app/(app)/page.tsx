import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import Link from "next/link";

export default function IndexPage() {
  return (
    <article className="prose dark:prose-invert">
      <header>
        <h2 id="introduction-heading" className="my-0!">
          About
        </h2>
      </header>

      <section>
        <p>
          Based in <strong>Istanbul, Turkey</strong>, I currently work as a software engineer
          at&nbsp;
          <strong>OBSS</strong> (Open Business Software Solutions). I completed my BSc in Computer
          Science at&nbsp;
          <strong>Sabancı University</strong>, and soon I&apos;ll be pursuing an MSc in Big Data
          Engineering— a joint degree between&nbsp;<strong>UvA</strong> and{" "}
          <strong>VU Amsterdam</strong>.
        </p>
      </section>

      <section>
        <p>
          Through this blog I&apos;ll be sharing my learning journey—from tackling real‑world
          engineering problems to exploring in‑depth research. I hope my experiences will inspire
          and inform. If you&apos;re looking for a fellow engineer to connect with,{" "}
          <strong>let&apos;s connect!</strong>
        </p>
      </section>

      <section>
        <div className="flex items-center space-x-6 text-sm">
          <Link
            href="https://github.com/mericmert"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:underline"
          >
            <GithubIcon className="w-5 h-5" />
            <span>GitHub</span>
          </Link>

          <Link
            href="https://linkedin.com/in/mericmertbulca"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:underline"
          >
            <LinkedinIcon className="w-5 h-5" />
            <span>LinkedIn</span>
          </Link>

          <Link
            href="https://twitter.com/mericmertbulca"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:underline"
          >
            <TwitterIcon className="w-5 h-5" />
            <span>Twitter</span>
          </Link>
        </div>
      </section>
    </article>
  );
}
