import { getAllMdxSlugs, getMdxPost } from "@/lib/mdx";
import type { MdxPost } from "@/lib/mdx";
import BlogCard from "@/components/blog-card";

/**
 * Forces a fully static build for the blog list page.
 */
export const dynamic = "force-static";

const sortByDateDesc = (a: MdxPost, b: MdxPost) =>
  new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime();

async function getAllPosts(): Promise<MdxPost[]> {
  const slugs = await getAllMdxSlugs();
  const posts = await Promise.all(slugs.map(getMdxPost));
  return posts.sort(sortByDateDesc);
}

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <main className="flex flex-col space-y-6">
      <header>
        <h2 className="text-2xl font-bold">Posts</h2>
      </header>

      {posts.length > 2 ? (
        <section className="grid grid-cols-1">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </section>
      ) : (
        <div className="border-y border-dashed py-6 text-center text-muted-foreground">
          <p className="text-sm">No blog posts found. Please check back later.</p>
        </div>
      )}
    </main>
  );
}
