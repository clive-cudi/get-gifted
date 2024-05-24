import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  const footerLinks = [
    {
      title: "Policies",
      links: [
        {
          label: "Personal Data Policy",
          to: "#",
        },
        {
          label: "Terms & Conditions",
          to: "#",
        },
        {
          label: "Secure E-Commerce",
          to: "#",
        },
      ],
    },
    {
      title: "Help",
      links: [
        {
          label: "FAQ",
          to: "#",
        },
        {
          label: "How It Works",
          to: "#",
        },
        {
          label: "Contract Gifted",
          to: "#",
        },
        {
          label: "Contact ARN",
          to: "#",
        },
      ],
    },
    {
      title: "Company",
      links: [
        {
          label: "About Gifted",
          to: "#",
        },
        {
          label: "About Gifts",
          to: "#",
        },
        {
          label: "Partner With Us",
          to: "#",
        },
        {
          label: "For Business",
          to: "#",
        },
      ],
    },
  ];
  return (
    <footer className="flex h-fit w-full items-center justify-center">
      <div className="flex w-full h-full max-w-6xl justify-between">
        <div className="h-20 w-1/4 relative">
          {/* logo */}
          <Image
            src={"/gifted-logo.svg"}
            fill
            alt="@gifted-logo"
            className="w-40"
          />
        </div>
        <div className="flex w-3/4">
          {footerLinks.map((footer_link) => (
            <div className="flex flex-col w-full h-fit p-4">
              <h3 className="font-bold">{footer_link.title}</h3>
              <ul className="flex flex-col w-100 h-fit text-sm gap-y-3 mt-4">
                {footer_link.links.map((lnk, ix) => (
                  <Link href={lnk.to} key={ix}>
                    {lnk.label}
                  </Link>
                ))}
              </ul>
            </div>
          ))}
          <div className="flex flex-col w-full h-fit bg-[#f9f4e8] p-4 rounded-3xl">
            <h3 className="font-bold">Get Gifted</h3>
            <ul className="flex flex-col w-100 h-fit text-sm gap-y-3 mt-4">
              <li>
                <Button type="text">Android</Button>
              </li>
              <li>
                <Button type="text">IOS</Button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
