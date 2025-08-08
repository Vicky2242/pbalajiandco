
"use client";

import Link from "next/link";
import {
  Menu,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { services } from "@/lib/services";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={cn(
        "transition-colors hover:text-primary",
        isActive ? "text-primary font-semibold" : "text-foreground/80"
      )}
    >
      {children}
    </Link>
  );
};


export function Header() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();
  const isServicesActive = pathname.startsWith('/services');


  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-bold">
          <Image src="/CA.jpg" width={60} height={60} alt="PBalaji&Co logo" data-ai-hint="company logo" />
          <div>
          <span className="font-headline text-medium">P Balaji & Co.</span> <br />
          <p className="text-sm font-medium text-gray-600">Charted Accountants</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About Us</NavLink>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className={cn("flex items-center gap-1 text-sm font-medium hover:bg-transparent hover:text-primary focus:ring-0", isServicesActive ? "text-primary font-semibold" : "text-foreground/80")}
              >
                Services <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              {services.map((service) => (
                <DropdownMenuItem key={service.slug} asChild>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group flex items-center gap-2"
                  >
                    <service.icon className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                    <span >{service.name}</span>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <NavLink href="/contact">Contact Us</NavLink>
        </nav>
        <div className="flex items-center gap-4 md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-sm">
               <SheetHeader>
                  <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                </SheetHeader>
              <div className="flex flex-col gap-6 p-6">
                <Link href="/" className="flex items-center gap-2 font-bold" onClick={() => setOpen(false)}>
                  <Image src="/CA.jpg" width={40} height={40} alt="PBalaji&Co logo" data-ai-hint="company logo" />
                  <span className="font-headline text-lg">P Balaji & Co.</span>
                </Link>
                <div className="flex flex-col gap-4 text-lg">
                  <Link href="/" className="hover:text-primary" onClick={() => setOpen(false)}>Home</Link>
                  <Link href="/about" className="hover:text-primary" onClick={() => setOpen(false)}>About Us</Link>
                   <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="services" className="border-b-0">
                      <AccordionTrigger className="hover:no-underline font-medium hover:text-primary text-lg py-0">Services</AccordionTrigger>
                      <AccordionContent className="pt-2">
                        <div className="flex flex-col gap-3 pl-4">
                        {services.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            className="flex items-center gap-3 text-base hover:text-primary"
                            onClick={() => setOpen(false)}
                          >
                            <service.icon className="h-5 w-5" />
                            {service.name}
                          </Link>
                        ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <Link href="/contact" className="hover:text-primary" onClick={() => setOpen(false)}>Contact Us</Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
