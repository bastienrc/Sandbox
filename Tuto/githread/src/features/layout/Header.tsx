import { ThemeToggle } from '@/src/theme/ThemeToggle'
import { LoginButton } from './auth/LoginButton'
import { getAuthSession } from '@/lib/auth'
import { UserProfile } from './auth/UserProfile'

export const Header = async () => {
  const session = await getAuthSession()

  return (
    <header className="fixed top-0 z-20 w-full border-b border-b-accent bg-background">
      <div className="container m-auto flex max-w-lg items-center gap-1 py-2">
        <h2 className="mr-auto text-2xl font-bold">Githread</h2>
        {session?.user ? <UserProfile /> : <LoginButton /> }
        <ThemeToggle />
      </div>
    </header>
  )
}
