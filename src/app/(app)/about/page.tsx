export default function AboutPage() {
  return (
    <main className="flex flex-col items-start p-4 space-y-6">
      <header>
        <h1 id="introduction-heading" className="text-2xl font-bold">
          Hello and welcome!
        </h1>
        <p className="text-sm text-muted-foreground">Last updated: April 29, 2025</p>
      </header>
      <section>
        <p className="leading-relaxed">
          Based in <strong>Istanbul, Turkey</strong>, I currently work as a Software Engineer at
          <strong> OBSS</strong> (Open Business Software Solutions). I completed my BSc in Computer
          Science at
          <strong> Sabanci University</strong>, and soon I&apos;ll be pursuing an
          <strong> MSc in Big Data Engineering</strong> — a joint degree between
          <strong> UvA</strong> and <strong>VU Amsterdam</strong>.
        </p>
      </section>

      <section>
        <p className="leading-relaxed">
          Through this blog, I&apos;ll be sharing my <strong>learning journey</strong> — from
          tackling real-world engineering problems to exploring in-depth research. I hope my
          experiences will inspire and inform. If you&apos;re looking for a fellow engineer to
          connect with, <strong>let&apos;s connect!</strong>
        </p>
      </section>
    </main>
  );
}
