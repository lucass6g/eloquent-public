"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@eloquent/ui";

import { siteConfig } from "@/config/siteConfig";
import { focusClasses } from "@/lib/a11y";
import { cn } from "@/lib/utils";

import { Navigation } from "./Navigation";
import { useSidebar } from "./Providers";
import {MenuIcon, SearchIcon} from "lucide-react";

export default function EloquentHeader() {
  const { toggleSidebar } = useSidebar();
  const pathname = usePathname();

  return (
    <header>
      <div className="[&_a]:duration-180 sticky top-0 z-50 border-b border-white/20 bg-primary dark:bg-transparent [&_a]:transition-colors">
        <div className="container flex min-h-[72px] gap-6 md:grid md:min-h-[88px] md:grid-cols-[1fr_auto_1fr]">
          <Link
            className={cn(
              "hidden self-center justify-self-start md:block",
              focusClasses,
              "outline-white"
            )}
            href={"/"}
          >
            <h1 className="font-sans text-2xl font-medium text-white md:block">Eloquent UI</h1>
          </Link>

          <Navigation
            aria-label="Eloquent Navigation"
            className="-ml-3 justify-self-start md:flex md:justify-self-center"
          >
            <Navigation.Item asChild active={!pathname.includes("/components")}>
              <Link href="/">Documentação</Link>
            </Navigation.Item>

            <Navigation.Item
              asChild
              active={pathname.includes("/components")}
              className="hidden md:inline-flex"
            >
              <Link href="/components">Componentes</Link>
            </Navigation.Item>
          </Navigation>

          <Navigation aria-label="Social Links" className="hidden justify-self-end md:flex">
            <Navigation.Item
              className="px-0 md:px-0"
              href={siteConfig.azure}
              rel="noreferrer"
              target="_blank"
            >
              Azure
            </Navigation.Item>
          </Navigation>

          <Navigation
            aria-label="Mobile Menu"
            className="ml-auto self-center justify-self-end md:hidden"
          >
            {/* Mobile menu */}
            <Button
              aria-label="Open menu"
              className="items-center justify-center transition-colors hover:text-white"
              data-theme="dark"
              variant="icon"
              onClick={toggleSidebar}
            >
              <MenuIcon color={"white"} width={25} height={25} className="duration-180 text-white" />
            </Button>
          </Navigation>
        </div>
      </div>
    </header>
  );
}
