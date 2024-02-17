import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const NavBar = () => {
  return (
    <div className="bg-white md:flex md:justify-between fixed h-14 top-0 w-full border-b p-3">
      <Logo />
      <div className="flex h-full items-center justify-between md:gap-6">
        <Button size={"sm"} variant={"outline"} asChild>
          <Link href={"/sign-in"}>
            Login
          </Link>
        </Button>

        <Button size={"sm"} asChild>
          <Link href={"/sign-up"}>
          Get TaskFlow for free
          </Link>
        </Button>
      </div>
    </div>
  )
}