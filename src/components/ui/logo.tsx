import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({ className, priority = false }: { className?: string; priority?: boolean }) {
  return (
    <Image
      src="/brand/logo.png"
      alt="IPTV Germany"
      width={360}
      height={240}
      priority={priority}
      className={cn("h-20 w-auto self-start object-contain", className)}
    />
  );
}
