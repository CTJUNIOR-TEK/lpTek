"use client"

import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cn } from "@/lib/utils";

export interface AvatarProps extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> {
  /**
   * Elemento React a ser exibido no centro do avatar (ícone, emoji etc.).
   * Ex.: `<Mail className="w-5 h-5" />`
   */
  icon?: React.ReactNode;
  /** Texto de fallback quando não há `icon`. */
  fallback?: string;
}

/**
 * Avatar simplificado: exibe um ícone (ou texto) centralizado.
 */
const Avatar = React.forwardRef<React.ElementRef<typeof AvatarPrimitive.Root>, AvatarProps>(
  ({ className, icon, fallback = "" }, ref) => (
    <AvatarPrimitive.Root
      ref={ref}
      className={cn(
        "relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-muted text-muted-foreground",
        className
      )}
    >
      {/* Sempre renderiza como fallback para aproveitar o delay=0 e animações do Radix */}
      <AvatarPrimitive.Fallback delayMs={0} className="flex items-center justify-center">
        {icon ?? fallback}
      </AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  )
);
Avatar.displayName = "Avatar";

export { Avatar };