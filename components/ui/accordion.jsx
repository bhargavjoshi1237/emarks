"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDownIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn("rounded-2xl px-4 ", className)} {...props} />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex ">
    <AccordionPrimitive.Trigger
  ref={ref}
  className={cn(
    "bg-[#212121] rounded-xl px-4 w-full h-[50px] item-center  -mx-4 mt-1.5 mb-1.5 flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:bg-[#2e2e2e] [&[data-state=open]>svg]:rotate-180",  
    className
  )}
  {...props}>
  {children}
  <ChevronDownIcon
    className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
</AccordionPrimitive.Trigger>

  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}>
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }