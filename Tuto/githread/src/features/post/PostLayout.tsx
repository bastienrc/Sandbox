import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { PostHome } from '@/src/query/post.query'
import { PropsWithChildren } from 'react'
import { MoreHorizontal } from 'lucide-react'
import { formatDate } from '@/lib/date'
import Link from 'next/link'
import clsx from 'clsx'

type PostLayoutProps = PropsWithChildren<{
  user: PostHome["user"]
  createdAt?: Date
  className?: string
  postId?: string
}>

export const PostLayout = ({
  className,
  user,
  createdAt,
  children
}: PostLayoutProps) => {
  return (
    <div className={clsx("flex w-full flex-row items-start p-4", className)}>
      <Avatar>
        {user.image ? <AvatarImage src={user.image} alt={user.username} /> : null}
        <AvatarFallback>{user.username.slice(0, 2).toUpperCase()}</AvatarFallback>
      </Avatar>
      <div className="ml-4 flex w-full flex-col gap-2">
        <Link href={`/users/${user.id}`}>
          <div className="flex flex-row items-center gap-2" >
            <p className='text-sm text-card-foreground mr-auto'>{user.name}</p>
            {createdAt ? (
              <div className="text-sm text-muted-foreground">{formatDate(createdAt)}</div>
            ) : null}
            <button>
              <MoreHorizontal size={20} />
            </button>
          </div>
        </Link>
        {children}
      </div>
    </div>
  )
}

