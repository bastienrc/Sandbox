import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserProfile } from "@/src/query/user.query";
import Link from "next/link";
import { PropsWithChildren } from "react";

const removeHttp = (url: string) => {
  return url.replace(/(^\w+:|^)\/\//, "");
};

export const Profile = ({
  user,
  children,
}: PropsWithChildren<{ user: UserProfile }>) => {
  return (
    <div className="container mt-4">
      <div className="flex items-start justify-between gap-2">
        <div className="flex flex-col gap-0.5">
          <h3 className="text-2xl font-bold">{user.name}</h3>
          <p>{user.username}</p>
        </div>
        <Avatar size="lg">
          {user.image ? (
            <AvatarImage src={user.image} alt={user.username} />
          ) : null}
          <AvatarFallback>
            {user.username.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </div>
      <div>
        {user.bio ? (
          <p>{user.bio}</p>
        ) : (
          <p className="text-muted-foreground">no bio</p>
        )}
      </div>
      <div className="mt-4 flex items-center gap-2">
        <div className="flex -space-x-2">
          {user.followeds.map((followed) => (
            <Avatar
              size="sm"
              className="border-2 border-background"
              key={followed.follower.id}
            >
              {followed.follower.image ? (
                <AvatarImage
                  src={followed.follower.image}
                  alt={followed.follower.id}
                />
              ) : null}
              <AvatarFallback>
                {followed.follower.username.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          ))}
        </div>
        <p className="text-muted-foreground">{" . "}</p>
        <p className="text-muted-foreground">
          {user._count.followeds} followers
        </p>
        {user.link ? (
          <>
            <p className="text-muted-foreground">{" . "}</p>
            <Link
              className="text-muted-foreground hover:underline"
              href={user.link}
            >
              {removeHttp(user.link)}
            </Link>
          </>
        ) : null}
      </div>
      {children}
    </div>
  );
};
