import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export default function Dropdown({ dropdown, className }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{dropdown.trigger}</DropdownMenuTrigger>
      <DropdownMenuContent className={`text-white bg-[#222831] border-none ${className}`}>
        {dropdown.items.map((item, index) => {
          return item["href"] ? (
            <Link href={item.href || "/"} key={index}>
              <DropdownMenuItem>{item.name}</DropdownMenuItem>
            </Link>
          ) :
          (typeof item == "string" ? <DropdownMenuItem key={index}>{item}</DropdownMenuItem> : item);
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
