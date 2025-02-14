import React from "react";
import Link from "next/link";
import Dropdown from "./DropDown";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Navbar = () => {
  const about = {
    trigger: "About",
    items: [
      { name: "YCCE", href: "/about/YCCE" },
      { name: "Patrons", href: "/about/YCCE#patrons" },
      { name: "Welcome to ACT-2025", href: "/about/conference" },
      {
        name: "Conference Theme and Scope",
        href: "/about/conference#themeAndScope",
      },
      { name: "FAQs", href: "/about/faq", newTab: true },
    ],
  };
  const board = {
    trigger: "Advisory Board",
    items: [
      { name: "International", href: "/board" },
      { name: "National", href: "/board#nab" },
    ],
  };
  const committee = {
    trigger: "Committees",
    items: [
      { name: "General Chairs", href: "/committee" },
      {
        name: "Technical Program Chairs",
        href: "/committee#techProgramChairs",
      },
      {
        trigger: "Publicity Chairs",
        items: [
          { name: "International", href: "/committee#ipc" },
          { name: "National", href: "/committee#npc" },
        ],
      },
      { name: "Publication Chairs", href: "/committee#publicationChairs" },
      { name: "Digital Chairs", href: "/committee#digitalChairs" },
      { name: "Finance Chairs", href: "/committee#financeChairs" },

      {
        trigger: "Technical Program Committee",
        items: [
          { name: "International", href: "/committee/tech-committee" },
          { name: "National", href: "/committee/tech-committee/#ntpc" },
        ],
      },
      {
        trigger: "Organizing Committee",
        items: [
          {
            name: "Convenors",
            href: "/committee/organizing-committee#",
          },
          {
            name: "Organizing Secretary",
            href: "/committee/organizing-committee/#organizing-secretary",
          },
          {
            name: "Organizing Team",
            href: "/committee/organizing-committee/#organizing-team",
          },
        ],
      },
    ],
  };

  const forAuthors = {
    trigger: "For Authors",
    items: [
      { name: "Call for Paper", href: "/authors/cfp" },
      { name: "Important Dates", href: "/authors/dates" },
      { name: "Paper Format", href: "/documents/grenze_template.docx" },
      { name: "Paper Submission", href: "/authors/submission" },
      { name: "Publication", href: "/authors/publication" },
      { name: "Download CFP", href: "/documents/CALL_FOR_PAPERS.pdf"}
    ],
  };

  function AccordionLink({ href, trigger, className, newTab }) {
    return (
      <Link
        href={href}
        className={`item item flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline text-white ${className}`}
        target={newTab ? "_blank" : "_self"}
      >
        <p className="w-full">{trigger}</p>
      </Link>
    );
  }

  function CustomAccordionItem({ dropdown, className }) {
    return dropdown["trigger"] != undefined ? (
      <AccordionItem value={dropdown.trigger} className="text-white">
        <AccordionTrigger className={className}>
          {dropdown.trigger}
        </AccordionTrigger>
        <AccordionContent>
          <Accordion type="single" collapsible>
            {dropdown.items.map((item, index) => {
              return <CustomAccordionItem key={index} dropdown={item} />;
            })}
          </Accordion>
        </AccordionContent>
      </AccordionItem>
    ) : (
      <AccordionLink href={dropdown.href} trigger={dropdown.name} newTab={dropdown.newTab} />
    );
  }

  return (
    <div className="sticky top-0 z-20 mb-10 lg:mb-0">
      <div className="hidden lg:flex justify-around bg-[#222831] p-5 text-white w-full hover:cursor-pointer no-underline sticky top-0 z-10">
        <Link href="/" className="item">
          Home
        </Link>
        <Dropdown dropdown={about} />
        <Dropdown dropdown={board} />
        <Dropdown dropdown={committee} />

        <Link href="/speakers" className="item">
          Keynote Speakers
        </Link>

        <Dropdown dropdown={forAuthors} />

        <Link href="/registration" className="item">
          Registration
        </Link>
        <Link href="/schedule" className="item">
          Programme Schedule
        </Link>
        <Link href="/contact" className="item">
          Contact Us
        </Link>
      </div>

      <Sheet>
        <div className="flex lg:hidden bg-[#222831] w-full py-3 pr-2 p-3 lg:-0 justify-end z-10 absolute top-0 right-0">
          <SheetTrigger className="flex flex-col gap-[0.3vh]">
            <div className="w-[30px] h-1 bg-white rounded"></div>
            <div className="w-[30px] h-1 bg-white rounded"></div>
            <div className="w-[30px] h-1 bg-white rounded"></div>
          </SheetTrigger>
        </div>
        <SheetContent className="bg-[#222831] overflow-x-auto no-scrollbar">
          <SheetHeader>
            <SheetTitle className="text-white">ACT-2025</SheetTitle>
            <SheetDescription>
              International Conference on Advances in Computing Control and Telecommunication Technologies, ACT-2025 (Phase I) 
            </SheetDescription>
          </SheetHeader>

          <Accordion type="single" collapsible className="my-10">
            <AccordionLink href="/" trigger="Home" />
            <CustomAccordionItem dropdown={about} />
            <CustomAccordionItem dropdown={board} />
            <CustomAccordionItem dropdown={committee} />
            <AccordionLink
              href="/speakers"
              trigger="Keynote Speakers"
              className="text-white"
            />

            <CustomAccordionItem dropdown={forAuthors} />
            <AccordionLink
              href="/registration"
              trigger="Registration"
            />

            <AccordionLink
              href="/schedule"
              trigger="Programme Schedule"
            />

            <AccordionLink
              href="/contact"
              trigger="Contact Us"
            />
          </Accordion>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Navbar;
