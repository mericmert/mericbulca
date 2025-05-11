import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { TriangleAlert } from "lucide-react";
import Link from "next/link";

interface NotFoundCardProps {
  title: string;
  message: string;
  homeHref?: string;
  homeLabel?: string;
}

export default function NotFoundCard({
  title = "Not Found",
  message = "Sorry, the item you're looking for doesn't exist.",
  homeHref = "/",
  homeLabel = "Go to Home",
}: NotFoundCardProps) {
  return (
    <Card className="w-full mx-auto mt-20 tracking-tighter bg-transparent border-x-0 rounded-none">
      <CardHeader>
        <div className="flex justify-center text-muted-foreground w-full">
          <div className="flex justify-center items-center border-2 border-dashed rounded-full w-24 h-24">
            <TriangleAlert aria-label="Warning Icon" className="w-10 h-10" />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center space-y-2 text-center">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground">{message}</p>
        </div>
      </CardContent>
      <CardFooter>
        <div className="w-full flex justify-center">
          <Button asChild variant="link">
            <Link href={homeHref} aria-label={homeLabel}>
              {homeLabel}
            </Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
