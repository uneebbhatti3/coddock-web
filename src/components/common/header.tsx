import Link from "next/link";

import CodDockLogo from "@/components/common/coddock-logo";
import Navigation from "@/components/common/navigation";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import MobileNav from "./mobile-nav";
import Container from "./container";

export default function Header() {
  return (
    <Container>
      <header className="flex items-center justify-between py-5 sm:py-6">
        {/* Left */}
        <div className="flex items-center gap-10">
          <Link href={"/"}>
            <CodDockLogo />
          </Link>

          <nav className="hidden xl:block">
            <Navigation />
          </nav>
        </div>

        {/* Right */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Button variant="ghost" className="hidden xl:inline-flex">
            Pricing
          </Button>

          <ModeToggle />

          <Link href="/signup" className="hidden xl:inline-flex">
            <Button variant="secondary">Sign up</Button>
          </Link>

          <MobileNav />
        </div>
      </header>
    </Container>
  );
}
