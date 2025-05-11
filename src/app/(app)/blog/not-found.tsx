import NotFoundCard from "@/components/not-found-card";

export default function NotFound() {
  return (
    <NotFoundCard
      title="Content Not Found"
      message="Sorry, the content you're looking for doesn't exist."
      homeHref="/blog"
      homeLabel="Go to Blog Posts"
    />
  );
}
