import { MdxPost } from "@/lib/mdx";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const formatDate = (dateStr: string) =>
  new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(new Date(dateStr));

export default function BlogCard({ post }: { post: MdxPost }) {
  const {
    slug,
    frontmatter: { title, description, date, tags },
  } = post;

  return (
    <Link href={`/blog/${slug}`} className="group" prefetch>
      <Card className="flex h-full flex-col justify-between border-0 border-b first:border-t last:border-b shadow-none rounded-none bg-transparent">
        <CardHeader className="pb-2">
          <h3 className="text-lg font-semibold leading-tight group-hover:text-primary">{title}</h3>
          <time className="block text-xs text-muted-foreground">{formatDate(date)}</time>
        </CardHeader>

        <CardContent className="flex flex-col gap-4">
          {description && (
            <p className="line-clamp-2 text-sm text-muted-foreground">{description}</p>
          )}

          {tags?.length ? (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          ) : null}

          <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
            Read more
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </CardContent>
      </Card>
    </Link>
  );
}
