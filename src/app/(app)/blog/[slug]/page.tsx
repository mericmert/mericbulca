import { MDXRemote } from "next-mdx-remote/rsc";
import type { Metadata } from "next";
import { getAllMdxSlugs, getMdxPost } from "@/lib/mdx";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const slugs = await getAllMdxSlugs();
  return slugs.map((slug) => ({ slug }));
}

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const { frontmatter } = await getMdxPost(slug).catch(notFound);
  return {
    title: frontmatter.title,
    description: frontmatter.description,
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.description,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getMdxPost(slug).catch(() => notFound());
  return (
    <>
      <h1>{post.frontmatter.title}</h1>
      <time className="text-muted-foreground text-sm">
        {" "}
        Last Updated on: {post.frontmatter.date}
      </time>
      <MDXRemote source={post.content} />
    </>
  );
}
