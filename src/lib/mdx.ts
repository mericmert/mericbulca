import path from "path";
import fs from "fs/promises";
import matter from "gray-matter";
import { type } from 'arktype'
import { cache } from "react";

const POSTS_DIR = path.join(process.cwd(), "src", "content", "blog");

export const FrontmatterType = type({
  title: 'string',
  date: 'string.date',
  tags: 'string[]?',
  description: 'string?'
})

export type FrontMatter = typeof FrontmatterType.infer;

export interface MdxPost {
  slug: string;
  frontmatter: FrontMatter;
  content: string;
}

export const getAllMdxSlugs = cache(async (): Promise<readonly string[]> => {
  const files = await fs.readdir(POSTS_DIR);
  return files
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ""));

});

export const getMdxPost = cache(async (slug: string): Promise<MdxPost> => {
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`);

  const raw = await fs.readFile(filePath, "utf-8").catch(() => {
    throw new Error(`MDX file for slug "${slug}" not found`);
  });
  const { content, data } = matter(raw);

  const out = FrontmatterType(data);
  if (out instanceof type.errors) {
    throw new Error(`Invalid frontmatter for \"${slug}\": ${out.summary}`);
  }

  return {
    slug,
    content,
    frontmatter: out
  };
});
