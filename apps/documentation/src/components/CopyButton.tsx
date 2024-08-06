"use client";

import {useState} from "react";
import {Button, Tooltip} from "@eloquent/ui";

import {cn} from "@/lib/utils";
import {CheckIcon, CopyIcon} from "@iconicicons/react";

type CopyButtonProps = {
    className?: string;
    content: string;
};

export function CopyButton({className, content}: CopyButtonProps) {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(content);
        setIsCopied(true);

        setTimeout(() => {
            setIsCopied(false);
        }, 2000);
    };

    return (
        <div data-theme="dark">
            <Tooltip.Provider>
                <Tooltip.Root>
                    <Tooltip.Trigger asChild>
                        <Button
                            aria-label="Copy code to clipboard"
                            className={cn(
                                className,
                                isCopied && "pointer-events-none bg-wg-gray-700 text-white"
                            )}
                            data-theme="dark"
                            variant="icon"
                            onClick={handleCopy}
                        >
                            {isCopied ? (
                                <CheckIcon width={25} height={25} aria-hidden="true" className="opacity-100"/>
                            ) : (
                                <CopyIcon width={25} height={25} aria-hidden="true"/>
                            )}
                        </Button>
                    </Tooltip.Trigger>
                    <Tooltip.Content side={"left"}>
                        {isCopied ? "Copiado" : "Copiar"}
                    </Tooltip.Content>
                </Tooltip.Root>
            </Tooltip.Provider>
        </div>
    )
        ;
}



