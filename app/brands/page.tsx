import { BrandCard } from "@/components/BrandCard";
import { BrandCategoryCard } from "@/components/BrandCategoryCard";
import { brands } from "@/components/static";
import Image from "next/image";

export default function BrandsPage() {
  const brandCategoryCards = [
    {
      icon: <Image src={"/icons/Gifted-category-icon_03.svg"} alt={"@"} fill />,
      title: "Entertainment",
      onClick: () => {},
    },
    {
      icon: <Image src={"/icons/Gifted-category-icon_07.svg"} alt={"@"} fill />,
      title: "Experience",
      onClick: () => {},
    },
    {
      icon: <Image src={"/icons/Gifted-category-icon_11.svg"} alt={"@"} fill />,
      title: "Fashion & Beauty",
      onClick: () => {},
    },
    {
      icon: (
        <Image
          src={"/icons/Gifted-category-icon_09_food_dining.svg"}
          alt={"@"}
          fill
        />
      ),
      title: "Food & Dining",
      onClick: () => {},
    },
    {
      icon: (
        <Image
          src={"/icons/Gifted-category-icon_04_gaming.svg"}
          alt={"@"}
          fill
        />
      ),
      title: "Gaming",
      onClick: () => {},
    },
    {
      icon: (
        <Image
          src={"/icons/Gifted-category-icon_08_home_design.svg"}
          alt={"@"}
          fill
        />
      ),
      title: "Home & Design",
      onClick: () => {},
    },
    {
      icon: (
        <Image
          src={"/icons/Gifted-category-icon_02_sports.svg"}
          alt={"@"}
          fill
        />
      ),
      title: "Sports",
      onClick: () => {},
    },
    {
      icon: (
        <Image
          src={"/icons/Gifted-category-icon_02_travel.svg"}
          alt={"@"}
          fill
        />
      ),
      title: "Travel",
      onClick: () => {},
    },
  ];
  return (
    <div className="flex flex-col h-fit w-full items-center">
      <section className="flex w-full h-fit p-20 max-w-7xl justify-evenly">
        {brandCategoryCards.map((bcc) => (
          <BrandCategoryCard {...bcc} />
        ))}
      </section>
      <section className="flex flex-col w-full h-fit p-20 gap-y-8 max-w-7xl">
        <div className="flex w-full h-fit">
          <h1 className="text-6xl font-bold leading-tight">Brands</h1>
        </div>
        {/* grid */}
        <div className="grid grid-cols-4">
          {brands.map((brand) => (
            <BrandCard {...brand} />
          ))}
        </div>
      </section>
    </div>
  );
}
