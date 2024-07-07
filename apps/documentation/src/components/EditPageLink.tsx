"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronUpIcon } from "@iconicicons/react";
import { Button } from "@lemonsqueezy/wedges";

import { GithubIcon } from "./Icons";


export function EditPageLink() {
  return (
    <div className="mt-8 flex items-center justify-between gap-3 border-t border-surface-100 pt-3.5">
      <Button
        before={<ChevronUpIcon className="size-5 shrink-0 opacity-100" />}
        className="font-normal text-surface-400 no-underline hover:text-surface-900 hover:underline"
        variant="link"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Voltar ao topo
      </Button>
    </div>
  );
}
