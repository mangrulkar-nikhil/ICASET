import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import ChildDropdown from "./ChildDropDown"

export default function Dropdown({ dropdown, className }) {

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="focus:outline-none focus:ring-0">{dropdown.trigger}</DropdownMenuTrigger>
            <DropdownMenuContent
                className={`text-white bg-[#222831] border-none ${className}`}
            >
                {dropdown.items.map((item, index) => {
                    return item["href"] != undefined ? (
                        <Link href={item.href || "/"} key={index} target={`${item["newTab"] != undefined ? "_blank" : "_self"}`}>
                            <DropdownMenuItem className="text-nowrap">{item.name}</DropdownMenuItem>
                        </Link>
                    ) : (
                        <ChildDropdown
                            key={index}
                            dropdown={item}
                        />
                    );
                })}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
