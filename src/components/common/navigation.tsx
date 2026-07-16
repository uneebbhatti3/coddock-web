import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const startYourJourney: {
  title: string;
  href: string;
  description: string;
}[] = [
  {
    title: "Learning Roadmaps",
    href: "/roadmaps",
    description:
      "Follow structured paths designed to help you learn skills in the right order.",
  },
  {
    title: "Projects",
    href: "/projects",
    description:
      "Build portfolio-ready projects with clear requirements, milestones, and outcomes.",
  },
];

const community: {
  title: string;
  href: string;
  description: string;
}[] = [
  {
    title: "Community Forum",
    href: "/community",
    description:
      "Ask questions, share progress, discuss roadmaps, and learn with other developers.",
  },
  {
    title: "Developer Network",
    href: "/network",
    description:
      "Connect with serious builders, peers, mentors, and early-career developers.",
  },
];

export default function Navigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem className="hidden md:flex">
          <NavigationMenuTrigger>Learn & Build</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex flex-col w-[400px] gap-2 md:w-[500px] lg:w-[600px]">
              {startYourJourney.map((journeyData) => (
                <ListItem
                  key={journeyData.title}
                  title={journeyData.title}
                  href={journeyData.href}
                >
                  {journeyData.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem className="hidden md:flex">
          <NavigationMenuTrigger>Community</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex flex-col w-[400px] gap-2 md:w-[500px] lg:w-[600px]">
              {community.map((communityData) => (
                <ListItem
                  key={communityData.title}
                  title={communityData.title}
                  href={communityData.href}
                >
                  {communityData.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

// In ListItem, use font-semibold for titles and font-normal for descriptions for clear hierarchy
function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink
        render={
          <Link href={href}>
            <div className="flex flex-col gap-1 text-sm">
              <div className="font-semibold leading-none">{title}</div>
              <div className="line-clamp-2 text-muted-foreground font-normal">
                {children}
              </div>
            </div>
          </Link>
        }
      />
    </li>
  );
}
