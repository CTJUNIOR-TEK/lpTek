"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: { value: string; label: string }[]
  error?: string
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(({ className, options, error, ...props }, ref) => {
  return (
    <div className="w-full relative">
      <select
        className={cn(
          "flex h-10 w-full appearance-none rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          error && "border-red-500 focus-visible:ring-red-500",
          className,
        )}
        ref={ref}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDown className="absolute right-3 top-3 h-4 w-4 opacity-50" />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  )
})
Select.displayName = "Select"

export { Select }

export const SelectGroup = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div className={cn("relative", className)} ref={ref} {...props} />,
)
SelectGroup.displayName = "SelectGroup"

export const SelectTrigger = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, children, ...props }, ref) => (
    <button
      className={cn(
        "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  ),
)
SelectTrigger.displayName = "SelectTrigger"

export const SelectValue = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, children, ...props }, ref) => (
    <span className={cn("line-clamp-1 text-left", className)} ref={ref} {...props}>
      {children}
    </span>
  ),
)
SelectValue.displayName = "SelectValue"

export const SelectContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div
      className={cn(
        "relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  ),
)
SelectContent.displayName = "SelectContent"

export const SelectLabel = React.forwardRef<HTMLLabelElement, React.LabelHTMLAttributes<HTMLLabelElement>>(
  ({ className, ...props }, ref) => (
    <label className={cn("px-2 py-1.5 text-sm font-semibold", className)} ref={ref} {...props} />
  ),
)
SelectLabel.displayName = "SelectLabel"

export const SelectItem = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, children, ...props }, ref) => (
    <button
      className={cn(
        "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  ),
)
SelectItem.displayName = "SelectItem"

export const SelectSeparator = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div className={cn("-mx-1 my-1 h-px bg-muted", className)} ref={ref} {...props} />,
)
SelectSeparator.displayName = "SelectSeparator"

export const SelectScrollUpButton = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      className={cn(
        "flex items-center justify-center h-6 cursor-default rounded-t px-3 text-sm font-medium opacity-0 data-[orientation=vertical]:opacity-100 data-[state=open]:bg-secondary data-[state=open]:text-secondary-foreground",
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
)
SelectScrollUpButton.displayName = "SelectScrollUpButton"

export const SelectScrollDownButton = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      className={cn(
        "flex items-center justify-center h-6 cursor-default rounded-b px-3 text-sm font-medium opacity-0 data-[orientation=vertical]:opacity-100 data-[state=open]:bg-secondary data-[state=open]:text-secondary-foreground",
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
)
SelectScrollDownButton.displayName = "SelectScrollDownButton"
