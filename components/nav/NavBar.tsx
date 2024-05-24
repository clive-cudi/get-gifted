import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import { LocationIcon, SearchIcon } from "@/components/icons";

export const NavBar = () => {
  const links = [
    {
      label: "Gifted Business",
      to: "#",
    },
    {
      label: "Gift Cards",
      to: "#",
    },
    {
      label: "How It Works",
      to: "#",
    },
    {
      label: "Blog",
      to: "#",
    },
    {
      label: "Contact",
      to: "#",
    },
    {
      label: "About",
      to: "#",
    },
  ];
  return (
    <nav className="flex h-20 w-full items-center justify-center">
      <div className="flex w-full h-full max-w-6xl justify-between">
        <div className="h-full w-36 relative">
          <Image src={"/gifted-logo.svg"} fill alt="@gifted-logo" />
        </div>
        <div
          className="flex w-fit h-full items-center gap-x-3
        "
        >
          <ul className="flex w-fit h-full items-center gap-x-3 font-default font-bold gap-x-5">
            {links.map((lnk) => (
              <Link href={lnk.to}>{lnk.label}</Link>
            ))}
          </ul>
          {/* search button */}
          <Button
            icon={<SearchIcon />}
            type="text"
            className="text-3xl hover:bg-transparent p-3.5 aspect-square"
          ></Button>
          {/* country switch */}
          <Button
            type="primary"
            className="h-11 rounded-full bg-primary-deep-blue"
            icon={<LocationIcon />}
            iconPosition="end"
          >
            Country
          </Button>
        </div>
      </div>
    </nav>
  );
};
