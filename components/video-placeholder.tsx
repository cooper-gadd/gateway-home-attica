import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export function VideoPlaceholder() {
  return (
    <div className="relative w-full aspect-video bg-muted rounded-lg overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <Button size="lg" variant="outline" className="text-foreground">
          <Play className="mr-2 h-6 w-6" />
          Play Video
        </Button>
      </div>
    </div>
  );
}
