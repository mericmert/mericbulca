import NotFoundCard from "@/components/not-found-card";

export default function PageNotFound() {
  return (
    <div className="p-4">
      <NotFoundCard
        title="Page Not Found"
        message="Sorry, the page you're looking for doesn't exist."
      />
    </div>
  );
}
