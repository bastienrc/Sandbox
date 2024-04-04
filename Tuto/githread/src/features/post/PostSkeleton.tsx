import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import clsx from "clsx";
import { Heart, MessageCircle, MoreHorizontal } from "lucide-react";

export const PostPlaceholder = () => {
  return (
    <div className={clsx("flex w-full flex-row items-start p-4")}>
      <Avatar size="default">
        <AvatarFallback>AA</AvatarFallback>
      </Avatar>
      <div className="ml-4 flex w-full flex-col gap-2">
        <div className="flex flex-row items-center gap-2">
          <Skeleton className="h-6 w-32" />
          <Skeleton className="h-6 w-4" />
          <button>
            <MoreHorizontal size={20} />
          </button>
        </div>
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-1/2" />
        <Skeleton className="h-6 w-full" />
        <div className="flex items-center gap-4">
          <button
            className={clsx(
              "flex items-center gap-1 rounded-md hover:bg-accent",
              {}
            )}
          >
            <Heart size={20} />
          </button>
          <span className="flex items-center gap-1 rounded-md hover:bg-accent">
            <MessageCircle size={20} />
          </span>
        </div>
        <div>
          <span className="text-sm text-muted-foreground">
            <Skeleton className="inline-block h-6 w-4" /> likes
          </span>
          {" ‧ "}
          <span className="text-sm text-muted-foreground">
            <Skeleton className="inline-block h-6 w-4" /> replies
          </span>
        </div>
      </div>
    </div>
  );
};
