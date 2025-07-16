"use client"
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@iconicicons/react";
import { Button } from "@eloquent/ui";

import { sidebarConfig, type DocsConfig } from "@/config/sidebarConfig";

export function Pagination({ pageHref }: { pageHref: string }) {
  const pagination = getPagination(pageHref);

  return (
    <div className="mt-16 flex items-center justify-between gap-4">
      {pagination.prev ? (
        <Button asChild className="pr-3" size="sm" variant="secondary">
          <Link href={pagination.prev.href ?? "/"}>
            <ChevronLeftIcon />
            {pagination.prev.label}
          </Link>
        </Button>
      ) : (
        <span />
      )}

      {pagination.next ? (
        <Button asChild className="pl-3" size="sm" variant="secondary">
          <Link href={pagination.next.href ?? "/"}>
            {pagination.next.label}
            <ChevronRightIcon />
          </Link>
        </Button>
      ) : (
        <span />
      )}
    </div>
  );
}

function getPagination(pageHref: string) {
  const flattenedLinks = flatten(sidebarConfig.nav);

  const activeIndex = flattenedLinks.findIndex((link) => pageHref === link?.href);
  const prev = activeIndex !== 0 ? flattenedLinks[activeIndex - 1] : null;
  const next = activeIndex !== flattenedLinks.length - 1 ? flattenedLinks[activeIndex + 1] : null;

  return {
    prev,
    next,
  };
}

export function flatten(links: DocsConfig["nav"]): DocsConfig["nav"] {
  return links
    .reduce<DocsConfig["nav"]>((flat, link) => {
      return flat.concat(link.children?.length ? flatten(link.children) : link);
    }, [])
    .filter((link) => !link?.disabled);
}
